/*3
16
¿Cómo creamos un contexto en React?
-------------------------------------------
ReactDOM.createContext
-------------------------------------------
*/
/*4
16
¿Para qué sirve React Context?
-------------------------------------------
Para teletransportar componentes a un nodo de HTML distinto al nodo donde hace render el resto de la aplicación.
-------------------------------------------
*/
/*5
5
¿Qué es JSX?
-------------------------------------------
Una sintaxis especial de HTML para escribir elementos y componentes de React que se siente como JavaScript.
-------------------------------------------
*/
/*6
5
¿Qué son las props en React?
-------------------------------------------
La forma en que React guarda información de nuestro componente para escuchar cuando tenga cambios y disparar un nuevo render.
-------------------------------------------
*/
/*7
5
¿Cuál es la diferencia entre componentes y elementos en React?
-------------------------------------------
Los elementos son grupos de componentes, reciben props y pueden crear estado o efectos. Los componentes reciben atributos o eventos y (casi siempre) se transforman en etiquetas de HTML.
-------------------------------------------
*/
/*9
22
¿Por qué debemos compilar nuestro proyecto con React.js antes de subirlo a GitHub Pages?
-------------------------------------------
No es obligatorio compilar nuestro proyecto antes de subirlo a GitHub Pages.
-------------------------------------------
*/
/*10
9
¿Cuál de las siguientes es una forma VÁLIDA de crear un estado en React?
-------------------------------------------
const nombreDelEstado = React.useState("valor inicial de estado"); const setNombreDelEstado = nombreDelEstado.setState();
-------------------------------------------
*/
/*13
8
¿Cómo escuchamos el evento de click en un botón con React?
-------------------------------------------
NombreComponente.addEventListener('click')
-------------------------------------------
*/
/*14 ¿Cómo escuchamos cuando un usuario escriba en un input o textarea con React?
-------------------------------------------
oninputchange
-------------------------------------------
*/
/*15 ¿Cómo escuchamos cuando los usuarios envíen un formulario con React?
-------------------------------------------
NombreComponente.addEventListener('formsubmit')
-------------------------------------------
*/
/*17
16
¿Qué propiedad debemos enviarle al Provider de un contexto en React para consumirlo desde su respectivo Consumer?
-------------------------------------------
Todas las propiedades enviadas al componente Provider podrán consumirse desde el componente Consumer.
-------------------------------------------
*/
/*18
2
¿Qué significa el "ecosistema de React"?
-------------------------------------------
Todas las herramientas open-source (únicamente las oficiales) relacionadas a React.
-------------------------------------------
*/
/*20
15
¿Cuál de los siguientes bloques de código ejecuta nuestro efecto únicamente la primera vez que se renderiza nuestro componente? (pista: examina el segundo argumento del efecto)
-------------------------------------------
React.useEffect(() => { console.log("Efectito"); }, document.addEventListener('load'));
-------------------------------------------
*/