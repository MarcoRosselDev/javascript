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

solución;

function findLongestWordLength(str) {

  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
  
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }

  }

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

*/
/* class 5 devuelve los números mayores en los arreglos

devuelve un arreglo que consista en el mayor de cada sub-arreglo
proporcionado.
por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

recuerda, puedes iterar a través de un arreglo utilizando un simple
bucle for, y acceder a cada miembro del arreglo con la sintaxis 
arr[i].

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

---------------------------------------------------------------
solución;

function largestOfFour(arr) {

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    result[i] = largestNumber;
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

*/
/* class 6 confirma el final

Evalúa si una cadena (primer argumento, str) termina con la cadena de destino dada (segundo argumento, target).

Este desafío puede resolverse con el método .endsWith(), que fue introducido en ES2015. Pero para el propósito de este desafío, nos gustaría que usaras uno de los métodos de subcadena de JavaScript en su lugar.

function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");

--------------------------------------------------------------------
solución;

function confirmEnding(str, target) {

  return str.slice(str.length - target.length) === target;

}

confirmEnding("Bastian", "n");

*/
/* class 7 repite una cadena repite una cadena

Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

------------------------------------------------------------------
solución;

function repeatStringNumTimes(str, num) {

  let acumulador = "";

  for (let i = 0; i < num; i++ ) {
    acumulador += str;
  }
  return acumulador;
}

repeatStringNumTimes("abc", 3);

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
const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);
// expected output: "Life, the universe and everything. Answer: 42"