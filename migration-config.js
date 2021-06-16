function getNetworkConfig(network, accounts) {
    if(["bsc", "bsc-fork"].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x6c905b4108A87499CEd1E0498721F2B831c6Ab13',
        }
    } else if (['bscTestnet', 'bscTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
        }
    } else if (['development'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x804962FAc9268A54dF121f129C4a21d7c0aD70b7',
        }
    } else if (['polygon', 'polygon-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0x6c905b4108A87499CEd1E0498721F2B831c6Ab13',
        }
    } else if (['polygonTestnet', 'polygonTestnet-fork'].includes(network)) {
        console.log(`Deploying with ${network} config.`)
        return {
            feeToSetterAddress: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
        }
    } else {
        throw new Error(`No config found for network ${network}.`)
    }
}

module.exports = { getNetworkConfig };
