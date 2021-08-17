import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { AgreementFactoryDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as AgreementFactoryDeployment
  const args = [input.Vault]
  await task.deployAndVerify('AgreementFactory', args, from, force);
}
