import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022022301-vault')

export type BalancerStableStrategyDeployment = {
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
        name: 'wETH/wstETH',
        token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // wETH
        poolId: '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
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
        name: 'USDC/USDT/DAI/MAI',
        token: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
        poolId: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012',
        slippage: fp(0.01),
        metadata: '',
      },
      {
        name: 'wMATIC/wstMATIC',
        token: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // wMATIC
        poolId: '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
}
