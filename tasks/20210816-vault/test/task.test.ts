import { expect } from 'chai'

import Task from '../../../src/task'
import { Output } from '../../../src/types'

describe('Vault', function () {
  const task = Task.forTest('20210816-vault', 'rinkeby')

  context('with no previous deploy', () => {
    const itDeploysVault = (force: boolean) => {
      it('deploys a vault', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.Vault).not.to.be.null
        expect(output.timestamp).not.to.be.null

        const input = task.input()
        const vault = await task.instanceAt('Vault', output.Vault)
        expect(await vault.protocolFee()).to.be.equal(input.protocolFee)
      })
    }

    context('when forced', () => {
      const force = true

      itDeploysVault(force)
    })

    context('when not forced', () => {
      const force = false

      itDeploysVault(force)
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

      it('re-deploys the vault', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.Vault).not.to.be.equal(previousDeploy.Vault)
        expect(output.timestamp).to.be.gt(previousDeploy.timestamp)
      })
    })

    context('when not forced', () => {
      const force = false

      it('does not re-deploys the vault', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.Vault).to.be.equal(previousDeploy.Vault)
        expect(output.timestamp).to.be.equal(previousDeploy.timestamp)
      })
    })
  })
})
