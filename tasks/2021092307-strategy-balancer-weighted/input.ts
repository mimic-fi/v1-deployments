import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2021092303-vault')

export type BalancerWeightedStrategyDeployment = {
  Vault: string
  strategies: Array<{ name: string; token: string; balancerVault: string; poolId: string; tokenIndex: number; balToken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

export default {
  kovan: {
    Vault,
    strategies: [
      {
        name: 'USDC',
        token: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
        balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        poolId: '0x3a19030ed746bd1c3f2b0f996ff9479af04c5f0a000200000000000000000004',
        tokenIndex: 0,
        balToken: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
        slippage: fp(0.99),
        metadata: 'ipfs:QmYwqCjMwZGvFFNWAp8PVYZZtDLTjtFZhs4EyVGy2x16oQ',
      },
    ],
  },
}
