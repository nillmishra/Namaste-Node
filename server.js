const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/fast') {
        return res.end('This was fast!');
    }
    res.end('Hello World');
}); 
server.listen(3000)