import { expect } from 'chai'

import Task from '../../../src/task'
import { Output } from '../../../src/types'

describe('UniswapConnector', function () {
  const task = Task.forTest('20210728-uniswap-connector', 'mainnet')

  context('with no previous deploy', () => {
    const itDeploysSwapConnector = (force: boolean) => {
      it('deploys a swap connector', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.UniswapConnector).not.to.be.null
        expect(output.timestamp).not.to.be.null

        const input = task.input()
        const uniswapConnector = await task.instanceAt('UniswapConnector', output.UniswapConnector)
        expect(await uniswapConnector.uniswap()).to.be.equal(input.uniswap)
      })
    }

    context('when forced', () => {
      const force = true

      itDeploysSwapConnector(force)
    })

    context('when not forced', () => {
      const force = false

      itDeploysSwapConnector(force)
    })
  })

  context('with a previous deploy', () => {
    let previousDeploy: Output

    beforeEach('deploy', async () => {
      await task.run()
      previousDeploy = task.output()
    })

    context('when forced', () => {
      const force = true

      it('re-deploys the swap connector', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.UniswapConnector).not.to.be.equal(previousDeploy.UniswapConnector)
        expect(output.timestamp).to.be.gt(previousDeploy.timestamp)
      })
    })

    context('when not forced', () => {
      const force = false

      it('does not re-deploys the swap connector', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.UniswapConnector).to.be.equal(previousDeploy.UniswapConnector)
        expect(output.timestamp).to.be.equal(previousDeploy.timestamp)
      })
    })
  })
})
