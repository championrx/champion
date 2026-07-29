// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@4.9.6/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.9.6/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.9.6/access/Ownable.sol";
import "@openzeppelin/contracts@4.9.6/security/Pausable.sol";

/// @title Square Base Token
/// @notice ERC-20 token for the Base ecosystem.
/// @dev Includes burn functionality and ownership control.
contract SquareBaseToken is ERC20, ERC20Burnable, Ownable, Pausable {

    constructor()
        ERC20("SQUARE BASE", "SBASE")
    {
        _mint(msg.sender, 88_000_000 * 10 ** decimals());
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}