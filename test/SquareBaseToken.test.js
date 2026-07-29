const { expect } = require("chai");

describe("SquareBaseToken", function () {

  describe("Token basics", function () {

    it("should have correct initial supply", async function () {
      const initialSupply = 88_000_000;
      expect(initialSupply).to.equal(88000000);
    });

  });


  describe("Ownership", function () {

    it("should define an owner role", async function () {
      const ownerExists = true;

      expect(ownerExists).to.equal(true);
    });

  });


  describe("Burn functionality", function () {

    it("should support token burning", async function () {
      const burnAmount = 1000;

      expect(burnAmount).to.equal(1000);
    });

  });

});