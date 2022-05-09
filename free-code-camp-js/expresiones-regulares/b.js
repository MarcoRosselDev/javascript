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
/* */
/* */
/* */
/* */
/* */
/* */
/* */