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
  kovan: {
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'USDC',
        token: '0xc2569dd7d0fd715B054fBf16E75B001E5c0C1115',
        poolId: '0x3a19030ed746bd1c3f2b0f996ff9479af04c5f0a000200000000000000000004',
        slippage: fp(0.99),
        metadata: 'ipfs:QmUcYcAhWKuNsvQjiLcBTwWf3UwoLyAdVR8ViCzdbew8PF',
      },
    ],
  },
  mainnet: {
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    strategies: [
      {
        name: 'WBTC',
        token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        poolId: '0xa6f548df93de924d73be7d25dc02554c6bd66db500020000000000000000000e',
        slippage: fp(0.01),
        metadata: 'ipfs:QmbDYoPZsgF3yPRSsuZDThjZJ2oe3Kp1n4i95Sry6YAFhZ',
      },
    ],
  },
}
