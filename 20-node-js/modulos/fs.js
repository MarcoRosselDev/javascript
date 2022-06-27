const fs = require('fs');

// no nesecito nada por que require fs biene por defecto al instalar node en el procesador.

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data);
    })
}

leer(__dirname + '/archivo.txt');

// nos imprime un buffer y eso es algo muy complicado que se vera en su momento :       <Buffer 48 6f 6c 61 2c 20 79 6f 20 73 6f 79 20 75 6e 20 61 72 63 68 69 76 6f 20 64 65 20 70 72 75 65 62 61 0d 0a 0d 0a 79 20 74 65 6e 67 6f 20 6d 75 63 68 61 ... 10 more bytes>