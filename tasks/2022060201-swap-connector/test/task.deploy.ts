import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { SwapConnectorDeployment } from '../input'

describe('SwapConnector V1', function () {
  const task = Task.fromHRE('2022060201-swap-connector', hre)

  it('deployed a SwapConnector as expected', async () => {
    const input = task.input() as SwapConnectorDeployment
    const output = task.output()

    const swapConnector = await task.instanceAt('SwapConnector', output.SwapConnector)
    expect(await swapConnector.owner()).to.be.equal(input.admin)
    expect(await swapConnector.priceOracle()).to.be.equal(input.ChainLinkPriceOracle)
  })
})
