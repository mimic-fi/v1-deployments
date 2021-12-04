import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'

describe('CompoundStrategy', function () {
  const task = Task.fromHRE('2021120405-strategy-compound', hre)

  it('has a vault reference', async () => {
    const input = task.input()
    const output = task.output()

    const daiStrategy = await task.instanceAt('CompoundStrategy', output.dai)
    expect(await daiStrategy.getVault()).to.be.equal(input.Vault)
    expect(await daiStrategy.getToken()).to.be.equal(input.token)
    expect(await daiStrategy.getCToken()).to.be.equal(input.ctoken)
    expect(await daiStrategy.getMetadataURI()).to.be.equal(input.metadata)

    const usdcStrategy = await task.instanceAt('CompoundStrategy', output.usdc)
    expect(await usdcStrategy.getVault()).to.be.equal(input.Vault)
    expect(await usdcStrategy.getToken()).to.be.equal(input.token)
    expect(await usdcStrategy.getCToken()).to.be.equal(input.ctoken)
    expect(await usdcStrategy.getMetadataURI()).to.be.equal(input.metadata)
  })
})
