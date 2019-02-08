const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let Block = require('./block');
let Blockchain = require('./blockChain');
let Transaction = require('./transaction');

let transactions = [];

app.use(bodyParser.json());

let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);



app.get('/', function(req, res) {
    res.send('Hello API!');
});

app.get('/mine', function(req, res){
    let block = blockchain.getNextBlock(transactions);
    blockchain.addBlock(block);
    res.json(block);
});

app.post('/transactions', function(req, res) {

    let to = req.body.to;
    let from = req.body.from;
    let amount = req.body.amount;

    let transaction = new Transaction(from, to, amount);
    transactions.push(transaction);

    res.json(transactions);
});

app.get('/blockchain', function(req, res) {

    res.json(blockchain);
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});

/* 

console.log(blockchain); */