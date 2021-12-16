require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind huge guess problem blue gaze'; 
let testAccounts = [
"0x747ed789be3c69869cf12926eab3e881c7049aebbc22b63b450bd8766b76ffaa",
"0xa2e4563cdd10130aed1f93bfb049b38d98e5df3f8ab30afbf1a6882fac101a4e",
"0x91206728147b8db1b874221ed6167056ef2c485bdfc1c9dda5aad6c1db9b8f25",
"0x8f9a81c5b089f1026cccd3a7730a3cf19be9b848b90ec0f9e832ffe9ad3aa224",
"0x95d8d8d0a5264c2e7f2703b89f14e1241819c65472468c3be07e241abfe188e3",
"0x7dcffd27663d31b229dcb6d210bf25d8e69df9849421aa5aed5e1c55901dae7f",
"0x1eb52463d7707534171ec2089a142d1a35db55a424fab23e28d0b49aabc268e8",
"0xc13df22b00c1affe918b91cc06c58b09e51ed2a526a6d6acef22e8cf1dac71e3",
"0x9a27fa2c3f4e88f4c23ce89186134f8b60608a53f023421e0c38fe7e430931b3",
"0x3619babe1a1eb8d109b4fe1dd8aa72452b0e32e2e3d774c21aaac1cdcd565a55"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


