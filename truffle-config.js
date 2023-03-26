module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 4,
      gas: 5500000,
      gasPrice: 10000000000, // 10 gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.10",
    },
  },
};
