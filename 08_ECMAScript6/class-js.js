/*9--7+++
¿Cómo podemos convertir un objeto en un array?
----------------------------
nombreObjeto.toArray()
----------------------------
a
new Array(nombreObjeto)
b
Object.values(nombreObjeto) o Object.keys(nombreObjeto) +++++++++++++++++++
*/
/*14--13
¿Para qué sirve el event.preventDefault?
----------------------------
Para asegurarnos de que los eventos ejecuten su acción por defecto (por ejemplo, recargar la página al completar un formulario).
----------------------------
a
Para asegurarnos de que los eventos ejecutan la acción por defecto que les asignó elnavegador (en vez de código JS que hayamos escrito por error).
c
Para evitar que los eventos ejecuten su acción por defecto (por ejemplo, recargar lapágina al completar un formulario).
*/

/*2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo) */


let arr1 = ['hola', 'soy', 'el', 'moko'];

function a(arr) {
    for (let i = 0;i < arr.length; i++) {
        console.log(arr[i])
    }
    return 
}

let b = a(arr1);
console.log(b);