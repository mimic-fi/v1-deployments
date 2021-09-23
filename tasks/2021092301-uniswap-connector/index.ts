import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { UniswapConnectorDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as UniswapConnectorDeployment
  const args = [input.uniswap]
  await task.deployAndVerify('UniswapConnector', args, from, force)
}
