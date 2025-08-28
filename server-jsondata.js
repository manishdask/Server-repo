const http = require ('http');

const PORT = 4000;

// create a server
const server = http.createServer((req,res) => {
    if (req.url === '/' && req.method === 'GET') {
         
        // home route

        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end ('hello , this my first server') }

        else if ( req.url === '/api' && req.method === 'GET') {

            // API route 
            const data = {
                name: "Manish",
                role: "Intern",
                stack: "FulL-Stack"

        };
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end ( JSON.stringify(data));
            
            };
            
            
}); // function closed

server.listen( PORT , () => {
    console.log( ' Server is running at http://localhost:${PORT}');
});
