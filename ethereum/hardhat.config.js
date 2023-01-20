require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://goerli.infura.io/v3/1026b420b8454136a0a380d046df355c',
      accounts: ['0ba5314c240ab80669583294627b9cccc071af45ac774ea2e009e012c2f980ae'],
    },
  },
};
