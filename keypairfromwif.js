

const { ECPair } = require('ecpair');


const wif = childNode.toWIF();
const keyPair = ECPair.fromWIF(wif);

const privateKey = keyPair.privateKey();
const publicKey = keyPair.publicKey();