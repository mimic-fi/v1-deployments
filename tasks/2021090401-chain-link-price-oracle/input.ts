export type ChainLinkPriceOracleDeployment = {
  tokens: Array<string>
  ethPriceFeeds: Array<string>
}

export default {
  localhost: {
    tokens: [
      '0x0000000000000000000000000000000000000001', // DAI
      '0x0000000000000000000000000000000000000002', // USDC
    ],
    ethPriceFeeds: [
      '0x1000000000000000000000000000000000000000', // DAI/ETH
      '0x2000000000000000000000000000000000000000', // USDC/ETH
    ],
  },
  rinkeby: {
    tokens: [
      '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', // DAI
      '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b', // USDC
    ],
    ethPriceFeeds: [
      '0x74825DbC8BF76CC4e9494d0ecB210f676Efa001D', // DAI/ETH
      '0xdCA36F27cbC4E38aE16C4E9f99D39b42337F6dcf', // USDC/ETH
    ],
  },
}
