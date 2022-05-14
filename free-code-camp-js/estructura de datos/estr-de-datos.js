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

---------------------------------------------------------------
ejercicio;

Hemos definido una función, popShift, el cual toma un arreglo como argumento y devuelve un nuevo arreglo. Modifica la función, usando pop() y shift(), para eliminar el primer y el último elemento del arreglo, y asignar los elementos eliminados a sus correspondientes variables, de modo que el arreglo que se devuelva contenga sus valores.

function popShift(arr) {
  let popped; // Cambia esta línea
  let shifted; // Cambia esta línea
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));



solución:

function popShift(arr) {
  let popped = arr.pop(); // Cambia esta línea
  let shifted = arr.shift()// Cambia esta línea
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

*/
/* class 5 elimina elementos usando splice()

Bien, ya hemos aprendido a eliminar elementos al principio y al final de los arreglos utilizando shift() y pop(), pero ¿qué pasa si queremos eliminar un elemento de alguna parte del medio? ¿O eliminar más de un elemento a la vez? Pues bien, ahí es donde entra splice(). splice() nos permite hacer precisamente eso: eliminar cualquier número de elementos consecutivos de cualquier parte de un arreglo.

splice() puede tomar hasta 3 parámetros, pero por ahora, nos centraremos sólo en los 2 primeros. Los primeros dos parámetros de splice() son enteros que representan índices, o posiciones, de elementos en el arreglo a la que splice() está siendo llamado. Y recuerda que los arreglos están indexados en cero, por lo que para indicar el primer elemento de un arreglo, usaríamos 0. El primer parámetro de splice() representa el índice del arreglo a partir del cual se empiezan a eliminar los elementos, mientras que el segundo parámetro indica el número de elementos a eliminar. Por ejemplo:

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

Aquí eliminamos 2 elementos, comenzando con el tercer elemento (en el índice 2). array tendrá el valor ['today', 'was', 'great'].

splice() no sólo modifica el arreglo que llama, sino que también devuelve un nuevo arreglo que contiene el valor de los elementos eliminados:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);

newArray tiene el valor ['really', 'happy'].

----------------------------------------------------------------------
ejercicio;

Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea
console.log(arr);


solución;

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea
arr.splice(0, 1);
arr.splice(3);
// Cambia solo el código encima de esta línea
console.log(arr);

*/
/* class 6 agrega elementos usando splice()

¿Recuerdas que en el último desafío mencionamos que splice() puede tomar hasta tres parámetros? Pues bien, puedes usar el tercer parámetro, compuesto por uno o varios elementos, para agregarlo al arreglo. Esto puede ser increíblemente útil para cambiar rápidamente un elemento, o un conjunto de elementos, por otro.

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);

La segunda ocurrencia de 12 es removida, y agregamos 13 y 14 en el mismo índice. El arreglo numbers ahora será [ 10, 11, 12, 13, 14, 15 ]

Aquí, comenzamos con un arreglo de números. A continuación, pasamos lo siguiente a splice(): El índice en el que empezar a borrar elementos (3), el número de elementos a borrar (1), y el resto de argumentos (13, 14) se insertarán a partir de ese mismo índice. Ten en cuenta que puede haber cualquier número de elementos (separados por comas) después de amountToDelete, cada uno de los cuales es insertado.

--------------------------------------------------------------------
ejercicio;

Hemos definido una función, htmlColorNames, que toma un arreglo de colores HTML como argumento. Modifica la función usando splice() para eliminar los dos primeros elementos del arreglo y agrega 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares.

function htmlColorNames(arr) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



solución;

function htmlColorNames(arr) {
  // Cambia solo el código debajo de esta línea
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

*/
/* class 7 copia elementos de un arreglo usando slice()

El siguiente método que cubriremos es slice(). En lugar de modificar un arreglo, slice() copia o extrae un número determinado de elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. slice() toma sólo 2 parámetros: el primero es el índice en el que se inicia la extracción, y el segundo es el índice en el que se detiene la extracción (la extracción se producirá hasta el índice, pero sin incluir el elemento en este índice). Considera esto:

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

todaysWeather tendrá el valor ['snow', 'sleet'], mientras que weatherConditions todavía tendrá ['rain', 'snow', 'sleet', 'hail', 'clear'].

En efecto, hemos creado un nuevo arreglo extrayendo elementos de un arreglo existente.

--------------------------------------------------------------------
ejercicio;

Hemos definido una función, forecast, que toma un arreglo como argumento. Modifica la función usando slice() para extraer información del arreglo de argumentos y devuelve un nuevo arreglo que contenga los elementos warm y sunny.

function forecast(arr) {
  // Cambia solo el código debajo de esta línea

  return arr;
}

// Cambia solo el código encima de esta línea
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


solución;

function forecast(arr) {
  // Cambia solo el código debajo de esta línea
  let asd = arr.slice(2, 4);
  return asd;
}

// Cambia solo el código encima de esta línea
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

*/
/* class 8 copia un arreglo con el operador de propagación

Mientras que slice() nos permite ser selectivos sobre qué elementos de un arreglo copiar, entre otras tareas útiles, el nuevo operador de propagación de ES6 nos permite copiar fácilmente todos los elementos de una arreglo, en orden, con una sintaxis simple y altamente legible. La sintaxis de propagación simplemente se ve así: ...

En la práctica, podemos utilizar el operador de propagación para copiar un arreglo de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

thatArray es igual a [true, true, undefined, false, null]. thisArray permanece sin cambios y thatArray contiene los mismos elementos que thisArray.

----------------------------------------------------------------------
ejercicio;

Hemos definido una función, copyMachine que toma arr (un arreglo) y num (un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por num copias de arr. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona del todo bien. Modifica la función usando sintaxis de propagación para que funcione correctamente (sugerencia: ¡otro método que ya hemos cubierto podría ser útil aquí!).

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea

    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));



solución;

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Cambia solo el código debajo de esta línea
    newArr.push([...arr]);
    // Cambia solo el código encima de esta línea
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

*/
/* class 9 combina arreglos con el operador de propagación

Otra gran ventaja del operador de propagación es la capacidad de combinar arreglos, o de insertar todos los elementos de un arreglo en otro, en cualquier índice. Con sintaxis más tradicionales, podemos concatenar arreglos, pero esto sólo nos permite combinar arreglos al final de uno, y al principio de otro. La sintaxis de propagación hace la siguiente operación extremadamente simple:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

thatArray tendrá el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando la sintaxis de propagación, acabamos de lograr una operación que habría sido más compleja y verbosa si hubiéramos usado métodos tradicionales.

-------------------------------------------------------------------
ejercicio;

Hemos definido una función spreadOut que devuelve la variable sentence. Modifica la función usando el operador de propagación para que devuelva el arreglo ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Cambia esta línea
  return sentence;
}

console.log(spreadOut());


solución;

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Cambia esta línea
  return sentence;
}

console.log(spreadOut());

*/
/* class 10 comprueba la presencia de un elemento con indexOf()

Ya que los arreglos pueden modificarse, o mutarse, en cualquier momento, no se puede garantizar dónde estará un dato concreto en un arreglo determinado, o si ese elemento sigue existiendo. Afortunadamente, JavaScript nos proporciona otro método incorporado, indexOf(), que nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo. indexOf() toma un elemento como parámetro, y cuando lo llama, devuelve la posición, o índice, de ese elemento, o -1 si el elemento no existe en el arreglo.

Por ejemplo:

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

indexOf('dates') devuelve -1, indexOf('oranges') devuelve 2, e 
indexOf('pears') devuelve 1 (el primer índice en el que existe cada elemento).

--------------------------------------------------------------------
ejercicio;

indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.

function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


solución;

function quickCheck(arr, elem) {
  // Cambia solo el código debajo de esta línea
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  else return false;
  // Cambia solo el código encima de esta línea
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

*/
/* class 11 itera a través de todos los elementos de un arreglo utilizando bucles "for"

A veces, cuando se trabaja con arreglos, es muy útil poder iterar a través de cada elemento para encontrar uno o más elementos que podamos necesitar, o manipular un arreglo en función de los elementos de datos que cumplen un determinado conjunto de criterios. JavaScript ofrece varios métodos incorporados que iteran sobre arreglos de formas ligeramente diferentes para conseguir distintos resultados (como every(), forEach(), map(), etc.), sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un simple bucle for.

Considera lo siguiente:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

Usando un bucle for, esta función itera y accede a cada elemento del arreglo, y lo somete a una simple prueba que hemos creado. De esta manera, hemos determinado de forma sencilla y programática qué elementos de datos son mayores que 10, y hemos devuelto un nuevo arreglo, [12, 14, 80], que contiene esos elementos.


-----------------------------------------------------------------------
ejercicio;

Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, y devuelve un nuevo arreglo. elem representa un elemento que puede o no estar presente en uno o más de los arreglos anidados dentro de arr. Modifica la función, usando un bucle for, para que devuelva una versión filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado.

function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


solución;

function filteredArray(arr, elem) {
  let newArr = [];
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Cambia solo el código encima de esta línea
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

*/
/* class 12 crea arreglos complejos multidimensionales

¡Fantástico! ¡Acabas de aprender un montón sobre arreglos! Esta ha sido una visión general de alto nivel, y hay mucho más que aprender sobre el trabajo con arreglos, mucho de lo cual verás en secciones posteriores. Pero antes de pasar a ver los Objetos, vamos a echar un vistazo más, y ver cómo los arreglos pueden llegar a ser un poco más complejos de lo que hemos visto en los desafíos anteriores.

Una de las características más poderosas cuando se piensa en los arreglos como estructuras de datos, es que los arreglos pueden contener, o incluso estar completamente formados por otros arreglos. Hemos visto arreglos que contienen arreglos en desafíos anteriores, pero bastante simples. Sin embargo, los arreglos pueden contener una profundidad infinita de arreglos que pueden contener otros arreglos, cada uno con sus propios niveles arbitrarios de profundidad, y así sucesivamente. De esta manera, un arreglo puede convertirse rápidamente en una estructura de datos muy compleja, conocido como multidimensional, o arreglo anidado. Considera el siguiente ejemplo:

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

El arreglo deep está anidado a 2 niveles de profundidad. El arreglo deeper está a 3 niveles de profundidad. Los arreglos deepest están anidados a 4 niveles y el arreglo deepest-est? a 5.

Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, ni siquiera inusual, cuando se trata de grandes cantidades de datos. Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de un arreglo tan complejo con notación de corchetes:

console.log(nestedArray[2][1][0][0][0]);

Esto registra la cadena deepest-est?. Y ahora que sabemos dónde está ese dato, podemos restablecerlo si es necesario:

nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);

Ahora registra deeper still.

----------------------------------------------------------------------
ejercicio;

Hemos definido una variable, myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinación de cadenas, números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerda que el arreglo más externo es el nivel 1). En algún lugar del tercer nivel, incluye la cadena deep, en el cuarto nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest.

let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Cambia solo el código encima de esta línea
];


solución;

let myNestedArray = [
  // Cambia solo el código debajo de esta línea
  ['unshift',['deep',
    ['deeper',
      ['deepest']
    ]
  ], false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Cambia solo el código encima de esta línea
];

*/
/* class 13 agrega pares clave-valor a objetos de javascript

En su aspecto más básico, los objetos no son más que colecciones de pares clave-valor. En otras palabras, son piezas de datos (valores) asignados a identificadores únicos llamados propiedades (claves). Mira un ejemplo:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

El código anterior define un objeto de un personaje del videojuego Tekken como tekkenCharacter. Tiene tres propiedades, cada una de las cuales se asigna un valor específico. Si se quiere agregar una propiedad adicional, como "origin" (origen), se puede hacer asignando origin al objeto:||

tekkenCharacter.origin = 'South Korea';

Esto usa la notación de puntos. Si observas el objeto tekkenCharacter, ahora incluirá la propiedad origin. Hwoarang también tenía el cabello naranja. Puedes agregar esta propiedad con la notación de corchetes:

tekkenCharacter['hair color'] = 'dyed orange';

La notación de corchetes es necesaria si tu propiedad tiene un espacio en ella o si se quiere utilizar una variable para nombrar la propiedad. En el caso anterior, la propiedad está entre comillas para denotar que es una cadena y se agregará exactamente como se muestra. Sin las comillas, se evaluará como una variable y el nombre de la propiedad será el valor que tenga la variable. He aquí un ejemplo con una variable:

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

Tras agregar todos los ejemplos, el objeto se verá así:

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};

-------------------------------------------------------------------
ejercicio;

Se ha creado un objeto foods con tres entradas. Usando la sintaxis de tu elección, agrega tres entradas más: bananas con el valor de 13, grapes con el valor de 35, y strawberries con el valor de 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea

console.log(foods);


solución;

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Cambia solo el código debajo de esta línea
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Cambia solo el código encima de esta línea

console.log(foods);

*/
/* class 14 modifica un objeto anidado dentro de un objeto

Veamos ahora un objeto un poco más complejo. Las propiedades de los objetos pueden anidarse a una profundidad arbitraria, y sus valores pueden ser cualquier tipo de datos soportados por JavaScript, incluyendo arreglos e incluso otros objetos. Considera lo siguiente:

let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};

nestedObject tiene tres propiedades: id (el valor es un número), date (el valor es una cadena), y data (el valor es un objeto con su estructura anidada). Aunque las estructuras pueden volverse rápidamente complejas, podemos seguir utilizando las mismas notaciones para acceder a la información que necesitamos. Para asignar el valor 10 a la propiedad busy del objeto anidado onlineStatus, utilizamos la notación de puntos para referenciar la propiedad:

nestedObject.data.onlineStatus.busy = 10;

-----------------------------------------------------------------------
ejercicio:

Aquí hemos definido un objeto userActivity, que incluye otro objeto anidado dentro de él. Establece el valor de la clave online en 45.

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea

console.log(userActivity);


solución;

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Cambia solo el código debajo de esta línea
userActivity.data.online = 45;
// Cambia solo el código encima de esta línea

console.log(userActivity);

*/
/* class 15 accede a los nombres de propiedad con la notación de corchetes

En el primer desafío de objetos mencionamos el uso de notación de corchetes como una manera de acceder a los valores de una propiedad mediante la evaluación de una variable. Por ejemplo, imagina que nuestro objeto foods está siendo usado en un programa para una caja registradora de supermercado. Tenemos una función que establece selectedFood y queremos revisar en nuestro objeto foods si ese alimento está presente. Esto podría verse así:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

El código evaluará el valor almacenado en la variable selectedFood y devolverá el valor de esa clave en el objeto foods, o undefined si no está presente. La notación de corchetes es muy útil porque a veces no conocemos las propiedades de los objetos antes de la ejecución o necesitamos acceder a ellos de una manera más dinámica.

----------------------------------------------------------------------
ejercicio:

Hemos definido una función, checkInventory, que recibe como argumento un elemento escaneado. Devuelve el valor actual de la clave scannedItem en el objeto foods. Puedes asumir que sólo se proporcionarán claves válidas como argumento a checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
}

console.log(checkInventory("apples"));



solución:

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Cambia solo el código debajo de esta línea
  return foods[scannedItem];
  // Cambia solo el código encima de esta línea
}

console.log(checkInventory("apples"));

*/
/* class 16 usa la palabra clave "delete" para eliminar las propiedades de los objetos

Ahora ya sabes qué son los objetos y sus características y ventajas básicas. En resumen, son almacenes clave-valor que proporcionan una forma flexible e intuitiva de estructurar los datos, y, proporcionan un tiempo de búsqueda muy rápido. A lo largo del resto de estos desafíos, describiremos varias operaciones comúnes que puedes realizar sobre los objetos para que te sientas cómodo aplicando estas útiles estructuras de datos en tus programas.

En desafíos anteriores, hemos agregado y modificado los pares clave-valor de un objeto. Aquí veremos cómo podemos eliminar un par clave-valor de un objeto.

Volvamos a nuestro ejemplo del objeto foods una última vez. Si quisiéramos eliminar la clave apples, podemos eliminarla utilizando la palabra clave delete de esta manera:

delete foods.apples;

---------------------------------------------------------------------
ejercicio:

Usa la palabra clave delete para eliminar las claves oranges, plums y strawberries del objeto foods.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea

console.log(foods);



solución:

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Cambia solo el código encima de esta línea

console.log(foods);

*/
/* class 17 evalúa si un objeto tiene una propiedad

Ahora podemos agregar, modificar y eliminar claves de los objetos. Pero, ¿y si sólo queremos saber si un objeto tiene una propiedad específica? JavaScript nos proporciona dos maneras diferentes de hacerlo. Uno utiliza el método hasOwnProperty() y el otro utiliza la palabra clave in. Si tenemos un objeto users con una propiedad de Alan, podríamos comprobar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos devuelven true.

--------------------------------------------------------------------
ejercicio:

Termina de escribir la función para que devuelva true si el objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah and Ryan y devuelva false en caso contrario.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));


solución;

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
  if (userObj.hasOwnProperty('Alan')&&userObj.hasOwnProperty('Sarah')&&userObj.hasOwnProperty('Jeff')&&userObj.hasOwnProperty('Ryan')) {
    return true;
  }
  else{
    return false;
  }
  // Cambia solo el código encima de esta línea
  
}

console.log(isEveryoneHere(users));

*/
/* class 18 itera a través de las claves de un objeto con una sentencia "for...in"

A veces es necesario iterar por todas las claves de un objeto. Esto requiere una sintaxis específica en JavaScript llamada sentencia for...in. Para nuestro objeto users, esto podría verse así:

for (let user in users) {
  console.log(user);
}

Esto registrará Alan, Jeff, Sarah, y Ryan, cada valor en su propia línea.

En esta sentencia, definimos una variable user, y como puedes ver, esta variable se restablece durante cada iteración a cada una de las claves del objeto a medida que la sentencia hace un bucle a través del objeto, dando como resultado que el nombre de cada usuario se imprima en la consola.

NOTA: Los objetos no mantienen un orden para las claves almacenadas como lo hacen los arreglos; por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace referencia o se accede a esa clave.

---------------------------------------------------------------------
ejercicio;

Hemos definido una función countOnline que acepta un argumento (un objeto usuario). Utiliza una sentencia for...in dentro de esta función para iterar sobre el objeto usuarios (users) pasado a la función y devuelve el número de usuarios cuya propiedad online esté establecida como true. A continuación se muestra un ejemplo de un objeto usuario que podría pasarse a countOnline. Cada usuario tendrá una propiedad online con un valor true o false.

{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}



solución;

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users));

*/
/* class 19 genera un arreglo de todas las claves de los objetos con Object.keus()

También podemos generar un arreglo que contenga todas las claves almacenadas en un objeto utilizando el método Object.keys() y pasando un objeto como argumento. Esto devolverá un arreglo con cadenas que representan cada propiedad del objeto. De nuevo, no habrá un orden específico para las entradas en el arreglo.

-----------------------------------------------------------------------
ejercicio;

Termina de escribir la función getArrayOfUsers para que devuelva un arreglo que contenga todas las propiedades del objeto que recibe como argumento.

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(users));



solución;



*/
/* */