// init server
var express = require("express");
var app = express();
var port = 8080;
var parser = require('body-parser');
var React = require("react");
require("babel-core/register");
require('./database.js');
var Book = require('./models/book.js');
var ReactDOMServer = require('react-dom/server');



// serving public files
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.get('/', function (req, res) {
    var application =
        React.createFactory(require('./../components/bookmarklist.js'));
         Book.find(function (err, doc) {
        var generated = ReactDOMServer.renderToString(application({
            list: doc
        }))
        res.render('index.ejs',{reactOutput:generated});
    })

})
app.listen(port);
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
require('./routes/books.js')(app);
console.log("Running ..... at " + port);