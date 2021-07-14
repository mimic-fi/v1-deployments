import path from 'path'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@mimic-fi/v1-helpers/tests'
import 'hardhat-local-networks-config-plugin'

import { homedir } from 'os'
import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

import Task from './src/task'
import Verifier from './src/verifier'
import { Logger } from './src/logger'

task('deploy', 'Run deployment task')
  .addParam('id', 'Deployment task ID')
  .addFlag('force', 'Ignore previous deployments')
  .addOptionalParam('key', 'Etherscan API key to verify contracts')
  .setAction(async (args: { id: string; force?: boolean; key?: string; verbose?: boolean }, hre: HardhatRuntimeEnvironment) => {
    Logger.setDefaults(false, args.verbose || false)
    const verifier = args.key ? new Verifier(hre.network, args.key) : undefined
    await Task.fromHRE(args.id, hre, verifier).run(args)
  })

export default {
  localNetworksConfig: path.join(homedir(), '/.hardhat/networks.mimic.json'),
}
