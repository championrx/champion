// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@4.9.6/token/ERC20/ERC20.sol";

contract SquareBaseToken is ERC20 {
    constructor() ERC20("SQUARE BASE", "SBASE") {
        _mint(msg.sender, 88000000 * 10 ** decimals());
    }
}