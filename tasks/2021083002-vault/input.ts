import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const UniswapConnector = new Task('20210728-uniswap-connector')
const ChainLinkPriceOracle = new Task('2021083001-chain-link-price-oracle')

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
    whitelistedTokens: [],
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
