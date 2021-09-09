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
}
