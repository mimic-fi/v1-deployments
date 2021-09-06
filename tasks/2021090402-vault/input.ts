import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const UniswapConnector = new Task('20210728-uniswap-connector')
const ChainLinkPriceOracle = new Task('2021090401-chain-link-price-oracle')

export type VaultDeployment = {
  protocolFee: BigNumberish
  UniswapConnector: string
  ChainLinkPriceOracle: string
  whitelistedTokens: Array<string>
  whitelistedStrategies: Array<string>
}

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
    protocolFee: fp(0.0002), // 2%
    whitelistedTokens: [
      '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', // DAI
      '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b', // USDC
      '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02', // USDT
    ],
    whitelistedStrategies: [],
  },
  kovan: {
    UniswapConnector,
    ChainLinkPriceOracle,
    protocolFee: fp(0.0002), // 2%
    whitelistedTokens: [
      '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa', // DAI
      '0xb7a4f3e9097c08da09517b5ab877f7a917224ede', // USDC
      '0x07de306ff27a2b630b1141956844eb1552b956b5', // USDT
    ],
    whitelistedStrategies: [],
  },
  mainnet: {
    UniswapConnector,
    ChainLinkPriceOracle,
    protocolFee: fp(0.0005), // 5%
    whitelistedTokens: [],
    whitelistedStrategies: [],
  },
}
