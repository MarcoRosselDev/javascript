/* class 71 introducción a las sentencias else

cuando una condición para un if es verdadera, se ejecuta el bloque 
de código que la sigue. ¿ qué pasa cuando esa condición es falsa ?
normalmente no pasaría nada.    con una else declaración, se puede
ejecutar un bloque de código alternativo.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
-------------------------------------------------------------------
ejercicio

combina las if ceclaraciones en una sola if/else declaración

solución;

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

*/
/* class 72 introducción a las sentencias Else If

si tiene varias condiciones que deben abordarse, puede encadenar if
junto con else if .

ejemplo;

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

-------------------------------------------------------------
ejercicio

convierte la lógica para usar else if .

solución;

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else{
    return "Between 5 and 10";
  }
}

testElseIf(7);

*/
/* class 73 orden lógico en declaraciones if else

el orden es importante en sus declaraciones if. else if 
la función se ejecuta de arriba hacia abajo, por lo que deberá tener
cuidado con la declaración que aparece primero.
tome estas dos funciones como ejemplo.

primer ejemplo;

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

segundo ejemplo;

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

si bien estas dos funciones parecen casi idénticas, si les pasamos 
un número a ambas, obtenemos resultados diferente.

foo(0) devolverá la cadena Less than one y
bar(0) devolverá la cadena Less than two.

--------------------------------------------------------------------
ejercicio

cambiar el orden de la lógica en la función para que devuelva las 
declaraciones correctas en todos los casos.

solución;

function orderMyLogic(val) {
  if (val < 5){
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

*/
/* class 74 encadenamiento de sentencias if else

if/else se pueden encadenar juntas para una lógica compleja.
aqui está el pseudocódigo de múltiples sentencias if/else if
encadenadas.

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

---------------------------------------------------------------
ejercicio

if escriba sentencias / encadenadas else if para cumplir las siguientes
condiciones;

num < 5 - regreso Tiny
num < 10 - regreso Small
num < 15 - regreso Medium
num < 20 - regreso Large
num >= 20 - regreso Huge

solución;

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if(num < 10) {
    return "Small"; 
  } else if(num < 15) {
    return "Medium"; 
  } else if(num < 20) {
    return "Large"; 
  } else if(num >= 20) {
    return "Huge"; 
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

*/
/* class 75 código de golf

en el juego de golf, cada hoyo tiene un par, es decir, el número
promedio strokes que se espera que haga un golfista para hindir la bola
en el hoyo y completar el juego.
dependiendo de qué tan arriba o abajo par estés strokes, hay un apodo
diferente.
su función será pasada argumentos par y strokes. devuelve la cadena
correnta de acuerdo con esta table que enumeroa los trazos en orden
de prioridad; de arriba a abajo.

trazos      devolver
    1          "¡Hoyo en uno!"
 <= par - 2    "Àguila"
 par - 1       "Pajarito"
   par         "Par"
  par + 1      "Espectro"
  par + 2      "Doble bogey"
 >= par +3     "¡Vete a casa!"

par y strokes siempre serà numèrico y positivo.
hemos agregado una matriz de todos los nombres para su conveniencia.

---------------------------------------------------------------
soluciòn;

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par -2) {
    return names[1];
  } else if (strokes === par -1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

*/
/* class 76 seleccionar entre muchas opcions con sentencias de cambio

si tiene muchas opciones para elegir, use una declaración de cambio.
una switch declarción prueba un valor y puede tener muchas declaraciones
de casos que definen varios valores posibles.
las sentecias se ejecutan desde el primer case valor coincidente hasta
break que se encuentra a.

ejemplo de declaración switch;

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

en case los valores se prueban con igualdad estricta ===.
la break dice a javascript que deje de ejecutar declaraciones.
si break se omite, se ejecutará la siguiente instruicción.

--------------------------------------------------------------
ejercicio

escriba una declaración de cambio que pruebe val y establezca answer
las siguientes condiciones;

1-alpha
2-beta
3-gamma
4-delta

solución;

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

*/
/* class 77 adición de una opción predeterminada en declaraciones de cambio

en una declaración switch, es posible que no pueda especificar todos
los valores posibles como declaración case.
en sn lugar, puede agregar la declaración default que se ejecutará
si no se encuentran declaraciones case coincidentes.
íensa en ello como la else declaración final de una cadena if/else.

una declaración default debe ser el último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

----------------------------------------------------------------
ejercicio;

escriba una declaración de cambio para establever las siguientes 
condiciones answer:

a-apple
b-bird
c-cat
default-stuff

solución;

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

*/
/* class 78 múltiples opciones idénticas en declaraciones de cambio

si break se omite la declaración de una declaración switch caso, las
siguientes declaracióndes de casos se ejecutan hasta break que se encuentra a.
si tiene varios entradas con la misma salida, puede representarlas en 
una declaración switch como esta:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

los casos 1, 2 y 3 producirán todos el mismo resultado.
-------------------------------------------------------------------
ejercico

escriba una declaración de cambio para establecer answer los siguientes
rangos:

1-3-Low
4-6-Mid
7-9-High

nota----deberá tener una declaración case para número en el rango-

solución;

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

*/
/* class 79 reempazo de cadena if else con interruptor

si riene muchas opciones para elegir, una declaración switch puede ser
más fácil de escribir que muchas declaraciones if encadenadas.

ejemplo:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

se puede reemplazar con ;

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

---------------------------------------------------------------
ejercicio;

cambie las declaraciones encadenadas if /  else if 
en una declaración switch.

solución;

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
 

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

*/
/* class 80 devolver valores booleanos de funciones

a veces, las personas usan una declaración if/else para hacer una 
comparación, como esta;

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

pero hay una mejor manera de hacer esto.
como === devielve truo o false, podemos devolver el resultado de la comparación:

function isEqual(a, b) {
  return a === b;
}
------------------------------------------------------------
ejercicio

arreglar la función isLess para eliminar las declaraciones if/else.

function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);

solución;

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);

*/
/* class 81 devolver patrón temprano para funciones

cuando se llega a una declaración return, la ejecución de la función se 
detiene y el control vuelve a la ubicación de llamada.

ejemplo

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

lo anterior mostrará la cadena Hello en la consola y devolverá la 
cadena World. la cadena byebye nunca se mostrará en la consola, porque
la función finaliza en la return declaración.

------------------------------------------------------------

ejercicio

modificar la fición abTest para que si a o b son menores que 0 la
función salga inmediatamente con un valor de undefined.

// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

solucion:

// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0) {
    return ;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

*/
/* class 82 contando cartas

en el juego de dcasino blackjack, un jugador puede obtener una
ventaja sobre la casa haciendo un seguimiento de número relativo de 
cartas altas y bajas que quedan en la baraja.
esto se llama conteo de cartas.

tener más cartas altas restantes en el mazo favorece al jugador.
a cada tarjeta se le asign aun valor de acuerdo con la siguiente tabla.
cuando la cuenta es positiva, el jugador debe apostar alto.
cuando la cuenta es cero o negativo, el jugador debe apostar bajo.

cambio de conteo            tarjetas
      +1                 2, 3, 4, 5, 6
       0                    7, 8, 9
      -1              10, "J", "Q", "K", "A"

escribir una función de conteo de cartas. recibirá un parametro card,
que puede ser un número o una cadena, e icrementará o decrementará la
variable global count según el valor de la tarjeta. 
la función luego devolverá una cadena con el conteo actual y la cadena
Bet si el conteo es positivo, o Hold si el conteo es cero o negativo.
el conteo actual y la decisión del jugador (Bet o Hold) deben estar
separados por un solo espacio.

salida de ejempolo----------   -3 Hold o 5 Bet

sugerencia

no restablezca count a 0 cuando el valor sea 7, 8 o 9
no devuelva una matriz.
no incluya comillas en el resultado.
------------------------------------------------------------------------

let count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
-------------------------------------------------------------------------
solución:

let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

*/
/* class 83 construir objetos de javascript

los objetos son similares a arrays, excepto que en lugar de usar índices
para acceder y modificar sus datos, accede a los datos en los objetos a 
través de lo que se llama properties.
los objetos son útiles para almacenar datos de forma estructurada y puede
representar objetos del mundo real, como un gato.
aquí hay un objeto gato de muestra:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

en este ejemplo, todas las propiedades se almacenan como cadenas, como
name, legs y tails. sin embargo, también puede usar números como 
propiedades. incluso puede omitir las comillas para las propiedades de
cadena de una sola palabra, de la siguiente manera:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

sin embargo, si su objeto tiene propiedades que no son cadenas, 
javascript las encasillará automáticamente como cadenas.

---------------------------------------------------------------------
ejercico:

crear un objeto que represente a un perro llamado myDog que contenga las
propiedades name (cadena), legs, tails y friends.
puede establecer estas propiedades de objeto en los valores que desee, 
siempre que name sea una cadena, sean números y legs sea una matriz. 

const myDog = {
  // Only change code below this line


  // Only change code above this line
};

solución:

const myDog = {
  // Only change code below this line
  name : "Lusho",
  legs : 4,
  tails : 1,
  friends : ["marcus", "shimuelo"]

  // Only change code above this line
};

*/
/* class 84 acceso a propiedades de objetos con notación de puntos

hay dos formas de acceder a las propiedades de un objeto:
notación de puntos (.) y notación de corchetes ([]), similar a una matriz.

la notación de puntos es lo que usa cuando sabe el nombre de la propiedad
a la que intenta acceder con anticipación.

aquí hay una muestra del uso de la notación de puntos (.) para leer la 
propiedad de un objeto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

prop1val tendría un valor de cadena val1 y 
prop2val tendría un valor de val2.

--------------------------------------------------------
ejercicio

lea los valores de propiedad del testObj usando la notación de punto.
establezca la variable hatValue igual a la propiedad del objeto hat
y establezca la variable shirtValue igual a la propiedad del objeto shirt.

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line

solución:

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

*/
/* class 85 acceso a propiedades de objetos con notación de corchetes

la segunda forma de acceder a las propiedades de un objeto es la notación
de corchetes ([]).
si la propiedad del objeto al que intenta acceder tiene un espacio en su 
nombre, deberá usar la notación de corchetes.
sin embargo, aún puede usar la notación de corchetes en las propiedades 
del objeto sin espacios.
aquí hay una muestra del uso de la notación de corchetes para leer la 
propiedad de un objeto:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

myObj["Space Name"];  seria la cadena Kirk,
myObj['More Space'];  seria la cadena Spock,
myObj["NoSpace"];     seria la cadena USS Enterprise.

------------------------------------------------------------
ejercicio

lea las valores de las propiedades an entree y the drink de la 
notación testObj de paréntesis y asignelos a entreeValue y dirnkValue 
respectivamente.

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line

solución;

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

*/
/* class 86 acceso a propiedades de objetos con variables

otro uso de la notación de corchetes en objetos es acceder a una 
propiedad que se almacena como el valor de una variable.
esto puede ser muy útil para iterar a través de las propiedades de un
objeto o al acceder a una tabla de búsqueda.
aquí hay un ejemplo del uso de una variable para acceder a una 
propiedad:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

la cadena Doberman se mostraría en la consola.
otra forma en que puede usar este concepto es cuando el nombre de la 
propiedad se recopila dinámicamente durante la ejecución del programa, de la siguiente manera:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

someProp tendría un valor de cadena propName, y la cadena John se 
mostraría en la consola.
tener en cuenta que no usamos comillas alrededor del nombre de la 
variable cuando lo usamos para acceder a la propiedad porque estamos
usando el valor de la variable, no el nombre.

-----------------------------------------------------------
ejercicio

establezca la variable playerName en 16.
luego use la varible para buscar el nombre del jugador y asígnarlo
a player.

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line

solución:

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

*/
/* class 87 actualización de propiedades de objetos

una vez que haya creado un objeto de javascript, puede actualizar sus
propiedades en cualquier momento, tal como actualizaría cualquier
otra variabel.
puede usar la notación de puntos o corchetes para actualizar.

por ejemplo, veamos ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ya que es un perro particularmente fleiz, cambiemos su nombre a la 
cadena Happy Camper. así es como actualizamos la propiedad de nombre 
de si objeto:
ourDog.name = "Happy camper"; o 
ourDog["name"] = "Happy Camper";
ahora, cuando evaluamos ourDog.name, en lugar de obtener Camper, 
obtendremos su nuevo nombre, Happy Camper.

------------------------------------------------------------------
ejercicio

actualice la propiedad myDog de nombre del objeto. 
cambiemos su nombre de Code a Happy Coder.
puede utilizar la notación de puntos o corchetes.

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

solución:

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.name = "Happy Coder";

*/
/* class 88 agregar nuevas propiedades a un objeto de javascript

puede agregar nuevas propiedades a los objetos de JavaScript 
existentes de la misma manera que los modificaría.

así es como agregaríamos una propiedad bark a ourDog:

ourDog.bark = "bow-wow";    o
ourDog["bark"] = "bow-wow";

ahora, cuando evaluemos ourDog.bark, obtendremos su ladrido, bow-wow.

ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

--------------------------------------------------------------------
ejercicio:

agregue una propiedad bark a myDog y condigúrela en un sonido de
perro, como "guau". puede utilizar la notación de puntos o 
corchetes.

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

solución:

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "guau-guau";

*/
/* class 89 eliminar propiedades de un objeto de JavaScript

también podemos eliminar propiedades de objetos como este:

delete ourDog.bark;

ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

después de la última línea que se muestra arriba, ourDog se ve así:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}

------------------------------------------------------------------
ejercicio:

eliminar la propiedad tails de myDog. 
puede utliizar la notación de puntos o corchetes.

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

solución:

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;

*/
/* class 90 uso de objetos para búsquedas

los objetos se pueden considerar como un almacenamiento de 
clave/valor, como un diccionario. si tiene datos tubulares, puede
usar un objeto paara buscar valores en lugar de una declaración
switch o una cadena if/else.
esto es más útil cuando sabe que sus datos de entrada están
limitados a un cierto rango.

aqui hay un ejemplo de una búsqueda alfabética inversa simple:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];

alpha[2] es la cadena Y
alpha[24] es la cadena C
alpha[value] es la cadena Y.

--------------------------------------------------------------
ejercicio

convertir la declaración de cambio en un objeto llamado lookup.
útilizando para buscar val y asignar la cadena asociada a la 
variable result.

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

solución:

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

*/
/* class 91 probar objetos para propiedades

a veces es útil verificar si la propiedad de un objeto dado existe
o no. podemos usar el método .hasOwnPeoperty(propname) de objetos
para determinar si ese objeto tiene el nombre de propiedad dado
.hasOwnPeoperty() con devolución de true o false si la propiedad
se encuentra o no.

ejemplo:

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

el primero hasOwnProperty regresa true,
mientras que el segundo regresa false.
-------------------------------------------------------------------
ejercicio:

modificar la función checkObj para probar si un objeto pasado a la 
función (obj) contiene una propiedad específica (checkProp).
si se encuentra la propiedad, devolver el valor de esa porpiedad.
si no, regresa "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}

solución;

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found"
  }
  // Only change code above this line
}

*/
/* class 92 manipulación de objetos complejos

a veces, es posible que desee almacenar datos en una estructura de 
datos flexible.  un objeto JavaScript es una forma de manejar datos flexibles.
permite combinaciones arbitrarias de cadenas, números, valores 
booleanos, matrices, funciones y objetos.
he aquí un ejemplo de una estructura de datos compleja:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

este es una matriz que contiene un objeto dentro.
el objeto tiene varios metadatos sobre un álbum.
también tiene una matriz  formats anidada.
si desea agregar más registros de álbumes, puede hacerlo agregando
registros a la matriz de nivel superior.
los objetos contienen datos en una propiedad, que tiene un formato de
clave-valor. en el ejemplo anterior, "artist":"Deft Punk" es una 
propiedad que tiene una clave de artist y un valor de Deft Punk.
la notación de objetos de javascript o JSON es un formato de 
intercambio de datos relacionado que se utiliza para almacenar datos.

{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}

nota-----daberá colocar una coma después de cada objeto de la matriz,
a menos que sea el último objeto de la matriz.
---------------------------------------------------------------------
ejercicio

agregue un nuevo álbum a la matriz myMusic.
sumar las cadenas artist y title,
el número release_year,
una matriz formats de cadenas.

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

solución;

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
];

*/
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */