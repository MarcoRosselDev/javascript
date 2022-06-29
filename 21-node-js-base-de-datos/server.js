const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/', function (request, response) {
    response.send('Hola desde get');
});

// app.use('/', function(request, response){
//     response.send('Hola!');
// });

app.listen(3000);
console.log('La aplicación esta escuchando en el puerto 3000');