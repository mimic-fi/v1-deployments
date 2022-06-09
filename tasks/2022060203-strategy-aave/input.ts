import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022022301-vault')

export type AaveStrategyDeployment = {
  from: string
  admin: string
  Vault: string
  lendingPool: string
  strategies: Array<{ name: string; token: string; aToken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

const from = '0xEf69641350c7C3cf8b19706A01f31362458d23FE'
const admin = '0x4ac53dE3a246FeC78C9F278F937550e143e55C06'

export default {
  polygon: {
    from,
    admin,
    Vault,
    lendingPool: '0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf',
    strategies: [
      {
        name: 'DAI',
        token: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', // DAI
        aToken: '0x27F8D03b3a2196956ED754baDc28D73be8830A6e',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
  mainnet: {
    from,
    admin,
    Vault,
    lendingPool: '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9',
    strategies: [
      {
        name: 'DAI',
        token: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
        aToken: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
}
