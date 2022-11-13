
const http = require('http');
const requestHandler = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hi, world');
};
const server = http.createServer(requestHandler);
server.listen(8000);