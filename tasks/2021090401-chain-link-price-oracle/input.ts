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
  kovan: {
    tokens: [
      '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa', // DAI
      '0xb7a4f3e9097c08da09517b5ab877f7a917224ede', // USDC
      '0x07de306ff27a2b630b1141956844eb1552b956b5', // USDT
    ],
    ethPriceFeeds: [
      '0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541', // DAI/ETH
      '0x64EaC61A2DFda2c3Fa04eED49AA33D021AeC8838', // USDC/ETH
      '0x0bF499444525a23E7Bb61997539725cA2e928138', // USDT/ETH
    ],
  },
}
