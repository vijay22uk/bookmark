// init server
var express = require("express");
var app = express();
var port = 8080;
var parser = require('body-parser');
require('./database.js');




// serving public files
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.get('/',function(req,res) {
    res.render('index.ejs',{});
})
app.listen(port);
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
require('./routes/books.js')(app);
console.log("Running ..... at "+ port);