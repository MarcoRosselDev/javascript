/* class 1 crea un objeto básico de JavaScript

Piensa en cosas que la gente ve todos los días, como coches, tiendas y aves. Todos estos son objetos: cosas tangibles con las que la gente puede observar e interactuar.

¿Cuáles son algunas de las cualidades de estos objetos? Un coche tiene ruedas. Las tiendas venden artículos. Las aves tienen alas.

Estas cualidades, o propiedades, definen los que constituye un objeto. Ten en cuenta que objetos similares comparten las mismas propiedades, pero posiblemente tengan valores diferentes para estas propiedades. Por ejemplo, todos los coches tienen ruedas, pero no todos los coches tienen la misma cantidad de ruedas.

Los objetos en JavaScript son usados para modelar objetos del mundo real, dándoles propiedades y comportamientos como sus contrapartes del mundo real. Aquí hay un ejemplo usando estos conceptos para crear un objeto duck (pato):

let duck = {
  name: "Aflac",
  numLegs: 2
};

El objeto duck tiene dos pares propiedad/valor: un name (nombre) de Aflac y un numLegs (número de patas) de 2.

---------------------------------------------------------------------
ejercicio;

Crea un objeto dog con las propiedades name y numLegs y asígnales una cadena y un número, respectivamente.

let dog = {

};

----------------------------------------------------------------------
solución;

let dog = {
  name: "roco",
  numLegs: 4
};

*/
/* class 2 utiliza notación de puntos para acceder a las propiedades de un objeto

En el último desafío creaste un objeto con varias propiedades. Ahora verás cómo acceder a los valores de esas propiedades. Por ejemplo:

let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
Se utiliza notación de puntos con el nombre del objeto, duck, seguido por el nombre de la propiedad, name, para acceder al valor de Aflac.

--------------------------------------------------------------------
ejercicio;

Imprime ambas propiedades del objeto dog en tu consola.

let dog = {
  name: "Spot",
  numLegs: 4
};
// Cambia solo el código debajo de esta línea

--------------------------------------------------------------------
solución;

let dog = {
  name: "Spot",
  numLegs: 4
};
// Cambia solo el código debajo de esta línea

console.log(dog.name);
console.log(dog.numLegs);

*/
/* class 3 crea un método en un objeto

Los objetos pueden tener un tipo de propiedad especial, llamada método.

Los métodos son propiedades que son funciones. Estos agregan diferentes comportamientos a los objetos. Aquí esta el ejemplo de duck con un método:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();

Este ejemplo agrega el método sayName, el cual es una función que devuelve una oración que entrega el nombre del duck (pato). Ten en cuenta que el método accedió a la propiedad name en la sentencia de retorno usando duck.name. El siguiente desafío abarcara otra forma de hacer esto.

----------------------------------------------------------------------
ejercicio;

Usando el objeto dog, asígnale un método llamado sayLegs. El método debe devolver la frase This dog has 4 legs.

let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

----------------------------------------------------------------------
solución;

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
    }
};

dog.sayLegs();

*/
/* class 4 haz el código más reutilizable con la palabra clave "this"

El último desafío introdujo un método al objeto duck. Usó la notación de puntos duck.name para acceder al valor de la propiedad name dentro de la declaración de retorno:

sayName: function() {return "The name of this duck is " + duck.name + ".";}

Aunque esta es una forma válida de acceder a la propiedad del objeto, existe un problema. Si el nombre de la variable cambia, cualquier código que haga referencia al nombre original también tendría que ser actualizado. En una definición breve de un objeto, esto no es un problema, pero si un objeto tiene muchas referencias a sus propiedades hay una mayor probabilidad de error.

Una forma de evitar estos problemas es con palabra clave this:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

this es un tema profundo, y el ejemplo anterior es sólo una forma de usarlo. En el contexto actual, this se refiere al objeto con el que el método está asociado: duck. Si el nombre del objeto se cambia a mallard, no es necesario encontrar todas las referencias a duck en el código. Hace que el código sea reutilizable y mas fácil de leer.s

----------------------------------------------------------------------
ejercicio;

Modifica el método dog.sayLegs para eliminar cualquier referencia a dog. Utiliza el ejemplo de duck como orientación.

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

----------------------------------------------------------------------
solución;

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

*/
/* class 5 define una función "constructor"

Las funciones Constructors crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piensa que son el modelo para la creación de nuevos objetos.

A continuación se muestra un ejemplo de un constructor:

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

Este constructor define un objeto Bird con las propiedades name, color y numLegs establecidas a Albert, blue y 2 respectivamente. Los constructores tienen las siguientes convenciones:

    Están definidos con un nombre en mayúscula para distinguirlos de otras funciones que no son constructors.

    Utilizan la palabra clave this para establecer propiedades del objeto que crearán. Dentro del constructor, this se refiere al nuevo objeto que creará.

    Los Constructors definen propiedades y comportamientos en vez de devolverlos como un valor como lo harían otras funciones.

-----------------------------------------------------------------------
ejercicio;

Crea un constructor, Dog, con las propiedades name, color y numLegs que se establecen a una cadena, una cadena y un número respectivamente.


-----------------------------------------------------------------------
solución;

function Dog() {
  this.name = "sholito";
  this.color = "multicolor";
  this.numLegs = 3;
}

*/
/* class 6 utiliza un constructor para crear objetos

Aquí tenemos el constructor Bird del desafío anterior:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();

NOTA: this dentro del constructor siempre se refiere al objeto que se está creando.

Observa que se utiliza el operador new cuando llamamos a un constructor. Esto le indica a JavaScript que cree una nueva instancia de Bird llamada blueBird. Sin el operador new, dentro del constructor this no haría referencia al nuevo objeto, dando resultados inesperados. Ahora blueBird tiene todas las propiedades definidas dentro del constructor Bird:

blueBird.name;
blueBird.color;
blueBird.numLegs;

Al igual que cualquier otro objeto, sus propiedades pueden ser accedidas y modificadas:

blueBird.name = 'Elvira';
blueBird.name;
------------------------------------------------------------------------
ejercicio;

Utiliza el constructor Dog de la última lección para crear una nueva instancia de Dog, asignándolo a una variable hound.

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Cambia solo el código debajo de esta línea

------------------------------------------------------------------------
solución;

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Cambia solo el código debajo de esta línea

let hound = new Dog();

*/
/* class 7 extender constructores para recibir argumentos

los constructores de Bird y Dog del último desafío funcionaron bien. Sin embargo, nota que todas las Birds que son creadas con el constructor Bird, automáticamente se nombran Albert, son de color azul y tienen dos patas. ¿Qué pasa si quieres Birds (aves) con diferentes valores para nombre y color? Es posible cambiar manualmente las propiedades de cada Bird (ave), pero sería bastante trabajo:

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

Supongamos que estabas escribiendo un programa para hacer seguimiento de cientos o incluso miles de aves diferentes en un aviario. Tardaría mucho tiempo en crear todas las aves, para luego cambiar las propiedades a diferentes valores para cada una. Para crear más fácilmente diferentes objetos Bird, puedes diseñar tu constructor de aves para aceptar parámetros:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

Luego pasa los valores como argumentos para definir cada ave única en el constructor Bird: let cardinal = new Bird("Bruce", "red"); Esto genera una nueva instancia de Bird con propiedades name y color que tienen como valor Bruce y red, respectivamente. La propiedad numLegs aún está establecida en 2. El cardinal tiene estas propiedades:

cardinal.name
cardinal.color
cardinal.numLegs

El constructor es más flexible. Ahora es posible definir las propiedades para cada Bird en el momento que se crea. Esta es una manera en que los constructores de JavaScript son tan útiles. Estos agrupan objetos basados en características y comportamiento compartidos, y definen un plano que automatiza su creación.

------------------------------------------------------------------------
ejercicio;

Crea otro constructor Dog. Esta vez, configúralo para que tome los parámetros name y color, y ten la propiedad numLegs fija a 4. Luego crea un nuevo Dog almacenado en una variable terrier. Pasale dos cadenas de texto como argumentos para las propiedades name y color.

function Dog() {

}
------------------------------------------------------------------------
solución;

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("lushito", "black");

*/
/* class 8 varifica el constructor de un objeto con "instanceof"

Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript proporciona una manera conveniente de verificar esto con el operador instanceof. instanceof permite comparar un objeto con un constructor, devuelve true o false basado en si ese objeto fue creado o no con dicho constructor. Aquí hay un ejemplo:

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;

Aquí el método instanceof devolverá true.

Si un objeto es creado sin usar un constructor, instanceof verificará que no es una instancia de ese constructor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;

Aquí el método instanceof devolverá false.
------------------------------------------------------------------------
ejercicio;

Crea una nueva instancia del constructor House, llamándola myHouse y pasando el número de habitaciones. Luego, usa instanceof para verificar que es una instancia de House.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Cambia solo el código debajo de esta línea
------------------------------------------------------------------------
solución;

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Cambia solo el código debajo de esta línea

let myHouse = new House(5);

myHouse instanceof House;

*/
/* class 9 comprender las propiedades directas

En el siguiente ejemplo, el constructor Bird define dos propiedades: name y numLegs:

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

name y numLegs se llaman propiedades directas, porque están definidas directamente en la instancia del objeto. Eso significa que duck y canary tienen su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades. El siguiente código añade todas las propiedades directas de duck al arreglo ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

La consola mostrará el valor ["name", "numLegs"].

-------------------------------------------------------------------------
ejercicio;

agrega todas las propiedades directas de canary al arreglo ownProps.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Cambia solo el código debajo de esta línea
-------------------------------------------------------------------------
solución;

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

/* */
/* class 10 utiliza propiedades "prototype" para reducir código duplicado

Dado que numLegs probablemente tendrán el mismo valor para todas las instancias de Bird, esencialmente tienes una variable duplicada numLegs dentro de cada instancia de Bird.

Esto puede que no sea un problema cuando sólo hay dos instancias, pero imagina si hay millones de instancias. Eso sería un montón de variables duplicadas.

Una mejor forma es utilizar el prototype de Bird. Las propiedades del prototype se comparten entre TODAS las instancias de Bird. A continuación se explica cómo añadir numLegs al prototipo Bird prototype:

Bird.prototype.numLegs = 2;

Ahora todas las instancias de Bird tienen la propiedad numLegs.

console.log(duck.numLegs);
console.log(canary.numLegs);

Dado que todas las instancias tienen automáticamente las propiedades en el prototype, piensa en prototype como una "receta" para crear objetos. Ten en cuenta que el prototype de duck y canary es parte del constructor Bird como Bird.prototype. Casi todos los objetos en JavaScript tienen una propiedad prototype que es parte de la función constructora que lo creó.

-------------------------------------------------------------------------
ejercicio;

añade una propiedad numLegs al prototype de Dog

function Dog(name) {
  this.name = name;
}

// Cambia solo el código encima de esta línea
let beagle = new Dog("Snoopy");
-------------------------------------------------------------------------
solución;

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;


// Cambia solo el código encima de esta línea
let beagle = new Dog("Snoopy");

*/
/* class 11 itera sobre todas las propiedades

Ahora has visto dos tipos de propiedades: propiedades directas y propiedades prototype. Las propiedades directas se definen directamente en la propia instancia del objeto. Y las propiedades prototype se definen en el prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

A continuación, se explica cómo se agregan las propiedades directas de duck al arreglo ownProps y las propiedades prototype al arreglo prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

console.log(ownProps) debe mostrar ["name"] en la consola, y console.log(prototypeProps) debe mostrar ["numLegs"].

-------------------------------------------------------------------------
ejercicio;

agrega todas las propiedades directas de beagle al arreglo ownProps.
agrega todas las propiedades prototype de Dog al arreglo prototypeProps.

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Cambia solo el código debajo de esta línea
-------------------------------------------------------------------------
solución;

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Cambia solo el código debajo de esta línea

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

*/
/* class 12 entiende la propiedad constructor

Hay una propiedad especial constructor ubicada en instancias de objeto duck y beagle que fueron creados en desafíos anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);

Ambas llamadas console.log devolverían true en la consola.

Ten en cuenta que la propiedad constructor hace referencia a la función constructor que creo la instancia. La ventaja de la propiedad constructor es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Así es como se podría utilizar:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

Nota: dado que la propiedad constructor se puede sobreescribir (se verá en los próximos dos desafíos), por lo general, es mejor utilizar el método instanceof para verificar el tipo de un objeto.

-------------------------------------------------------------------------
ejercicio;

Escribe una función joinDogFraternity que tome como parámetro candidate y que con la propiedad constructor, devuelva true si el candidato es un Dog y si no lo es debería devolver false.

function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
function joinDogFraternity(candidate) {

}
-------------------------------------------------------------------------
solución;

function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

*/
/* class 13 cambia el prototipo a un nuevo objeto

Hasta ahora, has estado agregando propiedades al prototype (prototipo) individualmente:

Bird.prototype.numLegs = 2;

Esto se vuelve tedioso después de varias propiedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}

Una forma más eficiente es establecer el prototype a un nuevo objeto que ya contenga las propiedades. De esta forma, las propiedades son añadidas todas a la vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

-------------------------------------------------------------------------
ejercicio:

Agrega la propiedad numLegs, y los dos métodos eat() y describe() al prototype de Dog, estableciendo prototype a un nuevo objeto.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Cambia solo el código debajo de esta línea

};
-------------------------------------------------------------------------
solución;

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Cambia solo el código debajo de esta línea
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe() {
    console.log("My name is " + this.name);
  }
};

*/
/* class 14 recuerda establecer la propiedad "constructor" al cambiar el prototipo

Hay un efecto secundario crucial de ajustar manualmente el prototipo a un nuevo objeto. ¡Elimina la propiedad constructor! Esta propiedad puede ser usada para verificar cuál función de constructor creó la instancia. Sin embargo, dado que la propiedad ha sido sobrescrita, ahora devuelve resultados falsos:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

En orden, estas expresiones se evaluarían como false, true y true.

Para solucionar esto, cada vez que un prototipo se establece de forma manual a un nuevo objeto, recuerda definir la propiedad constructor:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

-------------------------------------------------------------------------
ejercicio;

define la propiedad constructor en Dog prototype.

function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
-------------------------------------------------------------------------
solcuión;

function Dog(name) {
  this.name = name;
}

// Cambia solo el código debajo de esta línea
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

*/
/* class 15 entendiendo de dónde viene el prototipo de un objeto

Así como las personas heredamos genes de nuestros padres, los objetos también heredan su prototype directamente de la función constructor que lo creó. Por ejemplo, aquí el constructor Bird crea el objeto duck:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");

duck hereda su prototype de la función constructor Bird. Puedes mostrar esta relación con el método isPrototypeOf:

Bird.prototype.isPrototypeOf(duck);

Este devolvería true.

-------------------------------------------------------------------------
ejercicio;

utiliza isPrototypeOf para comprobar el prototype de beagel.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Cambia solo el código debajo de esta línea
-------------------------------------------------------------------------
solución;

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Cambia solo el código debajo de esta línea

Dog.prototype.isPrototypeOf(beagle);

*/
/* class 16 comprende la cadena "prototype"

Todos los objetos en JavaScript (con algunas excepciones) tienen un prototype. Además, el prototype de un objeto en sí mismo es un objeto.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

Debido a que prototype es un objeto, ¡unprototype puede tener su propio prototype! En este caso, el prototype de Bird.prototype es Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

¿Por qué sería útil? Quizás recuerdes el método hasOwnProperty del desafío pasado:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

El método hasOwnProperty se define en Object.prototype al cual se puede acceder con Bird.prototype, al que se puede acceder con duck. Este es un ejemplo de la cadena prototype. En esta cadena prototype, Bird es el supertype de duck mientras que duck es el subtype. Object es un supertype de Bird y duck. Object es un supertype de todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede utilizar el método hasOwnProperty.

-------------------------------------------------------------------------
ejercicio;

modifica el código para mostrar la cadena de prototipos correcta.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // produce true

// Arregla el código de abajo para que evalúe a true
???.isPrototypeOf(Dog.prototype);
-------------------------------------------------------------------------
solución;

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // produce true

// Arregla el código de abajo para que evalúe a true
Object.prototype.isPrototypeOf(Dog.prototype);

*/
/* class 17 usa herencia para que no te repitas

Hay un principio en la programación llamado No te repitas (Don't Repeat Yourself "DRY"). La razón por la que el código repetido es un problema es porque cualquier tipo de cambio requiere corregir código en múltiples lugares. Esto suele significar más trabajo para los programadores y más espacio para errores.

Observa en el siguiente ejemplo como el método describe es compartido por Bird y Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

El método describe se repite en dos lugares. El código se puede editar para seguir el principio DRY creando un supertype (o padre) llamado Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dado que Animal incluye el método describe, puedes eliminarlo de Bird y Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

--------------------------------------------------------------------------
ejercicio;

El método eat se repite tanto en Cat como Bear. Edita el código utilizando el principio DRY, moviendo el método eat al supertype Animal.

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
--------------------------------------------------------------------------
solución;

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
} 

*/
/* class 18 hereda comportamientos de un supertipo (supertype)

En el desafío anterior, creaste un supertype llamado Animal que definía comportamientos compartidos por todos los animales:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

Este desafío y el siguiente cubrirán como reutilizar los métodos de Animal dentro de Bird y Dog sin tener que definirlos otra vez. Se utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia del supertype (o objecto padre). Ya conoces una forma de crear una instancia de Animal utilizando el operador new:

let animal = new Animal();

Hay algunas desventajas cuando se utiliza esta sintaxis para la herencia, pero son demasiado complejas para el alcance de este desafío. En su lugar, hay un enfoque alternativo que no tiene esas desventajas:

let animal = Object.create(Animal.prototype);

Object.create(obj) crea un objeto nuevo y establece obj como el prototype del nuevo objeto. Recuerda que prototype es como la "receta" para crear un objecto. Al establecer el prototype de animal como el prototype de Animal, estás dándole a la instancia animal la misma “receta" que a cualquier otra instancia de Animal.

animal.eat();
animal instanceof Animal;

Aquí el método instanceof devolvería true.

--------------------------------------------------------------------------
ejercicio;

utiliza Object.create para crear dos instancias de Animal llamadas duck y beagle.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Cambia solo el código debajo de esta línea

let duck; // Cambia esta línea
let beagle; // Cambia esta línea

--------------------------------------------------------------------------
solución;

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Cambia solo el código debajo de esta línea

let duck = Object.create(Animal.prototype); // Cambia esta línea
let beagle = Object.create(Animal.prototype); // Cambia esta línea

*/
/* class 19 establece el prototipo de hijo para una instancia del padre

En el desafío anterior, viste el primer paso para heredar el comportamiento del supertipo (o padre) Animal: creando una nueva instancia de Animal.

Este desafío cubre el siguiente paso: establecer el prototipo prototype del subtipo (o hijo) —en este caso, Bird— para ser una instancia de Animal.

Bird.prototype = Object.create(Animal.prototype);

Recuerda que el prototipo prototype es como la "receta" para crear un objeto. En cierto modo, la receta de Bird ahora incluye todos los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();

duck hereda todas las propiedades de Animal, incluyendo el método eat.

-------------------------------------------------------------------------
ejercicio;

modifica el código para que las instancias de Dog hereden de Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Cambia solo el código debajo de esta línea


let beagle = new Dog();
-------------------------------------------------------------------------
solución;

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Cambia solo el código debajo de esta línea

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

*/
/* class 20 restablece una propiedad "constructor" heredada

Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo.

Por ejemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

Pero duck y todas las instancias de Bird deberían mostrar que fueron construidas por Bird y no Animal. Para ello, puedes establecer manualmente la propiedad del constructor de Bird al objeto Bird:

Bird.prototype.constructor = Bird;
duck.constructor

-------------------------------------------------------------------------
ejercicio;

Corrige el código para que duck.constructor y beagle.constructor devuelvan sus constructores respectivos.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Cambia solo el código debajo de esta línea



let duck = new Bird();
let beagle = new Dog();
-------------------------------------------------------------------------
solución;

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Cambia solo el código debajo de esta línea

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();

*/
/* class 21 añade metodos después de la herencia

Una función constructor que hereda su objeto prototype de una función constructor "supertype" puede seguir teniendo sus propios métodos además de los heredados.

Por ejemplo, Bird es un constructor que hereda su prototype de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Además de lo que se hereda de Animal, se quiere añadir un comportamiento que sea exclusivo de los objetos Bird. Aquí, Bird obtendrá una función fly(). Las funciones se añaden al prototype de Bird's del mismo modo que cualquier función constructor:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};

Ahora las instancias de Bird tendrán métodos tanto eat() como fly():

let duck = new Bird();
duck.eat();
duck.fly();

duck.eat() mostrará la cadena nom nom nom en consola, y duck.fly() mostrará la cadena I'm flying!.

-------------------------------------------------------------------------
ejercicio;

Añade el código necesario para que el objeto Dog herede de Animal y el constructor prototype de Dog sea establecido en Dog. A continuación agrega el método bark() al objeto Dog, para que beagle pueda "comer" eat() y "ladrar" bark(). El método bark() debe imprimir Woof! por consola.

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea



// Cambia solo el código encima de esta línea

let beagle = new Dog();
-------------------------------------------------------------------------
solución;

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Cambia solo el código debajo de esta línea

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

Dog.prototype.eat = function() {
  console.log("nom nom nom");
};

// Cambia solo el código encima de esta línea

let beagle = new Dog();

*/
/* class 22 sobreescribir métodos heredados

En lecciones anteriores, aprendiste que un objeto puede heredar su comportamiento (métodos) de otro objeto al referenciar su prototype:

ChildObject.prototype = Object.create(ParentObject.prototype);

Luego, el ChildObject recibió sus propios métodos al encadenarlos a su prototype:

ChildObject.prototype.methodName = function() {...};

Es posible sobreescribir un método heredado. Se hace de la misma manera: agregando un método a ChildObject.prototype usando el mismo nombre de método que el que se va a sobrescribir. Aquí hay un ejemplo de Bird sobrescribiendo el método eat() heredado de Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};

Si tienes una instancia de let duck = new Bird(); y llamas a duck.eat(), así es como JavaScript busca el método en la cadena prototype de duck:

  1-  duck => ¿Está eat() definido aquí? No.

  2-  Bird => ¿Está eat() definido aquí? => Sí. Ejecútala y detén la búsqueda.

  3-  Animal => eat() también está definido, pero JavaScript dejó de buscar antes de llegar a este nivel.

  4-  Object => JavaScript dejó de buscar antes de llegar a este nivel.

-------------------------------------------------------------------------
ejercicio;

Sobrescribe el método fly() para Penguin de manera que devuelva la cadena de texto Alas, this is a flightless bird.

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Cambia solo el código debajo de esta línea



// Cambia solo el código encima de esta línea

let penguin = new Penguin();
console.log(penguin.fly());
-------------------------------------------------------------------------
solución;

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Cambia solo el código debajo de esta línea

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

// Cambia solo el código encima de esta línea

let penguin = new Penguin();
console.log(penguin.fly());

*/
/* class 23 utiliza un "mixin" para añadir un comportamiento común entre objetos no relacionados

Como ya has visto, el comportamiento se comparte mediante una herencia. Sin embargo, hay algunos casos en los que la herencia no es la mejor opción. La herencia no funciona bien con objetos que no están relacionados como Bird y Airplane. Ambos pueden volar pero un Bird no es un tipo de Airplane y viceversa.

Para objetos no relacionados es mejor utilizar mixins. Un "mixin" permite a otros objetos utilizar una colección de funciones.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

El flyMixin toma a cualquier objeto y le da el método fly.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

Aquí bird y plane son pasados a flyMixin el cual después asigna la función fly a cada objeto. Ahora bird y plane pueden volar:

bird.fly();
plane.fly();

La consola mostraría la cadena Flying, wooosh! dos veces, una por cada llamada a .fly().

Ten en cuenta cómo el mixin permite que el mismo método fly sea reutilizado por los objetos bird y plane los cuales no están relacionados.

-------------------------------------------------------------------------
ejercicio:

Crea un mixin llamado glideMixin que defina un método llamado glide. Luego utiliza el glideMixin para dar a bird y boat la habilidad de planear.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea
-------------------------------------------------------------------------
solución:

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("i'm gliding mom");
  }
}

glideMixin(bird);
glideMixin(boat);

*/
/* class 24 utiliza closures para evitar que las propiedades de un objeto se puedan modificar desde fuera

En el desafío anterior, bird tenía una propiedad pública name. Se considera pública porque se puede acceder y cambiar fuera de la definición de bird.

bird.name = "Duffy";

Por lo tanto, cualquier parte de tu código puede cambiar fácilmente el nombre "name" de bird a cualquier valor. Piensa en cosas como contraseñas y cuentas bancarias que se pueden cambiar fácilmente por cualquier parte de tu base de código. Eso podría crear muchos problemas.

La forma más sencilla de hacer privada esta propiedad pública es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora versus disponible globalmente. De este modo, la variable solo puede ser accesible y cambiable por métodos que también estén dentro de la función constructora.

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

Aquí getHatchedEggCount es un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. Esto es posible porque hatchedEgg está declarada en el mismo contexto que getHatchedEggCount. En JavaScript, una función siempre tiene acceso al contexto en el que se creó. A esto se le llama closure.

-------------------------------------------------------------------------
ejercicio;

Cambia como weight es declarada en la función Bird para que sea una variable privada. Después, crea un método getWeight que devuelva el valor 15 para weight.

function Bird() {
  this.weight = 15;


}
-------------------------------------------------------------------------
solución;

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}

*/
/* */
/* */