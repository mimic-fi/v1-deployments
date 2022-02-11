import { getSigner } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { VaultDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as VaultDeployment
  if (!task.isTest && !from) from = await getSigner(input.from)

  const output = task.output({ ensure: false })
  const args = [input.maxSlippage, input.protocolFee, input.ChainLinkPriceOracle, input.UniswapConnector, input.whitelistedTokens, input.whitelistedStrategies]
  const vault = await task.deployAndVerify('Vault', args, from, force)

  if (force || !output.Vault) {
    await vault.transferOwnership(input.admin)
  }
}
