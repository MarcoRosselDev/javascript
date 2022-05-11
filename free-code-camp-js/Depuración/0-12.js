DEPUTACION

/*La depuración es el proceso de revisar tu código, encontrando 
cualquier problema, y arreglándolo.


Los problemas en el código generalmente vienen en tres formas: errores 
de sintaxis que impiden que tu programa se ejecute, errores de tiempo de 
ejecución donde tu código tiene un comportamiento inesperado, o errores 
lógicos donde tu código no hace lo que pretendes.

En este curso, aprenderás como usar la consola de JavaScript para 
depurar programas y prevenir errores comunes antes de que ocurran. */

/* class 1 usa la consola de js para comprobar el valor de una variable

Tanto Chrome como Firefox tienen excelentes consolas de JavaScript, también conocidas como DevTools, para depurar tu JavaScript.

Puedes encontrar las herramientas para desarrolladores en el menú de Chrome o la consola web en el menú de Firefox. Si utilizas otro navegador, o un teléfono móvil, te recomendamos encarecidamente que cambies a Firefox o Chrome de escritorio.

El método console.log(), que "imprime" la salida de lo que está dentro de sus paréntesis a la consola, será probablemente la herramienta de depuración más útil. Colocarlo en puntos estratégicos de tu código puede mostrarte los valores intermedios de las variables. Es una buena práctica tener una idea de lo que debería ser la salida antes de ver lo que es. Tener puntos de control para ver el estado de tus cálculos a lo largo de tu código ayudará a acotar dónde está el problema.

Aquí hay un ejemplo para imprimir la cadena Hello world! en la consola:

console.log('Hello world!');

---------------------------------------------------------------------
ejercicio;

Utiliza el método console.log() para imprimir el valor de la variable a donde se indica en el código.

let a = 5;
let b = 1;
a++;
// Cambia solo el código debajo de esta línea


let sumAB = a + b;
console.log(sumAB);


solución;

let a = 5;
let b = 1;
a++;
// Cambia solo el código debajo de esta línea
console.log(a);

let sumAB = a + b;
console.log(sumAB);

*/
/* class 2 entendiendo las diferencias entre al consola de fcc y la del navegador

Habrás notado que algunos desafíos de freeCodeCamp tienen su propia consola. Esta consola se comporta un poco diferente a la consola del navegador.

Hay muchos métodos para usar con console para mostrar mensajes. log, warn y clear para nombrar algunos. La consola de freeCodeCamp solamente mostrará mensajes de tipo log, mientras que la consola del navegador mostrará todos los mensajes. Cuando hagas cambios a tu código, se ejecutara automáticamente y mostrará los registros. La consola de freeCodeCamp se borra cada vez que ejecutas tu código.

--------------------------------------------------------------------
ejercicio:

Primero, abre tu consola del navegador para que puedas ver los registros. Para hacer eso, puedes hacer clic derecho en la barra de navegación superior de freeCodeCamp y seleccionar inspect en la mayoría de los navegadores. Luego busca la pestaña console en la ventana que se abra.

Después, utiliza console.log para mostrar la variable output. Ve ambas consolas para ver los registros. Finalmente, utiliza console.clear luego de tu registro para borrar la consola del navegador. Ve la diferencia entre las dos consolas.

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";


solución;

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

*/
/* class 3 utiliza typeof para comprobar el tipo de una variable

Puedes utilizar typeof para comprobar la estructura de datos, o tipo, de una variable. Esto es útil en la depuración cuando se trabaja con múltiples tipos de datos. Si crees que estás sumando dos números, pero uno es en realidad una cadena, los resultados pueden ser inesperados. Los errores de tipo pueden estar al acecho en los cálculos o en las llamadas a funciones. Ten cuidado especialmente cuando accedas y trabajes con datos externos en forma de objeto de JavaScript Object Notation (JSON).

Aquí hay algunos ejemplos que utilizan typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
En orden, la consola mostrará las cadenas string, number, object, y object.

JavaScript reconoce siete tipos de datos primitivos (inmutables): Boolean, Null, Undefined, Number, String, Symbol (nuevo con ES6), y BigInt (nuevo con ES2020), y un tipo para elementos mutables: Object. Ten en cuenta que en JavaScript, los arreglos son técnicamente un tipo de objeto.

------------------------------------------------------------------
ejercicio:

agrega dos sentencias console.log() para comprobar el typeof de cada 
una de las dos variables seven y three en el código.

let seven = 7;
let three = "3";
console.log(seven + three);
// Cambia solo el código debajo de esta línea


solución;

let seven = 7;
let three = "3";
console.log(seven + three);
// Cambia solo el código debajo de esta línea

console.log(typeof seven);
console.log(typeof three);

*/
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */