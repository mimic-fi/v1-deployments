import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { AaveStrategyDeployment } from '../input'

describe('AaveStrategy V1', function () {
  const task = Task.fromHRE('2022022305-strategy-aave', hre)

  if (task.network === 'polygon') {
    it('deployed an AaveStrategy as expected', async () => {
      const input = task.input() as AaveStrategyDeployment
      const output = task.output()

      for (const strategyData of input.strategies) {
        const strategy = await task.instanceAt('AaveStrategy', output[strategyData.name])
        expect(await strategy.getVault()).to.be.equal(input.Vault)
        expect(await strategy.getToken()).to.be.equal(strategyData.token)
        expect(await strategy.getAToken()).to.be.equal(strategyData.aToken)
        expect(await strategy.getSlippage()).to.be.equal(strategyData.slippage)
        expect(await strategy.getMetadataURI()).to.be.equal(strategyData.metadata)
      }
    })
  }
})
