class Block {

    constructor() {
        this.index = 0;
        this.previousHash = '';
        this.hash = '';
        this.transactions = [];
    }
}


module.exports = Block;