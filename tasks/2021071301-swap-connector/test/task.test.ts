import { expect } from 'chai'
import { fp } from '@octopus-fi/v1-helpers'

import Task from '../../../src/task'
import { Output } from '../../../src/types'

describe('SwapConnector', function () {
  const task = Task.forTest('2021071301-swap-connector', 'mainnet')

  context('with no previous deploy', () => {
    const itDeploysSwapConnector = (force: boolean) => {
      it('deploys a swap connector', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.swapConnector).not.to.be.null
        expect(output.timestamp).not.to.be.null

        const swapConnector = await task.instanceAt('SwapConnectorMock', output.swapConnector)
        expect(await swapConnector.mockedRate()).to.be.equal(fp(1))
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
        expect(output.swapConnector).not.to.be.equal(previousDeploy.swapConnector)
        expect(output.timestamp).to.be.gt(previousDeploy.timestamp)
      })
    })

    context('when not forced', () => {
      const force = false

      it('does not re-deploys the swap connector', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.swapConnector).to.be.equal(previousDeploy.swapConnector)
        expect(output.timestamp).to.be.equal(previousDeploy.timestamp)
      })
    })
  })
})
