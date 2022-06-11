// veremos la diferencia de la transformación con .map y una for.

const letras = ['a', 'b', 'c'];

// const newArray = [];

/*
for (let i = 0; i < letras.length; i++) {
    const elemento = letras[i];
    newArray.push(elemento + '++');
}
console.log(newArray);

//solución en consola : [ 'a++', 'b++', 'c++' ]
//importante notar que nunca se modifico el array original "letras", si no que se creo uno nuevo.
//si imprimimos letras en consola no tendra variaciones.

//ahora con .map aremos todo esto en una sola linea

*/

const newArray = letras.map(elemento => elemento + '++');

console.log(newArray);
console.log(letras);

//trdultado en consola:

// [ 'a++', 'b++', 'c++' ]
// [ 'a', 'b', 'c' ]

//es exactamente lo mismo que denante pero simplificado.
//no se modifico el array original y el nuevo tiene otro nombre asignado para ser usado en lo que sea.
//--------------------------------------------------
const array = [2, 4, 5, 6];

function solution(array) {
    // Tu código aquí 👈 
   const newArray = array.map(elemento => elemento * 2);
   return newArray
}; 

console.log(solution(array));


const array1 = ['a', 'bb', 'ccc']; 
const rta = array1.map(item => item.length);

console.log(rta);