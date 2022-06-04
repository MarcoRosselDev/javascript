console.log('probando el javaScript');

//vemos los 3 tipos de variables en js

let name = 'marco';
const lastName = 'rossel';
var noUsar = true;

// ¿ cuales son las diferencias ?

//let = permitir
//lo que tiene let es que puedo reasignarle el valor 

//const = contante
//en el caso de const no se puede reasignar una variable. nos lanzaria un error en consila.

//-------------------------------------
/*lo importante de todo esto es el scope.
con let puedo tener otra variable con el mismo nombre dentro de una función, if, else, o cualquier otro tipo de bucle.

con const la variable reserva su nombre y no se puede alterar aunque estemos dentro de otra función.

y con var pordemos acceder a esta variable desde cualquier sitio. lo que lo convierte en un peligro para trabajar, por lo que es se deve usar con mucho cuidado.

por que es pelibroso var ?
por que cuando el codigo escala "se convierte en un archivo extenso", podemos por error asignarle el mismo nombre a otra variable, y encontrar el error es dificil por que en consola no nos dice que hay algun error, osea que sigue todo normal pero en realidad no son los resultados esperados.
*/
//-------------------------------------
/*mutabilidad.

resulra que los arrays "cadenas de texto", no se pueden mutar, osea que puedo editarlo pero dentro de otra variable con otro nombre, pero el original se queda ahi:

cons name = 'marquito';
neme = 'lusho';

console.log(name);
//me imprime marquito.

...................................
pero los objetos, arreglos y funciones son mutables.
que quiere decir esto ?

que si declaro un objeto bacio y luego lo modifico este si lo guarda.
por ejempli:

const lista = [];
lista.push(1);

console.log(lista);
me imprime [1]

...................................
si quiero acceder a un determinado dato de un arreglo, aplico [] y dentro aplico el numero donde se ubica dicho dato comenzando a contar desde el 0.

const lista = [];
lista.push(24);

console.log(lista[0]);
//me imprimira 24 en consola.

...................................

se puede iterar una lista con .forEach()... a la que tenemos que pasarle una función para que ejecute las iteraciones
se puede transformar una lista con .map()

...................................

otro tipo de estructura de datos super importante son los objetos
en lugar de usar los [] 'corchetes', utilizamos las llaves '{}' 
los que te permite tener una estructura de datos con una palabra clave y su valor 'key and value'.
la sintaxis seria asi:

const persona = {
    name: 'marco',
    age: 29,
    lastName: 'rossel',
    links: ['ejemplo.com', 'ejemplo2.cl'],
    humano: true
}

podemos incluir todos los tipos de datos vistos asta ahora como booleanos, nulls, arrays, objetos, funciones, numeros.etc...
...ahora para acceder a los valores tenemos que usar las palabras clave o llaves.

console.log(persona.name);

...para acceder en el caso de un arreglo con los corchetes:

console.log(persona.links[0]);

...................................

para acceder a un valor de forma dinamica por ejemplo
tenemos una key asignada por una const lo ariamos de la siguiente forma;

const apellido = 'lastName'

console.log(persona[apellido]);

*/

const persona = {
    name: 'marco',
    age: 29,
    lastName: 'rossel',
    links: ['ejemplo.com', 'ejemplo2.cl'],
    humano: true
}

const apellido = 'lastName'

console.log(persona[apellido]);

//imprime rossel