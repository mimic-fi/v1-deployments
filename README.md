# Deployments

[![CI](https://github.com/mimic-fi/deployments/actions/workflows/ci.yml/badge.svg)](https://github.com/mimic-fi/deployments/actions/workflows/ci.yml)

This repository contains all the official deployments that contributes to the Mimic protocol.

## Records

| ID                                                                                              | Component                    |
| ----------------------------------------------------------------------------------------------- | ---------------------------- |
| [`2021120401-uniswap-connector`](./tasks/2021120401-uniswap-connector/output)                   | Uniswap V2 connector         |
| [`2021120402-chain-link-price-oracle`](./tasks/2021120402-chain-link-price-oracle/output)       | Chainlink V3 price oracle    |
| [`2021120403-vault`](./tasks/2021120403-vault/output)                                           | Mimic Vault (v0.0.6)         |
| [`2021120404-agreement-factory`](./tasks/2021120404-agreement-factory/output)                   | Agreements factory (v0.0.1)  |
| [`2021120405-strategy-compound`](./tasks/2021120405-strategy-compound/output)                   | Compound strategies          |
| [`2021120406-strategy-buy-and-hold`](./tasks/2021120406-strategy-buy-and-hold/output)           | Buy & Hold strategies        |
| [`2021120407-strategy-balancer-weighted`](./tasks/2021120407-strategy-balancer-weighted/output) | Balancer weighted strategies |
| [`2021120408-strategy-balancer-stable`](./tasks/2021120408-strategy-balancer-stable/output)     | Balancer stable strategies   |
| [`2022012600-vault`](./tasks/2022012601-vault/output)                                           | Mimic Vault (v0.0.8)         |
| [`2022012602-agreement-factory`](./tasks/2022012602-agreement-factory/output)                   | Agreements factory (v0.0.3)  |

## New deployments

To create a new deployment task simply create a new script as follows:

```
touch ./tasks/$TASK_ID/index.ts
```

To deploy any of the following tasks simply run:

```
yarn hardhat deploy --id $TASK_ID --network $NETWORK
```

Currently the available networks are: `goerli`, `kovan`, `mainnet`, `rinkeby`, `ropsten`, `polygon`, and `localhost`.

Tasks are not re-deployed unless you explicitly ask for it, to do so run the command with the `--force` flag.
