import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { BalancerWeightedStrategyDeployment } from '../input'

describe('BalancerWeightedStrategy V2', function () {
  const task = Task.fromHRE('2022060902-strategy-balancer-weighted', hre)

  it('deployed a BalancerWeightedStrategy as expected', async () => {
    const input = task.input() as BalancerWeightedStrategyDeployment
    const output = task.output()

    for (const strategyData of input.strategies) {
      const strategy = await task.instanceAt('BalancerWeightedStrategy', output[strategyData.name])
      expect(await strategy.getVault()).to.be.equal(input.Vault)
      expect(await strategy.getBalancerVault()).to.be.equal(input.balancerVault)
      expect(await strategy.getBalancerMinter()).to.be.equal(input.balancerMinter)
      expect(await strategy.getToken()).to.be.equal(strategyData.token)
      expect(await strategy.getPoolId()).to.be.equal(strategyData.poolId)
      expect(await strategy.getSlippage()).to.be.equal(strategyData.slippage)
      expect(await strategy.getMetadataURI()).to.be.equal(strategyData.metadata)
    }
  })
})
