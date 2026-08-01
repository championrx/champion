import hre from "hardhat";

async function main() {
  console.log("🚀 Deploying Square Base Token...");

  const Token = await hre.ethers.getContractFactory("SquareBaseToken");
  const token = await Token.deploy();

  await token.waitForDeployment();

  console.log("✅ Deployment successful!");
  console.log("Contract Address:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});