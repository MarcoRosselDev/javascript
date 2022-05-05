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

------------------------------------------------------------------
ejercicio;

utilizar Object.freeze para prevenir el cambio de constrantes
matemáticos. necesitas congelar el objeto MATH_CONSTANTS para
que nadie pueda alterar el valor de PI. añadir o borrar propiedades.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Cambia solo el código debajo de esta línea


  // Cambia solo el código encima de esta línea
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

solución;

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Cambia solo el código debajo de esta línea
  Object.freeze(MATH_CONSTANTS);

  // Cambia solo el código encima de esta línea
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

*/
/* class 4 usa funciones flecha para escribir funciones anónimas 
de manera breve

en js, usualmente no necesitas nombrar tus funciones, especialmente 
cuando se pasa una función como argumento a otra función.
en su lugar, creamos funciones inline.
no necesitamos nombrar estas funciones porque no las reutilizamos en 
otro lugar.

para lograr esto, por lo general se usa la siguiente sintaxis:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

ES6 nos proporciona el azúcar sintáctico, para no tener que escribir
funciones anónimas de este modo. en su lugar, puedes usar la sintaxis
de función flecha:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

cuando la función no posee cuerpo y sólo tiene un valor de retorno, 
la sintaxis de "función de flecha", te permite omitir la palabra 
clave return, así como los corchetes que rodean el código .
esto ayuda a simplificar las funciónes más pequeñas en sentencias
de una sola línea:

const myFunc = () => "value";

este código todavía devolverá la cadena "value" por defecto.

----------------------------------------------------------------
ejercico:

reescribe la función asignada a la variable magic.
la cual devuelve una new Date(), utilizando la sintaxis de función
flecha.
además, asegúrate de que nada esté definido usando la palabra clave 
var.

var magic = function() {
  return new Date();
};

solución;

const magic = () => new Date();

*/
/* class 5 escribe funciones flecha con parámetros

al igual que una función regular, puedes pasar argumentos a una 
función flecha.

const doubler = (item) => item * 2;
doubler(4);

doubler(4) devolvería el valor 8.

si una función flecha tiene un solo parámetro, los paréntesis que
encierran el parámetro pueden ser omitidos.

const doubler = item => item * 2;

es posible pasar más de un argumento a una función flecha.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

multiplier(4, 2) devolverá el valor 8.

----------------------------------------------------------
ejercicio;

reescribe la función myConcat que añade el contenido de arr2 a arr1
para que la función use la sintaxis de función flecha.

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

solución;

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

*/
/* class 6 establece parámetros por defecto para tus funciones

para ayudarnos a crear funciones más flexibles, ES6 intoduce 
parametros por defecto para funciones.

echa un vistazo, al siguiente código;

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

la consola mostrará las cadenas Hello John y Hello Anonymous.

el parámetro por defecto entra en juego cuando el argumento no es
especificado (es indefinido).
como puedes ver en el ejemplo anterior, el parámetro name recibirá
su valor por defecto Anonymous cuando no proveas un valor para el 
parámetro. 
puede agregar valores por defecto para tantos parámetros como desees.

-------------------------------------------------------------------
ejercicio;

modifica la función increment agregando parámetros por defecto para
que sume 1 a number si value no se especifica.

// Cambia solo el código debajo de esta línea
const increment = (number, value) => number + value;
// Cambia solo el código encima de esta línea

solución;

// Cambia solo el código debajo de esta línea
const increment = (number, value = 1) => number + value;
// Cambia solo el código encima de esta línea

*/
/* class 7 utiliza el parámetor rest con parámetros de función

para ayudarnos a crear funciones más flexibles, ES6 introduce el 
parámetro rest para los parámetros de función.
con el parámetro rest, puedes crear funciones que tomen un número
variable de argumentos.
estos argumentos se almacenan en un arreglo al que se puede acceder
más tarde dsde dentro de la función.

echa un vistazo a este código;

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

la consola mostrará las cadenas You have passed 3 arguments. y 
You have passed 4 arguments.

el parámetro rest elimina la necesidad de comprobar el arreglo args
y nos permite aplicar map(). filter() y reduce() en el arreglo de 
parámetros.

--------------------------------------------------------------
ejercicio;

modifica la función sum usando el parámetro rest de tal manera que 
la función sum sea capaz de recibir cualquier número de argumento
y devolver su suma.

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

solución;

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(3, 4));

*/
/* class 8 operador de propagación para evaluar los arreglos en lugar

ES6 introduce el operador de propagación, que nos permite expandir 
arreglos y otras expresiones en lugares donde se esperan múltiples
parámetros o elementos.

el siguiente código ES5 usa apply() para calcular el valor máximo
en un arreglo:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

maximus tendrá un valor de 89.
tuvimos que usar Math.max.apply(null, arr) porque Math.max(arr) 
devuelve NaN.
Math.max() espera argumentos separados por comas, pero no un arreglo.
el operador de propagación hace que esta sintaxis sea más fácil de
leer y mantener.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

maximus tendría un valor de 89.

...arr devuelve un arreglo desempacado. 
en otras palabras, propaga el arreglo.
sin embargo, el operador de propagación sólo funciona en el lugar,
como en un argumento de función o en un arreglo literal.
el siguiente código no funcionará:

const spreaded = ...arr;
---------------------------------------------------------
ejercicio:

copia todo el contenido de arr1 en otro arreglo arr2 usando el 
operador de propagación.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Cambia esta línea

console.log(arr2);

solución;

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);

*/
/* class 9 usa sintaxis de desestructuración para extraer valores de objetos

la sintaxis de desestructuración es una sintaxis especial intoducida
en ES6, para asignar los valores directamente desde un objeto.
considera el siguiente código ES5:

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

name tendría una cadena con valor Jhon Doe, y 
age tendría el número 34.

aquí hay una sentencia de asignación aquivalente usando la sintaxis de 
desestructuración de ES6:

const { name, age } = user;

de nuevo, name tendrá una cadena con valor John Doe, y age 34-

aquí, las variables name y age serán creados y se asignarán los valores
respectivos a partir del objeto user.
puedes observar que esto es mucho más limpio.

puedes extraer tantos o pocos valores del objeto como desees.
------------------------------------------------------------------
ejercicio;

reemplaza las dos asignaciones con una sintaxis de desestructuración 
equivalente.
todavía deben seguir asignando las variables today y tomorrow con los
valores de today y tomorrow del objeto HIGH_TEMPERATURES.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Cambia solo el código debajo de esta línea

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Cambia solo el código encima de esta línea

solución:

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Cambia solo el código debajo de esta línea

const { today, tomorrow} = HIGH_TEMPERATURES;

// Cambia solo el código encima de esta línea

*/
/* class 10 usa sintaxis de desestructuración para asignar variables desde objetos

la desestructuración te permite asignar un nuevo nombre de variable
al extraer valores.
puedes hacer esto al poner el nuevo nombre después de dos puntos al 
asignar el valor.

esando el mismo objeto del ejemplo anterior:

const user = { name: 'John Doe', age: 34 };

así es como puedes dar nuevos nombres de variables en la asignación;

const { name: userName, age: userAge } = user;

puedes leerlo como "obtén el valor de user.name y asígnalo a una nueva
variable llamada userName" y así sucesivamente. el valor de userName
sería la cadena John Doe, y el valor de userAge sería el número 34.

---------------------------------------------------------------------
ejercicio;

reemplaza las dos asignaciones con una sintaxis de desestructuración
aquivalente.
todavía deben seguir asignando las variables highToday y highTomorrow
con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Cambia solo el código debajo de esta línea

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Cambia solo el código encima de esta línea

solución;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Cambia solo el código debajo de esta línea

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;


// Cambia solo el código encima de esta línea

*/
/* class 11 usa sintaxis de desestructuración para asignar variables desde objetos anidados

puedes usar los mismos principios de las dos lecciones anteriores para 
desestructurar los valores desde objetos anidados.
usando un objeto similar a los ejemplos anteriores:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

así es como se extraen los valores de propiedades de objetos y se los 
asigna a variables con el mismo nombre:

const { johnDoe: { age, email }} = user;

y así es como se puede asignar los valores de las propiedades de un
objeto a variables con diferentes nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user;

-------------------------------------------------------------------

ejercicio

reemplaza las dos asignaciones con una sintaxis de desestructuración
equivalente.
todavía deben seguir asignando las varibales lowToday y highToday
con los valores de today.low y today.high del objeto LOCAL_FORECAST.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Cambia solo el código debajo de esta línea

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Cambia solo el código encima de esta línea

solución:

const LOCAL_FORECAST = {
  yesterday: { 
    low: 61, 
    high: 75 
    },
  today: { 
    low: 64, 
    high: 77 
    },
  tomorrow: {
     low: 68, 
     high: 80 
    }
};

// Cambia solo el código debajo de esta línea

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

// Cambia solo el código encima de esta línea

*/
/* class 12 usa sintaxis de desestructuración para asignar variables desde arreglos

ES6 hace que desestructurar arreglos sea tan fácil como desestructurar 
objetos.
una diferencia clave entre el operador de propagación y la 
desestructuración de arreglos es que el operador de propagación 
desempaca todos los contenidos de un arreglo en una lista separada por 
comas.
en consecuencia, no puedes elegir qué elementos deseas asignar como 
variables.
desestructurar un arreglo nos permite hacer exactamente eso;

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

la consola mostrará los valores de a y b como 1, 2.

a la variable a se le asigna el primer valor del arreglo, y a b se le 
asigna el segundo valor del arreglo.
también podemos acceder al valor en cualquier índice de un arreglo
con la desestructuración usando comas para alcanzar el índice deseado;

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

la consola mostrará los valores de a, b y c como 1, 2, 5.

----------------------------------------------------------------
ejercicio

utiliza la sintaxis de desestructuración para intercambiar los valores 
de a y b para que a reciba el valor almacenado en b, y b reciba el valor
almacenado en a.

let a = 8, b = 6;
// Cambia solo el código debajo de esta línea

solución:

let a = 8, b = 6;
// Cambia solo el código debajo de esta línea

[a, b] = [b, a];

*/
/* class 13 utilizar la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo

en algunas situaciones que implican la desestructuración de arreglos, 
tal vez queramos recolectar el resto de elementos en un arreglo separado

el resultado es similar a Array.prototype.slice(), como se 
muestra a continuación;

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

la consola mostrará los valores 1, 2 y [3, 4, 5, 7].

las variables a y b toman el primer y segundo valor del arreglo.
después de eso, debido a la presencia del parámetro rest, arr obtiene
el resto de los valores en forma de un arreglo.
el elemento rest sólo funciona correctamente como la última variable
de la lista. por ejemplo, no puedes usar el parámetro rest para 
capturar un sub-arreglo que deje fuera el último elemento del erreglo
original.
-----------------------------------------------------------------
ejercicio;

utiliza la sintaxis de desestructuración con el parámetro rest para
realizar un Array.prototype.slice() eficaz, de tal manera que arr sea
un sub-arreglo del arreglo original source con los dos primeros 
elementos omitidos.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Cambia solo el código debajo de esta línea
  const arr = list; // Cambia esta línea
  // Cambia solo el código encima de esta línea
  return arr;
}
const arr = removeFirstTwo(source);

solución;

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Cambia solo el código debajo de esta línea
  const [a, b, ...arr] = list; // Cambia esta línea
  // Cambia solo el código encima de esta línea
  return arr;
}
const arr = removeFirstTwo(source);

*/
/* class 15 utiliza la sintaxis de desestructuración para pasar un objeto como parámetro de función

en algunos casos, se puede desestructurar el objeto en un propio 
argumento de función.
considera el siguiente código;

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}

esto desestructura efectivamente el objeto enviado a la función.
esto también se puede hacer en el lugar;

const profileUpdate = ({ name, age, nationality, location }) => {
}

cuando profileData es pasado a la función anterior, los valores son
desestructurados desde el parámetro de función para su uso dentro
de la función.
---------------------------------------------------------------
ejercicio

utiliza la sintaxis de desestructuración dentro del argumento de la 
función half para enviar solo max y min dentro de la función.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Cambia solo el código debajo de esta línea
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Cambia solo el código encima de esta línea

solución:

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Cambia solo el código debajo de esta línea
// const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({max, min}) => (max + min) / 2.0;
// Cambia solo el código encima de esta línea

*/
/* class 16 crea cadenas usando plantillas literales

una nueva característica de ES6 es la plantilla literal.
este es un tipo especial de cadena que facilita la creación de cadenas
complejas.
las plantillas literales te permiten crear cadenas multilínea y usar
caracter+isticas de interpolación, para crealas.

fijarse en el código siguiente:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

la consola mostrará las cadenas Hello, my name is Zodiac Hasbro! y
I am 56 years old..

muchas cosas han ocurrido allí.
en primer lugar, el ejemplo utiliza backticks (`), no comillas (',"),
para envolver la cadena.
en segundo lugar, observe que la cadena es multi-línea tanto en el código
como cuando se imprime en pantalla.
esto guarda la inserción \n dentro de las cadenas.
la sintaxis ${variable} utilizada anteriormente es un marcador de 
posición.
básicamente, ya no tendrás que utilizar concatenación con el operador +.
para añadir variables a las cadenas, basta con colocar la variable en 
una plantilla de cadena y envolverla con ${y}. del mismo modo, puedes
incluir otras expresiones en tu literal de cadena, por ejemplo ${a + b}.
esta nueva forma de crear cadenas te da mayor flexibilidad para crear
cadenas robustas.

*/
/* */