import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const UniswapConnector = new Task('2021120401-uniswap-connector')
const ChainLinkPriceOracle = new Task('2021120402-chain-link-price-oracle')

export type VaultDeployment = {
  maxSlippage: BigNumberish
  protocolFee: BigNumberish
  UniswapConnector: string
  ChainLinkPriceOracle: string
  whitelistedTokens: Array<string>
  whitelistedStrategies: Array<string>
}

/* eslint-disable no-secrets/no-secrets */

export default {
  localhost: {
    UniswapConnector,
    ChainLinkPriceOracle,
    protocolFee: fp(0.0002), // 2%
    whitelistedTokens: [],
    whitelistedStrategies: [],
  },
  rinkeby: {
    UniswapConnector,
    ChainLinkPriceOracle,
    maxSlippage: fp(0.2), // 20%
    protocolFee: fp(0.0002), // 2%
    whitelistedTokens: [
      '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', // DAI (compound)
      '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b', // USDC (compound)
      '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02', // USDT (compound)
    ],
    whitelistedStrategies: [],
  },
  kovan: {
    UniswapConnector,
    ChainLinkPriceOracle,
    maxSlippage: fp(0.2), // 20%
    protocolFee: fp(0.0002), // 2%
    whitelistedTokens: [
      '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa', // DAI (compound)
      '0xb7a4f3e9097c08da09517b5ab877f7a917224ede', // USDC (compound)
      '0x07de306ff27a2b630b1141956844eb1552b956b5', // USDT (compound)
      '0xd0A1E359811322d97991E03f863a0C30C2cF029C', // WETH (compound)
      '0x04DF6e4121c27713ED22341E7c7Df330F56f289B', // DAI (balancer)
      '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115', // USDC (balancer)
      '0xcC08220af469192C53295fDd34CFb8DF29aa17AB', // USDT (balancer)
      '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1', // WETH (balancer)
    ],
    whitelistedStrategies: [],
  },
  mainnet: {
    UniswapConnector,
    ChainLinkPriceOracle,
    maxSlippage: fp(0.02), // 2%
    protocolFee: fp(0.0005), // 5%
    whitelistedTokens: [],
    whitelistedStrategies: [],
  },
}
