const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RXCToken", function () {
  it("Should deploy with correct supply", async function () {
    const [owner] = await ethers.getSigners();

    const RXCToken = await ethers.getContractFactory("RXCToken");
    const token = await RXCToken.deploy();

    const supply = await token.totalSupply();

    expect(supply).to.equal(
      ethers.parseEther("100000000")
    );

    expect(await token.balanceOf(owner.address)).to.equal(supply);
  });
});