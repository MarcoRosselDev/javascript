/*1-

¿Qué valor le tenemos que asignar a

<script src="index.js" type="..." >

para que el archivo no añada valores al ámbito global?
-------------------------------------------------
defer
-------------------------------------------------
async /puede ser.
-------------------------------------------------

*/
/*2-

¿Qué atributo usamos cuando queremos que la petición de un script sea asíncrona pero que tan pronto termine de
cargar, el script se ejecute?

-------------------------------------------------
defer
-------------------------------------------------
async /puede ser/ o nada si es que esta asta el final
-------------------------------------------------

*/
/*5
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

¿Cómo pasamos los argumentos a una función utilizando call?
-------------------------------------------------
Con un objeto donde cada key es el nombre del argumento, y el valor es el valor que queremos pasar.
-------------------------------------------------
además del contexto tengo que pasarle los valores:
    caminar.call(richar, 400, 'norte');

    (this, es el conxto = richar)
-------------------------------------------------
*/
/*26

¿Cómo pasamos los argumentos a una función utilizando bind?
-------------------------------------------------
Con un arreglo donde cada argumento es un elemento.
-------------------------------------------------
construlle una nueva función que tendra el this integrado,
podremos guardar los valores (300, "este"), en la misma función o se los podemos dar al llamar la función.
es muy flexible.
-------------------------------------------------
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