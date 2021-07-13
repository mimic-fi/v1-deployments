import Task from '../../src/task'
import logger from '../../src/logger'
import { TaskRunOptions } from '../../src/types'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const output = task.output({ ensure: false })

  if (force || !output.swapConnector) {
    const swapConnector = await task.deploy('SwapConnectorMock', [], from)
    task.save({ swapConnector })
    await task.verify('SwapConnectorMock', swapConnector.address, [])
  } else {
    logger.info(`Swap connector already deployed at ${output.swapConnector}`)
    await task.verify('SwapConnectorMock', output.swapConnector, [])
  }
}
