/* class 71 introducción a las sentencias else

cuando una condición para un if es verdadera, se ejecuta el bloque 
de código que la sigue. ¿ qué pasa cuando esa condición es falsa ?
normalmente no pasaría nada.    con una else declaración, se puede
ejecutar un bloque de código alternativo.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
-------------------------------------------------------------------
ejercicio

combina las if ceclaraciones en una sola if/else declaración

solución;

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

*/
/* class 72 introducción a las sentencias Else If

si tiene varias condiciones que deben abordarse, puede encadenar if
junto con else if .

ejemplo;

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

-------------------------------------------------------------
ejercicio

convierte la lógica para usar else if .

solución;

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else{
    return "Between 5 and 10";
  }
}

testElseIf(7);

*/
/* class 73 orden lógico en declaraciones if else

el orden es importante en sus declaraciones if. else if 
la función se ejecuta de arriba hacia abajo, por lo que deberá tener
cuidado con la declaración que aparece primero.
tome estas dos funciones como ejemplo.

primer ejemplo;

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

segundo ejemplo;

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

si bien estas dos funciones parecen casi idénticas, si les pasamos 
un número a ambas, obtenemos resultados diferente.

foo(0) devolverá la cadena Less than one y
bar(0) devolverá la cadena Less than two.

--------------------------------------------------------------------
ejercicio

cambiar el orden de la lógica en la función para que devuelva las 
declaraciones correctas en todos los casos.

solución;

function orderMyLogic(val) {
  if (val < 5){
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

*/
/* class 74 encadenamiento de sentencias if else

if/else se pueden encadenar juntas para una lógica compleja.
aqui está el pseudocódigo de múltiples sentencias if/else if
encadenadas.

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

---------------------------------------------------------------
ejercicio

if escriba sentencias / encadenadas else if para cumplir las siguientes
condiciones;

num < 5 - regreso Tiny
num < 10 - regreso Small
num < 15 - regreso Medium
num < 20 - regreso Large
num >= 20 - regreso Huge

solución;

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if(num < 10) {
    return "Small"; 
  } else if(num < 15) {
    return "Medium"; 
  } else if(num < 20) {
    return "Large"; 
  } else if(num >= 20) {
    return "Huge"; 
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

*/
/* class 75 código de golf

en el juego de golf, cada hoyo tiene un par, es decir, el número
promedio strokes que se espera que haga un golfista para hindir la bola
en el hoyo y completar el juego.
dependiendo de qué tan arriba o abajo par estés strokes, hay un apodo
diferente.
su función será pasada argumentos par y strokes. devuelve la cadena
correnta de acuerdo con esta table que enumeroa los trazos en orden
de prioridad; de arriba a abajo.

trazos      devolver
    1          "¡Hoyo en uno!"
 <= par - 2    "Àguila"
 par - 1       "Pajarito"
   par         "Par"
  par + 1      "Espectro"
  par + 2      "Doble bogey"
 >= par +3     "¡Vete a casa!"

par y strokes siempre serà numèrico y positivo.
hemos agregado una matriz de todos los nombres para su conveniencia.



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