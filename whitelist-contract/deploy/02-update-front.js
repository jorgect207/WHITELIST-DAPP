const { network, ethers } = require("hardhat");
const fs = require("fs-extrsa");

const frontAddress = "../whitelistdappfront/src/Constants/address.json";
const frontAbi = "../whitelistdappfront/src/Constants/abi.json";

module.exports = async function () {
    if (process.env.FRONT_END) {
        await addressFunction();
        await abiFunction();
    }
}

async function addressFunction() {
    const addressContract = await ethers.getContract("Whitelist")

    
}

async function abiFunction() {
    const abiContract = await ethers.getContract("Whitelist")
    
}
