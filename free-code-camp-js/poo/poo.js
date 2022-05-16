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