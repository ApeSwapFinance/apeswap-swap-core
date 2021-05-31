const ApeFactory = artifacts.require("ApeFactory");
const { getNetworkConfig } = require('../migration-config');

module.exports = async function (deployer, network, accounts) {
  const { feeToSetterAddress } = getNetworkConfig(network, accounts);
  await deployer.deploy(ApeFactory, feeToSetterAddress);

  const apeFactory = await ApeFactory.deployed();
  console.log(`INIT_CODE_PAIR_HASH: ${await apeFactory.INIT_CODE_PAIR_HASH()}`)

};
