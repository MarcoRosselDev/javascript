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
/* */
/* */