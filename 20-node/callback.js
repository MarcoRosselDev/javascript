function soyAsincrona() {
    console.log('soy una función asincrona');
    setTimeout(function () {
        console.log('Estoy siendo asincrono')
    }, 1000)
}
console.log('Iniciando proceso...')
soyAsincrona();
console.log('Finalizando proceso...')