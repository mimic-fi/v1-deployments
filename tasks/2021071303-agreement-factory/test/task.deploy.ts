import hre from 'hardhat'
import { expect } from 'chai'

import Task from '../../../src/task'

describe('AgreementFactory', function () {
  const task = Task.fromHRE('2021071303-agreement-factory', hre)

  it('has a vault reference', async () => {
    const input = task.input()
    const output = task.output()

    const factory = await task.instanceAt('AgreementFactory', output.factory)

    expect(await factory.vault()).to.be.equal(input.vault)
  })
})
