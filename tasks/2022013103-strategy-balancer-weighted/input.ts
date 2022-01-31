import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2021120403-vault')

export type BalancerWeightedStrategyDeployment = {
  Vault: string
  balancerVault: string
  strategies: Array<{ name: string; token: string; poolId: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

export default {
  polygon: {
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'WBTC/WETH',
        token: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
        poolId: '0xcf354603a9aebd2ff9f33e1b04246d8ea204ae9500020000000000000000005a',
        slippage: fp(0.01),
        metadata: '',
      },
      {
        name: 'WMATIC/USDC/WETH/BAL',
        token: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
        poolId: '0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
}
