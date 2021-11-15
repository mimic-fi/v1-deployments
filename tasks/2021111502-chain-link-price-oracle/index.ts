import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { ChainLinkPriceOracleDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as ChainLinkPriceOracleDeployment
  const args = [input.tokens, input.ethPriceFeeds]
  await task.deployAndVerify('ChainLinkPriceOracle', args, from, force)
}
