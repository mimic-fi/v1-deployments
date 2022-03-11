import Task from '../../src/task'

const Vault = new Task('2022022301-vault')

export type AgreementFactoryDeployment = {
  from: string
  Vault: string
  WETH: string
}

/* eslint-disable no-secrets/no-secrets */

const from = '0xF8e8086738f074E8D4787522AC7e96Fb9F124e74'

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
  kovan: {
    from,
    Vault,
    WETH: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1', // balancer
  },
  rinkeby: {
    from,
    Vault,
    WETH: '0x0000000000000000000000000000000000000000',
  },
}
