import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { AgreementFactoryDeployment } from '../input'

describe('AgreementFactory V3', function () {
  const task = Task.fromHRE('2022062101-agreement-factory', hre)

  it('deployed an AgreementFactory as expected', async () => {
    const input = task.input() as AgreementFactoryDeployment
    const output = task.output()

    const factory = await task.instanceAt('AgreementFactory', output.AgreementFactory)
    expect(await factory.vault()).to.be.equal(input.Vault)

    const agreement = await task.instanceAt('Agreement', await factory.implementation())
    expect(await agreement.weth()).to.be.equal(input.WETH)
    expect(await factory.isAgreement(agreement.address)).to.be.false
  })
})
