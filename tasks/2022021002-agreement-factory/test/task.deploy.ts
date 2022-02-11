import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'

describe('AgreementFactory', function () {
  const task = Task.fromHRE('2022021002-agreement-factory', hre)

  it('has a vault reference', async () => {
    const input = task.input()
    const output = task.output()

    const factory = await task.instanceAt('AgreementFactory', output.AgreementFactory)

    expect(await factory.vault()).to.be.equal(input.Vault)
  })
})
