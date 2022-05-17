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