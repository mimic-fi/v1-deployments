import hre from 'hardhat'
import { expect } from 'chai'

import Task from '../../../src/task'

describe('Vault', function () {
  const task = Task.fromHRE('2021072802-vault', hre)

  it('deploys a vault as expected', async () => {
    const input = task.input()
    const output = task.output()

    const vault = await task.instanceAt('Vault', output.vault)

    expect(await vault.protocolFee()).to.be.equal(input.protocolFee)
    expect(await vault.swapConnector()).to.be.equal(input.uniswapConnector || output.uniswapConnector)

    for (const strategy of input.whitelistedStrategies) {
      expect(await vault.isStrategyWhitelisted(strategy)).to.be.true
    }
  })
})
