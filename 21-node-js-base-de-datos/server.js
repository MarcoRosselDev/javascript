const express = require('express');

var app = express();

app.use('/', function(request, response){
    response.send('Hola!');
});

app.listen(3000);
console.log('La aplicación esta escuchando en el puerto 3000');