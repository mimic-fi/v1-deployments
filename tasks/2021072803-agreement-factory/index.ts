import Task from '../../src/task'
import logger from '../../src/logger'
import { TaskRunOptions } from '../../src/types'
import { AgreementFactoryDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const output = task.output({ ensure: false })
  const input = task.input() as AgreementFactoryDeployment
  const args = [input.vault]

  if (force || !output.factory) {
    const factory = await task.deploy('AgreementFactory', args, from)
    task.save({ factory })
    await task.verify('AgreementFactory', factory.address, args)
  } else {
    logger.info(`AgreementFactory already deployed at ${output.factory}`)
    await task.verify('AgreementFactory', output.factory, args)
  }
}
