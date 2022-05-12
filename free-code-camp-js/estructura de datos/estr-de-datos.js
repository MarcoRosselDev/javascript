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
/* */
/* */