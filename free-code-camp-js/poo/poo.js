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