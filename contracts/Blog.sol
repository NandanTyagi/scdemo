// contracts/Blog.sol
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BlackPearl {
    string public name;
    address public owner;

    using Counters for Counters.Counter;
    Counters.Counter private _postIds;

    struct Pearl {
      uint id;
      string tributer;
      string tributee;
      uint amount;
      bool published;
    }
 
    /* mappings can be seen as hash tables */
    /* here we create lookups for posts by id and posts by ipfs hash */
    mapping(uint => Pearl) private idToPearl;
    mapping(string => Pearl) private hashToPearl;

    /* events facilitate communication between smart contractsand their user interfaces  */
    /* i.e. we can create listeners for events in the client and also use them in The Graph  */
    event PearlCreated(uint id, string tributee, string hash);
    event PearlUpdated(uint id, string tributee, string hash, bool published);

    /* when the blog is deployed, give it a name */
    /* also set the creator as the owner of the contract */
    constructor(string memory _name) {
        console.log("Deploying Black Pearl Contract with name:", _name);
        name = _name;
        owner = msg.sender;
    }

    /* updates the blog name */
    function updateName(string memory _name) public {
        name = _name;
    }

    /* transfers ownership of the contract to another address */
    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    /* fetches an individual post by the content hash */
    function fetchPearl(string memory hash) public view returns(Pearl memory){
      return hashToPearl[hash];
    }

    /* creates a new post */
    function createPearl(string memory tributee, string memory hash) public onlyOwner {
        _postIds.increment();
        uint postId = _postIds.current();
        Pearl storage pearl = idToPear[postId];
        pearl.id = postId;
        pearl.tributee = tributee;
        pearl.tributer = tributer;
        pearl.amount = amount;
        pearl.published = true;
        pearl.content = hash;
        hashToPearl[hash] = pearl;
        emit PearlCreated(postId, tributee, hash);
    }

    /* updates an existing post */
    function updatePearl(uint postId, string memory tributee, string memory hash, bool published) public onlyOwner {
        Pearl storage pearl =  idToPearl[postId];
        pearl.tributee = tributee;
        pearl.published = published;
        pearl.tributer = hash;
        idToPearl[postId] = pearl;
        hashToPearl[hash] = pearl;
        emit PearlUpdated(pearl.id, tributee, hash, published);
    }

    /* fetches all posts */
    function fetchPearls() public view returns (Pearl[] memory) {
        uint itemCount = _postIds.current();

        Pearl[] memory pearls = new Pearls[](itemCount);
        for (uint i = 0; i < itemCount; i++) {
            uint currentId = i + 1;
            Pearl storage currentItem = idToPearl[currentId];
            pearls[i] = currentItem;
        }
        return pearls;
    }

    /* this modifier means only the contract owner can */
    /* invoke the function */
    modifier onlyOwner() {
      require(msg.sender == owner);
    _;
  }
}