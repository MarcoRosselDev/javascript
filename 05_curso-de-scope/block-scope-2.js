const scope = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
scope();
// imprime 10 veces 10.
const scope2 = () => {
    for (let i = 0; i < 10; i++) { //cambiamos var por let y se soluciona el problema
        setTimeout(() => {
            console.log(i);
        },3000);//los 3000 son 3 segundo que tarde antes de aplicar el bloque.(no se para que puede servir pero aqui quedo.)
    }
}
scope2();

