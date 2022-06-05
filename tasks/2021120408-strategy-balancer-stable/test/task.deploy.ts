import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { BalancerStableStrategyDeployment } from '../input'

describe('BalancerStableStrategy V0', function () {
  const task = Task.fromHRE('2021120408-strategy-balancer-stable', hre)

  it('deployed a BalancerStableStrategy as expected', async () => {
    const input = task.input() as BalancerStableStrategyDeployment
    const output = task.output()

    for (const strategyData of input.strategies) {
      const strategy = await task.instanceAt('BalancerStableStrategy', output[strategyData.name])
      expect(await strategy.getVault()).to.be.equal(input.Vault)
      expect(await strategy.getToken()).to.be.equal(strategyData.token)
      expect(await strategy.getPoolId()).to.be.equal(strategyData.poolId)
      expect(await strategy.getSlippage()).to.be.equal(strategyData.slippage)
      expect(await strategy.getMetadataURI()).to.be.equal(strategyData.metadata)
    }
  })
})
