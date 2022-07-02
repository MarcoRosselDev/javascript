/*1 ------
4
¿Qué valor le tenemos que asignar a

<script src="index.js" type="..." >

para que el archivo no añada valores al ámbito global?
-------------------------------------------------
defer xxx
-------------------------------------------------
async xxx
-------------------------------------------------
async /puede ser.xxx
-------------------------------------------------
nada si esta asta el final **********
-------------------------------------------------

*/
/*2 

¿Qué atributo usamos cuando queremos que la petición de un script sea asíncrona pero que tan pronto termine de
cargar, el script se ejecute?

-------------------------------------------------
defer xxx
-------------------------------------------------
Ninguno xxx
-------------------------------------------------
async **********
-------------------------------------------------
async /puede ser/ o nada si es que esta asta el final
-------------------------------------------------

*/
/*5
9
¿Cómo pasamos los argumentos a una función utilizando apply?
-------------------------------------------------
Separando cada argumento con una coma.xxx
-------------------------------------------------
lo pasamos como partes de un arreglo :
    caminar.apply(richar, [800, 'noreste]);

hace lo mismo que call 
pero apply puede resivir una variable con el arreglo:

const valores = [800, 'noreste']
caminar.apply(richar, valores);
-------------------------------------------------

*/
/*25
9
¿Cómo pasamos los argumentos a una función utilizando call?
-------------------------------------------------
Con un objeto donde cada key es el nombre del argumento, y el valor es el valor que queremos pasar.
-------------------------------------------------
además del contexto tengo que pasarle los valores:
    caminar.call(richar, 400, 'norte');

    (this, es el conxto = richar)
-------------------------------------------------
*/
/*26 ------
9
¿Cómo pasamos los argumentos a una función utilizando bind?
-------------------------------------------------
Con un arreglo donde cada argumento es un elemento.xxx
-------------------------------------------------
Con un objeto donde cada key es el nombre del argumento, y el valor es el valor que queremos pasar. xxx
-------------------------------------------------
-------------------------------------------------
Con un HTMLArgumentsList. xxx
-------------------------------------------------
-------------------------------------------------
construlle una nueva función que tendra el this integrado,
podremos guardar los valores (300, "este"), en la misma función o se los podemos dar al llamar la función.
es muy flexible.
-------------------------------------------------
*/
/*6

¿Qué hace la keyword new?
-------------------------------------------------
Invoca la función prototype de otro objeto.
-------------------------------------------------
es un atajo, lo que se conose como azucar sintactica :
    algo que le añadimos al lenguaje para facilitar el proceso pero son cosas que ya se podian hacer.
    = Object.create()
-------------------------------------------------
*/
/*7

¿Cuál de estos es el objeto que heredaran las "instancias" de un objeto?
-------------------------------------------------
__proto__
-------------------------------------------------
Object es el punto de partida de todo los objetos
Object.getPropertyOf()
hasOwnProperty() nos sirve para saber si pertenese a x
-------------------------------------------------
*/
/*8 
12
¿Cómo se llama la estructura de datos que representa un versión del código que el interpretador puede procesar?
-------------------------------------------------
Parser xxx
-------------------------------------------------
Tokenizer xxx
-------------------------------------------------
[[Abstract Syntax Tree]], {
    iterpreter              ________,
        bytecode                    |
        Optimizing Compiler---Optimized code
}
-------------------------------------------------
Tokens
-------------------------------------------------
*/
/*10
15
¿Qué queue[cola] tiene mayor prioridad?
-------------------------------------------------
Scheduled Tasks
-------------------------------------------------
stack --- > apunta a varaibles como el Scope{...}
    por ahora la prioridad es el orden de llegada como en una cola en el banco.

    MICROTASKS QUEUE
    las microtareas tienen prioridad sobre quien llego primero,
    por lo que si en una promesa tenemos un conosle.log(),
    se ejecutara primero,
    en caso de más promesas los ejecutara en orden de lectura del codigo, "promesa1, promesa2, ..."
-------------------------------------------------
*/
/*12
17
¿Cuál es la sintaxis correcta para definir un getter?
-------------------------------------------------
{ get answer = () => 42 }
-------------------------------------------------
get muted(){
    return this.media.muted;
},  ...
-------------------------------------------------
*/
/*13
18
¿Cuál de estas operaciones puede ser interceptada por un Proxy?
-------------------------------------------------
Operaciones aritméticas
-------------------------------------------------
(target, handler) 
    el target es el que queremos interceptar
    antes de que la llamada llegue a este objeto lo queremos inteceptar...
-------------------------------------------------
var handler = {
    set(.target, property, value){...},
    get(terget, property){...}
}

var proxy = new Proxy(target, handler)
-------------------------------------------------
*/
/*14
19
¿Con qué keyword(palabra clave) un generator puede detener su ejecución?
-------------------------------------------------
done
-------------------------------------------------
yield;
podemos aplicar n...yields:
    yield 1;
    yield 2;
    yield 3;
        se va a detener en el 1 y si lo arrancamos denuevo se detendra en el yield 2.   
-------------------------------------------------
*/
/*15
20
¿Qué "clase" usamos para crear un signal que sirva para detener un fetch?
-------------------------------------------------
FetchController
-------------------------------------------------
AbortController
-------------------------------------------------
*/
/*17
22
Eres el desarrollador de un e-commerce. En la página hay un carrusel que muestra los artículos con descuento y automáticamente cambia de slide. 
Cuando el usuario cambia de tab(pestaña), tienes que asegurarte que el carrusel se detiene. ¿Qué API del DOM usarías para detectar si el tab del e-commerce sigue activo?
-------------------------------------------------
IntersectionObserver
-------------------------------------------------
visibilityChange
-------------------------------------------------
*/
/*18 ------
23
¿Cuál event disponible en los [(service workers)] usas para pre-cache de assets de una página y prepararla para funcionar offline ?
-------------------------------------------------
activate xxx
-------------------------------------------------
fetch xxx
-------------------------------------------------
init xxx
-------------------------------------------------
Update on reload (activado para que funcione offline)
    event.respondWith(cachedResponde(request));
        guarda en cache y funcióna offline
    event.waitUntil(updateCache(request));
        guarda en cache y funcióna offline y recarga si vuelve el internet.
-------------------------------------------------
*/
/*19
30
¿Cómo se define mejor qué es un patrón de diseño?
-------------------------------------------------
Una lista de pasos a seguir para resolver problemas comunes en diseño de software.
-------------------------------------------------
Son soluciones generales ya probadas dentro de un contexto que las limita a problemas frecuentes que nos encontramos en el desarrollo de software.
-------------------------------------------------
*/
/*20
32
Necesitas una clase de la cual solo exista una instancia. ¿Qué patrón usarías?
-------------------------------------------------
Decorator
-------------------------------------------------
Singleton:
    Es un patrón que te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.
-------------------------------------------------
*/
/*24 ------
41
Considera el código
    import MediaPlayer from '@sparragus/platzimediaplayer'

¿Cuál propiedad del package.json define el archivo de la biblioteca que sería importado?
-------------------------------------------------
dependencies xxx
-------------------------------------------------
name xxx
-------------------------------------------------
version xxx
-------------------------------------------------
devDependencies
"name": "@sparragus/platzimediaplayer"
-------------------------------------------------
*/
/*27
16
¿Qué pasa cuando tres de las promesas en Promise.race se resuelven?
-------------------------------------------------
Se regresan los valores de las promesas que fueron resueltas y los errores de las rechazadas
-------------------------------------------------
Promise.race. 
    Regresa sólo la promesa que se resuelva primero.
-------------------------------------------------
*/
/*28 
5
¿Cuál es la diferencia entre var y let al ser declaradas en una función?
-------------------------------------------------
var tiene global scope y let tiene function scope.xxx
-------------------------------------------------
var tiene global scope y let tiene block scope. xxx
-------------------------------------------------
let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.
-------------------------------------------------
*/
/* 
ctrl + alt + z (+)
ctrl + alt + c (-)
*/