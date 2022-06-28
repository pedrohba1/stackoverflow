import { expect } from "chai";
import { ethers } from "hardhat";
import { Domain, DomainFactory } from "../typechain";

describe("Domain", function () {
  let domainFactory: DomainFactory;
  let domain: Domain;
  let domainAddress: string;

  it("Should deploy a DomainFactory ", async () => {
    const DomainFactory = await ethers.getContractFactory("DomainFactory");
    domainFactory = await DomainFactory.deploy();
    await domainFactory.deployed();
  });

  it("deploy a Domain using DomainFactory ", async () => {
    const tx = await domainFactory.createDomain("public string here");
    const rc = await tx.wait();
    const event = rc.events?.find((event) => event.event === "CreatedDomain");
    const args = event?.args;
    if (args) domainAddress = args[0];
  });

  it("attach an abi interface to the deployed domain", async () => {
    const Domain = await ethers.getContractFactory("Domain");
    domain = await Domain.attach(domainAddress);
  });

  it("get data from Domain deployed by DomainFactory ", async () => {
    const res = await domain.getChildren();
    console.log(res);
  });
});
