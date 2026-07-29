// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@4.9.6/token/ERC20/ERC20.sol";

/// @title Square Base Token
/// @notice ERC-20 token for the Base ecosystem.
/// @dev Mints the total supply to the deployer during deployment.
contract SquareBaseToken is ERC20 {

    /// @notice Creates the token and mints the initial supply.
    constructor() ERC20("SQUARE BASE", "SBASE") {
        _mint(msg.sender, 88_000_000 * 10 ** decimals());
    }
}