import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022022301-vault')

export type BalancerWeightedStrategyDeployment = {
  from: string
  admin: string
  Vault: string
  balancerVault: string
  balancerMinter: string
  gaugeFactory: string
  gaugeType: number
  strategies: Array<{ name: string; token: string; poolId: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

const from = '0xEf69641350c7C3cf8b19706A01f31362458d23FE'
const admin = '0x4ac53dE3a246FeC78C9F278F937550e143e55C06'

export default {
  polygon: {
    from,
    admin,
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    balancerMinter: '0x0000000000000000000000000000000000000000',
    gaugeFactory: '0x3b8cA519122CdD8efb272b0D3085453404B25bD0',
    gaugeType: 1,
    strategies: [
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
