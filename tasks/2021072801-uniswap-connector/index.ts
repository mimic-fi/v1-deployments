import Task from '../../src/task'
import logger from '../../src/logger'
import { TaskRunOptions } from '../../src/types'
import { UniswapConnectorDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const output = task.output({ ensure: false })
  const input = task.input() as UniswapConnectorDeployment
  const args = [input.uniswap]

  if (force || !output.uniswapConnector) {
    const uniswapConnector = await task.deploy('UniswapConnector', args, from)
    task.save({ uniswapConnector })
    await task.verify('UniswapConnector', uniswapConnector.address, args)
  } else {
    logger.info(`Uniswap connector already deployed at ${output.uniswapConnector}`)
    await task.verify('UniswapConnector', output.uniswapConnector, args)
  }
}
