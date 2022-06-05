import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { ChainLinkPriceOracleDeployment } from '../input'

describe('ChainLinkPriceOracle', function () {
  const task = Task.fromHRE('2021120402-chain-link-price-oracle', hre)

  it('deployed a ChainLinkPriceOracle as expected', async () => {
    const input = task.input() as ChainLinkPriceOracleDeployment
    const output = task.output()

    const priceOracle = await task.instanceAt('ChainLinkPriceOracle', output.ChainLinkPriceOracle)
    await Promise.all(
      input.tokens.map(async (token, i) => {
        expect(await priceOracle.hasPriceFeed(token)).to.be.true
        const { feed } = await priceOracle.getPriceFeed(token)
        expect(feed).to.be.equal(input.ethPriceFeeds[i])
      })
    )
  })
})
