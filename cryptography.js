const bitcore = require("bitcore-lib");
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
const HDKey = require("hdkey");
var mnemonic = require('bitcore-mnemonic');

const mnemonic = 'arrive mixture refuse loud people robot dolphin scissors lift curve better demand';

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

const versions = {
    bip32: { private: 76066276, public: 76067358 },
    bip44: 1668,
    private: 112,
    public: 38,
}

bitcore.Networks.add(network);

const phrase = mnemonic ? mnemonic : bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(phrase);

var hdNode = bip32.fromSeed(Buffer.from(seed), network);
const path =  "m/44'/1668'/0'" ;
const node1 = hdNode.derivePath(path);

const hdKey = HDKey.fromMasterSeed(Buffer.from(seed, "hex"), network.bip32);
const privateKey = hdKey.privateKey;
const privateExtendedKey = hdKey.privateExtendedKey;

const wif = node1.toWIF();
const base58PrivateKey = node1.toBase58();
const hexOfPrivateKey = Buffer.from(node1.privateKey).toString('hex');


