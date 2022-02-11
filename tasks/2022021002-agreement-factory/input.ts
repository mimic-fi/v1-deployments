import Task from '../../src/task'

const Vault = new Task('2022021001-vault')

export type AgreementFactoryDeployment = {
  Vault: string
  WETH: string
}

/* eslint-disable no-secrets/no-secrets */

export default {
  mainnet: {
    Vault,
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  polygon: {
    Vault,
    WETH: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  kovan: {
    Vault,
    WETH: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1', // balancer
  },
  rinkeby: {
    Vault,
    WETH: '0x0000000000000000000000000000000000000000',
  },
}
