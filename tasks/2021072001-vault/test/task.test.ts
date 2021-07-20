import { expect } from 'chai'

import Task from '../../../src/task'
import { Output } from '../../../src/types'

describe('Vault', function () {
  const task = Task.forTest('2021072001-vault', 'rinkeby')

  context('with no previous deploy', () => {
    const itDeploysVault = (force: boolean) => {
      it('deploys a vault', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.vault).not.to.be.null
        expect(output.timestamp).not.to.be.null

        const input = task.input()
        const vault = await task.instanceAt('Vault', output.vault)
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
        expect(output.vault).not.to.be.equal(previousDeploy.vault)
        expect(output.timestamp).to.be.gt(previousDeploy.timestamp)
      })
    })

    context('when not forced', () => {
      const force = false

      it('does not re-deploys the vault', async () => {
        await task.run({ force })

        const output = task.output()
        expect(output.vault).to.be.equal(previousDeploy.vault)
        expect(output.timestamp).to.be.equal(previousDeploy.timestamp)
      })
    })
  })
})
