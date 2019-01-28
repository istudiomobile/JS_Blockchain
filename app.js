let Block = require('./block');
let Blockchain = require('./blockChain');
let Transaction = require('./transaction');

let transaction = new Transaction('Mary', 'Jerry', 100);
let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

let block = blockchain.getNextBlock([transaction]);
blockchain.addBlock(block);

console.log(blockchain);