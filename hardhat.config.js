import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import "dotenv/config";

export default {
  plugins: [hardhatEthers],

  solidity: "0.8.20",

  networks: {
    hardhat: {
      type: "edr-simulated",
    },
  },
};
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: {},
  },
};