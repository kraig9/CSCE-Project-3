var http = require('http');
var html = require('index.html')
//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);