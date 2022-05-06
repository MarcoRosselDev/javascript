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
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */