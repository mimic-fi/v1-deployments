import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'

describe('BalancerWeightedStrategy', function () {
  const task = Task.fromHRE('2021092307-strategy-balancer-weighted', hre)

  it('has a vault reference', async () => {
    const input = task.input()
    const output = task.output()

    const usdcStrategy = await task.instanceAt('BalancerWeightedStrategy', output.usdc)
    expect(await usdcStrategy.getVault()).to.be.equal(input.Vault)
    expect(await usdcStrategy.getToken()).to.be.equal(input.token)
    expect(await usdcStrategy.getMetadataURI()).to.be.equal(input.metadata)
  })
})
