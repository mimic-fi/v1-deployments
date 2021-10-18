import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@mimic-fi/v1-helpers/dist/tests'
import 'hardhat-local-networks-config-plugin'

import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { homedir } from 'os'
import path from 'path'

import { Logger } from './src/logger'
import Task from './src/task'
import Verifier from './src/verifier'

task('deploy', 'Run deployment task')
  .addParam('id', 'Deployment task ID')
  .addFlag('force', 'Ignore previous deployments')
  .addOptionalParam('key', 'Etherscan API key to verify contracts')
  .setAction(async (args: { id: string; force?: boolean; key?: string; verbose?: boolean }, hre: HardhatRuntimeEnvironment) => {
    Logger.setDefaults(false, args.verbose || false)
    const verifier = args.key ? new Verifier(hre.network, args.key) : undefined
    await Task.fromHRE(args.id, hre, verifier).run(args)
  })

task('deploy:all', 'Run all deployment tasks')
  .addFlag('force', 'Ignore previous deployments')
  .addOptionalParam('key', 'Etherscan API key to verify contracts')
  .setAction(async (args: { force?: boolean; key?: string; verbose?: boolean }, hre: HardhatRuntimeEnvironment) => {
    Logger.setDefaults(false, args.verbose || false)
    const verifier = args.key ? new Verifier(hre.network, args.key) : undefined
    const tasks = Task.all(hre, verifier)
    for (const task of tasks) {
      await task.run(args)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  })

export default {
  localNetworksConfig: path.join(homedir(), '/.hardhat/networks.mimic.json'),
}
