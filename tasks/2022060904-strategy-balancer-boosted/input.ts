import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022022301-vault')

export type BalancerBoostedStrategyDeployment = {
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
  mainnet: {
    from,
    admin,
    Vault,
    balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    balancerMinter: '0x239e55F427D44C3cc793f49bFB507ebe76638a2b',
    gaugeFactory: '0x4E7bBd911cf1EFa442BC1b2e9Ea01ffE785412EC',
    gaugeType: 0,
    strategies: [
      {
        name: 'bbaUSDT/bbaDAI/bbaUSDC',
        token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
        poolId: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
}
