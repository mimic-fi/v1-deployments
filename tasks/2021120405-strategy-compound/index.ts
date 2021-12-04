import { assertEvent } from '@mimic-fi/v1-helpers'

import logger from '../../src/logger'
import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { CompoundStrategyDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as CompoundStrategyDeployment
  const factory = await task.deployAndVerify('CompoundStrategyFactory', [input.Vault], from, force, 'factory')

  const output = task.output()
  for (const strategy of input.strategies) {
    if (force || !output[strategy.name]) {
      const args = [strategy.token, strategy.ctoken, input.comptroller, strategy.slippage, strategy.metadata]
      const tx = await factory.create(...args)
      const event = await assertEvent(tx, 'StrategyCreated')
      const instance = await task.instanceAt('CompoundStrategy', event.args.strategy)
      logger.success(`Deployed strategy ${strategy.name} at ${instance.address}`)
      task.save({ [strategy.name]: instance.address })
      await task.verify('CompoundStrategy', instance.address, args)
    }
  }
}
