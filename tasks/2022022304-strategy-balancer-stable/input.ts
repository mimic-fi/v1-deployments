import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022022301-vault')

export type BalancerStableStrategyDeployment = {
  from: string
  Vault: string
  balancerVault: string
  strategies: Array<{ name: string; token: string; poolId: string; enteringToken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

const from = '0x9Fcebb9181df7e89D614C1ef95C017Aa56Ee49fa'

export default {
  mainnet: {
    from,
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'wstETH/WETH',
        token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
        poolId: '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
  polygon: {
    from,
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'USDC/USDT/DAI/MAI',
        token: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
        poolId: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
}
