import { BigNumberish, fp } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { Metadata } from '../../src/types'

const Vault = new Task('2022021001-vault')

export type AaveStrategyDeployment = {
  from: string
  Vault: string
  lendingPool: string
  strategies: Array<{ name: string; token: string; aToken: string; slippage: BigNumberish; metadata: string | Metadata }>
}

/* eslint-disable no-secrets/no-secrets */

const from = '0x9Fcebb9181df7e89D614C1ef95C017Aa56Ee49fa'

export default {
  polygon: {
    from,
    Vault,
    lendingPool: '',
    strategies: [
      {
        name: 'AAVE USDC',
        token: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
        aToken: '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F',
        slippage: fp(0.01),
        metadata: '',
      },
      {
        name: 'AAVE DAI',
        token: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', // DAI
        aToken: '0x27F8D03b3a2196956ED754baDc28D73be8830A6e',
        slippage: fp(0.01),
        metadata: '',
      },
    ],
  },
}
