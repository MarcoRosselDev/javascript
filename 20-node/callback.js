function soyAsincrona(miCallback) {
    console.log('soy una función asincrona');
    setTimeout(function () {
        console.log('Estoy siendo asincrono')
        miCallback();
    }, 1000)
}
console.log('Iniciando proceso...');
soyAsincrona(function () {
    console.log('Finalizando proceso...');
});