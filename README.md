# Venom Test Project Documentation

## Project Overview

This is a simple Venom blockchain project that demonstrates how to create, deploy, and interact with a basic "Hello World" smart contract using the Locklift development framework. The project allows for contract deployment to multiple networks, including local development, Venom testnet, and mainnet.

## Project Structure

```
venom_test_project/
├── build/                      # Contains compiled contract artifacts
│   ├── factorySource.ts        # TypeScript interfaces for contracts
│   ├── HelloWorld.abi.json     # Contract ABI
│   ├── HelloWorld.base64       # Encoded contract
│   ├── HelloWorld.code         # Contract bytecode
│   ├── HelloWorld.map.json     # Source map
│   └── HelloWorld.tvc          # TVC file for deployment
├── contracts/                  # Smart contract source code
│   └── HelloWorld.tsol         # The Hello World contract
├── scripts/                    # Deployment and interaction scripts
│   └── 1-deploy-hello-world.ts # Script to deploy the Hello World contract
├── test/                       # Test files
│   └── sample-test.ts          # Tests for the Hello World contract
├── locklift.config.ts          # Locklift configuration
├── package.json                # Project dependencies
└── tsconfig.json               # TypeScript configuration
```

## Smart Contract

The project contains a simple smart contract `HelloWorld.tsol` that implements a single function:

```solidity
pragma ever-solidity >= 0.61.2;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

contract HelloWorld {
    function printHello() public pure returns (string) {
        return "Hello, World!";
    }
}
```

This contract has a single function `printHello()` that returns the string "Hello, World!".

## Setup and Installation

### Prerequisites

- Node.js and npm
- Docker (for running a local Venom node)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Configuration

The project uses Locklift as its development framework. The configuration is specified in `locklift.config.ts` and includes:

- Compiler settings (using Ever Solidity version 0.62.0)
- Linker settings (version 0.15.48)
- Network configurations:
  - Local development network
  - Venom testnet
  - Mainnet

You can customize network endpoints and other settings in the configuration file or use environment variables.

## Building the Project

To compile the smart contracts, run:

```
npx locklift build
```

This will generate the necessary build artifacts in the `build/` directory.

## Deployment

The project includes a deployment script in `scripts/1-deploy-hello-world.ts` that:

1. Gets a signer account
2. Deploys the HelloWorld contract
3. Interacts with the deployed contract by calling the `printHello()` function

To deploy the contract to the local network:

```
npx locklift run -s scripts/1-deploy-hello-world.ts --network local
```

To deploy to the Venom testnet:

```
npx locklift run -s scripts/1-deploy-hello-world.ts --network venom_testnet
```

## Testing

The project includes tests in `test/sample-test.ts` that verify:

1. Contract factory loading
2. Contract deployment
3. The `printHello()` function returns "Hello, World!"

To run the tests:

```
npm test
```

Or directly:

```
npx locklift test --network local
```

## Development Notes

- The project uses TypeScript for deployment scripts and tests
- The smart contract is written in Ever Solidity version ≥ 0.61.2
- The project is set up to work with the Venom blockchain network

## Dependencies

The project depends on:

- locklift (v2.9.4) - Development framework for Venom/Everscale
- chai (v4.4.1) - Assertion library for tests
- dotenv (v16.0.3) - Environment variable management
- typescript (v4.7.4) - TypeScript support

## Future Enhancements

Potential improvements for this project:

1. Add more complex contract functionality
2. Implement frontend integration
3. Add more comprehensive error handling
4. Create a documentation website

## Troubleshooting

If you encounter issues:

1. Ensure Docker is running if using a local network
2. Verify that environment variables are correctly set
3. Check that dependencies are installed
4. Ensure you have enough test tokens in your wallet when deploying to testnet
