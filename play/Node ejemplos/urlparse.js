/*
    Crea un server local, usa el modulo url para parsear la url
*/

var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.anio + " " + q.mes;
    console.log(q)
    res.end(txt);
}).listen(8080);