import { assertEvent } from '@mimic-fi/v1-helpers'

import logger from '../../src/logger'
import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { BalancerStableStrategyDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as BalancerStableStrategyDeployment
  const factory = await task.deployAndVerify('BalancerStableStrategyFactory', [input.Vault, input.balancerVault], from, force, 'factory')

  const output = task.output()
  for (const strategy of input.strategies) {
    if (force || !output[strategy.name]) {
      const args = [strategy.token, strategy.poolId, strategy.enteringToken, strategy.slippage, strategy.metadata]
      const tx = await factory.create(...args)
      const event = await assertEvent(tx, 'StrategyCreated')
      const instance = await task.instanceAt('BalancerStableStrategy', event.args.strategy)
      logger.success(`Deployed strategy ${strategy.name} at ${instance.address}`)
      task.save({ [strategy.name]: instance.address })
      await task.verify('BalancerStableStrategy', instance.address, args)
    }
  }
}
