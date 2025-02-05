# ProviderCubensis

[![npm](https://img.shields.io/npm/v/@decentralchain/provider-cubensis?color=blue&label=%40decentralchain%2Fprovider-cubensis&logo=npm)](https://www.npmjs.com/package/@decentralchain/provider-cubensis)

ProviderCubensis implements a Signature Provider for DCC [Signer](https://github.com/Decentral-America/signer) protocol library.

## How to use

Check out [the readme of the main package](provider) on how to install and use ProviderCubensis.

## Workspaces

- [provider](provider) - the main package package of this library

- [test-app](test-app) - simple web app using ProviderCubensis for e2e tests

## How to build

To build ProviderCubensis from the repository root you have to install `npm@>=7` and run

```
npm ci
npm run provider:build
```

Otherwise, see the main package [docs](provider/readme.md#how-to-build)
