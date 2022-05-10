/* class 18 coincidir todas las letras y números 

Usando clases de caracteres, pudiste buscar todas las letras del 
alfabeto con [a-z]. Este tipo de clase de caracteres es tan común 
que existe un atajo para él, aunque también incluye algunos 
caracteres adicionales.

La clase de caracteres más cercana en JavaScript para coincidir con }
el alfabeto es \w. Este atajo equivale a [A-Za-z0-9_]. Esta clase de 
caracteres coincide con letras mayúsculas y minúsculas más números. 
Ten en cuenta que esta clase de caracteres también incluye el 
carácter de guión bajo (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

Las cuatro llamadas a test devolverán true.

Estos atajos de clases de caracteres también son conocidos como 
clases de caracteres abreviados.

-------------------------------------------------------------
ejercicio;

Utiliza la clase de caracteres abreviada \w para contar el número de 
caracteres alfanuméricos en varias citas y cadenas.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;


solución;

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;

*/
/* class 19 haz coincidir todo menos letras y números

Has aprendido que puedes usar un atajo para emparejar alfanuméricos 
[A-Za-z0-9_] usando \w. Un patrón natural que tal vez quieras buscar 
es lo contrario a la alfanumérica.

Puedes buscar lo contrario de \w con \W. Ten en cuenta, el patrón 
contrario usa letra mayúscula. Este atajo es lo mismo que 
[^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

El primer match devuelve el valor ["%"] y el segundo devuelve ["!"].

-------------------------------------------------------------------
ejercicio;

usa la clase de caracteres abreviados \w para contar el número de 
caracteres no alfanuméricos en varias comillas y cadenas.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;


solución;

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;

*/
/* class 20 coincide con todos los números

Has aprendido atajos para patrones de cadenas comunes como los 
alfanuméricos. Otro patrón común es buscar solo dígitos o números.

El atajo para buscar caracteres de dígitos es \d, con una d 
minúscula. Esto es igual a la clase de caracteres [0-9], la cual 
busca un solo carácter de cualquier número entre cero y nueve.

------------------------------------------------------------
ejercicio;

Usa la clase de caracteres abreviada \d para contar cuántos dígitos 
hay en los títulos de las películas. Los números escritos ("seis" en 
lugar de 6) no cuentan.

let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Cambia esta línea
let result = movieName.match(numRegex).length;


solución;

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let result = movieName.match(numRegex).length;

*/
/* class 21 coincida con todos los caracteres no numéricos

El último desafío mostró cómo buscar dígitos usando el atajo \d con 
una d minúscula. También puedes buscar caracteres que no sean 
dígitos usando un atajo similar que utilice una D mayúscula en su 
lugar.

El atajo para buscar caracteres que no sean dígitos es \D. Esto es }
igual a la clase de caracteres [^0-9], el cual busca un único 
carácter que no sea un número entre cero y nueve.

-------------------------------------------------------------+
ejercicio;

usa la clase de caracteres abreviado \D para contar cuántos caracteres que no sean dígitos hay en los titulos de las películas.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Cambia esta línea
let result = movieName.match(noNumRegex).length;


solución;

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea
let result = movieName.match(noNumRegex).length;

*/
/* class 22 restringe posibles nombres de usuario

Los nombres de usuario se utilizan en todas partes en Internet. Son 
los que dan a los usuarios una identidad única en tus sitios 
favoritos.

Se necesita comprobar todos los nombres de usuario en una base de 
datos. Estas son algunas reglas simples que los usuarios deben seguir 
al crear su nombre de usuario.

Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

Los únicos números del nombre de usuario tienen que estar al final. 
Puede tener un cero o más al final. El nombre de usuario no puede 
iniciar con un número.

Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre 
de usuario de dos caracteres sólo puede utilizar letras del alfabeto 
como caracteres.

----------------------------------------------------------------
cambia la expresión regular userCheck para que se ajuste a las
restricciones indicadas anteriormente.

let username = "JackOfAllTrades";
let userCheck = /change/; // Cambia esta línea
let result = userCheck.test(username);


solución:

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Cambia esta línea
let result = userCheck.test(username);

*/
/* class 23 haz coincidir espacios en blanco

Los desafíos por el momento han cubierto las letras que coinciden con 
el alfabeto y los números. También puedes hacer que coincidan los 
espacios en blanco o los espacios entre las letras.

Puedes buscar los espacios en blanco usando \s que es una s 
minúscula. Este patrón no solo coincide con los espacios en blanco, 
también con los caracteres de retorno de carro, tabulaciones, 
alimentación de formulario y saltos de línea. Puedes pensar que es 
similar a las clases de caracteres [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

Esta llamada a match debe devolver [" ", " "].

----------------------------------------------------------------
ejercico;

Cambia la expresión regular countWhiteSpace para buscar múltiples 
caracteres de espacio en blanco en una cadena.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Cambia esta línea
let result = sample.match(countWhiteSpace);


solución;

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Cambia esta línea
let result = sample.match(countWhiteSpace);

*/
/* class 24 haz coincidir caracteres que no sean espacios en blanco

Aprendiste a buscar espacios en blanco usando \s, con una s en 
minúscula. También puedes buscar todo excepto los espacios en blanco.

Busca caracteres que no sean espacios en blanco usando \S, la cual es 
una s mayúscula. Este patrón no coincidirá con los caracteres de 
espacios en blanco, retorno de carro, tabulaciones, alimentación de 
formulario y saltos de línea. Puedes pensar que es similar a la clase 
de caracteres [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;

El valor devuelto por el método .length sería 32.

-----------------------------------------------------------------
ejercicio;

cambia la expresión regular countNonWhiteSpace para buscar varios 
caracteres que no sean espacios en blanco en una cadena.

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);


solución;

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let result = sample.match(countNonWhiteSpace);

*/
/* class 25 especifica el menor y mayor número de coincidencias

Recuerda que se utiliza el signo más + para buscar uno o más 
caracteres y el asterisco * para buscar cero o más caracteres. Esto es 
conveniente, pero a veces quieres coincidir con cierta gama de 
patrones.

Puedes especificar el número inferior y superior de patrones 
utilizando especificadores de cantidad. Para los especificadores de 
cantidad utilizamos llaves ({ y }). Pon dos números entre las llaves - 
para el número inferior y superior de patrones.

Por ejemplo, para que coincida con la letra a si aparece entre 3 y 5 
veces en la cadena ah, la expresión regular debe ser /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

La primera llamada a test devuelve true, mientras que la segunda 
devuelve false.

----------------------------------------------------------------------
ejercicio;

modifica la expresión regular ohRegex para que coincida con toda la 
frase Oh no solo cuando tenga de 3 a 6 letras h.

let ohStr = "Ohhh no";
let ohRegex = /change/; // Cambia esta línea
let result = ohRegex.test(ohStr);


solución;

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Cambia esta línea
let result = ohRegex.test(ohStr);

*/
/* class 26 especifica solo el menor número de coincidencias

Puedes especificar el número inferior y superior de patrones mediante 
especificadores de cantidad utilizando llaves. A veces sólo se quiere 
especificar el número inferior de patrones sin tener un límite 
superior.

Para especificar sólo el número inferior de patrones, mantén el primer 
número seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena hah cuando la 
letra a aparezca al menos 3 veces, la expresión regular sería /ha{3,}h/

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);

En orden, las tres llamadas a test devuelven true, false y true.

-------------------------------------------------------------------
modifica la expresión regular haRegex para coincidir con la palabra
Hazzah solo cuando ésta tiene cuatro o más letras z.

let haStr = "Hazzzzah";
let haRegex = /change/; // Cambia esta línea
let result = haRegex.test(haStr);


solución;

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let result = haRegex.test(haStr);

*/
/* class 27 especifica el número exacto de coincidencias

Puedes especificar el número inferior y superior de patrones mediante 
especificadores de cantidad utilizando llaves. A veces solo quieres un 
número específico de coincidencias.

Para especificar un cierto número de patrones, simplemente pon ese 
número entre corchetes.

Por ejemplo, para que coincida con la palabra hah solo con la letra a 3 
veces, tu expresión regular sera /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);

En orden, las tres llamadas a test devuelven false, true y false.

------------------------------------------------------------------
ejercicio;

Modifica la expresión regular timRegex para hacer coincidir con la 
palabra Timber solo cuando esta tiene cuatro letras m.

let timStr = "Timmmmber";
let timRegex = /change/; // Cambia esta línea
let result = timRegex.test(timStr);


solución;

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Cambia esta línea
let result = timRegex.test(timStr);

*/
/* */