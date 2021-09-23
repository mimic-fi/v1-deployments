import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2021092303-vault')

export type BalancerStableStrategyDeployment = {
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
        poolId: '0x6b15a01b5d46a5321b627bd7deef1af57bc629070000000000000000000000d4',
        tokenIndex: 1,
        balToken: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
        slippage: fp(0.99),
        metadata: 'ipfs:QmWpmKtVUvCZoHXwH3G249kPsJ3Pj542ApYJdMzc2aa3A8',
      },
      {
        name: 'DAI',
        token: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
        balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        poolId: '0x6b15a01b5d46a5321b627bd7deef1af57bc629070000000000000000000000d4',
        tokenIndex: 0,
        balToken: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
        slippage: fp(0.99),
        metadata: 'ipfs:QmQNVGMTzTt9s6W1pw1nHMhSaPM94SPG8JhEqAJJ6dk3jj',
      },
    ],
  },
}
