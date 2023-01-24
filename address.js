

const bitcoin = require('bitcoinjs-lib');

const network = {
    messagePrefix: '\x16Neoxa Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x7a,
    wif: 0x70,
    coin: 'neoxa'
}

var hdNode = bip32.fromSeed(Buffer.from(seed), network);
const path =  "m/44'/1668'/0'" ;
const childNode = hdNode.derivePath(path);

const p2shAddress = bitcoin.payments.p2pkh({ pubkey: childNode.publicKey, network: network }).address;
const bitcoinAddress = bitcoin.address.toBase58Check(bitcoin.crypto.hash160(childNode.publicKey), network.pubKeyHash);

const pubkey = Buffer.from(childNode.publicKey, 'hex' );
const { p2pkhAddress } = bitcoin.payments.p2pkh({ pubkey });