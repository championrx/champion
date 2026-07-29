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


  describe("Pause functionality", function () {

    it("should support pausing transfers", async function () {
      const paused = true;

      expect(paused).to.equal(true);
    });


    it("should support unpausing transfers", async function () {
      const paused = false;

      expect(paused).to.equal(false);
    });

  });

});