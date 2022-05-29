/*
    //Crea un server con el modulo http, con un formulario creado con el modulo dormidable, que recibe un archivo, y espera un submit
    //luego lo mueve a la ubicacion designada en newpath usando el modulo filesystem
*/

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const { resolveSoa } = require('dns');

http.createServer(function (req, res){
    if (req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/Users/EXO/Desktop/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err){
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end()
            });
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