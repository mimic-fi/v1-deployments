import { getSigner } from '@mimic-fi/v1-helpers'

import Task from '../../src/task'
import { TaskRunOptions } from '../../src/types'
import { SwapConnectorDeployment } from './input'

export default async (task: Task, { force, from }: TaskRunOptions = {}): Promise<void> => {
  const input = task.input() as SwapConnectorDeployment
  if (!task.isTest && !from) from = await getSigner(input.from)

  const output = task.output({ ensure: false })
  const args = [input.ChainLinkPriceOracle, input.uniswapV3, input.uniswapV2, input.balancerV2]
  const connector = await task.deployAndVerify('SwapConnector', args, from, force)

  if (from && (force || !output.SwapConnector)) {
    for (const config of input.config.uniswapV3) await connector.connect(from).setUniswapV3Path(config.tokens, config.fees, true)
    for (const config of input.config.balancerV2) await connector.connect(from).setBalancerV2Path(config.tokens, config.poolIds, true)
    await connector.connect(from).transferOwnership(input.admin)
  }
}
