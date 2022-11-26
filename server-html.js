const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, resp) => {
    const fileName = (req.url === '/') ? '/index.html' : req.url;
    const filePath = path.resolve('.' + fileName);

    if (req.method === 'GET') {
        if (fs.existsSync(filePath)) {
            resp.statusCode = 200;
            resp.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(resp);
        }
        else {
            resp.statusCode = 404;
            resp.setHeader('Content-Type', 'text/html');
            resp.end('<!DOCTYPE html><html><body><h1>404 Not Found</h1></body></html>');
        }
    }
    else {
        resp.statusCode = 405;
        resp.end();
    }
});

server.listen(3_000, '127.0.0.1', () => {
    console.log('Server running...');
});