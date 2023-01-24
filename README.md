<blockquote>
<p dir="auto">
The purpose of this document is to show how to create key pairs for Bitcoin Like blockchains. This is just a practical document. This document does not explain cryptography concepts and suppose the reader knows about it.
</p>
</blockquote>

# What is Cryptography

Cryptography is the study and practice of sending secure, encrypted messages or data between two or more parties. The sender “encrypts” the message, which obscures its content to a third party, and the receiver “decrypts” the message, making it legible again.  

### Why is cryptography important?
Because Bitcoin is just code, what’s to stop a person from making and spending multiple copies of their money? The solution is based on a well-known encryption arrangement known as public-private key encryption. 

### How Bitcoin does cryptography?
Bitcoin (as well as Ethereum and many other cryptocurrencies) uses a technology called public-private key encryption. This allows them to be “trustless” – and makes secure transactions between strangers possible without a “trusted intermediary” like a bank or Paypal in the middle.

In fact Bitcoin network issues keypairs for all users. So every person has a privateKey and transactions firstly need to sign (offline) and then send to the network.
From privatekey which it cryptographically generates a public key. The method called hashing. So public and private keys are linked.


```
PublicKey is generated from privateKey but the reverse is not possible.
```

A peer-to-peer network that uses cryptographic methods to verify the authenticity of transactions.

# Libraries

### BIP32
Address path (BIP32) defines how to derive private and public keys of a wallet from a binary master seed (m) and an ordered set of indices. BIP32 derivation path: m / 0' / 0' /k' BIP32 extended private key represents the extended private key derived from the derivation path.

### BIP39
The Bitcoin Improvement Proposal number 39 (BIP39) is an implementation design that describes how cryptocurrency wallets generate mnemonic phrases and convert them into binary seeds, which can be used to create deterministic wallets.

### HDKey
Hierarchical deterministic (HD) keys are a type of deterministic bitcoin wallet derived from a known seed, that allow for the creation of child keys from the parent key.

### WIF
Wallet Import Format (WIF) is a standardized method for displaying Bitcoin private keys using the Base58Check encoding scheme. WIF format was standardized in order to allow all Bitcoin wallets to import and export private keys.

### Base58
Base58 is a group of encoding/decoding schemes used to switch data between binary format (hexdecimal) and alphanumeric text format (ASCII). Base58 enables data compressing.

### network
Bitcoin library separate tokens using their network parameters. Every parameter should find from the source code OR for wellknown blockchains that can be find from the Bitcoin documnts. When network parameters completely be ready, it should add to the Bitcoin Library networks with coding.

### ECPair
A library for managing SECP256k1 keypairs


