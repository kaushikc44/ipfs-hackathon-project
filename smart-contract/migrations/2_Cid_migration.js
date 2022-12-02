/** @format */

const Migrations = artifacts.require("Cid");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};