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
/* */
/* */