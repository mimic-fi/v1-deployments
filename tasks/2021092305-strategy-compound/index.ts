import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { CompoundStrategyDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as CompoundStrategyDeployment
  for (const strategy of input.strategies) {
    const args = [input.Vault, strategy.token, strategy.ctoken, input.comp, input.comptroller, strategy.slippage, strategy.metadata]
    await task.deployAndVerify('CompoundStrategy', args, from, force, strategy.name)
  }
}
