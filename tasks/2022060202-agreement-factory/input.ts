import Task from '../../src/task'

const Vault = new Task('2022022301-vault')

export type AgreementFactoryDeployment = {
  from: string
  Vault: string
  WETH: string
}

/* eslint-disable no-secrets/no-secrets */

const from = '0xC1698109c75ee0b11470DCe249d3f490dd5f2A09'

export default {
  mainnet: {
    from,
    Vault,
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  polygon: {
    from,
    Vault,
    WETH: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // wMATIC
  },
}
