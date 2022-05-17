/*1- aprende sobre programación funcional

La programación funcional es un estilo de programación donde las soluciones son simples, funciones aisladas, sin ningún efecto secundario fuera del ámbito de la función: INPUT -> PROCESS -> OUTPUT

La programación funcional se refiere a:

    1-Funciones aisladas: sin dependencia alguna del estado del programa, el cual incluye variables globales sujetas a cambios

    2-Funciones puras: una misma entrada siempre da la misma salida

    3-Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función son cuidadosamente controlados

-------------------------------------------------------------------
ejercicio;

A los miembros de freeCodeCamp les encanta el té.

En el editor de código, las funciones prepareTea y getTea ya están definidas. Llama a la función getTea para obtener 40 tazas de té para el equipo y guárdalas en la variable tea4TeamFCC.


const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
};

-------------------------------------------------------------------
solución;

const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
};

const tea4TeamFCC = getTea(40);

*/
/*2 comprende la terminología de la programación funcional

El equipo de FCC tuvo un cambio de humor y ahora quiere dos tipos de té: té verde y té negro. Hecho general: Los cambios del estado de ánimo de los clientes son bastante concurrentes.

Con esa información, tendremos que volver a visitar la función getTea del último desafío para manejar varias solicitudes de té. Podemos modificar getTea para aceptar una función como parámetro y así poder cambiar el tipo de té que prepara. Esto hace que getTea sea más flexible y le da al programador más control cuando las solicitudes del cliente cambian.

Pero primero, cubramos alguna terminología de la programación funcional:

Callbacks son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función. Es posible que las hayas visto pasar a otros métodos, por ejemplo en filter, la función callback le dice a JavaScript los criterios para filtrar un arreglo.

Las funciones que pueden ser asignadas a una variable, pasadas a otra función o devueltas desde otra función como cualquier otro valor normal, se llaman funciones de primera clase. En JavaScript, todas las funciones son funciones de primera clase.

Las funciones que toman una función como argumento o devuelven una función como valor de retorno se llaman funciones de orden superior.

Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o devolvieron se pueden llamar lambda.

-------------------------------------------------------------------
ejercicio;

Prepara 27 tazas de té verde (green tea) y 13 tazas de té negro (black tea) y almacénalas en las variables tea4GreenTeamFCC y tea4BlackTeamFCC, respectivamente. Ten en cuenta que la función getTea ha sido modificada por lo que ahora recibe una función como primer argumento.

Nota: Los datos (el número de tazas de té) son suministrados como el último argumento. Discutiremos más sobre esto en lecciones posteriores.

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
-------------------------------------------------------------------
solución;

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

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