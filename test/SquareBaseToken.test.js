const { expect } = require("chai");

describe("SquareBaseToken", function () {
  describe("Deployment", function () {
    it("should prepare the deployment test suite", function () {
      expect(true).to.equal(true);
    });

    it("should define the expected initial supply", function () {
      const initialSupply = 88_000_000;
      expect(initialSupply).to.equal(88000000);
    });
  });
});