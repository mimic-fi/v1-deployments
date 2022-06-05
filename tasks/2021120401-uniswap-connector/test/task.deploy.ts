import { expect } from 'chai'
import hre from 'hardhat'

import Task from '../../../src/task'
import { UniswapConnectorDeployment } from '../input'

describe('UniswapConnector', function () {
  const task = Task.fromHRE('2021120401-uniswap-connector', hre)

  it('deployed a UniswapConnector as expected', async () => {
    const input = task.input() as UniswapConnectorDeployment
    const output = task.output()

    const swapConnector = await task.instanceAt('UniswapConnector', output.UniswapConnector)
    expect(await swapConnector.uniswap()).to.be.equal(input.uniswap)
  })
})
