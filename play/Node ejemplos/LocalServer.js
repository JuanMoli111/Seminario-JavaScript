/*
    Crea un servidor local con http
*/

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Seminario Jss!');
}).listen(8080);