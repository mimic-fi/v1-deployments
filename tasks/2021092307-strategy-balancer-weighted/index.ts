import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { BalancerWeightedStrategyDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as BalancerWeightedStrategyDeployment
  for (const strategy of input.strategies) {
    const args = [input.Vault, strategy.token, strategy.balancerVault, strategy.poolId, strategy.tokenIndex, strategy.balToken, strategy.slippage, strategy.metadata]
    await task.deployAndVerify('BalancerWeightedStrategy', args, from, force, strategy.name)
  }
}
