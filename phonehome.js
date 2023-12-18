const http = require('http');

//ensure
let port = process.argv[2] ?? 8080;

console.log("create server on port",port);
http.createServer(function(req, res) {
    console.log(`connection from ${req.connection.remoteAddress} recieved!`);
    res.writeHead(200);
    res.end('Hello from home!');
}).listen(port);