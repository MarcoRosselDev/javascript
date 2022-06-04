console.log('probando el javaScript');

//vemos los 3 tipos de variables en js

let name = 'marco';
const lastName = 'rossel';
var noUsar = true;

// ¿ cuales son las diferencias ?

//let = permitir
//lo que tiene let es que puedo reasignarle el valor 

//const = contante
//en el caso de const no se puede reasignar una variable. nos lanzaria un error en consila.

//-------------------------------------
/*lo importante de todo esto es el scope.
con let puedo tener otra variable con el mismo nombre dentro de una función, if, else, o cualquier otro tipo de bucle.

con const la variable reserva su nombre y no se puede alterar aunque estemos dentro de otra función.

y con var pordemos acceder a esta variable desde cualquier sitio. lo que lo convierte en un peligro para trabajar, por lo que es se deve usar con mucho cuidado.

por que es pelibroso var ?
por que cuando el codigo escala "se convierte en un archivo extenso", podemos por error asignarle el mismo nombre a otra variable, y encontrar el error es dificil por que en consola no nos dice que hay algun error, osea que sigue todo normal pero en realidad no son los resultados esperados.
*/