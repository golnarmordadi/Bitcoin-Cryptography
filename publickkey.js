
const bip32 = require("bip32");
const bip39 = require("bip39");

const seed = bip39.mnemonicToSeedSync(phrase);

var hdNode = bip32.fromSeed(Buffer.from(seed), network);
const path =  "m/44'/1668'/0'" ;
const childNode = hdNode.derivePath(path);


const publickKeyBuffer = childNode.publicKey;
const publicKey =  childNode.publicKey.toString('hex');