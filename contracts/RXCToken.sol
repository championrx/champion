// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RXCToken is ERC20, ERC20Burnable, Ownable {
    uint256 public constant INITIAL_SUPPLY = 100_000_000 * 10 ** 18;

    constructor() ERC20("RXC Token", "RXC") Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}