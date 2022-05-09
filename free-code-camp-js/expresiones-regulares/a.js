/* class 1 usa el método "test"

Las expresiones regulares se utilizan en lenguajes de programación para 
coincidir con partes de cadenas. Creas patrones para ayudarte a hacer esa 
coincidencia.

Si quieres encontrar la palabra the en la cadena The dog chased the cat, 
puedes utilizar la siguiente expresión regular: /the/. Ten en cuenta que 
las comillas no son requeridas dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una 
forma de probar una expresión regular es usando el método .test(). El 
método .test() toma la expresión regular, la aplica a una cadena (que se 
coloca dentro de los paréntesis), y devuelve true o false si tu 
patrón encuentra algo o no.

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

En el desafío anterior, buscaste la palabra Hello usando la expresión 
regular /Hello/. Esa expresión regular buscó una coincidencia literal de 
la cadena Hello. Aquí hay otro ejemplo donde se busca una coincidencia 
literal de la cadena Kevin:

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
Esta llamada a test devolverá true.

Cualquier otra variante de Kevin no coincidirá. Por ejemplo, la expresión 
regular /Kevin/ no coincidirá con kevin o KEVIN.

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

Al utilizar expresiones regulares como /coding/, puedes buscar el patrón 
coding en otra cadena.

Esto es muy potente al buscar cadenas individuales, pero está limitado a 
un solo patrón. Puedes buscar múltiples patrones usando el operador 
alternation o OR: |.

Este operador coincide con los patrones antes o después de él. Por 
ejemplo, si deseas coincidir con las cadenas yes o no, la expresión 
regular que quieres es /yes|no/.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo 
más patrones con más operadores OR separándolos, como /yes|no|maybe/.

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
/* class 4 ignora la capitalización al coincidir

Hasta ahora, has visto expresiones regulares para hacer coincidir cadenas 
literales. Pero a veces, tal vez quieras hacer coincidir las diferencias 
de capitalización.

La capitalización (o también llamada capitalización de letra) es la 
diferencia entre mayúsculas y minúsculas. Ejemplos de mayúsculas son A, B 
y C. Ejemplos de minúsculas son a, b y c.

Puedes coincidir ambos casos utilizando algo llamado bandera. Existen 
otras banderas, pero aquí te centrarás en la que ignora la capitalización 
de las letras, la bandera i. Puedes usarla añadiéndola a la expresión 
regular. Un ejemplo de uso de esta bandera es /ignorecase/i. Esta 
expresión regular puede coincidir con las cadenas ignorecase, igNoreCase 
e IgnoreCase.

----------------------------------------------------------------
ejercicio;

escribe una expresión regular fccRegex para que coincida con freeCodeCamp
sin importar su capitalización.
tu expresión regular no debe coincidir con ninguna abreviatura o variación
con espacios.

let myString = "freeCodeCamp";
let fccRegex = /change/; // Cambia esta línea
let result = fccRegex.test(myString);


solución;

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Cambia esta línea
let result = fccRegex.test(myString);

*/
/* class 5 extrae coincidencias

Hasta ahora, sólo has estado comprobando si un patrón existe o no dentro 
de una cadena. También puedes extraer las coincidencias encontradas con 
el método .match().

Para utilizar el método .match(), aplica el método a una cadena y pasa la 
expresión regular dentro de los paréntesis.

Este es un ejemplo:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
Aquí el primer match devolverá ["Hello"] y el segundo devolverá 
["expressions"].

Ten en cuenta que la sintaxis .match es lo "opuesto" al método .test que 
has estado utilizando hasta ahora:

'string'.match(/regex/);
/regex/.test('string');

-------------------------------------------------------------------}
ejercicio;

aplica el método .match() para extraer la cadena coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Cambia esta línea
let result = extractStr; // Cambia esta línea


solución; 

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Cambia esta línea
let result = extractStr.match(codingRegex); // Cambia esta línea

*/
/* class 6 encuentra más que la primera coincidencia

Hasta ahora, sólo has podido extraer o buscar un patrón una vez.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

Aquí match devolverá ["Repeat"].

Para buscar o extraer un patrón más de una vez, puedes utilizar la 
bandera g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

Y aquí match devuelve el valor ["Repeat", "Repeat", "Repeat"]

------------------------------------------------------------------------
ejercicio;

Utilizando la expresión regular starRegex, encuentra y extrae ambas
 palabras Twinkle de la cadena twinkleStar.

Nota
En tu expresión regular puedes utilizar múltiples banderas, 
como /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Cambia esta línea
let result = twinkleStar; // Cambia esta línea


solución;

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Cambia esta línea
let result = twinkleStar.match(starRegex); // Cambia esta línea


*/
/* class 7 haz coincidir cualquier cosa con el comodín punto

A veces no conoces (o no necesitas conocer) los caracteres exactos en tus 
patrones. Pensar en todas las palabras que coincidan, digamos, con una 
ortografía errónea llevaría mucho tiempo. Afortunadamente, puedes ahorrar 
tiempo utilizando el carácter de comodín: .

El carácter de comodín . coincidirá con cualquier carácter único. El 
comodín también es llamado dot y period. Puedes utilizar el carácter de 
comodín como cualquier otro carácter en la expresión regular. Por 
ejemplo, si quieres hacer coincidir hug, huh, hut, y hum, puedes usar la 
la expresión regular /hu./ para que coincida con las cuatro palabras.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

Ambas llamadas a test devolverán true.

---------------------------------------------------------------------
ejercicio;

Completa la expresión regular unRegex para que coincida con las cadenas 
run, sun, fun, pun, nun, y bun. Tu expresión regular debe usar el 
carácter de comodín.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Cambia esta línea
let result = unRegex.test(exampleStr);


solución;

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result = unRegex.test(exampleStr);

*/
/* class 8 haz coincidir un solo carácter con múltiples posibilidades

Aprendiste cómo hacer coincidir los patrones literales (/literal/) y el 
carácter de comodín (/./). Estos son los extremos de las expresiones 
regulares, donde uno encuentra coincidencias exactas y el otro coincide 
de todo. Hay opciones que representan un equilibrio entre los dos 
extremos.

Puedes buscar un patrón literal con cierta flexibilidad utilizando las 
clases de caracteres. Las clases de caracteres te permiten definir un 
grupo de caracteres que deseas coincidir colocándolos dentro de corchetes 
([ y ]).

Por ejemplo, si quieres hacer coincidir bag, big, y bug pero no bog. 
Puedes crear la expresión regular /b[aiu]g/ para hacer esto. [aiu] es la 
clase de caracteres que solo coincidirá con los caracteres a, i, o u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
En orden, las cuatro llamadas de match devolverán los valores ["big"], 
["bag"], ["bug"], and null.

---------------------------------------------------------------------
ejercicio;

Usa una clase de caracteres con las vocales (a, e, i, o u) en tu 
expresión regular vowelRegex para encontrar todas las vocales en la 
cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como 
minúsculas.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Cambia esta línea
let result = vowelRegex; // Cambia esta línea


solución:

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Cambia esta línea
let result = quoteSample.match(vowelRegex); // Cambia esta línea

*/
/* class 9 haz coincidir las letras del alfabeto

Has visto cómo puedes usar los conjuntos de caracteres para especificar 
un grupo de caracteres a coincidir, pero eso requiere escribir mucho 
cuando necesitas coincidir con un amplio rango de caracteres (por 
ejemplo, cada letra en el alfabeto). Afortunadamente, hay una 
funcionalidad incorporada que hace esto corto y sencillo.

Dentro de un conjunto de caracteres, puedes definir un rango de 
caracteres a coincidir usando un carácter de guion: -.

Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e 
usarías [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

En orden, las tres llamadas a match devolverán los valores ["cat"], 
["bat"] y null.

------------------------------------------------------------------
ejercicio;

haz coincidir todas las letras en la cadena quoteSample.
nota---- asegúrate de hacer coincidir tanto las letras mayúsculas como 
minúsculas.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Cambia esta línea
let result = alphabetRegex; // Cambia esta línea


solución;

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Cambia esta línea
let result = quoteSample.match(alphabetRegex); // Cambia esta línea

*/
/* class 10 haz coincidir los números y las letras del alfabeto

Usar el guión (-) para coincidir con un rango de caracteres no está 
limitado a letras. También funciona para hacer coincidir un rango de 
números.

Por ejemplo, /[0-5]/ coincide con cualquier número entre 0 y 5, 
incluyendo 0 y 5.

Además, es posible combinar un rango de letras y números en un único 
conjunto de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

------------------------------------------------------------------
ejercicio;

crea una sola expresión regular que coincida con un rango de letras 
entre h y s, y un rango de números entre 2 y 6.
recuerda incluir las banderas apropiadas en la expresión regular.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Cambia esta línea
let result = myRegex; // Cambia esta línea


solución;

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea

*/
/* class 11 haz coincidir caracteres individuales no especificados

Hasta ahora, has creado un conjunto de caracteres que deseas coincidir, 
pero también podrías crear un conjunto de caracteres que no desees 
coincidir. Este tipo de conjuntos de caracteres se llaman conjuntos de }
caracteres negados.

Para crear un conjunto de caracteres negados colocas un carácter de 
intercalación (^) después del corchete de apertura y antes de los 
caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son 
una vocal. Ten en cuenta que caracteres como ., !, [, @, / y el espacio 
en blanco coinciden; el conjunto de caracteres de vocal negados sólo 
excluye los caracteres de vocal.

-----------------------------------------------------------------------
ejercicio;

crea uns sola expresión regular que coincida con todos los caracteres
que no son un número o una vocal.
recuerda incluir las banderas apropiadas en la expresión regular.

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Cambia esta línea
let result = myRegex; // Cambia esta línea


solución;

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea

*/
/* class 12 haz coincidir caracteres que aparecen una o más veces

A veces, es necesario coincidir con un carácter (o grupo de caracteres) 
que aparezca una o más veces seguidas. Esto significa que aparece al menos 
una vez, y puede repetirse.

Puedes usar el carácter + para comprobar si es así. Recuerda, el carácter 
o patrón debe estar presente consecutivamente. Es decir, el carácter tiene 
que repetirse uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría ["a"]. 
Debido al +, también encontraría una sola coincidencia en aabc y 
regresaría ["aa"].

Si en su lugar estuvieras comprobando la cadena abab, se encontrarían dos 
coincidencias y regresaría ["a", "a"] porque los caracteres a no están en 
fila; hay una b entre ellos. Finalmente, dado que no hay una a en la 
cadena bcd, no se encontraría una coincidencia.

------------------------------------------------------------
ejercicio;

quieres encontrar coincidencias cuando la letra s ocurre una o más veces 
Mississippi.
escribe una expresión regular que utilice el signo +.

let difficultSpelling = "Mississippi";
let myRegex = /change/; // Cambia esta línea
let result = difficultSpelling.match(myRegex);


solución;

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Cambia esta línea
let result = difficultSpelling.match(myRegex);

*/
/* class 13 haz coincidir caracteres que aparecen cero o más veces

El último desafío utilizó el signo más + para buscar caracteres que 
aparecen una o más veces. También hay una opción para hacer coincidir 
caracteres que aparecen cero o más veces.

El carácter que hace esto es el asterisco o la estrella: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";          
// let goRegex = /go* /;            
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

En orden, los tres match devolverán los valores ["goooooooo"], ["g"], y 
null.

--------------------------------------------------------------------
ejercicio;

Para este desafío, chewieQuote ha sido inicializada entre bastidores con 
la cadena Aaaaaaaaaaaaaaaarrrgh!. Crea una expresión regular chewieRegex 
que utilice el carácter * para encontrar el carácter A mayúscula seguido 
inmediatamente por cero o más caracteres a minúscula en chewieQuote. Tu }
expresión regular no necesita banderas o clases de caracteres, y no debe }
coincidir con ninguna de las otras comillas.

// Cambia solo el código debajo de esta línea
let chewieRegex = /change/; // Cambia esta línea
// Cambia solo el código encima de esta línea

let result = chewieQuote.match(chewieRegex);


solución:

// Cambia solo el código debajo de esta línea
// let chewieRegex = /Aa* /; // Cambia esta línea
// Cambia solo el código encima de esta línea

// let result = chewieQuote.match(chewieRegex);

*/
/* class 14 encuentra caracteres con una coincidencia perezosa

En las expresiones regulares, una coincidencia codiciosa encuentra la 
parte más larga posible de una cadena que se ajusta al patrón de la 
expresión regular y la devuelve como una coincidencia. La alternativa es 
llamada coincidencia perezosa, la cual encuentra la parte más pequeña 
posible de la cadena que satisface el patrón de la expresión regular.

Puedes aplicar la expresión regular /t[a-z]*i/ a la cadena "titanic". Esta 
expresión regular es básicamente un patrón que comienza con t, termina con 
i, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la 
coincidencia devolvería ["titani"]. Encuentra la sub-cadena más grande 
posible que se ajusta al patrón.

Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia 
perezosa. "titanic" al coincidir con la expresión regular ajustada de /t
[a-z]*?i/ devuelve ["ti"].

Nota: Se debe evitar analizar HTML con expresiones regulares, pero 
coincidir patrones con una cadena HTML utilizando expresiones regulares 
está completamente bien.

-------------------------------------------------------------------
ejercicio:

Corrige la expresión regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is coming</h1>". Recuerda que el comodín . en una expresión regular coincide con cualquier carácter.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Cambia esta línea
let result = text.match(myRegex);


solución;

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Cambia esta línea
let result = text.match(myRegex);

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