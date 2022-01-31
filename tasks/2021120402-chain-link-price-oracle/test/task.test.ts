import { ZERO_ADDRESS } from '@mimic-fi/v1-helpers'
import { expect } from 'chai'

import Task from '../../../src/task'
import { Output } from '../../../src/types'

describe('ChainLinkPriceOracle', function () {
  const task = Task.forTest('2021120402-chain-link-price-oracle', 'rinkeby')

  context('with no previous deploy', () => {
    const itDeploysOracle = (force: boolean) => {
      it('deploys a price oracle', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.ChainLinkPriceOracle).not.to.be.null
        expect(output.timestamp).not.to.be.null

        const priceOracle = await task.instanceAt('ChainLinkPriceOracle', output.ChainLinkPriceOracle)
        expect(await priceOracle.hasPriceFeed(ZERO_ADDRESS)).to.be.false
      })
    }

    context('when forced', () => {
      const force = true

      itDeploysOracle(force)
    })

    context('when not forced', () => {
      const force = false

      itDeploysOracle(force)
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

      it('re-deploys the price oracle', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.ChainLinkPriceOracle).not.to.be.equal(previousDeploy.ChainLinkPriceOracle)
        expect(output.timestamp).to.be.gt(previousDeploy.timestamp)
      })
    })

    context('when not forced', () => {
      const force = false

      it('does not re-deploys the price oracle', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.ChainLinkPriceOracle).to.be.equal(previousDeploy.ChainLinkPriceOracle)
        expect(output.timestamp).to.be.equal(previousDeploy.timestamp)
      })
    })
  })
})
