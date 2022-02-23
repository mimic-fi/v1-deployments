import { getSigner } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { AgreementFactoryDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as AgreementFactoryDeployment
  if (!task.isTest && !from) from = await getSigner(input.from)

  const args = [input.WETH, input.Vault]
  await task.deployAndVerify('AgreementFactory', args, from, force)
}
