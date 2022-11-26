const etag = require('etag');
const http = require('http');
const url = require('url');

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;

    const query = url.parse(req.url, true).query;
    const name = (query.name)? query.name : 'Node.js';
    const body = `Hello, ${name}!`;

    resp.setHeader('Content-Type', 'text/plain');
    resp.setHeader('ETag', etag(body))
    resp.write(body);
    resp.end();
});

server.listen(3_000, '127.0.0.1', () => {
    console.log('Server running...');
});