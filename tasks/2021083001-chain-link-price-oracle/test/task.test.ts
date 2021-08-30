import { expect } from 'chai'

import Task from '../../../src/task'
import { Output } from '../../../src/types'

describe('ChainLinkPriceOracle', function () {
  const task = Task.forTest('2021083001-chain-link-price-oracle', 'rinkeby')

  context('with no previous deploy', () => {
    const itDeploysPriceOracle = (force: boolean) => {
      it('deploys a price connector', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.ChainLinkPriceOracle).not.to.be.null
        expect(output.timestamp).not.to.be.null

        const input = task.input()
        const chainLinkPriceOracle = await task.instanceAt('ChainLinkPriceOracle', output.ChainLinkPriceOracle)
        expect(await chainLinkPriceOracle.getFeed(input.tokens[0])).to.be.equal(input.ethPriceFeeds[0])
        expect(await chainLinkPriceOracle.getFeed(input.tokens[1])).to.be.equal(input.ethPriceFeeds[1])
      })
    }

    context('when forced', () => {
      const force = true

      itDeploysPriceOracle(force)
    })

    context('when not forced', () => {
      const force = false

      itDeploysPriceOracle(force)
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

      it('re-deploys the oracle', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.ChainLinkPriceOracle).not.to.be.equal(previousDeploy.ChainLinkPriceOracle)
        expect(output.timestamp).to.be.gt(previousDeploy.timestamp)
      })
    })

    context('when not forced', () => {
      const force = false

      it('does not re-deploys the oracle', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.ChainLinkPriceOracle).to.be.equal(previousDeploy.ChainLinkPriceOracle)
        expect(output.timestamp).to.be.equal(previousDeploy.timestamp)
      })
    })
  })
})
