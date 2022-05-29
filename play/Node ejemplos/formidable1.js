//Crea un server local con el modulo htpp, con un formulario que recibe un archivo e informa si se pudo cargar, el formulario se crea usando el modulo formidable

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
//const { resolveSoa } = require('dns');

http.createServer(function (req, res){
    if (req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
            res.write('File uploaded');
            res.end()
            
        });

    } else {
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');

        return res.end();

    }

}).listen(8080);