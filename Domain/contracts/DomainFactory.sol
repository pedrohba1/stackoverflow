//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./Domain.sol";
import "hardhat/console.sol";

contract DomainFactory {
    Domain[] private _domains;

    event CreatedDomain(address domainAddress);

    function createDomain(string memory _publicKey) public returns (address) {
        Domain domain = new Domain(_publicKey);
        _domains.push(domain);
        emit CreatedDomain(address(domain));
        return address(domain);
    }

    function allDomains(uint256 limit, uint256 offset)
        public
        view
        returns (Domain[] memory coll)
    {
        return coll;
    }
}
