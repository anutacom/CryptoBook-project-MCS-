
const { ethers } = require("hardhat");


async function main() {
 const [deployer] = await ethers.getSigners()
 console.log("Deploying contracts with the account:", deployer.address)
  const ContactFactory = await ethers.getContractFactory("ContactFactory");
  const contactFactory = await ContactFactory.deploy();

  await contactFactory.deployed();

  console.log(
    `Deployed to address: ${contactFactory.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});