/* class-1 compara el alcance de las palabras clave "var" y "let"

si no estás familliarizado con let, echar un vistazo a este desafío.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords

cuando declara una variable con la palabra var, esta es declarada 
globalmente o localmente sí es declarada dentro de una función.

la palabra let se comporta de forma similar, pero con algunas 
características adicionales.
cuando declara una variable con la palabra let dentro de un blocke,
una declaración o expresión. 
su alcance está limitado a ese blocke, declaración o expresión.

por ejemplo;

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

aquí la consola muestra los valores [0, 1, 2] y 3.

con la palabra var, i es declarada globalmente.
así, cuando i++ se ejecuta, la variable global se actualiza.
este codigo es similar al siguiente:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

aquí la consola muestra los valores [0, 1, 2] y 3.

este conmportamiento causará problemas si crea una función y la 
almacena para su uso posterior dentro de un bucle for que usa la 
variable i.
esto se sebe a que la función guardada siempre se referirá al valor de
la variable global i actualizada.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

aquí la consola muestra el valor 3.

como puedes ver, printNumTwo() imprime 3 y no 2.
esto es porque el valor asignado a i fue actualizado y función 
prontNumTwo() devuelve el global de i y no el valor que tenía i cuando
la función fue creada en el bucle for.
la palabra let no sigue este comportamiento:

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);

aquí la consola muestra el valor 2 y el error que i is not defined.
i no está definido, porque no ha sido declarado en el ámbito global.
solo ha sido declarada dentro de la sentencia de bucle for.
prontNumTwo() devolvió el valor correcto, porque tres variables
diferentes i con valores únicos (0. 1 y 2) fueron creados por la 
palabra clave let dentro de la sentencia del bucle.

----------------------------------------------------------------
ejercicio

Corrige el código para que la variable i, declarada en la sentencia
if sea una variable separada de la variable i, declarada en la 
primera línea de la función. Asegúrese de no utilizar la palabra 
clave var en ninguna parte de su código.

Este ejercicio está diseñado para ilustrar la diferencia entre las 
palabras claves var y let asignar un ámbito a la variable declarada. 
Cuando programas una función similar a la que se usa en este 
ejercicio, es a menudo mejor usar diferentes nombres de variables }
para evitar confusiones.

function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

solución;

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

*/
/* class 2 muta un arreglo declarado con const

si no estás familiarizado con const, echa un vistazo a este desafío

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword

la declaración const tiene muchos casos de uso, en el javascript
moderno.
algunos desarrolladores prefieren asignar todas sus variables 
utilizando const por defecto, a menos que sepan que nocesitarán 
reasignar el valor.
solo en ese caso, etilizan let.
sinembargo, es importante comprender que los objetos, asignados a una 
variable usando const siguen mutable.
usar la declaración const solo previene la reasignación del 
identificador de una variable.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);

s = [1, 2, 3] resultará en un error. 
el console.log mostrará el valor [5, 6, 45].
como puede ver, puedes mutar el objeto [5, 6, 7] en sí mismo y la 
variable s seguirá apuntado al arreglo alterado [5, 6, 45].
como todos los arreglos, los elementos del arreglo en s son mutables,
pero debido a que se utilizó const, no pudes utilizar el identificador
de la variable s para apuntar a un arreglo diferente usando el 
operador de asignación.

--------------------------------------------------------------------
ejercicio;

un arreglo es declarado como const s = [5, 7, 2].
cambia el arreglo a [2, 5, 7] utilizando varias asignaciones
de elementos.

const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea

  // Usar s = [2, 5, 7] sería inválido

  // Cambia solo el código encima de esta línea
}
editInPlace();

solución:

const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea
  if (true){
    s.splice(2);
    s.unshift(2); 
  }
  // Usar s = [2, 5, 7] sería inválido

  // Cambia solo el código encima de esta línea
}
editInPlace();

solución 2;

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

*/
/* class 3 prevenir la mutación del objeto

eomo se vio en el desafío anterior, la declaración const por sí sola
no protege la información de la mutación.
para asegurar que tu información no cambie, javaScript provee una
función Object.freeze para prevenir la mutación de datos.

cualquier intento de cambiar el objeto será rechazado, lanzando un
error si el script se ejecuta en modo estricto.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

las asignaciones obj.review y obj.newProp provocarán errores, porque
nuestro editor se ejecuta en modo estricto por defecto, y la consola
mostrará el valor { name: "FreeCodeCamp", review: "Awesome" }.

*/
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */