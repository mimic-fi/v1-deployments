import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { VaultDeployment } from '../input'

describe('Vault V1', function () {
  const task = Task.fromHRE('2022022301-vault', hre)

  it('deployed a Vault as expected', async () => {
    const input = task.input() as VaultDeployment
    const output = task.output()

    const vault = await task.instanceAt('Vault', output.Vault)

    expect(await vault.owner()).to.be.equal(input.admin)
    expect(await vault.protocolFee()).to.be.equal(input.protocolFee)
    expect(await vault.priceOracle()).to.be.equal(input.ChainLinkPriceOracle)

    const newSwapConnectorTask = Task.fromHRE('2022060201-swap-connector', hre)
    const newSwapConnectorOutput = newSwapConnectorTask.output()
    expect(await vault.swapConnector()).to.be.equal(newSwapConnectorOutput.SwapConnector)

    for (const token of input.whitelistedTokens) {
      expect(await vault.isTokenWhitelisted(token)).to.be.true
    }

    for (const strategy of input.whitelistedStrategies) {
      expect(await vault.isStrategyWhitelisted(strategy)).to.be.true
    }
  })
})
