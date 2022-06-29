const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/', function (request, response) {
    response.send('Hola desde get');
});

router.delete('/', function (request, response) {
    console.log(request.body);
    response.send('Hola desde delete');
});

router.put('/', function (request, response) {
    console.log(request.body);
    response.send('Hola desde put');
});

// app.use('/', function(request, response){
//     response.send('Hola!');
// });

app.listen(3000);
console.log('La aplicación esta escuchando en el puerto 3000');