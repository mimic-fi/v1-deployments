import { BigNumberish, fp } from '@octopus-fi/v1-helpers'

import Task from '../../src/task'

const swapConnector = new Task('2021071301-swap-connector')

export type VaultDeployment = {
  protocolFee: BigNumberish
  swapConnector: string
  whitelistedStrategies: Array<string>
}

export default {
  rinkeby: {
    swapConnector,
    protocolFee: fp(0.0002), // 2%
    whitelistedStrategies: [],
  },
  mainnet: {
    swapConnector,
    protocolFee: fp(0.0005), // 5%
    whitelistedStrategies: [],
  },
}
