// This is an in-line comment.

/* This is a 
multi-line comment */

/* javascript proporciona 8 tipos de datos

    1 string
    2 symbol
    3 bigint
    4 number
    5 object
    6 undefined
    7 null
    8 boolean
    
la computadora distingue entre números como 23 44 y strings como 
"dog", "cats 3241 "... que son colecciones de caracteres.

las computadoras pueden realizar operaciones matemáticas en números,
pero no en una cadena.

las variables permiten que las computadoras almacenen y manipulen 
datos de form adinámica. Lo hacen mediante el uso de una "etiqueta"
para señalar los datos en lugar de utilizar los datos en sí. Cualquiera de los ocho tipos de datos puede almacenarse en una vatiable.

Las variables son similares a las variables x e y que usamos en matemáticas, lo que significa que son un nombre simple para representar los datos a las que queremos hacer referencia. Las variables informáles difieren de las variables matemáticas en que pueden almacenar diferentes valores en diferentes momentos.

Le decimos a javascript que cree o declare una variable poniendo la palabra reservada var delante de ella, así:

var ourName;

    */
/* class 3 almacenamiento de valores con el operador de signación

en javasrcrpt, pueder almacenar un valor en una variable con el 
operador de asignación = ().

myVariable = 5;

esto asigna el número valor 5 a myVariable.
Si hay algún cálculo a la derecha del = operador, se realiza antes de 
que se asigne el valor a la variable a la izquierda del operador.

var myVar;
myVar = 5;

Primero, este código crea una variable llamada myVar. Luego, el código se asigna 5 a myVar.
Ahora, si myVar vuelve a aparecer en el código, el programa lo 
tratará como si fuera 5.

*/
/* calss 4 ASIGNAR EL VALOR DE UNA VARIABLE A OTRA

Después de asignar un valor a una variable mediante el operador de
asignación, puede asignar el valor de esa variable a otra variable 
mediante el operador de asignación.

var myVar;
myVar = 5;
var myNum;
myNum = myVar

Lo anterior declara una myVar variable sin valor, luego le asigna el valor 5. A continuación, se declara una variable nombrada myNum sin valor. Ahora, myNum también tiene el valor 5.

*/
/* class 5 INICIALIZAR VARIBALES CON EL OPERADOR DE ASIGNACIÓN

Es común inicializar una variable a un valor inicial en la misma línea en que se declara.

var myVar = 3;

Crear una nueva variable llamada myVar y le asigna un valor inicial 
de 3.


*/
/* class 6 DECLARAR VARIABLES DE CADENA

Previamente usó el siguiente código para declarar una variable:

var myName;

Pero también puede declarar una variable de cadena como esta:

var myName = "your name";

"your name" se llama literal de cadena. Un literal de cadena, es una serie de cero o más caracteres entre comillas simples o dobles.


*/
/* class 7 COMPRENDER LAS VARIABLES NO INICIALIZADAS

Cunado se declaran variables de javascript, tienen un valor inicial de undefined. di realiza una operación matemática en una undefined
variable, su resultado será lo NaN que significa "no es un número".
si concatena una cadena con una undefined variable, obtendrá una cadena de undefined.

*/
/* class 8 COMPRENDER LA SENSIBILIDAD A MAYÚSCULAS Y MIN EN VARIS..

en javascript, todas las variables y nombres de funciones distiguen entre mayúsculas y minúsculas. Esto significa que las mayúsculas son 
importantes.

MYVAR no es lo mismo que MyVar o myvar. Es posible tener varias variables distintas con el mismo nombre pero con mayúsculas y minúsculas diferentes. Se recomienda encarecidamente que, en eras de
la claridad, no utilice esta función de idioma.

MEJORES PRÁCTICAS

Escribir nombres de variables en javascript en camelCase.




*/
/* class 9 DIFERENCIAS DENTRE PALABRA RESERVADA VAR Y LET

uno de los mayores problemas con la declaración de variables con la var palabra es que puede sobreescirbir fácilmente las declaraciones de variables:

var camper = "juan";
var camper = "marco";
console.log(camper);

en el código anterior, la variable camper se declara originalmente con
juan, y luego se anula para que sea marco. a continuación, la consola muestra la cadena marco.

en una app o programa pequeño no hay mucho problema pero a medida que 
crece el codigo podemos sobreescribir accidentalmente una variable, como esto no lanza un error se combierte en un problema encontrar la falla.

en ES6, se actualizo este problema inclullendo la palabra reservada let. 

si cambio var por let en el codigo anterior se produce un error.
entonces la diferencia entre var y let es que cuando uso let no puedo declarar una variable con ese mismo nombre.

*/
/* class 10 DECLARAR VARIABLE DE SOLO LECTURA CON CONST

en ES6 también podemos declarar variables usando la palabra reservada
const.

const tiene todas las caracteristicas de let , con la ventaja adicional que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que se asigna una variable const, no se puede reasignar;

la consola mostrara un error si reasignamis una const ya declarada
siempre debe nombrar las variables que no sean reasignadas con la palabra const.




*/
/* class 11 SUMAR DOS NÚMEROS CON JAVASCRIPT

Number es un tipo de dato en js que representa datos numéricos.
Ahora si queremos sumar dos números usamos el + simbolo de suma
se coloca entre dos o mas numeros.

const myVar = 5 + 10;

myVar ahora tiene 15 como valor.

*/
/* class 12 RESTAR EN JS

Tambien podemos restar un numero de otro.
javascript usa el - simbolo para la resta.

ejemplo

const myVar = 12 - 6;

myVar tiene ahora el valor 6.

*/
/* class 13 MULTIPLICACION

Tambien podemos multiplicar un numero por otro.
javascript  usa el * simbolo para la multiplicacion de numeros

ejemplo

const myVar = 13 * 13;

myVar ahora tiene el valor de 169

*/
/* class 14 DIVICION

Tambien podemos dividir un numero por otro.
usando el simbolo / de division.

ejemplo

const myVar = 16 / 2;
ahora myVar tiene el valor de 8.

*/
/* class 15 INCREMENTO

Puedo incrementar o gregar facilmente uno a una variable con el 
simbolo ++ .

i++;

es el equivalente de i = i + 1;
entonces toda la linea se omite con el ++.

*/
/* class 16 DECREMENTAR 

puede disminuir una variable en uno con --.
i--;
es equivalente de
i = i - 1;
Toda la línea se convierte en i--; eliminando el exceso de codigo

*/
/* class 17 NÚMEROS DECIMALES

También podemos almacenar números decimales en variables.
Los números decimales a veces se denominan números de punto flotante o flotantes.

---No todos los números rales se pueden representar con precisión en punto flotante.
Esto puede dar lugar a errores de redondeo.

*/
/* class 18 MULTIPLICACIÓN DE DECIMALES

En javascript, también podemos realizar cálculos con números decimales.
al igual que con números enters.

*/
/* class 19 DIVIDICIÓN DE DECIMALES

tmbn podemos dividir decimales en javascript

por ejemplo:

const cociente = 4.4 / 2.0;

entonces la variable const cociente tiene en memoria el 
valor de 2.2

*/
/* class 20 ENCONTRAR EL RESTO

el operador resto % da el resto de la division de dos numeros

por ejempolo;
5 % 2 = 1 por que Math.floor(5/2) = 2 "cociente"
y el resto es 1

EN USO;
    en matematicas, se puede comprobar si un numero es par o impar comprobando el resto de la division entre 2.

    17 % 2 = 1 (17 es impar)
    48 % 2 = 0 (48 es par)

*/
/* class 21 ASIGNACION COMPUESTA CON SUMA AUMENTADA

en programacion es comun usar aignaciones para modificar el contenido de una variable. recordar que todo lo que 
esta a la derecha del signo igual se evalua primero,
por lo que podemos decir;

myVar = myVar + 5;

para agregar 5,
hay operadores que realizan tanto una operacion matematica como una asigncion en un solo paso.

uno de esos operadores es +=.

let myVar = 1;
myVar += 5;
console.log(myVar);

se mostro 6 en la consola

*/
/* class 22 ASIGNACION COMPUESTA CON RESTA AUMENTADA

al igual que += podemos operar -= para restar un 
numero de una variable.

myVar = myVar - 5;

resto es igualito a // myVar -= 5;


*/
/* class 23 ASIGNACION COMPUESTA CON MULTIPLICACION

el *=  operador multiplica una variable por un numero 

myVar = myVar * 5;

se multiplico por 5 entonces se puede reescribir como 

myVar *= 5;

*/
/* class 24 ASIGNACION COMPUESTA CON DIVICION

el /= operador divide una varible por otro numero.

myVar = myVar / 5;

se reescribe como

myVar /= 5;

*/
/* class 25 ESCAPE DE COMILLAS EN CADENAS

cuando este definienfo una cadena debo comenzar y terminar con una comilla simple o doble.
pero que pasa cuando necesito una cita literal dentro de una cadena ?

en javascipt, puedo evitar que una comilla se considere una comilla de fin de cadena colocando una barra invertida \ delante de la comilla.

const ejemplo = "alan dice, \" me gusta \".";

esto le indica a javascript que la siguiente cita no es el final de la cadena, sino que deberia aparecer dentro de la cadena. Entonces, si tuviera que imprimir esto en la consola, obtendria la frace complet con comillas.


*/
/* class 26 CITAR CADENAS CON COMILLAS SIMPLES

las comillas simples y dobles funcionan igual mientras nos aseguremos que comiencen y terminen con esta misma 
comilla.

no confundirse la barra invertida \ con la barra 
inclinada / por que hacen distintas cosas



*/
/* class 27 SECUENCIAS DE ESCAPE EN CADENAS

las comillas no son los únicos caracteres que se pueden escapar dentro de una cadena. Hay dos razones para usar caracteres de escape;

    1-para perimitirle usar caracteres que de otro modo no podría escribir, como un retorno de carro.
    2-para permitile representar múltiples comillas en una cadena sin que javascript malinterprete lo que quiere decir.
    
esto lo aprendimos en el desafio anterior.

código          pdodicción

\'          una frase
\"          comillas dobles
\\          barra invertida
\n          nueva línea
\r          retorno de carro
\t          pestaña
\b          límite de palabras
\f          alimentación de formulario

tener en cuenta que la barra invertida en sí debe tener escape para que se muestre como una barra invertid.

desafio, conseguir esta sintxis en consola

FirstLine
    \SecondLine
ThirdLine

resultado

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

*/
/* class 28 CONCATENACIÓN DE CADENAS CON EL OPERADOR + 

En javascript, cuando el + operador se usa con un string, se llama
operador de concatenación. puede crear una nueva cadena a partir de otras cadenas concatenándolas.

ejemplo

"my name is marco," + "i concatenate."

nota.---cuidado con los espacios. la concatenación no agraga espacios entre cadens concatenadas, por lo que debo agragarlos.

*/
/* class 29 CONCATENACIÓN DE CADENAS CON EL OPERADOR +=   

También podemos usar el += operador para concatenar una cadena al final de una variable de cadena existente. esto puede ser muy úril para dividir una cadena larga en carias línes.

nota.----cuidado con los espacios. la concatenación no grega espacios

ejemplo;

lat ourStr = "i come first. ";
ourStr += "i come second.";
console.log(ourStr);

la consola imprime i come first. i come second.

*/
/* class 30 CONSTRUCCIÓN DE CADENAS CON VARIABLES

a veces necesitaremos construir una cadena, al usar operadores de
concatenación (+), puedo insertar una o más variables en una cadena.

ejemplo

const ourName = "freeCodeCamp";
const ourStr = "hello, our name is " + ourName + ", how are you?";
console.log(ourStr);

la consola imprime hello, our name is freeCodeCamp, how are you?

*/
/* class 31 AGREGAR VARIABLES A CADENAS

asi com podemos construir una cadena en varias lineas a partir de literales de cadena, también podemos agregar variables a una cadena usando el += operador .

ejemplo;

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

imprime en la consola freeCodeCamp is awesome!
*/
/* class 32 ENCONTRAR LA LONGITUD DE UNA CADENA

Puedo encontrar la longitud de un string escribiendo .length 
después de la variable de cadena o el literal de cadena.

por ejemplo;

console.log("Alan Peter".length);

el valor seria 10 y se mostraria en la consola.
tener en cuenta que el carácter de espacio estre alan y peter tambien cuenta como caracter.

*/
/* class 33 USAR [] PARA ENCONTRAR LA PRIMERA LETRA

la notación de corchetes es una forma de obtener un carácter en un índice especifico dentro de una cadena.

la mayoría de los lenguajes de programación modernos, como javascript,
no comienzan a contar desde 1 como lo hacen los humanos. 
estos comienzan en 0.
esto se conoce como indexación basada en cero.

por ejemplo;

    el carácter en inice 0 de la palabra charles es c. entonces
    const firstName = "charles";    puede obtener el valor de la 
    primera letra de la cadena usando firstName[0].

    const firstName = "charles";
    const firstLetter = firstName[0];
    console.log(firstLetter);

    en consola imprime c.


*/
/* class 34 COMPRENDER LA INMUTABILIDAD DE CADENAS

En javascript, los string son inmutables, lo que significa que no se
pueden modificar una vez creados.

por ejemplo, el siguiente código.

let myStr = "bob";
myStr[0] = "J";

no se puede cambiar el valor de myStr a Job, porque el contenido de myStr no se puede modificar. tenga en cuanta que esto no significa que myStr no se puede cambiar, solo que los caracteres individuales de un literal de cadena no se pueden cambiar. la única forma de cambiras myStr sería asignarle con una nueva cadena, como esta:

let mtStr = "bob";
myStr = "Job";

*/
/* class 35 [] PARA ENCONTRAR EL CARÁCTER ENÉSIMO EN STRING

también puedo usar la notación de corchetes para obtener el carácter en otras posicionoes dentro de una cadena.

recordar que las computadoras comienzan en 0.

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);

secondLetterOfFirstName tendra el valor de d.

*/
/* class 36 [] PARA ENCONTRAR EL ÚLTIMO CARÁCTER DE UN STRING

Para obtener la última letra de una cadena, puede restar una de la
longitud de la cadena.
Por ejemplo, si const firstName = "Ada", puede obtener el valor de la última letra de la cadena usando firstName[firstName.length - 1].

ejemplo;

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

lastLettertendría un valor de la cadena a.

*/
/* class 37 [] PARA ENCONTRAR LA N-SIMA A ULTIMO CÁRACTER

Puede usar el mismo principio que acabamos de usar para recuperar el último carácter de una cadena para recuperar el enésimo hasta el último carácter.

Por ejemplo, puede obtener el valor de la penúltima letra de la const firstName = "Augusta"cadena utilizandofirstName[firstName.length - 3]

por ejemplo;

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];

thirdToLastLettertendría un valor de la cadena s.

*/
/* class 38 PALABRAS EN BLANCO

ahora usaremos nuestro conocimiento de las cadenas para crear un juego 
de palbras al que llamaremos "palabras en blanco". crearé una oración de estilo "complete los espacios en blanco" (opcionalmente humorística)

en un juego de palabras, se le proporcionan oraciones con algunas palabras faltantes, como sustantivos, verbos, adjetivos y adverbios.
luego completa las piezas que faltan con palabras de su elección de manera que la oración completa tenga sentido.

considerar esta oración:    

fue realmente___, y nosotros____nosotros mismos____.

a esta oración le faltan tres piezas: adjetivo, verbo y un adverbio,
y podemos agragar palabras de nuestra elección para completarla. 
entonces podemos asignar la oración completa a una variable de la siguiente manera:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";


*/
/* class 39 ALMACENAR MULTIPLES VALORES

con las variables de javascript array. podemos almacenar vaios datos en
un solo lugar.
comenzar una declaración de matriz con un corchete de apertura, la finaliza con un corchete de cierre y coloca una coma entre cada entrada, así:

const sandwich = ["peanut butter", "jelly", "bread"];

*/
/* calss 40 ANIDAR UNA MATRIZ DENTRO DE OTRA MATRIZ

también podemos anidar arreglos dentro de otros arreglos,
como a continuación:

const teams = [["Bulls", 23], ["White Sox", 45]];

esto se le llama tmbn como una matriz multidimensional.

*/
/* class 41 ACCEDER A DATOS DE MATRIZ CON INDICES

podemos acceder a los datos dentro de las matrices usando indices.

los índices de matriz se escriben en la misma notación de paréntesis que usan las cadenas, excepto que en lugar de especificar un carácter, especifican una entrada en la matriz. al igual que las cadenas, 
las matrices usan indexación basada en cero, por lo que el primer elemento de una matriz tiene un índice de 0,

ejemplo:

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

La console.log(array[0])imprime 50, y datatiene el valor 60.

*/
/* class 42 MODIFICAR DATOS DE MATRIZ CON ÍNDICES

a diferencia de las cadenas, las entradas de los arreglos son mutables y
se pueden cambiar libremente, incluso si el arreglo se declaró con const

ejemplo;

const ourArray = [50, 40, 30];
ourArray[0] = 15;

ourArrayahora tiene el valor [15, 40, 30].

nota-----no debe haber espacios entre el nombre de la matriz y los 
corchetes, como array [0].
aunque javascript puede procesar esto correctamente, esto puede confundir a otros programadores al leer su código.

*/
/* calss 43 ACCEDA A ARREGLOS MULTIDIMESIONALES CON ÍNDICES

Una forma de pensar en una matriz multidimensional es como una matriz de matirces. cuando usa corchetes para acceder a su matriz, el 
primer conjunto de corchetes se refiere a las entradas en la matriz más externa (el primer nivel), y cada par adicional de corchetes se refiere al siguiente nivel de entradas en el interior.

ejemplo;

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];

arr[3]es [[10, 11, 12], 13, 14], arr[3][0]es [10, 11, 12]y arr[3][0][1]es 11.

nota-----no debe haber escpacios entre el nombre de la matriz y los corchetes, como array [0] [1] e incluso esto array [0] [0] no está permitido. aunque javascript puede procesar esto correctamente, esto puede confundir a otros programadores al leer su código.

exercise-1

Usando la notación de paréntesis, seleccione un elemento de myArraytal que myDatasea igual a 8.

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);

*/
/* class 44 MANIPULAR ARREGLOS CON PUSH()

una manera fácil de agregar datos al final de una matriz es a través
de la push() función.
.push() toma uno o más parámetros y los "empuja" al final de la matriz.

ejemplo:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

arr1ahora tiene el valor [1, 2, 3, 4]y arr2tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].

--------------------------------------------------------------------

exercise-1----Empuje ["dog", 3]hacia el final de la myArrayvariable.

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

myArray.push(["dog", 3]);

*/
/* class 45 MANIPULAR ARREGLOS CON POP()

otra forma de cambiar los datos en una matriz es con la .pop() 
función.
.pop() se utiliza para extraer un valir del final de una matriz. podemos almacenar este valor extraído asignándolo a una variable. 
en otras palabras, .pop() elimina el último elemento de una matriz y devuelve ese elemento.

cualquier tipo de entrada se puede extraer de una matriz; número, 
cadenas, incluso matrices anidadas.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

El primero console.logmostrará el valor 6 y el segundo mostrará el valor [1, 4].

---------------------------------------------------------------------

ejercicio-1

Utilice la .pop()función para eliminar el último elemento myArrayy asignar el valor extraído a una nueva variable, removedFromMyArray.

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

const removedFromMyArray = myArray.pop();

*/
/* class 46 MANIPULAR MATRICES CON SHIFT()

pop() siempre elimina el úlrimo elemento de una matriz.
¿ qué sucede si desea eliminar el primero ?
ahí es donde .shift() entra en juego. funciona igual que .pop(),
excepto que elimina el primer elemento en lugar del último.

ejemplo:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

removedFromOurArraytendría un valor de la cadena Stimpsony ourArraytendría ["J", ["cat"]].

-----------------------------------------------------------------

ejercicio-1

Utilice la .shift()función para eliminar el primer elemento myArrayy asignar el valor "desplazado" a una nueva variable, removedFromMyArray.

solucion:

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

const removedFromMyArray = myArray.shift([0]);

*/
/* class 47 MANIPULAR MATRICES CON UNSHIFT()

no sólo puede shift sacar elementos del primcipio de una matriz, sino que también puede unshift agregar elementos al principio de una matriz, es decir, agregar elementos delante de la matriz.

.unshift() funciona exactamente igual que .push() , pero en lugar
de agregar el elemento al final de la matriz, unshift() agrega
el elemento al principio de la matriz.

ejemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

Después de shift, ourArraytendría el valor ["J", "cat"]. Después de unshift, ourArraytendría el valor ["Happy", "J", "cat"].

---------------------------------------------------------------------

ejercicio-1

Agregue ["Paul", 35]al comienzo de la myArrayvariable usando unshift().

solucion:

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

myArray.unshift(["Paul", 35]);

*/
/* class 48 LISTA DE LA COMPRA

crea una lista de compras en la variable myLista .
la lista debe ser una matriz multidimensional que contenga 
verias sub-matrices.

el primer elemento de cada subarreglo debe contener una cadena con 
el nombre del elemento. 
el segundo elemento debe ser un número que represente la cantidad,
es decir

["Chocolate Bar", 15]

debe haber al menos 5 sub-matrices en la lista.

-------------------------------------------------------------------

solucion

const myList = [
  ["Chocolate Bar", 15],
  ["apple", 8],
  ["banana", 4],
  ["orange",9],
  ["berry", 2]
];

*/
/* class 49 ESCRIBIR JAVASCRIPT REUTILIZABLE CON FUNCIONES

En javascript, podemos dividir nuestro código en partes 
reutilizables llamadas funciones. 
he aquí un ejemplo de una funcion:

function functionName() {
  console.log("Hello World");
}

puede llamar o invocar esta función usando su nombre seguido de
paréntesis, así:
functionName(); cada vez que se llame a la función, se imprimirá el 
mensaje hello world en la consola. todo el código entre llaves se ejecutará cada vez que se llame a la fución.

*/
/* */
/* */
/* */
/* */
/* */
/* */
/* */
