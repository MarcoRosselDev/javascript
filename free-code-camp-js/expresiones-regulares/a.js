/* class 1 usa el método "test"

Las expresiones regulares se utilizan en lenguajes de programación para coincidir con partes de cadenas. Creas patrones para ayudarte a hacer esa coincidencia.

Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar la siguiente expresión regular: /the/. Ten en cuenta que las comillas no son requeridas dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el método .test(). El método .test() toma la expresión regular, la aplica a una cadena (que se coloca dentro de los paréntesis), y devuelve true o false si tu patrón encuentra algo o no.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

el método test aquí devuelve true.
----------------------------------------------------------
ejercicio:

aplica la expresión regular muRegex en la cadena myString usando el 
método .test()

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Cambia esta línea

solución;

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Cambia esta línea

*/
/* class 2 haz coincidir cadenas literales

En el desafío anterior, buscaste la palabra Hello usando la expresión regular /Hello/. Esa expresión regular buscó una coincidencia literal de la cadena Hello. Aquí hay otro ejemplo donde se busca una coincidencia literal de la cadena Kevin:

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
Esta llamada a test devolverá true.

Cualquier otra variante de Kevin no coincidirá. Por ejemplo, la expresión regular /Kevin/ no coincidirá con kevin o KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
Esta llamada a test devolverá false.

Un futuro desafío también mostrará cómo coincidir esas otras variantes.

--------------------------------------------------------------------
ejercicio;

completa la expresión regular waldoRegex para encontrar "Waldo" en la 
cadena waldoIsHiding con una coincidencia literal.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Cambia esta línea
let result = waldoRegex.test(waldoIsHiding);


solución;

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Cambia esta línea
let result = waldoRegex.test(waldoIsHiding);

*/
/* class 3 coincide una cadena literal con diferentes posibilidades

Al utilizar expresiones regulares como /coding/, puedes buscar el patrón coding en otra cadena.

Esto es muy potente al buscar cadenas individuales, pero está limitado a un solo patrón. Puedes buscar múltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o después de él. Por ejemplo, si deseas coincidir con las cadenas yes o no, la expresión regular que quieres es /yes|no/.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo más patrones con más operadores OR separándolos, como /yes|no|maybe/.

----------------------------------------------------------------
ejercicio;

completa la expresión regular petRegex para que coincida con las mascotas
dog, cat, bird, o fish.

let petString = "James has a pet cat.";
let petRegex = /change/; // Cambia esta línea
let result = petRegex.test(petString);


solución;

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result = petRegex.test(petString);

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