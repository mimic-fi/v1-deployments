import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const Vault = new Task('2021090901-vault')

export type BuyAndHoldStrategyDeployment = {
  Vault: string
  strategies: Array<{ name: string; token: string; holdToken: string; slippage: BigNumberish; metadata: string }>
}

export default {
  rinkeby: {
    Vault,
    strategies: [
      {
        name: 'DAI',
        token: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
        holdToken: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        slippage: fp(0.02),
        metadata: 'DAI-WETH',
      },
      {
        name: 'USDC',
        token: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
        holdToken: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        slippage: fp(0.01),
        metadata: 'USDC-WETH',
      },
    ],
  },
}
