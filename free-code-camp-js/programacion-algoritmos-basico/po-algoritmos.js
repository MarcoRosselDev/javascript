/* class 1 convierte celsius a fahrenhait

La fórmula para convertir de Celsius a Fahrenheit es la temperatura en Celsius multiplicado por 9/5, más 32.

Se te da una variable celsius que representa una temperatura en Celsius. Utiliza la variable fahrenheit ya definida y asígnale la temperatura Fahrenheit equivalente a la temperatura Celsius dada. Utiliza la fórmula mencionada anteriormente para ayudarte a convertir la temperatura Celsius a Fahrenheit.

function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);


-------------------------------------------------------
solución;

function convertToF(celsius) {
  let fahrenheit = celsius*(9/5) + 32;
  return fahrenheit;
}

convertToF(30);

*/
/* class 2 invierte una cadena

Invierte la cadena proporcionada.

Es posible que necesites convertir la cadena en un arreglo antes de poder invertirla.

Tu resultado debe ser una cadena.

function reverseString(str) {
  return str;
}

reverseString("hello");



solución;

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1;i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

reverseString("hello");

*/
/* class 3 factoriza un número

Devuelve el factorial del entero proporcionado.

Si el número entero es representado con la letra n, un factorial es el producto de todos los enteros positivos menores o iguales a n.

Los factoriales suelen representarse con la abreviatura n!

Por ejemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Sólo se proporcionarán a la función los enteros mayores o iguales a cero.


function factorialize(num) {
  return num;
}

factorialize(5);

---------------------------------------------------------------
solución;

function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);

*/
/* class 4 encuentra la palabra más larga en una cadena

devuelve la longitud de la palabra más larga en la oración proporcionada.
tu respuesta debe ser un número.

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

-----------------------------------------------------------------

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