import Task from '../../src/task'

const ChainLinkPriceOracle = new Task('2021120402-chain-link-price-oracle')

export type BalancerV2Config = {
  tokens: string[]
  poolIds: string[]
}

export type UniswapV3Config = {
  tokens: string[]
  fees: number[]
}

export type SwapConnectorConfig = {
  uniswapV3: UniswapV3Config[]
  balancerV2: BalancerV2Config[]
}

export type SwapConnectorDeployment = {
  from: string
  admin: string
  uniswapV2: string
  uniswapV3: string
  balancerV2: string
  ChainLinkPriceOracle: string
  config: SwapConnectorConfig
}

/* eslint-disable no-secrets/no-secrets */

const from = '0xC1698109c75ee0b11470DCe249d3f490dd5f2A09'
const admin = '0x4ac53dE3a246FeC78C9F278F937550e143e55C06'

export default {
  mainnet: {
    from,
    admin,
    ChainLinkPriceOracle,
    uniswapV2: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    uniswapV3: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
    balancerV2: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    config: {
      balancerV2: [],
      uniswapV3: [
        {
          tokens: [
            '0xba100000625a3754423978a60c9317c58a424e3d', // BAL
            '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
          ],
          fees: [3000, 3000], // 0.3%, 0.3%
        },
        {
          tokens: [
            '0xba100000625a3754423978a60c9317c58a424e3d', // BAL
            '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
          ],
          fees: [3000], // 0.3%
        },
        {
          tokens: [
            '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32', // LDO
            '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
          ],
          fees: [10000], // 1%
        },
        {
          tokens: [
            '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
            '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
          ],
          fees: [100], // 0.01%
        },
      ],
    },
  },
  polygon: {
    from,
    admin,
    ChainLinkPriceOracle,
    uniswapV2: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
    uniswapV3: '0xE592427A0AEce92De3Edee1F18E0157C05861564',
    balancerV2: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    config: {
      balancerV2: [
        {
          tokens: [
            '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3', // BAL
            '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
          ],
          poolIds: [
            '0x0297e37f1873d2dab4487aa67cd56b58e2f27875000100000000000000000002', // WMATIC/USDC/WETH/BAL
          ],
        },
        {
          tokens: [
            '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3', // BAL
            '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // WMATIC
          ],
          poolIds: [
            '0xba07d63875d0c2319d43cbb8a897f89bdafd7e87000100000000000000000077', // WMATIC/LINK/DAI/BAL/1INCH/ENS/AAVE/GTC
          ],
        },
      ],
      uniswapV3: [],
    },
  },
}
