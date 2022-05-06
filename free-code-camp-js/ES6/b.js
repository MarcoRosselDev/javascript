/* class 19 usa sintaxis de clases para definir una función constructora

ES6 proporciona una nueva sintaxis para crear objetos, usando la 
palabra clave class.
debemos notar que la sintaxis class es sólo sintaxis, y no una 
implementación completa basada en clases de un paradigma orientado
a objetos, a diferencia de lenguajes como java, python, ruby, etc.

en ES5, normalmente definimos una función constructor y usamos la 
palabra clace new para instanciar un objeto.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

la sintaxis class simplemente reemplaza la creación de la función
constructor:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

debemos tener en cuenta que la palabra clave class declara una nueva
función, a la cual se añade un constructor.
este construictor se invoca cuando new es llamado para crear un nuevo
objeto.

nota---- UpperCamelCase debe ser utilizado por convención para 
nombres de clase en ES6.
el método constructor es un método espacial para crear e inicializar
un objeto creado con una clase. 

-------------------------------------------------------------
ejercicio;

usa la palabra clave class y escribe un constructor para crear la 
clase Vegetable.
la clase Vegetable te permite crear un objeto vegetal con una 
propiedad name que es pasada al constructor.

// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'

solución;

// Cambia solo el código debajo de esta línea
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'

*/
/* class 20 utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

puedes obtener valores de un objeto y establecer el valor de una
propiedad dentro de un objeto.
estas operaciones clásicamente se llaman getters y setters.

las funciones getter están destinadas a simplemente devolver (get)
el valor de la variable privada de un objeto al usuario sin que el 
usuario acceda directamente a la variable privada.

las funciones setter están destinadas a modificar (set) el valor de 
la variable privada de un objeto basado en el valor pasado a la 
función setter.
este cambio podría implicar cálculos, o incluso sobrescribir 
completamente el valor anterir.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

La consola mostrará las cadenas anonymous y newAuthor.

Ten en cuenta la sintaxis usada para invocar el getter y el setter. Ni siquiera se ven como funciones. Los getter y los setter son importantes porque ocultan los detalles internos de la implementación.

Nota: Es convención preceder el nombre de una variable privada con un guión bajo (_). Sin embargo, la práctica en sí misma no hace una variable privada.
----------------------------------------------------------------
ejercicio

Utiliza la palabra clave class para crear una clase Thermostat. El constructor acepta una temperatura Fahrenheit.

En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.

Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor de la temperatura en Fahrenheit y C es el valor de la misma temperatura en Celsius.

Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

En otras palabras, estás abstrayendo los detalles de la implementación del usuario.



// Cambia solo el código debajo de esta línea

// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius


solución:

// Cambia solo el código debajo de esta línea
class Thermostat {
  constructor(fahrenhei) {
    this.fahrenhei = fahrenhei;
  }
  get temperature() {
    return (5/9) * (this.fahrenhei - 32);
  }
  set temperature(celcius) {
    this.fahrenhei = (celcius * 9.0) / 5 + 32 ;
  }
}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius

*/
/* class 21 crea un módulo para scripts

en sus inicios, javasript comenzó desempeñando un pequeño rol, cuando
la web estaba mayormente hecha de html.
hoy javascript se ha vuelto gigante y algunos sitios web están casi
completamente construidos con javascript.
con la finalidad de hacer javascript más modular, limpio y mantenible,
ES6 introdujo una manera de compartir código fácilmente entre archivos
javascript.
esto implica exportar partes de un archivo para usar en uno o más 
archivos, e importar las partes que necesitas donde las necesites.
para aprovechar esta funcionalidad, nocesitas crear un script en tu
documento html con un type de module.
a continuación, te presentamos un ejemplo:

<script type="module" src="filename.js"></script>

un script que utilice este module ahora podrá utilizar las 
caracteristicas import y export, que aprenderemos ahora.

-------------------------------------------------------------------
ejercicio

agrega un script de tipo module al documento html y asígnale el 
archivo fuente index.js

<html>
  <body>
    <!-- Cambia solo el código debajo de esta línea -->

    <!-- Cambia solo el código encima de esta línea -->
  </body>
</html>

solución;

<html>
  <body>
    <!-- Cambia solo el código debajo de esta línea -->
    <script type="module" src="index.js"></script>
    <!-- Cambia solo el código encima de esta línea -->
  </body>
</html>

*/
/* class 22 utiliza la exportación para compartir un bloque de código

imagina un archivo llamado math_functions.js que contiene varias
funciones relacionadas con operaciones matemáticas.
uno de ellos se almacena en una variabel, add, que toma dos números
y devuelve su suma.
quieres utilizar esta función en varios archivos javascript diferentes
. para compartirlo con estos otros archivos, primero debes usar export
(exportarlo).

export const add = (x, y) => {
  return x + y;
}

la anterior es una forma común de exportar una sola función, pero
puedes lograr lo mismo como esto:

const add = (x, y) => {
  return x + y;
}

export { add };

cuando exportas una variable o función, puedes importarla en otro 
archivo y usarla sin tener que volver a escribir el código.
puedes exportar diferentes cosas al repartir el primer ejemplo para 
cada una de ellas si quieres exportar o al colocarlas en la 
declaración de exportación del segundo ejemplo.
por ejemplo:

export { add, subtract };

---------------------------------------------------------------
ejercicio:

hay dos funciones relacionadas con cadenas en el editor.
exporta ambos utilizando el método que elijas.

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

solución:

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString};

*/
/* class 23 reutiliza código de js utilizando import

import te permite elegir qué parte de un archivo o módulo cargar.
en la lacción previa, los ejemplos exportaron add del archivo
math_function.js. así es como puedes importarlo para utilizarlo
en otro archivo:

import { add } from './math_functions.js';

aquí, import encontrará add en math_functions.js, importa sólo esa
función para que la uses, e ignora el resto.
el ./, dice a import que busque el archivo math_functions.js en la 
misma carpeta que el archivo actual.
la ruta relativa del archivo (./) y la extensión del archivo (.js), son
requeridos cuando se utiliza import de esta manera.

puedes importar más de un elemento del archivo, añadiéndolos en la
declaración import de esta manera:

import { add, subtract } from './math_functions.js';
---------------------------------------------------------------
ejercicio:

agrega la declaración import apropiada que permita al archivo actual,
usar las funciones uppercaseString y lowercaseString que exportaste de 
la lección previa.
estas funciones se encuentran en un archivo llamado string_functions.
js, el cual está en el mismo directorio que el archivo actual.

// Cambia solo el código encima de esta línea

uppercaseString("hello");
lowercaseString("WORLD!");

solución:

import { uppercaseString, lowercaseString } from './string_functions.js'

// Cambia solo el código encima de esta línea

uppercaseString("hello");
lowercaseString("WORLD!");

*/
/* class 24 use * para importar todo de un archivo

Supongamos que tienes un archivo y deseas importar todo su contenido en el archivo actual. Esto puede hacerse con la sintaxis import * as. Este es un ejemplo donde los contenidos de un archivo llamado math_functions.js son importados a un archivo dentro del mismo directorio:

import * as myMathModule from "./math_functions.js";

La anterior declaración import, crea un objeto llamado myMathModule. Esto es, sólo el nombre de una variable, puedes nombrarlo de cualquier manera. El objeto contiene todas las exportaciones de math_functions.js, así puedes acceder a las funciones, como haces con cualquier propiedad del objeto. A continuación puedes usar las funciones importadas add y subtract:

myMathModule.add(2,3);
myMathModule.subtract(5,3);

-------------------------------------------------------------
ejercicio

El código actual, requiere los contenidos del archivo: string_functions.js, ubicado en el mismo directorio que el archivo actual. Usa la sintaxis import * as, para importar todo del archivo, en un objeto llamado stringFunctions.

// Cambia solo el código encima de esta línea

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

solución:

import * as stringFunctions from './string_functions.js'
// Cambia solo el código encima de esta línea

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

*/
/* class 25 crear un fallback de exportación con export default

en la lección export, aprendiste sobre la sintaxis conocida como named
export.
esto te permitió hacer disponibles múltiples funciones y variables 
para usar en otros archivos.
aquí hay otra sintaxis export que necesitas saber, conocida como export
default. 
usualmente utilizarás esta sintaxis, si es sólo un valor el que está 
siendo exportado desde un archivo.
también es utilizado para crear valores fallback para un archivo o 
módulo.
a continuación hay ejemplos usando export defoault:

export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}

la primera es una función nombrada, y la segunda es una función 
anónima.
ya que export default es usado para declarar un valor fallback para un
módulo o archivo, sólo puedes tener un valor que sea exportación por
defecto en cada módulo o archivo.
además, no puedes usar export default con var, let, o const.
----------------------------------------------------------------
ejercicio:

la siguiente función debe ser el valor fallback para el módulo.
por favor, añade el código necesario para hacerlo.

function subtract(x, y) {
  return x - y;
}


solución:

export default function subtract(x, y) {
  return x - y;
}

*/
/* class 26 importa una exportación por defecto

en el último desafío, aprendimos sobre export default y sus usos.
para importar una exportación por defecto, necesita utilizar la 
sintaxis import de manera diferente.
en el siguiente ejemplo, add es la exportación por defecto del archivo
math_functions.js.
a continuación, cómo importarlo:

import add from "./math_functions.js";

la sintaxis difiere en un punto clave. 
el valor importado, add, no está rodeado por llaves {}.
add, aquí es simplemente un nombre de variable, para cualquiera que sea
la exportación por defecto del archivo math_functions.js.
puedes utilizar cualquier nombre aquí, al importar un valor por defecto

-----------------------------------------------------------------------
ejercicio:

el siguiente código, importa como exportación por defecto, desde el 
archivo math_functions.js, encontrado en el mismo directorio que este 
archivo. 
da a la imoprtación el nombre de subtract.

// Cambia solo el código encima de esta línea

subtract(7,4);


solución;

import subtract from "./math_functions.js"

// Cambia solo el código encima de esta línea

subtract(7,4);

*/
/* class 27 crea una promesa de javascript

una promesa en javascript es exactamente como suena, se utiliza para 
hacer una promesa de que harás algo, habitualmente de forma asíncrona.
cuando la tarea se completa, o cumples tu promesa o no la cumples.
promise es una función constructora, así que tu necesitas usar la
palabra clave new para crear una.
recibe una función como su argumento, con dos parámetros:
      resolve y reject.

estos métodos se utilizan para determinar el resultado de la promesa.
su sintaxis se ve así:

const myPromise = new Promise((resolve, reject) => {

});

----------------------------------------------------------------
ejercicio:

crea una nueva promesa llamada makeServerRequest.
pásale una función con parámetros resolve y reject al constructor.

solución;

const makeServerRequest = new Promise((resolve, reject) => {

});

*/
/* */
/* */
/* */
/* */
/* */
/* */
/* */