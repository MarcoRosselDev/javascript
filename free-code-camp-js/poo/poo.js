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