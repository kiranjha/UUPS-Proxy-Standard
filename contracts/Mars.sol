// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Mars is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
    function initialize() public initializer {
        __ERC20_init('Mars', 'MARS');
        _mint(msg.sender, 1000000000 * 10 ** decimals());
        __Ownable_init();
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}

contract MarsV2 is Mars {
    uint fee;   //state variable 

    function version() pure public returns(string memory) {
        return "v2!";
    }
}

contract MarsV3 is Mars {
    uint fee;
    uint tax;

    function version() pure public returns(string memory) {
        return "v3!";
    }
}