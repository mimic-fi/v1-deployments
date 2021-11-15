import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2021111503-vault')

export type CompoundStrategyDeployment = {
  Vault: string
  comptroller: string
  strategies: Array<{ name: string; token: string; ctoken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

export default {
  rinkeby: {
    Vault,
    comptroller: '0x2eaa9d77ae4d8f9cdd9faacd44016e746485bddb',
    strategies: [
      {
        name: 'DAI',
        slippage: fp(0.01),
        token: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
        ctoken: '0x6D7F0754FFeb405d23C51CE938289d4835bE3b14',
        metadata: 'ipfs:QmSbzUwqiNQuBefs2omKkCLi7eyv7RwnaJWEYrQ7brFRqr',
      },
      {
        name: 'USDC',
        slippage: fp(0.01),
        token: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
        ctoken: '0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1',
        metadata: 'ipfs:QmeK6bhnBck6VAd6VikyGMAVpPATKGrgaipqUWqmt6pxUp',
      },
    ],
  },
  kovan: {
    Vault,
    comptroller: '0x5eAe89DC1C671724A672ff0630122ee834098657',
    strategies: [
      {
        name: 'DAI',
        slippage: fp(0.99),
        token: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
        ctoken: '0xF0d0EB522cfa50B716B3b1604C4F0fA6f04376AD',
        metadata: 'ipfs:QmNZzhB3Si4f9uc9gLK4jJByLbjLE9biuxcwPATu6zdCgY',
      },
      {
        name: 'USDC',
        slippage: fp(0.99),
        token: '0xb7a4f3e9097c08da09517b5ab877f7a917224ede',
        ctoken: '0x4a92E71227D294F041BD82dd8f78591B75140d63',
        metadata: 'ipfs:QmeQgDd2ea8kT4DVdP2E9FrAZxxdwRBFN9ZVgdudEuHnv9',
      },
    ],
  },
}
