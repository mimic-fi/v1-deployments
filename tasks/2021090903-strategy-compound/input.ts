import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'

const Vault = new Task('2021090901-vault')

export type CompoundStrategyDeployment = {
  Vault: string
  comp: string
  comptroller: string
  strategies: Array<{ name: string; token: string; ctoken: string; slippage: BigNumberish; metadata: string }>
}

export default {
  rinkeby: {
    Vault,
    comp: '0xbbEB7c67fa3cfb40069D19E598713239497A3CA5',
    comptroller: '0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb',
    strategies: [
      {
        name: 'DAI',
        slippage: fp(0.01),
        token: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
        ctoken: '0x6D7F0754FFeb405d23C51CE938289d4835bE3b14',
        metadata: 'https://coinmarketcap.com/currencies/compound-dai',
      },
      {
        name: 'USDC',
        slippage: fp(0.01),
        token: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
        ctoken: '0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1',
        metadata: 'https://coinmarketcap.com/currencies/compound-usd-coin/',
      },
    ],
  },
  kovan: {
    Vault,
    comp: '0x61460874a7196d6a22D1eE4922473664b3E95270',
    comptroller: '0x5eAe89DC1C671724A672ff0630122ee834098657',
    strategies: [
      {
        name: 'DAI',
        slippage: fp(0.99),
        token: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        ctoken: '0xF0d0EB522cfa50B716B3b1604C4F0fA6f04376AD',
        metadata: 'https://coinmarketcap.com/currencies/compound-dai',
      },
      {
        name: 'USDC',
        slippage: fp(0.99),
        token: '0xb7a4f3e9097c08da09517b5ab877f7a917224ede',
        ctoken: '0x4a92E71227D294F041BD82dd8f78591B75140d63',
        metadata: 'https://coinmarketcap.com/currencies/compound-usd-coin/',
      },
    ],
  },
}
