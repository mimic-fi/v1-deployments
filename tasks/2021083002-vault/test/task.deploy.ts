import hre from 'hardhat'
import { expect } from 'chai'

import Task from '../../../src/task'

describe('Vault', function () {
  const task = Task.fromHRE('2021083002-vault', hre)

  it('deploys a vault as expected', async () => {
    const input = task.input()
    const output = task.output()

    const vault = await task.instanceAt('Vault', output.Vault)

    expect(await vault.protocolFee()).to.be.equal(input.protocolFee)
    expect(await vault.priceOracle()).to.be.equal(input.ChainLinkPriceOracle || output.ChainLinkPriceOracle)
    expect(await vault.swapConnector()).to.be.equal(input.UniswapConnector || output.UniswapConnector)

    for (const token of input.whitelistedTokens) {
      expect(await vault.isTokenWhitelisted(token)).to.be.true
    }

    for (const strategy of input.whitelistedStrategies) {
      expect(await vault.isStrategyWhitelisted(strategy)).to.be.true
    }
  })
})
