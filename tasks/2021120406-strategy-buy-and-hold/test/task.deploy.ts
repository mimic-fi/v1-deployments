import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'

describe('BuyAndHoldStrategy', function () {
  const task = Task.fromHRE('2021120406-strategy-buy-and-hold', hre)

  it('has a vault reference', async () => {
    const input = task.input()
    const output = task.output()

    const daiStrategy = await task.instanceAt('BuyAndHoldStrategy', output.dai)
    expect(await daiStrategy.getVault()).to.be.equal(input.Vault)
    expect(await daiStrategy.getToken()).to.be.equal(input.token)
    expect(await daiStrategy.getHoldToken()).to.be.equal(input.holdToken)
    expect(await daiStrategy.getMetadataURI()).to.be.equal(input.metadata)

    const usdcStrategy = await task.instanceAt('BuyAndHoldStrategy', output.usdc)
    expect(await usdcStrategy.getVault()).to.be.equal(input.Vault)
    expect(await usdcStrategy.getToken()).to.be.equal(input.token)
    expect(await usdcStrategy.getHoldToken()).to.be.equal(input.holdToken)
    expect(await usdcStrategy.getHoldToken()).to.be.equal(input.holdToken)
    expect(await usdcStrategy.getMetadataURI()).to.be.equal(input.metadata)
  })
})
