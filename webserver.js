var http = require('http');

var server = http.createServer(function (req, res) {      
    res.writeHead(200, { 'Content-Type': 'text/html' });  
    res.write('<html><body><h1>Hello, world!</h1></body></html>');
    res.end();
});

server.listen(8000);

console.log('Running server...')
