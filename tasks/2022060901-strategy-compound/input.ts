import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022022301-vault')

export type CompoundStrategyDeployment = {
  from: string
  admin: string
  Vault: string
  strategies: Array<{ name: string; token: string; cToken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

const from = '0xEf69641350c7C3cf8b19706A01f31362458d23FE'
const admin = '0x4ac53dE3a246FeC78C9F278F937550e143e55C06'

export default {
  mainnet: {
    from,
    admin,
    Vault,
    strategies: [
      {
        name: 'DAI',
        slippage: fp(0.01),
        token: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        cToken: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
        metadata: '',
      },
    ],
  },
}
