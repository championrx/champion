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
  it("Should allow token burning", async function () {
    const [owner] = await ethers.getSigners();

    const RXCToken = await ethers.getContractFactory("RXCToken");
    const token = await RXCToken.deploy();

    const burnAmount = ethers.parseEther("1000");

    await token.burn(burnAmount);

    const balance = await token.balanceOf(owner.address);

    expect(balance).to.equal(
      ethers.parseEther("99999000")
    );
  });
  it("Should pause and block transfers", async function () {
    const [owner, user] = await ethers.getSigners();

    const RXCToken = await ethers.getContractFactory("RXCToken");
    const token = await RXCToken.deploy();

    await token.pause();

    await expect(
      token.transfer(user.address, ethers.parseEther("100"))
    ).to.be.reverted;
  });

  it("Should allow transfers after unpause", async function () {
    const [owner, user] = await ethers.getSigners();

    const RXCToken = await ethers.getContractFactory("RXCToken");
    const token = await RXCToken.deploy();

    await token.pause();
    await token.unpause();

    await token.transfer(
      user.address,
      ethers.parseEther("100")
    );

    expect(
      await token.balanceOf(user.address)
    ).to.equal(
      ethers.parseEther("100")
    );
  });
  it("Should set deployer as owner", async function () {
    const [owner] = await ethers.getSigners();

    const RXCToken = await ethers.getContractFactory("RXCToken");
    const token = await RXCToken.deploy();

    expect(
      await token.owner()
    ).to.equal(owner.address);
  });

  it("Should prevent non-owner from pausing", async function () {
    const [owner, user] = await ethers.getSigners();

    const RXCToken = await ethers.getContractFactory("RXCToken");
    const token = await RXCToken.deploy();

    await expect(
      token.connect(user).pause()
    ).to.be.reverted;
  });