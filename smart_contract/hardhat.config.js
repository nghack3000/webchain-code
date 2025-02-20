require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'YOUR API URL LIKE FROM ALCHEMY',
      accounts: ['YOUR ACCOUNT NUMBER'],
    },
  },
};