const BananaFactory = artifacts.require("PancakeFactory");

module.exports = function (deployer, network, accounts) {
  let currentAccount = accounts[0]
  if(network == 'testnet') {
    console.warn('WARNING: Using account[1] for testnet')
    currentAccount = accounts[1]
  }
  deployer.deploy(BananaFactory, currentAccount, {from: currentAccount});
};
