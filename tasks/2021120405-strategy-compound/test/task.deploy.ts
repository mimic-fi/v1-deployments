import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { CompoundStrategyDeployment } from '../input'

describe('CompoundStrategy V0', function () {
  const task = Task.fromHRE('2021120405-strategy-compound', hre)

  it('deployed a CompoundStrategy as expected', async () => {
    const input = task.input() as CompoundStrategyDeployment
    const output = task.output()

    for (const strategyData of input.strategies) {
      const strategy = await task.instanceAt('CompoundStrategy', output[strategyData.name])
      expect(await strategy.getVault()).to.be.equal(input.Vault)
      expect(await strategy.getToken()).to.be.equal(strategyData.token)
      expect(await strategy.getCToken()).to.be.equal(strategyData.ctoken)
      expect(await strategy.getSlippage()).to.be.equal(strategyData.slippage)
      expect(await strategy.getMetadataURI()).to.be.equal(strategyData.metadata)
    }
  })
})
