# Deployments

[![CI](https://github.com/mimic-fi/deployments/actions/workflows/ci.yml/badge.svg)](https://github.com/mimic-fi/deployments/actions/workflows/ci.yml)

This repository contains all the official deployments that contributes to the Mimic protocol.

## Records

| ID  | Component |
| --- | --- |
| [`2021090801-uniswap-connector`](./tasks/2021090801-uniswap-connector/output) | Uniswap V2 connector |
| [`2021090802-chain-link-price-oracle`](./tasks/2021090802-chain-link-price-oracle/output) | Chainlink V3 price oracle |
| [`2021090901-vault`](./tasks/2021090901-vault/output) | Mimic Vault |
| [`2021090902-agreement-factory`](./tasks/2021090902-agreement-factory/output) | Agreements factory |
| [`2021090903-strategy-compound`](./tasks/2021090903-strategy-compound/output) | Compound strategies |
| [`2021090904-strategy-buy-and-hold`](./tasks/2021090904-strategy-buy-and-hold/output) | Buy & Hold strategies |

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
 
