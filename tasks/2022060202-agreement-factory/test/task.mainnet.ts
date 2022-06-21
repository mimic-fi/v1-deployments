import { assertEvent, fp, getForkedNetwork, getSigners, ZERO_ADDRESS } from '@mimic-fi/v1-helpers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { expect } from 'chai'
import { Contract } from 'ethers'
import hre from 'hardhat'

import Task from '../../../src/task'

describe('AgreementFactory V2', function () {
  let manager1: SignerWithAddress, manager2: SignerWithAddress, withdrawer1: SignerWithAddress, withdrawer2: SignerWithAddress, feeCollector: SignerWithAddress
  let agreement: Contract, factory: Contract, vault: Contract

  const task = Task.forTest('2022060202-agreement-factory', getForkedNetwork(hre))

  before('run task', async () => {
    await task.run({ force: true })
    factory = await task.deployedInstance('AgreementFactory')
  })

  before('load signers', async () => {
    // eslint-disable-next-line prettier/prettier
    [manager1, manager2, withdrawer1, withdrawer2, feeCollector] = await getSigners()
  })

  before('load vault and tokens', async () => {
    const vaultTask = Task.forTest('2021120403-vault', getForkedNetwork(hre))
    vault = await vaultTask.instanceAt('Vault', await factory.vault())
  })

  it('deploy an agreement', async () => {
    const name = 'agreement test'
    const depositFee = fp(0.01)
    const withdrawFee = fp(0.005)
    const performanceFee = fp(0.02)
    const maxSwapSlippage = fp(0.03)
    const managers = [manager1.address, manager2.address]
    const withdrawers = [withdrawer1.address, withdrawer2.address]

    const tx = await factory.create(name, feeCollector.address, depositFee, withdrawFee, performanceFee, maxSwapSlippage, managers, withdrawers, [], 2, [], 2)
    const event = await assertEvent(tx, 'AgreementCreated', { name })

    agreement = await task.instanceAt('Agreement', event.args.agreement)
    expect(await factory.isAgreement(agreement.address)).to.be.true

    expect(await agreement.weth()).to.equal(task.input().WETH)
    expect(await agreement.vault()).to.equal(vault.address)
    expect(await agreement.depositFee()).to.equal(depositFee)
    expect(await agreement.withdrawFee()).to.equal(withdrawFee)
    expect(await agreement.performanceFee()).to.equal(performanceFee)
    expect(await agreement.feeCollector()).to.equal(feeCollector.address)
    expect(await agreement.isManager(manager1.address)).to.be.true
    expect(await agreement.isManager(manager2.address)).to.be.true
    expect(await agreement.isWithdrawer(withdrawer1.address)).to.be.true
    expect(await agreement.isWithdrawer(withdrawer2.address)).to.be.true
    expect(await agreement.isStrategyAllowed(ZERO_ADDRESS)).to.be.true
    expect(await agreement.isTokenAllowed(ZERO_ADDRESS)).to.be.true
  })
})
