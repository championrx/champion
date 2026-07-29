const { expect } = require("chai");

describe("SquareBaseToken", function () {
  it("should have correct initial supply", async function () {
    const initialSupply = 88_000_000;
    expect(initialSupply).to.equal(88000000);
  });

  it("should support token burning", async function () {
    const burnAmount = 1000;

    expect(burnAmount).to.equal(1000);
  });
});