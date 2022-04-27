/* class 50 PASAR VALORES A FUNCIONES CON ARGUMENTOS 

los parámetros son variables que actúan como marcadores de posición 
para los valores que se deben ingresar a una función cuando se la 
llama. cuando se define una función, normalmente se define junto con uno o más parámetros. los valores reales que se ingresan en una función cuando se llama se onocen como argumentos.

aquí hay una función con dos parámetros, param1 y param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}

Entonces podemos llamar testFunasí: testFun("Hello", "World");. Hemos pasado dos argumentos de cadena, Helloy World. Dentro de la función, param1será igual a la cadena Helloy param2será igual a la cadena World. Tenga en cuenta que podría testFunvolver a llamar con diferentes argumentos y los parámetros tomarían el valor de los nuevos argumentos.

-------------------------------------------------------------------
ejercicio-1

1-Cree una función llamada functionWithArgsque acepte dos argumentos y envíe su suma a la consola de desarrollo.
2-Llame a la función con dos números como argumentos.

respuesta:

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(7, 9);

*/
/* class 51 DEVOLVER UN VALOR DE UNA FUNCIÓN CON RETORNO

podemos pasar valores a una fución con argumentos. puede usar una
return declaración para enviar un valor de vuelta fuera de una 
función.

ejemplo

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);

answer tiene el valor de 8.

plusThree toma un argumento de favor num y devuelve un valor 
a num + 3.

-----------------------------------------------------------------
ejercicio-1

Cree una función timesFive que acepte un argumento, lo multiplique por 5 y devuelva el nuevo valor.

respuesta:

function timesFive(num) {
  return num * 5;
}

*/
/* class 52 ALCANCE GLOBAL Y FUNCIONES

en jabascript, al alcance se refiere a la visibilidad de las variables. las variables que se definen fuera de un bloque de funciones tiene alcance global. esto significa que se pueden ver en 
todas partes en su código javascript.

las variables que se declaran sin palabras clave let o const se crean
automaticamente en global. 
Esto puede crear cosecuencias no deseadas en otras partes de su código o al ejecutar una función nuevamente. siempre debe declarar sus
variables con let o const.

--------------------------------------------------------------------

ejercicio-1

Usando let o const, declare una variable global nombrada myGlobal fuera de cualquier función. Inicialícelo con un valor de 10.

Dentro de la función fun1, asigne 5 a oopsGlobal sin usar las palabras clave let o const.

respuesta;

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

*/
/* class 53 ÁMBITO LOCAL Y FUNCIONES

Las variables que se declaran dentro de una función, así como los parámetros de la función, tienen alcance local . Eso significa que solo son visibles dentro de esa función.

Aquí hay una función myTestcon una variable local llamada loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

La myTest() llamada a la función mostrará la cadena foo en la consola. La console.log(loc) línea (fuera de la myTest función) arrojará un error, ya loc que no está definida fuera de la función.

--------------------------------------------------------------------

ejercico-1:

El editor tiene dos console.log s para ayudarlo a ver lo que está sucediendo. Revisa la consola mientras codificas para ver cómo cambia. Declare una variable local myVar dentro myLocalScope y ejecute las pruebas.

Nota: La consola aún mostrará ReferenceError: myVar is not defined, pero esto no hará que las pruebas fallen.

solucion;

function myLocalScope() {
  // Only change code below this line
  let myVar = 10;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


*/
/* class 54 ÁMBITO GLOBAL FRENTE A LOCAL EN FUNCIONES

es posible tener variables locales y globales con el mismo nombre. cuando hace esto, la variable local tiene prioridad sobre la variable global.

ejemplo;

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

La función myFunde volverá la cadena Head porque la versión local de la variable está presente.


---------------------------------------------------------------------

ejercico

Agregue una variable local a la myOutfit función para anular el valor de outerWear con la cadena sweater.

solución;

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

*/
/* class 55 COMPRENDER EL VALOR INDEFINIDO EN FUNCIÓN

una función puede incluir la return declaración pero no tiene que hacerlo. en el caso de que la función no tenga una return declaración, 
cuando la llama, la función procesa el código interno pero el valor
devuelto es undefined.

ejemplo:

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

addSum es una fución sin return sentecia. la función cambiará la sum
variable global pero el valor devuelto de la fución es undefined.


------------------------------------------------------------------

ejercicio:

Crea una función addFive sin argumentos. Esta función suma 5 a la sum variable, pero su valor devuelto es undefined.

solución;

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

*/
/* class 56 ASIGNACIÓN CON UN VALOR DEVUELTO

todo lo que se encuentra a la derecha del signo = se resuelve antes 
de que se asigne el valor.
esto significa que podemos tomar el valor de retorno de una función
y asignarlo a una variable.

supongamos que hemos predefinido una función sum que suma dos números, entonces:

ourSum = sum(5, 12);

llamará a la sum función, que devuelve un valor de 17 y lo asigna a
la ourSum variable.

-------------------------------------------------------------------

ejercicio;

llamar a la processArg función con un argumento de 7 y asignar su
valor de retorno a la variable processed.

resultado;

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

*/
/* class 57 HACER COLA

en informatica, una cola es una estructura de datos abstracta donde
los elementos se mantienen en orden. los elementos nuevos se pueden 
agregar al final de la cola y los elementos antiguos se quitan del
frente de la cola.
-----------------------------------------------------------------------
ejercicio

1|  escribir una finción nextInLine que tome una matriz (arr) y un
número (item) como argumento.
2|  agregar el número al final de la matriz, luego eliminar el primer
elemento de la matriz.
3|  la nextInLine función debería devolver el elemento que se eliminó.

solución:

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

*/
/* class 58 COMPRENDER LOS VALORES BOOLEANOS

otro tipo de dato es el booleano. los valores booleanos solo pueden ser
uno de dos valoers:
  truo o false.
son básicamente pequeños interruptores de encendido y apagado, donde
true está encendido y false apagado.
estos dos estados son mutuamente excluyentes.

nota------los valores booleanos nunca se escriben entre comillas.
las cadenas "true" y "false" no sono booleanos y no tienen un 
significado especial en javascript.
---------------------------------------------------------------------
ejercicio:

modificar la welcomeToBooleans función para que regrese true en lugar
de false cuando de hace clic en el botón ejecutar.

solución:

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

*/
/* class 59 UTILICAR LA LÓGIVA CONDICIONAL CON DECLARACIONES IF

if se utilizan para tomar decisiones en el código. la palabra clave
if le dice a javascript que ejecute el código entre llaves bajo ciertas
condiciones, definidas entre paréntesis. 
estas condiciones se conocen como boolean condiciones y solo pueden 
ser true o false.

cuando la condición se evalúa como true, el programa ejecuta la declaración dentreo de las llaves.
cuando la condición booleana se evalúa como false, la declaración 
dentro de las llaves no se ejecutará.

pseudocódigo:

if ( la condición es verdadera ) { la
  declaración se ejecuta
}

ejemplo;

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

test(true) devuelve la cadena ----is was true
test(false) devuelve la cadena----it was false.
-----------------------------------------------
cuando test se llama con un valor de true, la if declaración evalúa 
myCondition para ver si es así o no.
como es true, la función devuelve la frase ---is was true--- .
cuando llamamos test con un valor de false, regresa la otra frase.

------------------------------------------------------------------
ejercicio:

crear un if dentro de la función para devolver yes, that was true si el parámetro wasThatTrue es true devolver en no, that was false si es false.

solución;

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

  if (wasThatTrue) {
    return "Yes, that was true"
  }
  return "No, that was false"

  // Only change code above this line

}

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