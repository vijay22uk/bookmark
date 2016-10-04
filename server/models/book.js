var mongoose = require('mongoose');

var bookSchema ={
    name :String,
    bType :String,
    desc :String,
    completePercentage :Number,
    currentpage : Number 
};

var book = mongoose.model('Book',bookSchema,'Books');

module.exports = book;