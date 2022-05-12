/* class 1 utiliza un arreglo para almacenar una colección de datos

Lo siguiente es un ejemplo de la implementación más simple de una estructura de datos de un arreglo. Esto se conoce como un arreglo unidimensional, lo que significa que sólo tiene un nivel, o que no tiene otros arreglos anidados dentro de él. Observa que contiene booleanos, cadenas y números, entre otros tipos de datos válidos de JavaScript:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

La llamada console.log muestra 7.

Todos los arreglos tienen una propiedad de longitud, que como se muestra arriba, se puede acceder muy fácilmente con la sintaxis Array.length. A continuación se puede ver una implementación más compleja de un arreglo. Esto se conoce como un arreglo multidimensional, o un arreglo que contiene otros arreglos. Observa que este arreglo también contiene objetos JavaScript, que examinaremos muy de cerca en la siguiente sección, pero por ahora, todo lo que necesitas saber es que los arreglos también son capaces de almacenar objetos complejos.

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

---------------------------------------------------------------
ejercicio;

Hemos definido una variable llamada yourArray. Completa la sentencia asignando un arreglo de al menos 5 elementos de longitud a la variable yourArray. Tu arreglo debe contener al menos una cadena (string), un número (number) y un booleano (boolean).

let yourArray; // Cambia esta línea


solución;

let yourArray = [
  "moko",
  12,
  true,
  "loco",
  9
]; // Cambia esta línea

*/
/* class 2 accede a los contenidos de u arreglo utilizando la notación de corchetes

La principal característica de cualquier estructura de datos es, por supuesto, la habilidad no solo de guardar datos, sino también de ser capaz de recuperar esos datos cuando le es requerido. Entonces, ahora que hemos aprendido como crear un arreglo, comencemos a pensar en cómo podemos acceder a la información de ese arreglo.

Cuando definimos un arreglo simple como el que se ve a continuación, hay 3 elementos en él:

let ourArray = ["a", "b", "c"];

En un arreglo, cada elemento tiene un índice. Este índice funciona como la posición de ese elemento en el arreglo y es como puedes referenciarlo. Sin embargo, es importante tener en cuenta, que los arreglos en JavaScript son indexados en base cero, es decir que el primer elemento de un arreglo está en la posición cero, no en la uno. Para recuperar un elemento de un arreglo podemos encerrar un índice entre corchetes y agregarlo al final de este, o más comúnmente, a una variable que hace referencia a un objeto tipo arreglo. Esto es conocido como notación de corchetes. Por ejemplo, si queremos recuperar la a de ourArray y asignársela a una variable, podemos hacerlo con el siguiente código:

let ourVariable = ourArray[0];

Ahora ourVariable tiene el valor de a.

Además de acceder al valor asociado con un índice, también puedes establecer un índice a un valor usando la misma notación:

ourArray[1] = "not b anymore";

Utilizando la notación de corchetes, ahora hemos restablecido el elemento en el índice 1 de la cadena b, a not b anymore. Ahora ourArray es ["a", "not b anymore", "c"].

-------------------------------------------------------------------
ejercicio;

Para completar este desafío, establece la segunda posición (índice 1) de myArray a cualquier cosa que quieras, además de la letra b.

let myArray = ["a", "b", "c", "d"];
// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea
console.log(myArray);



solución:

let myArray = ["a", "b", "c", "d"];
// Cambia solo el código debajo de esta línea
myArray[1] = "ahora es bb";
// Cambia solo el código encima de esta línea
console.log(myArray);

*/
/* class 3 agrega elementos a un arreglo con push() y unshift()

La longitud de un arreglo, así como los tipos de datos que puede contener, no es fija. Los arreglos pueden ser definidos con la cantidad de elementos que se desee, y dichos elementos pueden ser agregados o removidos con el tiempo; en otras palabras, los arreglos son mutables. En este desafío, veremos dos métodos con los que podemos modificar un arreglo: Array.push() y Array.unshift().

Ambos métodos toman uno o más elementos como parámetros y los agregan al arreglo que hizo la llamada; el método push() agrega los elementos al final del arreglo, mientras que unshift() los agrega al inicio. Considera lo siguiente:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');

romanNumerals tendrá el valor ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);

romanNumerals tendrá el valor ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Ten en cuenta que también podemos pasar variables, que nos permiten una mayor flexibilidad en la modificación dinámica de los datos de nuestro arreglo

--------------------------------------------------------------------
ejercicio;

Hemos definido una función, mixedNumbers, a la cual le estamos pasando un arreglo como argumento. Modifica la función utilizando push() y unshift() para agregar 'I', 2, 'three' al principio del arreglo y 7, 'VIII', 9 al final, de tal modo que el arreglo devuelto contenga las representaciones de los números del 1 al 9 en orden.

function mixedNumbers(arr) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


solución;

function mixedNumbers(arr) {
  // Cambia solo el código debajo de esta línea
  let mixedNumbers = arr;

  mixedNumbers.push(7, 'VIII', 9);
  mixedNumbers.unshift('I', 2, 'three');
  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

*/
/* class 4 elimina elementos de un arreglo con pop() y shift()

Tanto push() como unshift() tienen métodos correspondientes que son casi opuestos funcionales: pop() y shift(). Como ya habrás adivinado, en lugar de agregar, pop() elimina un elemento al final de un arreglo, mientras que shift() elimina un elemento al principio. La diferencia clave entre pop() y shift() y sus primos push() y unshift(), es que ninguno de los dos métodos toma parámetros, y cada uno sólo permite modificar un arreglo por un solo elemento a la vez.

Echemos un vistazo:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();

greetings tendrá el valor ['whats up?', 'hello'].

greetings.shift();

greetings tendrá el valor ['hello'].

También podemos devolver el valor del elemento eliminado con cualquiera de los dos métodos así:

let popped = greetings.pop();

greetings tendrá el valor [] y popped tendría el valor hello.

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
/* */