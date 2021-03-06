/* pages/index.js */
import { css } from '@emotion/css';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import Link from 'next/link';
import { AccountContext } from '../context';

/* import contract address and contract owner address */
import { contractAddress, ownerAddress } from '../config';

/* import Application Binary Interface (ABI) */
import BlackPearl from '../artifacts/contracts/BlackPearl.sol/BlacKPearl.json';

export default function Home(props) {
  /* posts are fetched server side and passed in as props */
  /* see getServerSideProps */
  const { posts } = props;
  const account = useContext(AccountContext);

  const router = useRouter();
  async function navigate() {
    router.push('/create-post');
  }
  return (
    <div>
      {console.log('posts', posts)}
      <div className={postList}>
        {
          /* map over the posts array and render a button with the post title */
          posts.map((post, index) => (
            <Link href={`/post/${post[2]}`} key={index}>
              <a>
                <div className={linkStyle}>
                  <div className={arrowContainer}>
                    <img
                      src="/right-arrow.svg"
                      alt="Right arrow"
                      className={smallArrow}
                    />
                  </div>
                  <p className={postTitle}>
                    {post[2]} - {post[3]}kr
                  </p>
                </div>
              </a>
            </Link>
          ))
        }
      </div>
      <div className={container}>
        {account === ownerAddress && posts && !posts.length && (
          /* if the signed in user is the account owner, render a button */
          /* to create the first post */
          <button className={buttonStyle} onClick={navigate}>
            Create your first pearl
            <img src="/right-arrow.svg" alt="Right arrow" className={arrow} />
          </button>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  /* here we check to see the current environment variable */
  /* and render a provider based on the environment we're in */
  let provider;
  if (process.env.ENVIRONMENT === 'local') {
    provider = new ethers.providers.JsonRpcProvider();
  } else if (process.env.ENVIRONMENT === 'testnet') {
    provider = new ethers.providers.JsonRpcProvider(
      'https://rpc-mumbai.matic.today',
    );
  } else {
    provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com/');
  }

  const contract = new ethers.Contract(
    contractAddress,
    BlackPearl.abi,
    provider,
  );
  const data = await contract.fetchPearls();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    },
  };
}

const arrowContainer = css`
  display: flex;

  justify-content: flex-end;
  padding-right: 20px;
  background-color: black;
  border-radius: 100px;
  witdth: 50px;
  height: 45px;
  margin: auto 10px auto;
`;

const postTitle = css`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  margin: 0;
  padding: 20px;
`;

const linkStyle = css`
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
`;

const postList = css`
  width: 700px;
  margin: 0 auto;
  padding-top: 50px;
`;

const container = css`
  display: flex;
  justify-content: center;
`;

const buttonStyle = css`
  margin-top: 100px;
  background-color: #fafafa;
  outline: none;
  border: none;
  font-size: 44px;
  padding: 20px 70px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 7px 7px rgba(0, 0, 0, 0.1);
`;

const arrow = css`
  width: 35px;
  margin-left: 30px;
`;

const smallArrow = css`
  width: 25px;
  visibility: hidden;
`;
