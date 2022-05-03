/*class 94 accede a arreglos anidados

como hemos visto en ejemplos anteriores, los objetos pueden contener 
tanto objetos anidados como así también arreglos anidados.
de manera similar a como se accede a los objetos anidados, la notación
de corchetes de arreglos puede ser encadenada para acceder a arreglos 
anidados.
en el siguiente ejemplo, vemos cómo se accede a un arreglo anidado:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];

ourPets[0].names[1]; sería la cadena Fluffy, y 
ourPets[1].names[0]; sería la cadena Spot.

----------------------------------------------------------------
ejercicio:

utilizar la notación de puntos y corchetes, 
establezca la variable secondTree en el segundo elemento de la lista
trees del objeto myPlants.

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = "";

solución:

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

*/
/*class 95 colección de discos

se te da un objeto literal que representa una parte de tu colección
de álbumes musicales.
cada álbum tiene un número de id único como clave y varias otras 
propiedades. no todos los álbumes tienen una información completa.

empieza con una función updataRecords la cual toma un objeto literal,
records, que contiene el álbum musical de la colección, un id, prop
(como artist o tracks), y value.
completa la función usando las reglas siguientes para modificar el 
objeto pasado a la función.

--- tu cunnción siempre debe devolover el objeto de colección de 
    registros completo.
--- si prop no es tracks y value no es una cadena vacía, actualiza o 
    establece la propiedad prop del álbum a value.
--- si prop es tracks pero el álbum no tiene una propiedad tracks ,crea
    un arreglo vacío y agrégale value a él.
--- si prop es trcks y value no es una cadena vacía, agrega value al 
    final del arreglo de tracks existentes del álbum.
--- si value es una cadena vacía, elimina esa propiedad prop del álbum.

nota-----se usa una copia del objeto recordCollection para las pruebas.

----------------------------------------------------------------------
solución;

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
    records[id][prop] = [value];
  } else if (prop === 'tracks' && value !== "") {
    records[id][prop].push(value); 
  } else if (value === "") {
    delete records[id][prop]
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

*/
/*class 96 iterar con bucles while de javaScript

puede ejecutar el mismo código varias veces mediante un bucle.
el primer tipo de bucle que apreneremos se llama bucle while porque
ejecuta una condición específica mientras esta sea verdadera, y 
se detiene una vez que esa condición ya no sea verdadera.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

en el ejemplo de código anterior, el bucle while se ejecutará 5 veces
y añadirá los números de 0 a 4 a ourArray.
intentemos construir un bucle while para que funcione empujando valores
a un arreglo.

----------------------------------------------------------------------
ejercico:

agrega los números de 5 a 0 (inclusivo) en orden descendiente a 
myArray usando un bucle while.

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea

solución;

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

*/
/*class 97 itera con los bucles "for" de javaScript

puedes ejecutar el mismo código múltiples veces usando un bucle.
el tipo más común de bucle se llama bucle for porque se ejecuta
"por" un número especifico de veces.
los bucles for se declaran con tres expresiones opcionales
separadas por punto y coma:

for (a; b; c), donde a es la sentecia de iniciailzación,
b es la sentencia condicional, y
c es la expresión final.

la sentencia de inicialización se ejecuta una sola vez antes de que el 
bucle comience.
normalmente se utiliza para definir y configurar tu variable de bucle.

la sentencia condicional es evaluada al principio de cada iteración del 
bucle y continuará siempre y cuando sea true.
cuando la condición sea false al inicio de la iteración, el bucle dejará
de ejecutarse. esto significa que si la condición comienza como false,
tu bucle nunca se ejecutará.

la expresión final se ejecuta al final de cada iteración del bucle, 
antes de la siguiente comprobación de condición y se utiliza normalmente
para incrementar o disminuir tu contador de bucle.

en el siguiente ejemplo inicializamos con i = 0 e iteramos mientras
nuestra condición i < 5 es verdadera. incrementaremos i por 1 encada 
iteración de bucle con i++ como nuestra expresión final.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

ourArray ahora tendrá el valor [0, 1, 2, 3, 4].

----------------------------------------------------------------------
ejercicio:

usa un bucle for para empujar los valores desde el 1 al 5 en 
myArray.

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea

solución:

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea

for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

*/
/*class 98 itera números impares con un bucle "for"

los bucles "for" no tienen que iterar de uno en uno a la vez. 
al cambiar nuestra final-expression(expresión final), podemos contar con
números pares.
empezaremos en i = 0 y realizaremos el bucle mientras i < 10.
incrementaremos i en 2 cada bucle utilizando i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

ourArray ahora contendrá [0, 2, 4, 6, 8].
cambiemos nuestra initialization para que podamos contar por números 
impares.

----------------------------------------------------------------
ejercicio;

inserta los números impares desde 1 hasta 9 en myArray usando un
bucle for.

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea

solución:

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

*/
/*class 99 cuenta hacia atrás con un bucle "for"

un bucle for también puede contar hacia atrás, siempre que definamos
las condiciones adecuadas.
para poder disminuirle dos cada iteración, necesitaremos cambiar nuestra 
inicialización, condición, y expresión final.
empezaaremos en i = 10 e iteraremos mientras i > 0. disminuiremos i en 2
por cada bucle con i -=  2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

ourArray ahora contendrá [10, 8, 6, 4, 2]. ahora cambiemos el valor
de inicialización y la expresión final de nuestro bucle para que 
podamos contar hacia atrás de dos en dos y así crear un arreglo
descendente de números impares.
--------------------------------------------------------------------
ejercicio;

inserta los números impares desde el 9 hasta el 1 en myArray
utilizando un bucle for.

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea

solución:

// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea

for (let i = 9;i > 0; i -= 2) {
  myArray.push(i);
}

*/
/*class 100 itera a través de un arreglo con un bucle "for"

una tarea común en js es iterar a través del contenido de un arreglo.
una forma de hacerlo es con un bucle for.
este código mostrará cada elemento del arreglo arr en la consola:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

recuerda que los arreglos tienen una indexación basada en cero, lo que
significa que el último índice del arreglo es igual a su longitud menos
uno(length - 1). en este caso, la última iteración es i === 4, es decir,
cuando i se convierte en igual a arr.length - 1 y resultados 6 a la consola. 
entonces i aumentara a 5, y el bucle termina i < arr.length es false.

------------------------------------------------------------------
ejercicio;

declara e inicaliza una variable total a 0. 
usa un bucle for para sumar el valor de cada elemento del arreglo
myArray al total.

// Configuración
const myArr = [2, 3, 4, 5, 6];

// Cambia solo el código debajo de esta línea

solución;

// Configuración
const myArr = [2, 3, 4, 5, 6];

// Cambia solo el código debajo de esta línea
let total = 0;
for (let i = 0; i < myArr.length;i ++) {
   total += myArr[i];
}

*/
/*class 101 anida buvles "para"

si tienes un arreglo multidimensional, puedes utilizar la misma lógica
que aprendimos anteriormente para recorrer tanto el arreglo como 
cualquier sub-arreglo.
aquí hay un ejemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

esto imprime cada subelemento dentro de arr uno a la vez.
ten en cuenta que para el bucle interior, estamos comprobando el .length 
de arr[i].
y que arr[i] es en si mismo un arreglo.

-------------------------------------------------------------------
ejercicio:

modifique la función multiplyAll para que devuelva el producto de todos
los números dentro de los sub-arreglos de arr.

function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

solución;

function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0;j < arr[i].length;j++){
      product *= arr[i][j];
    }
  }

  // Cambia solo el código encima de esta línea
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

*/
/*class 102 itera con el bucle "do ... while"

el siguiente tipo de bucle que aprenderemos se llama bucle do...while.
se llama así, por que primero hace (do) una pasada por el código
dentro del bucle sin importar qué, y luego continua ejecutando el 
bucle mientras (while) la condición especificada sea verdadera (true).

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

el ejemplo anterior se comporta de forma similar a otros tipos de 
bucles, siendo el arreglo resultante [0, 1, 2, 3, 4].
sin embargo, lo que hace que el bucle do...while sea diferente a otros
bucles es cómo se comporta cuando la condición falla en la primera
verificación. 
veamos esto en acción:  aquí puedes ver un bucle while que ejecutará
el código una y otra vez siempre que i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}

en el ejemplo, inicializamos el valor de ourArray a un arreglo vacío y
el valor de i a 5.
cuando ejecutamos el bucle while, la condición se evalúa como false 
porque i no es inferior a 5, así que no ejecutara el código dentro del
bucle. el resultado es que ourArray terminará sin valores añadidos, y
todavía se verá como [] una vez el código del ejemplo anterior haya
terminado de ejecutarse. ahora, dale un vistazo a un bucle do...while:

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

en este caso, inicializamos el valor de i a 5, tal como lo hicimos en 
el bucle while. cuando lleguemos a la siguiente línea, no hay nunguna
condición para evaluar, así que entramos al código dentro de las 
llaves y se ejecuta. añadiremos un único elemento al arreglo y luego
incrementaremos i antes de llegar a la verificación de la condición.
cuando finalmente evaluamos la condición i < 5 en la última línea,
vemos que el valor de i es ahora 6, por lo que falla la comprobación
condicional. salimos del bucle y hemos terminado.
al final del ejemplo anterior, el valore de ourArray es [5].
esencialmente, un buvle do...while asegura que el código dentro del
bucle se ejecute al menos una vez. intentemos construir un bucle
do...while para que funcione empujando valores a un arreglo.

---------------------------------------------------------------------
ejercicio

cambia el bucle while en el código por un bucle do...while.
el bucle solo enviará el número 10 a myArray, e i será igual a 11
cuando tu código haya terminado de ejecutarse.

// Configuración
const myArray = [];
let i = 10;

// Cambia solo el código debajo de esta línea
while (i < 5) {
  myArray.push(i);
  i++;
}

solución;

// Configuración
const myArray = [];
let i = 10;

// Cambia solo el código debajo de esta línea

do {
  myArray.push(i);
  i++
} while (i < 5) ;

*/
/*class 103 reemplaza bucles usando recursión

la recursión es el concepto que una función puede expresarse en
términos de sí misma. para ayudar a comprender esto, comienza 
pensando en la siguiente tarea:
multiplica los primeros n elementos de un arreglo para crear el 
producto de esos elementos. usando un bucle for.
puedes hacer esto:

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

sin embargo, nota que multiply(arr, n) == multiply(arr, n - 1) *
arr[n - 1]. esto significa que puedes reescribir multiply en términos
de sí misma y que nunca necesites hacer uso de un bucle.

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

la versión recursiva de multiply se desglosa así.
en el caso base, donde n <= 0, devuelve 1.
para valores más grandes de n, se llama a sí misma, pero con n - 1.
esa llamada de función se evalúa de la misma manera, llamando a 
multiply otra vez hasta que n <= 0. 
en este punto, todas las funciones pueden devolver y la multiply
original devulve al respuesta.

nota-----las funciones recursivas deben tener un caso base cuando 
devuelven sin tener que llamar a la función de nuevo (en este
  ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar
  de ejecutarse.

-------------------------------------------------------------------
ejercicio:

escribe una función recuersiva, sum(arr, n), que devulva la suma de 
los primeros elementos n de un arreglo arr.

function sum(arr, n) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
}

solución;

function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Cambia solo el código encima de esta línea
}

*/
/*class 104 búsqueda de perfiles

tenemos un arreglo de objetos que representan a diferentes personas
en nuestras listas de contactos.
una función lookUpProfile que refibe nombre (name) y una propiedad
(prop) como argumentos preescritos para ti.
la función debe verificar si el nombre (name) es el nombre de pila
del contacto (firstName) y la propiedad (prop) dada es una propiedad
de ese contato.
si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.
si name no corresponde a ningún contacto, entonces devuelve la cadena
No such contact.
si prop no corresponde a nunguna propiedad válida de un contacto 
encontrado que coincida con name entonces devuelve la cadena
No such property.

-------------------------------------------------------------------
// Configuración
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea

  // Cambia solo el código encima de esta línea
}

lookUpProfile("Akira", "likes");

------------------------------------------------------------------
solución:

// Configuración
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Cambia solo el código encima de esta línea
}

lookUpProfile("Akira", "likes");

*/
/*class 105 genera fracciones aleatorias con js

los números aleatorios son útiles para crear comportamientos aleatorios

javascript tiene una función Math.random() que genera un número decimal
aleatorio entre 0 (inclusivo) y 1 (exclusivo). así que Math.random()
 puede devolver un 0
pero nunca devuelve un 1.

nota---así como aprendimos en almacenando valores con el operador de 
igualdad, todas las llamadas de funciones se resolverán antes de que 
el return se ejecute, así que podemos devolver (return) al valor
de la función Math.random().

---------------------------------------------------------------------
ejercicio

cambia randomFraction para que devuelva un número aleatorio en lugar
de devolver 0.

function randomFraction() {

  // Cambia solo el código debajo de esta línea

  return 0;

  // Cambia solo el código encima de esta línea
}

solución;

function randomFraction() {

  // Cambia solo el código debajo de esta línea

  return Math.random();

  // Cambia solo el código encima de esta línea
}

*/
/*class 106 genera números enteros aleatorios cono js

es genial que podamos generar números decimales aleatorios, pero
es incluos más útil si lo usamos para generar números enteros 
aleatorios.

1- usa Math.random() para generar un decimal aleatorio.
2- multiplica ese decimal aleatorio por 20
3- utiliza otra función, Math.floor() para redondear el número hacia
   abajo a su número entero más cercano.

recuerda que Math.random() nunca devolverá un 1 y porque estamos
 redondeando hacia abajo, es imposible obtener 20.
 esta técnica nos dará un número entero entre 0 y 19.

poniendo todo junto, así es como se ve nuestro código:

Math.floor(Math.random() * 20);

estamos llamando a Math.random(), multiplicando el resultado por 20
y pasando el valor a la funicón Math.floor() para redondear el valor
hacia abajo al número entero más cercano.

--------------------------------------------------------------------

ejercicio;

utiliza esta técnica para generar y devolver un número entero 
aleatorio entre 0 y 9.

function randomWholeNum() {

  // Cambia solo el código debajo de esta línea

  return Math.random();
}

solución;

function randomWholeNum() {

  // Cambia solo el código debajo de esta línea

  return Math.floor(Math.random() * 10);
}

*/
/*class 107 genera números enteros aleatorios dentro de un rango

en lugar de generar un número entero aleatorio  entre cero y un 
número dado como lo hicimos anteriormente, podemos generar un número 
entero aleatorio que se encuentre dentro de un rango de dos números
específicos.
para ello, definiremos un número mínimo min y un número máximo max.
esta es la fórmula que utilizaremos. 

Math.floor(Math.random() * (max - min + 1)) + min

------------------------------------------------------------------
ejercicio;

crea una función llamada randomRange que renga un rango myMin y myMax
y devuelva un número entero aleatorio mayor o igual a myMin, y es 
menor o igual a myMax, inclusivo.

function randomRange(myMin, myMax) {
  // Cambia solo el código debajo de esta línea
  return 0;
  // Cambia solo el código encima de esta línea
}

solución;

function randomRange(myMin, myMax) {
  // Cambia solo el código debajo de esta línea
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Cambia solo el código encima de esta línea
}

*/
/*class 108 utiliza la función "parseInt"

la función parseInt() analiza una cadena y devuelve un entero. a 
continuación, te presentamos un ejemplo:

const a = parseInt("007");

la función anterior convierte la cadena 007 al entero 7.
si el primer carácter de la cadena no puede ser convertido en un 
número, entonces devuelve NaN.

----------------------------------------------------------------
ejercicio:

utiliza parseInt() en la función convertToInterger para convertir la 
cadena de entrada str a un número entero, y devuélvelo.

function convertToInteger(str) {

}

convertToInteger("56");

solución;

function convertToInteger(str) {
  let a = parseInt(str);
  return a;
}

convertToInteger("56");

*/
/*class 109 utiliza la función "parseInt" con Radix (Base)

la función parseInt() analiza una cadena y devuelve un entero.
recibe un segundo argumento para la base (radix), que especifica la 
base del número representado en la cadena.
la base (radix) puede ser un número entero entre 2 y 36.
la llamada a la función se realiza de la siguiente manera:

parseInt(string, radix);

y aquí hay un ejemplo:

const a = parseInt("11", 2);

la variable radix indica que 11 está en el sistema binario, o base 2.
este ejemplo convierte la cadena 11 a un entero 3.

------------------------------------------------------------------
ejercicio:

utiliza parseInt() en la función convertToInteger para convertir
un número binario en un número entero, y devolverlo.

function convertToInteger(str) {

}

convertToInteger("10011");

solución;

function convertToInteger(str) {
  let a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");

*/
/*class 110 usa el operador condicional (ternario)

el operador condicional, también llamado el operador ternario, puede 
utilizar como una expresión if-else de una sola línea.
la sintaxis es a ? b : c, donde a es la condición, b es el código
a ejecutar cuando la condición devuelva true, y c es el código
a ajecutar cuando la condición devuelve false.
la siguiente función utiliza una sentencia if/else para comprobar una
condición:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

esto puede reescribirse usando el operador condicional;

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}g

------------------------------------------------------------------
ejercicio:

utiliza el operador condicional en la función checkEqual para 
comprobar si dos números son iguales o no.
la función debe devolver la cadena Equal o la cadena Not Equal.

function checkEqual(a, b) {

}

checkEqual(1, 2);

solución;

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

*/
/*class 111 usa multiples operadores condicionales (ternarios)

en el desafio anterior, usamos un único operador condicional.
también pudes encadenarlos para comprobar múltiples condiciones.
la siguiente función utiliza sentencias if, else if y else
para comprobar múltiples condiciones:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

la función anterior puede ser reescrita utilizando múltiples 
operadores condicionales:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

se considera buana práctica dar formato a múltiples operadores 
condicionales de forma que cada condición esté en una línea separada,
como se muestra arriba. usar múltiples operadores condicionales sin
una indentación adecuada puede hacer tu código dificil de leer.
por ejemplo:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

--------------------------------------------------------------------
ejercicio:

en la función checkSing. usa múltiples operadores condicionales para 
comprobar si un número es positivo, negarivo o cero.
la función debe devolver positive, negative o zero.

function checkSign(num) {

}

checkSign(10);

solución;

function checkSign(num) {
  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero";
}

checkSign(10);

*/
/*class 112 utiliza recursión para crear una cuenta regresiva

en el dosafío anterior, aprendimos como usar la recursión para
reemplazar un bucle for.
ahora, echemos un vistazo a una función más compleja que devuelve un 
arreglo de enteros consecutivos empezando con 1 hasta el número 
pasado a la función.
como se menciona en el desafío anterior, habrá un caso base.
el caso base le dice a la función recursiva cuando no necesita
llamarse a sí misma.
es un caso simple donde el valor de  retorno ya se conoce.
también habrá una llamada recursiva al cual ejecuta la función 
original con argumentos diferentes.
si la función se escribe correctamente, eventualmente el caso base
será alcanzado.
por ejemplo, digamos que quieres escribir una función recursiva que
devuelva un arreglo conteniendo los números 1 hasta n.
esta función necesitará aceptar un argumento, n qu erepresenta el 
número final.
entonces necesitará llamarse a sí misma con valores progresivamente
más pequeños de n hasta que alcance 1. podrías escribir la función 
de la siguiente manera:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

el valor [1, 2, 3, 4, 5] se mostrará en la consola.

al principio, esto parece contraintuitivo ya que el valor de n 
disminuye, pero los valores en el arreglo final se están
incrementando.
esto sucede porque la inserción ocurre al último, después de la 
llamada recuersiva. en el punto donde n es empujado en el arreglo,
countup(n - 1) ya ha sido evaluada y devuelto [1, 2,..., n - 1].

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