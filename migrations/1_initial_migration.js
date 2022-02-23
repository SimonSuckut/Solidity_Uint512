const Migrations = artifacts.require("Migrations");
const Uint512 = artifacts.require("Uint512");

module.exports = function (deployer) {
  deployer.deploy(Migrations).then(() => deployer.deploy(Uint512));
};
