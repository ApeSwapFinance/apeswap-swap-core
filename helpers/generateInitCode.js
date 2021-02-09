// https://github.com/Uniswap/uniswap-v2-core/issues/102

const { bytecode } = require('../build/PancakePair.json');
const { keccak256 } = require('@ethersproject/solidity');

const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

console.log('Computed Init Code')
console.log(COMPUTED_INIT_CODE_HASH)