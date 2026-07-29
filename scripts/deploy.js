const hre = require("hardhat");

async function main() {
  console.log("Deploying Square Base Token...");

  const Token = await hre.ethers.getContractFactory("SquareBaseToken");

  const token = await Token.deploy();

  await token.waitForDeployment();

  const address = await token.getAddress();

  console.log("Square Base Token deployed to:");
  console.log(address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});