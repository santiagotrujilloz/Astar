// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("Certificates");
  const nft = await NFT.deploy();
  await nft.deployed();

  console.log(`NFT deplolyed to ${nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
