const express = require('express');
const app = express();

let Block = require('./block');
let Blockchain = require('./blockChain');
let Transaction = require('./transaction');

app.get('/', function(req, res) {
    res.send('Hello API!');
});

app.get('/blockchain', function(req, res) {

    let transaction = new Transaction('Mary', 'Jerry', 100);
    let genesisBlock = new Block();
    let blockchain = new Blockchain(genesisBlock);

    let block = blockchain.getNextBlock([transaction]);
    blockchain.addBlock(block);

    let second_transaction = new Transaction('Jerry', 'Jason', 10);
    let block2 = blockchain.getNextBlock([second_transaction]);
    blockchain.addBlock(block2);

    res.json(blockchain);
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});

/* 

console.log(blockchain); */