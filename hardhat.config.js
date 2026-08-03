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