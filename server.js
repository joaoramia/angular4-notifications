var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var server = app.listen(Number(process.env.PORT) || 8080, function () {
  console.log('App listening on port 8080!');
});