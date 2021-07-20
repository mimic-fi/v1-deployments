import Task from '../../src/task'

const vault = new Task('2021072001-vault')

export type AgreementFactoryDeployment = {
  vault: string
}

export default {
  vault,
}
