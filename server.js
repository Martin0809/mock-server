var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.use(express.static('/'));

http.listen('3000', function() {
  console.log('mock-server is running on 3000!');
});

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.get(/^(\/\w+)+$/, function(req, res) {
  console.log(req.path)
  var path = './mock' + req.path + '.js';
  res.send(require(path));
});
