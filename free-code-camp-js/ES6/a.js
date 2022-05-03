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
/* */
/* */