# Welcome to dapp-token-ico 👋

![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Opinionated Dapp Starter Template

## 🏠 [Homepage](https://dapp-token-ico.productsway.com)

## ✨ [Demo](https://dapp-token-ico.productsway.com)

## Screenshot

### Connect to MetaMask

![https://gyazo.com/1fe5ed77da50835e77e1eae5d5c4ad04.gif](https://gyazo.com/1fe5ed77da50835e77e1eae5d5c4ad04.gif)

### Show balance and sign message

![https://gyazo.com/ee30b9c5b33d7f13e63ea6a8b01f70b5.gif](https://gyazo.com/ee30b9c5b33d7f13e63ea6a8b01f70b5.gif)

## Features

- ⚡️ React TypeScript template with [Vite 2](https://vitejs.dev/)
- 📦 [Hardhat](https://hardhat.org/) - Ethereum development environment for professionals
- 🦾 [TypeChain Hardhat plugin](https://github.com/ethereum-ts/TypeChain/tree/master/packages/hardhat) - Automatically generate TypeScript bindings for smartcontracts while using Hardhat.
- 🔥 [web3-react](https://github.com/NoahZinsmeister/web3-react/) - A simple, maximally extensible, dependency minimized framework for building modern Ethereum dApps
- 🎨 [daisyUI Tailwind CSS Components](https://daisyui.com/) - clean HTML with component classes
- 🎨 [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/) - standard for secure blockchain applications

## Install

```sh
yarn install
```

## Usage

```sh
yarn dev
```

## Run tests

```sh
yarn test
```

## ICO Token

Create .env from .env.example from root directory. Remember to fill the value for deployed addresses.

```
ETHERSCAN_API_KEY=ABC123ABC123ABC123ABC123ABC123ABC1
ROPSTEN_PROVIDER_URL=https://eth-ropsten.alchemyapi.io/v2/<YOUR ALCHEMY KEY>
PRIVATE_KEY=<YOUR PRIVATE KEY>
VITE_ITMAN_TOKEN_ADDRESS=<YOUR DEPLOYED SMART CONTRACT ADDRESS>
```

Then deploy to specific network, e.g: Ropsten

```sh
npx hardhat run scripts/deploy_itmantokencrowdsale.js --network ropsten
```

Output:

```sh
Generating typings for: 0 artifacts in dir: src/types for target: ethers-v5
Successfully generated 3 typings!
Successfully generated 3 typings for external artifacts!
ITManToken deployed to: 0xbaD34eF2df4Df479856e7db0A12F94878975777D
Name ITManToken
Symbol ITM
Decimals 18
Total Supply BigNumber { _hex: '0xd3c21bcecceda1000000', _isBigNumber: true }
Owner 0x096cd10D7BEF8D5923b18b18E9f79CA230ee2285
ITManTokenCrowdsale deployed to: 0xAD3bb85626e00d80392226352BF588E087d23dE0
```

Next step is verifying the IT Man Token

```sh
npx hardhat verify --network ropsten 0xbaD34eF2df4Df479856e7db0A12F94878975777D
```

Output:

```sh
Nothing to compile
Generating typings for: 0 artifacts in dir: src/types for target: ethers-v5
Successfully generated 3 typings!
Successfully generated 3 typings for external artifacts!
Compiling 1 file with 0.8.4
Successfully submitted source code for contract
contracts/ITManToken.sol:ITManToken at 0xbaD34eF2df4Df479856e7db0A12F94878975777D
for verification on Etherscan. Waiting for verification result...

Successfully verified contract ITManToken on Etherscan.
https://ropsten.etherscan.io/address/0xbaD34eF2df4Df479856e7db0A12F94878975777D#code
```

Finally, verify the IT Man Token Crowdsale

```sh
npx hardhat verify --network ropsten 0xAD3bb85626e00d80392226352BF588E087d23dE0 500 0x096cd10D7BEF8D5923b18b18E9f79CA230ee2285 0xbaD34eF2df4Df479856e7db0A12F94878975777D 0x096cd10D7BEF8D5923b18b18E9f79CA230ee2285
```

Output:

```sh
Nothing to compile
Generating typings for: 0 artifacts in dir: src/types for target: ethers-v5
Successfully generated 3 typings!
Successfully generated 3 typings for external artifacts!
Compiling 1 file with 0.8.4

... some warnings

Successfully submitted source code for contract
contracts/ITManTokenCrowdsale.sol:ITManTokenCrowdsale at 0xAD3bb85626e00d80392226352BF588E087d23dE0
for verification on Etherscan. Waiting for verification result...

Successfully verified contract ITManTokenCrowdsale on Etherscan.
https://ropsten.etherscan.io/address/0xAD3bb85626e00d80392226352BF588E087d23dE0#code
```

## Hardhat guideline

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile --network localhost
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy_greeter.js --network localhost
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
npx hardhat run --network ropsten scripts/deploy_greeter.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

## Contract upgrade

OpenZeppelin provides tooling for deploying and securing [upgradeable smart contracts](https://docs.openzeppelin.com/learn/upgrading-smart-contracts).

Smart contracts deployed using OpenZeppelin Upgrades Plugins can be upgraded to modify their code, while preserving their address, state, and balance. This allows you to iteratively add new features to your project, or fix any bugs you may find in production.

In this project, there are a 2 versions of contract: Box and BoxV2 which is improvement of Box. First deploy your contract:

```shell
npx hardhat run --network localhost scripts/deploy_upgradeable_box.js
```

Then, deploy the upgrade smart contract

```shell
npx hardhat run --network localhost scripts/upgrade_box.js
```

## Examples

- [Simple Store App](https://github.com/jellydn/dapp-token-ico/pull/20): counter-like smart contract, read/write value and listen to event from smart contract.

## Author

👤 **Dung Huynh**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Stargazers 🌟

[![Stargazers repo roster for jellydn/dapp-token-ico](https://reporoster.com/stars/jellydn/dapp-token-ico)](https://github.com/jellydn/dapp-token-ico/stargazers)

## Show your support

Give a ⭐️ if this project helped you!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q61Q7YM)

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_