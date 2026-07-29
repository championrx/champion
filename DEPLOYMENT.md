# Deployment Guide

## Requirements

- Node.js
- npm
- Hardhat
- Base RPC endpoint
- Wallet private key

## Install

```bash
npm install
```

## Compile

```bash
npx hardhat compile
```

## Deploy

```bash
npx hardhat run scripts/deploy.js --network base
```

## Verify

After deployment, verify the contract using the appropriate block explorer.