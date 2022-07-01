<h1 align="center">
  <a href="https://mimic.fi"><img src="https://www.mimic.fi/static/media/navbar-logo.d79d70dab1c7bd176b11b74829ed33e7.svg" alt="Mimic Finance" width="200"></a> 
</h1>

<h4 align="center">A DeFi automation platform</h4>

<p align="center">
  <a href="https://github.com/mimic-fi/deployments/actions/workflows/ci.yml">
    <img src="https://github.com/mimic-fi/deployments/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
  <a href="https://discord.mimic.fi">
    <img src="https://img.shields.io/discourse/status?server=https%3A%2F%2Fmeta.discourse.org" alt="Discord">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-GLP_3.0-green">
  </a>
</p>

<p align="center">
  <a href="#content">Content</a> •
  <a href="#setup">Setup</a> •
  <a href="#how-does-it-work">How does it work</a> •
  <a href="#license">License</a>
</p>

---

## Content

This repository contains all the official deployments related to the Mimic protocol.

| ID                                                                                              | Component                    | Version |
|-------------------------------------------------------------------------------------------------|------------------------------|---------|
| [`2022062102-swap-connector`](./tasks/2022062102-swap-connector/output)                         | Swap connector V2            | 0.0.3   |
| [`2022062101-agreement-factory`](./tasks/2022062101-agreement-factory/output)                   | Agreement Factory V3         | 0.0.11  |
| [`2022060904-strategy-balancer-boosted`](./tasks/2022060904-strategy-balancer-boosted/output)   | Balancer boosted strategies  | 0.0.1   |
| [`2022060903-strategy-balancer-stable`](./tasks/2022060903-strategy-balancer-stable/output)     | Balancer stable strategies   | 0.0.3   |
| [`2022060902-strategy-balancer-weighted`](./tasks/2022060902-strategy-balancer-weighted/output) | Balancer weighted strategies | 0.0.3   |
| [`2022060901-strategy-compound`](./tasks/2022060901-strategy-compound/output)                   | Compound strategies          | 0.0.3   |
| [`2022060203-strategy-aave`](./tasks/2022060203-strategy-aave/output)                           | AAVE strategies              | 0.0.2   |
| [`2022060202-agreement-factory`](./tasks/2022060202-agreement-factory/output)                   | Agreement Factory V2         | 0.0.10  |
| [`2022060201-swap-connector`](./tasks/2022060201-swap-connector/output)                         | Swap connector V1            | 0.0.2   |
| [`2022022305-strategy-aave`](./tasks/2022022305-strategy-aave/output)                           | AAVE strategies              | 0.0.1   |
| [`2022022304-strategy-balancer-stable`](./tasks/2022022304-strategy-balancer-stable/output)     | Balancer stable strategies   | 0.0.2   |
| [`2022022303-strategy-balancer-weighted`](./tasks/2022022303-strategy-balancer-weighted/output) | Balancer weighted strategies | 0.0.2   |
| [`2022022302-agreement-factory`](./tasks/2022022302-agreement-factory/output)                   | Agreements Factory V1        | 0.0.6   |
| [`2022022301-vault`](./tasks/2022022301-vault/output)                                           | Mimic Vault V1               | 0.0.11  |
| [`2021120408-strategy-balancer-stable`](./tasks/2021120408-strategy-balancer-stable/output)     | Balancer stable strategies   | 0.0.1   |
| [`2021120407-strategy-balancer-weighted`](./tasks/2021120407-strategy-balancer-weighted/output) | Balancer weighted strategies | 0.0.1   |
| [`2021120406-strategy-buy-and-hold`](./tasks/2021120406-strategy-buy-and-hold/output)           | Buy & Hold strategies        | 0.0.1   |
| [`2021120405-strategy-compound`](./tasks/2021120405-strategy-compound/output)                   | Compound strategies          | 0.0.1   |
| [`2021120404-agreement-factory`](./tasks/2021120404-agreement-factory/output)                   | Agreements Factory V0        | 0.0.1   |
| [`2021120403-vault`](./tasks/2021120403-vault/output)                                           | Mimic Vault V0               | 0.0.6   |
| [`2021120402-chain-link-price-oracle`](./tasks/2021120402-chain-link-price-oracle/output)       | ChainLink V3 price oracle    | 0.0.4   |
| [`2021120401-uniswap-connector`](./tasks/2021120401-uniswap-connector/output)                   | Uniswap V2 connector         | 0.0.4   |


## Setup

To set up this project you'll need [git](https://git-scm.com) and [yarn](https://classic.yarnpkg.com) installed.
From your command line:

```bash
# Clone this repository
$ git clone https://github.com/mimic-fi/deployments

# Go into the repository
$ cd deployments

# Install dependencies
$ yarn
```

## How does it work

To create a new deployment task simply create a new script as follows:

```
touch ./tasks/$TASK_ID/index.ts
```

To deploy any of the following tasks simply run:

```
yarn hardhat deploy --id $TASK_ID --network $NETWORK
```

Currently, the available networks are: `goerli`, `kovan`, `mainnet`, `rinkeby`, `ropsten`, `polygon`, and `localhost`.

Tasks are not re-deployed unless you explicitly ask for it, to do so run the command with the `--force` flag.

## License

GPL 3.0

---

> Website [mimic.fi](https://mimic.fi) &nbsp;&middot;&nbsp;
> GitHub [@mimic-fi](https://github.com/mimic-fi) &nbsp;&middot;&nbsp;
> Twitter [@mimicfi](https://twitter.com/mimicfi) &nbsp;&middot;&nbsp;
> Discord [mimic](https://discord.mimic.fi)
