# Champion

Champion is a personal repository for experimenting with open-source projects, automation, and Web3 development.

## Overview

This repository serves as a workspace for testing ideas, building small utilities, and documenting development progress.

## Features

- Simple project structure
- Easy to extend
- Suitable for experimentation and learning

## Getting Started

Clone the repository:

```bash
git clone https://github.com/championrx/champion.git
```

Move into the project directory:

```bash
cd champion
```

## Roadmap

- Add project structure
- Improve documentation
- Add example implementations
- Expand development resources

## Contributing

Contributions, suggestions, and improvements are welcome through issues and pull requests.

## License

This project is available under the MIT License.

## Project Overview

Champion is a smart contract project built with Solidity for the Base ecosystem.

### Objectives

- Develop secure ERC-20 smart contracts
- Explore decentralized application development
- Maintain clean and well-documented source code
- Support future ecosystem expansion

### Repository Structure

- `contracts/` - Smart contracts
- `scripts/` - Deployment scripts
- `test/` - Contract tests
- `docs/` - Project documentation (planned)

### Development Stack

- Solidity
- Hardhat
- OpenZeppelin Contracts
- Base Network

## Deploy to Base Sepolia

### Prerequisites

- Node.js installed
- Hardhat installed
- Base Sepolia RPC endpoint
- Wallet with test ETH

### Setup

1. Copy `.env.example` to `.env`
2. Add your private key to `.env`
3. Add your Base Sepolia RPC URL to `.env`

### Compile

```bash
npx hardhat compile
```

### Test

```bash
npx hardhat test
```

### Deploy

```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```