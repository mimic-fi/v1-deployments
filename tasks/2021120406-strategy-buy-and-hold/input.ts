import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2021120403-vault')

export type BuyAndHoldStrategyDeployment = {
  Vault: string
  strategies: Array<{ name: string; token: string; hodlToken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

export default {
  rinkeby: {
    Vault,
    strategies: [
      {
        name: 'DAI',
        token: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
        hodlToken: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        slippage: fp(0.02),
        metadata: 'ipfs:QmTmLVK83SoYPRGQtiv18n5fjVm3wD7RG1H9JUk9QNxf9o',
      },
      {
        name: 'USDC',
        token: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
        hodlToken: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        slippage: fp(0.01),
        metadata: 'ipfs:QmXfabkEEPpnH9sidSUHZ7nR84Ca3PM373Pd5Fu7UerGEM',
      },
    ],
  },
  kovan: {
    Vault,
    strategies: [
      {
        name: 'DAI',
        token: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        hodlToken: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        slippage: fp(0.95),
        metadata: 'ipfs:QmNYSNpAGhTrXmgg7oYS9iKfVSW9v8HJf5CNk3VNLDLFQ4',
      },
      {
        name: 'USDC',
        token: '0xb7a4f3e9097c08da09517b5ab877f7a917224ede',
        hodlToken: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        slippage: fp(0.95),
        metadata: 'ipfs:QmSyYELCrSq5eJGwmgd8dmNrofUoEFrguU46haRdcxY2fd',
      },
    ],
  },
  mainnet: {
    Vault,
    strategies: [],
  },
}
