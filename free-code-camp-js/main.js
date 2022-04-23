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
