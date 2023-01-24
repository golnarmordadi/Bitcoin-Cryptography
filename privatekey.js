const bip32 = require("bip32");
const bip39 = require("bip39");
const HDKey = require("hdkey");

const mnemonic = 'arrive mixture refuse loud people robot dolphin scissors lift curve better demand';

const versions = {
    bip32: { private: 76066276, public: 76067358 },
    bip44: 1668,
    private: 112,
    public: 38,
}

const phrase = mnemonic ? mnemonic : bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(phrase);

var hdNode = bip32.fromSeed(Buffer.from(seed), network);
const path =  "m/44'/1668'/0'" ;
const childNode = hdNode.derivePath(path);

const hdKey = HDKey.fromMasterSeed(Buffer.from(seed, "hex"), network.bip32);
const privateKey = hdKey.privateKey;
const privateExtendedKey = hdKey.privateExtendedKey;

const wif = childNode.toWIF();
const base58PrivateKey = childNode.toBase58();
const hexOfPrivateKey = Buffer.from(childNode.privateKey).toString('hex');



