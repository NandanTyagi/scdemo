/* pages/create-post.js */
import { useState, useRef, useEffect } from 'react'; // new
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { css } from '@emotion/css';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';

/* import contract address and contract owner address */
import { contractAddress } from '../config';

import BlackPearl from '../artifacts/contracts/BlackPearl.sol/BlackPearl.json';

/* define the ipfs endpoint */
const client = create('https://ipfs.infura.io:5001/api/v0');

/* configure the markdown editor to be client-side import */
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

const initialState = { title: '', content: '' };

function CreatePost() {
  /* configure initial state to be used in the component */
  const [post, setPost] = useState(initialState);
  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fileRef = useRef(null);
  const { title, amount } = post;
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      /* delay rendering buttons until dynamic import is complete */
      setLoaded(true);
    }, 500);
  }, []);

  function onChange(e) {
    console.log('e.target', e.target);
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }

  async function createNewPost() {
    /* saves post to ipfs then anchors to smart contract */
    if (!title || !amount) return;
    const hash = await savePostToIpfs();
    console.log('hash', hash);
    await savePost(hash);
    router.push(`/`);
  }

  async function savePostToIpfs() {
    /* save post metadata to ipfs */
    try {
      const added = await client.add(JSON.stringify(post));
      return added.path;
    } catch (err) {
      console.log('error: ', err);
    }
  }

  async function savePost(hash) {
    /* anchor post to smart contract */
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        BlackPearl.abi,
        signer,
      );
      console.log('contract: ', contract);
      console.log('post.title: ', post.title);
      try {
        const val = await contract.createPearl(post.title, post.amount, hash);
        /* optional - wait for transaction to be confirmed before rerouting */
        /* await provider.waitForTransaction(val.hash) */
        console.log('val: ', val);
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  }

  function triggerOnChange() {
    /* trigger handleFileChange handler of hidden file input */
    fileRef.current.click();
  }

  async function handleFileChange(e) {
    /* upload cover image to ipfs and save hash to state */
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;
    const added = await client.add(uploadedFile);
    setPost((state) => ({ ...state, coverImage: added.path }));
    setImage(uploadedFile);
  }

  return (
    <div className={container}>
      {image && (
        <img className={coverImageStyle} src={URL.createObjectURL(image)} />
      )}
      <input
        onChange={onChange}
        name="title"
        placeholder="Tribute to..."
        value={post.title}
        className={titleStyle}
      />
      <input
        // className={mdEditor}
        className={titleStyle}
        name="amount"
        placeholder="Enter amount..."
        value={post.amount}
        // onChange={(value) => setPost({ ...post, content: value })}
        onChange={onChange}
      />
      {loaded && (
        <>
          <button className={button} type="button" onClick={createNewPost}>
            Send
          </button>
          {/* <button onClick={triggerOnChange} className={button}>
            Add cover image
          </button> */}
        </>
      )}
      <input
        id="selectImage"
        className={hiddenInput}
        type="file"
        onChange={handleFileChange}
        ref={fileRef}
      />
    </div>
  );
}

const hiddenInput = css`
  display: none;
`;

const coverImageStyle = css`
  max-width: 800px;
`;

const mdEditor = css`
  margin-top: 40px;
`;

const titleStyle = css`
  margin-top: 40px;
  border: none;
  outline: none;
  background-color: inherit;
  font-size: 44px;
  font-weight: 600;
  &::placeholder {
    color: #999999;
  }
`;

const container = css`
  width: 800px;
  margin: 0 auto;
`;

const button = css`
  background-color: #fafafa;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 18px;
  padding: 16px 70px;
  box-shadow: 7px 7px rgba(0, 0, 0, 0.1);
`;

export default CreatePost;
