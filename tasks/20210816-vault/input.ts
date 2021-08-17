import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const UniswapConnector = new Task('20210728-uniswap-connector')

export type VaultDeployment = {
  protocolFee: BigNumberish
  UniswapConnector: string
  whitelistedStrategies: Array<string>
}

export default {
  localhost: {
    UniswapConnector,
    protocolFee: fp(0.0002), // 2%
    whitelistedStrategies: [],
  },
  rinkeby: {
    UniswapConnector,
    protocolFee: fp(0.0002), // 2%
    whitelistedStrategies: [],
  },
  mainnet: {
    UniswapConnector,
    protocolFee: fp(0.0005), // 5%
    whitelistedStrategies: [],
  },
}
