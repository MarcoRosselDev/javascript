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
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */