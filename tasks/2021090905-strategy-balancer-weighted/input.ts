import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const Vault = new Task('2021090901-vault')

export type BalancerWeightedStrategyDeployment = {
  Vault: string
  strategies: Array<{ name: string; token: string; balancerVault: string; poolId: string; tokenIndex: number; balToken: string; slippage: BigNumberish; metadata: string }>
}

export default {
  kovan: {
    Vault,
    strategies: [
      {
        name: 'USDC',
        token: '0xb7a4f3e9097c08da09517b5ab877f7a917224ede',
        balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        poolId: '0xAE4D08895B1F0F14C7AB5F5B2E9BF54E6E1E5C6F000200000000000000000175',
        tokenIndex: 0,
        balToken: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
        slippage: fp(0.1),
        metadata: 'USDC-50-WETH-50',
      },
      {
        name: 'DAI',
        token: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        balancerVault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        poolId: '0x85370D9E3BB111391CC89F6DE344E80176046183000200000000000000000176',
        tokenIndex: 0,
        balToken: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
        slippage: fp(0.1),
        metadata: 'DAI-50-WETH-50',
      },
    ],
  },
}
