//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Domain {
    string private publicKey;

    address[] public children;

    constructor(string memory _publicKey) {
        console.log("Deploying a domain using public key: ", _publicKey);
        publicKey = _publicKey;
    }

    function getChildren() public view returns (address[] memory) {
        return children;
    }
}
