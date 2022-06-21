import { getForkedNetwork } from '@mimic-fi/v1-helpers'
import { expect } from 'chai'
import { Contract } from 'ethers'
import hre from 'hardhat'

import Task from '../../../src/task'
import { SwapConnectorDeployment } from '../input'

describe('SwapConnector V1', function () {
  let swapConnector: Contract

  const task = Task.forTest('2022060201-swap-connector', getForkedNetwork(hre))

  before('run task', async () => {
    await task.run({ force: true })
    swapConnector = await task.deployedInstance('SwapConnector')
  })

  it('deploys a SwapConnector as expected', async () => {
    const input = task.input() as SwapConnectorDeployment

    expect(await swapConnector.priceOracle()).to.be.equal(input.ChainLinkPriceOracle)
  })
})
