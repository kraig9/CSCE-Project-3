var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  console.log('Hello World!'); //write a response to the client
  //end the response
}).listen(8080);