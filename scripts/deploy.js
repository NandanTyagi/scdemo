/* scripts/deploy.js */
const hre = require('hardhat');
const fs = require('fs');

async function main() {
  /* these two lines deploy the contract to the network */
  const BlackPearl = await hre.ethers.getContractFactory('BlackPearl');
  const pearl = await BlackPearl.deploy('My BlackPearl');

  await pearl.deployed();
  console.log('Black Pearl deployed to:', pearl.address);

  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  fs.writeFileSync(
    './config.js',
    `
  export const contractAddress = "${pearl.address}"
  export const ownerAddress = "${pearl.signer.address}"
  `,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
