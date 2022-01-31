import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022013101-vault')

export type BalancerStableStrategyDeployment = {
  Vault: string
  balancerVault: string
  strategies: Array<{ name: string; token: string; poolId: string; enteringToken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

export default {
  polygon: {
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'STABAL3',
        token: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
        poolId: '0x0d34e5dd4d8f043557145598e4e2dc286b35fd4f000000000000000000000068',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
}
