import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { BuyAndHoldStrategyDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as BuyAndHoldStrategyDeployment
  for (const strategy of input.strategies) {
    const args = [input.Vault, strategy.token, strategy.holdToken, strategy.slippage, strategy.metadata]
    await task.deployAndVerify('BuyAndHoldStrategy', args, from, force, strategy.name)
  }
}
