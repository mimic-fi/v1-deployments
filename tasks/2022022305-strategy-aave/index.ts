import { assertEvent, getSigner } from '@mimic-fi/v1-helpers'

import logger from '../../src/logger'
import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { AaveStrategyDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as AaveStrategyDeployment
  if (!task.isTest && !from) from = await getSigner(input.from)

  const factory = await task.deployAndVerify('AaveStrategyFactory', [input.Vault, input.lendingPool], from, force, 'factory')

  const output = task.output()
  for (const strategy of input.strategies) {
    if (force || !output[strategy.name]) {
      const args = [strategy.token, strategy.aToken, strategy.slippage, strategy.metadata]
      const tx = await factory.create(...args)
      const event = await assertEvent(tx, 'StrategyCreated')
      const instance = await task.instanceAt('AaveStrategy', event.args.strategy)
      logger.success(`Deployed strategy ${strategy.name} at ${instance.address}`)
      task.save({ [strategy.name]: instance.address })
      await task.verify('AaveStrategy', instance.address, args)
    }
  }
}
