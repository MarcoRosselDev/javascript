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

*/