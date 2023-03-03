function getNetworkConfig(network, accounts) {
    if (["bsc", "bsc-fork"].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x7b26A27af246b4E482f37eF24e9a3f83c3FC7f1C', // BSC GSafe Secure Admin
        }
    } else if (['bscTestnet', 'bscTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x5c7C7246bD8a18DF5f6Ee422f9F8CCDF716A6aD2',
        }
    } else if (['development'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x804962FAc9268A54dF121f129C4a21d7c0aD70b7',
        }
    } else if (['polygon', 'polygon-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x2C5fD64A3e27826CAf1A3d0F1bE6f8ED9f8a4f8A', // Polygon GSafe General Admin
        }
    } else if (['polygonTestnet', 'polygonTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
        }
    } else if (['eth', 'ethereum'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x5c7C7246bD8a18DF5f6Ee422f9F8CCDF716A6aD2',
        }
    } else if (['ropsten'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x5c7C7246bD8a18DF5f6Ee422f9F8CCDF716A6aD2',
        }
    } else if (['arbitrum', 'arbitrum-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x8Ad7E08f1c7d4e37574e7Fe4478C174AbcAc4B61', // Arbitrum GSafe General Admin
        }
    } else {
        throw new Error(`No config found for network ${network}.`)
    }
}

module.exports = { getNetworkConfig };
