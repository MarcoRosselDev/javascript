//junio 2016
//metodo include se trabaja con arreglos o strings, nos permite saber si hay un elemento x dentro de un string.

let numeros = [1, 2, 3, 4, 5, 9];

if (numeros.includes(7)) {
    console.log('si se encuentra el numero 7');
} else {
    console.log('no se encuentra el numero 7');
}

//si aplico 7 imprime else si aplico 5 imprime if.

//---------------------------------------------------------------------
//elevar a la potencia.

let base = 4;
let exponente = 3;
let resultado = base ** exponente;

console.log(resultado);
//imprime 64