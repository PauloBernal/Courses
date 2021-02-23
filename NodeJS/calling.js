const http = require('http');
const colors = require('colors');

const handleServer = function(req, res){

    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write('<p>Not found</p>');
    res.end();
}
const server = http.createServer(handleServer);

server.listen(8080, 
    function(){

        console.log("Server on port".green + " " + "8080".cyan);
        setInterval(function(){console.log("Status: ".white + "SUCCESS".bgGreen)},500);
    });