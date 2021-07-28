import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const uniswapConnector = new Task('2021072801-uniswap-connector')

export type VaultDeployment = {
  protocolFee: BigNumberish
  uniswapConnector: string
  whitelistedStrategies: Array<string>
}

export default {
  localhost: {
    uniswapConnector,
    protocolFee: fp(0.0002), // 2%
    whitelistedStrategies: [],
  },
  rinkeby: {
    uniswapConnector,
    protocolFee: fp(0.0002), // 2%
    whitelistedStrategies: [],
  },
  mainnet: {
    uniswapConnector,
    protocolFee: fp(0.0005), // 5%
    whitelistedStrategies: [],
  },
}
