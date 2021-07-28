import hre from 'hardhat'
import { expect } from 'chai'
import { Contract } from 'ethers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { fp, getForkedNetwork, assertEvent, getSigners, ZERO_ADDRESS } from '@mimic-fi/v1-helpers'

import Task from '../../../src/task'

describe('AgreementFactory', function () {
  let manager1: SignerWithAddress, manager2: SignerWithAddress, withdrawer1: SignerWithAddress, withdrawer2: SignerWithAddress, feeCollector: SignerWithAddress
  let agreement: Contract, factory: Contract, vault: Contract

  const task = Task.forTest('2021072803-agreement-factory', getForkedNetwork(hre))

  before('run task', async () => {
    await task.run({ force: true })
    factory = await task.instanceAt('AgreementFactory', task.output().factory)
  })

  before('load signers', async () => {
    // eslint-disable-next-line prettier/prettier
    [manager1, manager2, withdrawer1, withdrawer2, feeCollector] = await getSigners()
  })

  before('load vault and tokens', async () => {
    const vaultTask = Task.forTest('2021072802-vault', getForkedNetwork(hre))
    vault = await vaultTask.instanceAt('Vault', await factory.getVault())
  })

  it('deploy an agreement', async () => {
    const name = 'agreement test'
    const depositFee = fp(0.01)
    const performanceFee = fp(0.02)
    const managers = [manager1.address, manager2.address]
    const withdrawers = [withdrawer1.address, withdrawer2.address]

    const tx = await factory.create(name, depositFee, performanceFee, feeCollector.address, managers, withdrawers, [], 0)
    const event = await assertEvent(tx, 'AgreementCreated')

    agreement = await task.instanceAt('AgreementCreated', event.args.agreement)
    expect(await factory.isAgreement(name)).to.be.true
    expect(await factory.isAgreement(agreement.address)).to.be.true

    expect(await agreement.name()).to.equal(name)
    expect(await agreement.vault()).to.equal(vault)
    expect(await agreement.depositFee()).to.equal(depositFee)
    expect(await agreement.performanceFee()).to.equal(performanceFee)
    expect(await agreement.feeCollector()).to.equal(feeCollector.address)
    expect(await agreement.isManager(manager1.address)).to.be.true
    expect(await agreement.isManager(manager2.address)).to.be.true
    expect(await agreement.isWithdrawer(withdrawer1.address)).to.be.true
    expect(await agreement.isWithdrawer(withdrawer2.address)).to.be.true
    expect(await agreement.isStrategyAllowed(ZERO_ADDRESS)).to.be.true
  })
})
