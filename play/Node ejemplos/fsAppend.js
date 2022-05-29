//Agrega informacion a un txt con el modulo FileSystem
var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Seminario JS', function (err){
    if (err) throw err;
    console.log('Salvado');
});