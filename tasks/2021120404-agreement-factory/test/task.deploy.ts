import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { AgreementFactoryDeployment } from '../input'

describe('AgreementFactory V0', function () {
  const task = Task.fromHRE('2021120404-agreement-factory', hre)

  it('deployed an AgreementFactory as expected', async () => {
    const input = task.input() as AgreementFactoryDeployment
    const output = task.output()

    const factory = await task.instanceAt('AgreementFactory', output.AgreementFactory)
    expect(await factory.vault()).to.be.equal(input.Vault)
  })
})
