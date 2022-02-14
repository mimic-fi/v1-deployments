import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'

describe('BalancerStableStrategy', function () {
  const task = Task.fromHRE('2022021005-strategy-aave', hre)

  it('has a vault reference', async () => {
    const input = task.input()
    const output = task.output()

    const aaveStrategy = await task.instanceAt('AaveStrategy', output.usdc)
    expect(await aaveStrategy.getVault()).to.be.equal(input.Vault)
    expect(await aaveStrategy.getToken()).to.be.equal(input.token)
    expect(await aaveStrategy.getMetadataURI()).to.be.equal(input.metadata)
  })
})
