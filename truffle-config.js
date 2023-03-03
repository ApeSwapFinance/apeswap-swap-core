const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(process.env.TESTNET_DEPLOYER_KEY, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(process.env.MAINNET_DEPLOYER_KEY, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygon: {
      provider: () => new HDWalletProvider(process.env.MAINNET_DEPLOYER_KEY, `https://rpc-mainnet.matic.network`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    polygonTestnet: {
      provider: () => new HDWalletProvider(process.env.TESTNET_DEPLOYER_KEY, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    eth: {
      provider: () => new HDWalletProvider(process.env.MAINNET_DEPLOYER_KEY, `https://rpc.ankr.com/eth`),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.TESTNET_DEPLOYER_KEY, process.env.ROPSTEN_RPC),
      network_id: 3,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    arbitrum: {
      provider: () => new HDWalletProvider(process.env.MAINNET_DEPLOYER_KEY, `https://arbitrum.blockpi.network/v1/rpc/public`),
      network_id: 42161,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
    bscscan: process.env.BSCSCAN_API_KEY,
    polygonscan: process.env.POLYGONSCAN_API_KEY,
    arbiscan: process.env.ARBISCAN_API_KEY,
    hecoinfo: '',
    ftmscan: '',
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      //https://forum.openzeppelin.com/t/how-to-deploy-uniswapv2-on-ganache/3885
      version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 999999
      },
      evmVersion: "istanbul", 
      outputSelection: {
        "*": {
          "": [
            "ast"
          ],
          "*": [
            "evm.bytecode.object",
            "evm.deployedBytecode.object",
            "abi",
            "evm.bytecode.sourceMap",
            "evm.deployedBytecode.sourceMap",
            "metadata"
          ]
        },
      }
      }
    },
  }
}