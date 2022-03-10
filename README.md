# uint512 • [![tests](https://github.com/abigger87/femplate/actions/workflows/tests.yml/badge.svg)](https://github.com/abigger87/femplate/actions/workflows/tests.yml) [![lints](https://github.com/abigger87/femplate/actions/workflows/lints.yml/badge.svg)](https://github.com/abigger87/femplate/actions/workflows/lints.yml) ![GitHub](https://img.shields.io/github/license/abigger87/femplate)  ![GitHub package.json version](https://img.shields.io/github/package-json/v/abigger87/femplate)

This project demonstrates uint512 representation and arithmetic for the solidity language (which is limited to 2**256). It comes with an example implementation, as well as tests.


### Arithmetic Support

* Addition (512 + 512 → 512)

* Subtraction (512 - 512 → 512), 

* Multiplication (256 × 256 → 512), 

* Division (512 / 256 → 256) 

* Square root (256 → 256) and (512 → 256). 



**NOTE:** All functions are gas optimized as far I know. Feel free to contribute if you know more advanced algorithms, spot possibilities for gas improvements or just want to extend the library.


### First time with Forge/Foundry?

See the official Foundry installation [instructions](https://github.com/gakonst/foundry/blob/master/README.md#installation).

Then, install the [foundry](https://github.com/gakonst/foundry) toolchain installer (`foundryup`) with:
```bash
curl -L https://foundry.paradigm.xyz | bash
```

Now that you've installed the `foundryup` binary,
anytime you need to get the latest `forge` or `cast` binaries,
you can run `foundryup`.

So, simply execute:
```bash
foundryup
```

🎉 Foundry is installed! 🎉

### Writing Tests with Foundry

With [Foundry](https://gakonst.xyz), tests are written in Solidity! 🥳

Create a test file for your contract in the `src/tests/` directory.

For example, [`src/Greeter.sol`](./src/Greeter.sol) has its test file defined in [`./src/tests/Greeter.t.sol`](./src/tests/Greeter.t.sol).

To learn more about writing tests in Solidity for Foundry and Dapptools, reference Rari Capital's [solmate](https://github.com/Rari-Capital/solmate/tree/main/src/test) repository largely created by [@transmissions11](https://twitter.com/transmissions11).

### Configure Foundry

Using [foundry.toml](./foundry.toml), Foundry is easily configurable.

For a full list of configuration options, see the Foundry [configuration documentation](https://github.com/gakonst/foundry/blob/master/config/README.md#all-options).

### Install DappTools

Install DappTools using their [installation guide](https://github.com/dapphub/dapptools#installation).

### Getting started with Hardhat👷‍♂️

```shell
npx install hardhat --save-dev
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## License

[AGPL-3.0-only](https://github.com/abigger87/femplate/blob/master/LICENSE)

## Acknowledgements
- [foundry](https://github.com/gakonst/foundry)

## Disclaimer

_These smart contracts are being provided as is. No guarantee, representation or warranty is being made, express or implied, as to the safety or correctness of the user interface or the smart contracts. They have not been audited and as such there can be no assurance they will work as intended, and users may experience delays, failures, errors, omissions, loss of transmitted information or loss of funds. The creators are not liable for any of the foregoing. Users should proceed with caution and use at their own risk._