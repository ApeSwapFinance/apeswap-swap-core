const ApeFactory = artifacts.require("ApeFactory");

module.exports = async function (deployer, network, accounts) {
  let currentAccount = accounts[0]
  if(network == 'testnet') {
    console.warn('WARNING: Using account[1] for testnet')
    currentAccount = accounts[1]
  }
  await deployer.deploy(ApeFactory, currentAccount, {from: currentAccount});

  const apeFactory = await ApeFactory.deployed();
  console.log(`INIT_CODE_PAIR_HASH: ${await apeFactory.INIT_CODE_PAIR_HASH()}`)

};
