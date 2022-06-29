const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (request, response) {
    console.log(request.header);
    response.header({
        "custom-header": "Nuestro valor personalizado"
    }); //le damos cabezeras especificas al cliente
    response.send('Hola desde get');
});

router.delete('/message', function (request, response) {
    console.log(request.query);
    console.log(request.body);
    response.send('Mensaje ' + request.body.text + 'añadido correctamente');
});

router.put('/', function (request, response) {
    console.log(request.body);
    response.send('Hola desde put');
});

router.app
// app.use('/', function(request, response){
//     response.send('Hola!');
// });

app.listen(3000);
console.log('La aplicación esta escuchando en el puerto 3000');