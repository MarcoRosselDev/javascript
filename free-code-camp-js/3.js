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

---------------------------------------------------------------
soluciòn;

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par -2) {
    return names[1];
  } else if (strokes === par -1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

*/
/* class 76 seleccionar entre muchas opcions con sentencias de cambio

si tiene muchas opciones para elegir, use una declaración de cambio.
una switch declarción prueba un valor y puede tener muchas declaraciones
de casos que definen varios valores posibles.
las sentecias se ejecutan desde el primer case valor coincidente hasta
break que se encuentra a.

ejemplo de declaración switch;

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

en case los valores se prueban con igualdad estricta ===.
la break dice a javascript que deje de ejecutar declaraciones.
si break se omite, se ejecutará la siguiente instruicción.

--------------------------------------------------------------
ejercicio

escriba una declaración de cambio que pruebe val y establezca answer
las siguientes condiciones;

1-alpha
2-beta
3-gamma
4-delta

solución;

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

*/
/* class 77 adición de una opción predeterminada en declaraciones de cambio

en una declaración switch, es posible que no pueda especificar todos
los valores posibles como declaración case.
en sn lugar, puede agregar la declaración default que se ejecutará
si no se encuentran declaraciones case coincidentes.
íensa en ello como la else declaración final de una cadena if/else.

una declaración default debe ser el último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

----------------------------------------------------------------
ejercicio;

escriba una declaración de cambio para establever las siguientes 
condiciones answer:

a-apple
b-bird
c-cat
default-stuff

solución;

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

*/
/* class 78 múltiples opciones idénticas en declaraciones de cambio

si break se omite la declaración de una declaración switch caso, las
siguientes declaracióndes de casos se ejecutan hasta break que se encuentra a.
si tiene varios entradas con la misma salida, puede representarlas en 
una declaración switch como esta:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

los casos 1, 2 y 3 producirán todos el mismo resultado.
-------------------------------------------------------------------
ejercico

escriba una declaración de cambio para establecer answer los siguientes
rangos:

1-3-Low
4-6-Mid
7-9-High

nota----deberá tener una declaración case para número en el rango-

solución;

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

*/
/* class 79 reempazo de cadena if else con interruptor

si riene muchas opciones para elegir, una declaración switch puede ser
más fácil de escribir que muchas declaraciones if encadenadas.

ejemplo:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

se puede reemplazar con ;

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
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