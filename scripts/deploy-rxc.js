const { ethers } = require("hardhat");

async function main() {
  const RXCToken = await ethers.getContractFactory("RXCToken");

  const token = await RXCToken.deploy();

  await token.waitForDeployment();

  const address = await token.getAddress();

  console.log("RXC Token deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });