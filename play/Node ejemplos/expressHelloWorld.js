var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('HOLA MUNDO!');
})

app.listen(3000, function(){
    console.log('Aplicacion de ejemplo escuchando el puerto 3000');
});