// init server
var express = require("express");
var app = express();
var port = 8080;
// serving public files
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(port);
console.log("Running ..... at "+ port);