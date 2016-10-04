module.exports = function (app) {
    var Book = require('../models/book.js');
    app.route('/api/books')
    .get(function(req,res) {
        Book.find(function (err,doc) {
            res.send(doc);
        })
        
    })
    .post(function(req,res) {
        var _book = req.body;
        var book = new Book(_book);
        book.save(function (err,doc) {
            res.status(300).send();
        });
    })
}
