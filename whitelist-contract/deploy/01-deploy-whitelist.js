const { ethers, network, getNamedAccounts, deployments } = require("hardhat");
const {
  developmentNetwork,
  networkConfig,
} = require("../helper-hardhat-config");

module.exports = async function () {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const chainId = network.config.chainId;

  await deploy("Whitelist", {
    from: deployer,
    args: ["20"],
    log: true,
    waitConfirmation: network.config.blockConfirmation || 1,
  });
};

module.exports.tags = ["all", "whitelist"];
