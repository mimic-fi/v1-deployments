import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { Contract, utils } from 'ethers'

import { Artifact, Libraries, Param } from './types'

export async function deploy(artifact: Artifact, args: Array<Param> = [], from?: SignerWithAddress, libs?: Libraries): Promise<Contract> {
  if (!args) args = []
  if (!from) from = await getSigner()
  if (libs) artifact = linkBytecode(artifact, libs)

  const { ethers } = await import('hardhat')
  const factory = await ethers.getContractFactory(artifact.abi, artifact.evm.bytecode.object as utils.BytesLike)
  const deployment = await factory.connect(from).deploy(...args)
  return deployment.deployed()
}

export async function instanceAt(artifact: Artifact, address: string): Promise<Contract> {
  const { ethers } = await import('hardhat')
  return ethers.getContractAt(artifact.abi, address)
}

function linkBytecode(artifact: Artifact, libraries: Libraries): Artifact {
  let bytecode = artifact.evm.bytecode.object.replace('0x', '')
  for (const [, fileReferences] of Object.entries(artifact.evm.bytecode.linkReferences)) {
    for (const [library, fixups] of Object.entries(fileReferences)) {
      const address = libraries[library]
      if (address === undefined) continue
      for (const fixup of fixups) {
        const pre = bytecode.substring(0, fixup.start * 2)
        const post = bytecode.substring((fixup.start + fixup.length) * 2)
        bytecode = pre + address.replace('0x', '') + post
      }
    }
  }

  artifact.evm.bytecode.object = `0x${bytecode}`
  return artifact
}

async function getSigner(): Promise<SignerWithAddress> {
  const { ethers } = await import('hardhat')
  const signers = await ethers.getSigners()
  return signers[0]
}
