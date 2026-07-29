const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SquareBaseToken", function () {
  let token;it("should mint the initial supply to the deployer", async function () {
  const totalSupply = await token.totalSupply();
  const ownerBalance = await token.balanceOf(owner.address);

  expect(totalSupply).to.equal(ownerBalance);
});
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("SquareBaseToken");
    token = await Token.deploy();
    await token.waitForDeployment();
  });

  it("should deploy successfully", async function () {
    expect(await token.getAddress()).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });

  it("should have the correct name", async function () {
    expect(await token.name()).to.equal("SQUARE BASE");
  });

  it("should have the correct symbol", async function () {
    expect(await token.symbol()).to.equal("SBASE");
  });
});