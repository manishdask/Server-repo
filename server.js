const http = require('http');

const PORT = 3000;

// create a server

const server = http.createServer((req, res ) => {
    res.writeHead(200, { 'content-Type': 'text/plain'});
    res.end (' hello, this is my first server');

});

//start the server
server.listen(PORT, () => {
    console.log('server is  running at http://localhost:${PORT}')
});
 