// veremos la diferencia de la transformación con .map y una for.

const letras = ['a', 'b', 'c'];

const newArray = [];

for (let i = 0; i < letras.length; i++) {
    const elemento = letras[i];
    newArray.push(elemento + '++');
}
console.log(newArray);

//solución en consola : [ 'a++', 'b++', 'c++' ]
