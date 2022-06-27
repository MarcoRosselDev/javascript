function hola(nombre, miCallback) {
    // console.log('soy una función asincrona');
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 2000)
}

function adios (nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    },1000 )
};

console.log('Iniciando proceso...');
// soyAsincrona('Marco', function () {
//     adios('Marco', function(){
//         console.log('Finalizando proceso...');
//     })
// });

hola('Marco', function () {});
adios('Marco', function () {});