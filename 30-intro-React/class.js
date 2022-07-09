/*3
16
¿Cómo creamos un contexto en React?
-------------------------------------------
ReactDOM.createContext
-------------------------------------------
a
Reactdom.context
b
React.context
c
ReactDOM.createContext
d
React.createContext
*/
/*4
16
¿Para qué sirve React Context?
-------------------------------------------
Para teletransportar componentes a un nodo de HTML distinto al nodo donde hace render el resto de la aplicación.
-------------------------------------------
a Para teletransportar componentes a un nodo de HTML distinto al nodo donde hace render
el resto de la aplicación.
b Para comunicar componentes entre sí a pesar de tener componentes padres diferentes.
c Para comunicar componentes sin tener que pasar la información como props por cada
componente intermedio.
d Para teletransportar componentes a un documento HTML distinto a donde hace render el
resto de la aplicación.
*/
/*5 +++
5
¿Qué es JSX?
-------------------------------------------
Una sintaxis especial de HTML para escribir elementos y componentes de React que se siente como JavaScript.
-------------------------------------------
a
Una sintaxis especial de HTML para escribir elementos y componentes de React que sesiente como JavaScript.
b
Una versión muy futura de ECMAScript que nos permite escribir React con superpoderesde HTML.
c
Una sintaxis especial de JavaScript para escribir elementos y componentes de React que se siente como HTML. ++++++++++++++++++++++++++++++++++++++++++++++++++++
d
Una versión muy futura de ECMAScript que nos permite escribir React con superpoderesde JavaScript.
*/
/*6 +++
5
¿Qué son las props en React?
-------------------------------------------
La forma en que React guarda información de nuestro componente para escuchar cuando tenga cambios y disparar un nuevo render.
-------------------------------------------
a La forma de recibir/escuchar/reaccionar ante las acciones o interacciones de los
usuarios en nuestra aplicación.
b La forma de comunicar componentes entre sí para transportar información.++++++++++++++++++++++
c La forma en que React guarda información de
*/
/*7 +++
5
¿Cuál es la diferencia entre componentes y elementos en React?
-------------------------------------------
Los elementos son grupos de componentes, reciben props y pueden crear estado o efectos. Los componentes reciben atributos o eventos y (casi siempre) se transforman en etiquetas de HTML.
-------------------------------------------
a
Los elementos son grupos de componentes, reciben props y pueden crear estado o efectos. Los componentes reciben atributos o eventos y (casi siempre) se transforman en etiquetas de HTML.
b
Los componentes se crean con clases que extienden de React.Component. Loselementos son funciones que pueden usar React Hooks.
c
Los elementos se crean con clases que extienden de React.Component. Loscomponentes son funciones que pueden usar React Hooks.
d
Los componentes son grupos de elementos, reciben props y pueden crear estado o efectos. Los elementos reciben atributos o eventos y (casi siempre) se transforman enetiquetas de HTML. ++++++++++++++++++++++++++++++++++++++++++ 
*/
/*9
22
¿Por qué debemos compilar nuestro proyecto con React.js antes de subirlo a GitHub Pages?
-------------------------------------------
No es obligatorio compilar nuestro proyecto antes de subirlo a GitHub Pages.
-------------------------------------------
a No es obligatorio compilar nuestro proyecto antes de subirlo a GitHub Pages.
b Porque GitHub Pages tiene muy poco espacio de almacenamiento.
c Porque GitHub Pages no soporta interacciones de los usuarios.
d Porque GitHub Pages solo nos permite desplegar aplicaciones estáticas.
*/
/*10 +++
9
¿Cuál de las siguientes es una forma VÁLIDA de crear un estado en React?
-------------------------------------------
const nombreDelEstado = React.useState("valor inicial de estado"); const setNombreDelEstado = nombreDelEstado.setState();
-------------------------------------------
a
const { nombreDelEstado, setNombreDelEstado } = React.useState("valor inicial deestado");
b
const nombreDelEstado = React.useState("valor inicial de estado");
constsetNombreDelEstado = nombreDelEstado.setState();
c
const [nombreDelEstado, setNombreDelEstado] = React.useState("valor inicial deestado"); +++++++++++++
*/
/*13 +++
8
¿Cómo escuchamos el evento de click en un botón con React?
-------------------------------------------
NombreComponente.addEventListener('click')
-------------------------------------------
a
onclick
b
NombreComponente.addEventListener('click')
c
click
d
onClick+++++++++++++++++++
*/
/*14 ¿Cómo escuchamos cuando un usuario escriba en un input o textarea con React?
-------------------------------------------
oninputchange
-------------------------------------------
a onchange
b change
c oninputchange
d onWrite +++++++++++++++++++++++++++++
e onChange
*/
/*15 ¿Cómo escuchamos cuando los usuarios envíen un formulario con React?
-------------------------------------------
NombreComponente.addEventListener('formsubmit')
-------------------------------------------
a
onSubmit++++++++++++++++++++
b
NombreComponente.addEventListener('formsubmit')
c
submit
d
onsubmit
e
NombreComponente.addEventListener('submit')
*/
/*17
16
¿Qué propiedad debemos enviarle al Provider de un contexto en React para consumirlo desde su respectivo Consumer?
-------------------------------------------
Todas las propiedades enviadas al componente Provider podrán consumirse desde el componente Consumer.
-------------------------------------------
a Todas las propiedades enviadas al componente Provider podrán consumirse desde el
componente Consumer.
b value
c state
d context
*/
/*18
2
¿Qué significa el "ecosistema de React"?
-------------------------------------------
Todas las herramientas open-source (únicamente las oficiales) relacionadas a React.
-------------------------------------------
a
Todas las herramientas open-source (oficiales y no oficiales) relacionadas a React.
b
Todas las herramientas open-source (únicamente las oficiales) relacionadas a React.
c
Algunas de las herramientas internas que usa React para construir su código fuente.
*/
/*20
15
¿Cuál de los siguientes bloques de código ejecuta nuestro efecto únicamente la primera vez que se renderiza nuestro componente? (pista: examina el segundo argumento del efecto)
-------------------------------------------
React.useEffect(() => { 
    console.log("Efectito"); 
}, 
document.addEventListener('load'));
-------------------------------------------
a 
React.useEffect(() => {
    console.log("Efectito");
});

b 
React.useEffect(() => {
    console.log("Efectito");
}, 
document.addEventListener('load'));

c
React.useEffect(() => {
    console.log("Efectito");
}, 
[]); +++++++++++++++++++++++++++++++++++++++

d 
React.useEffect(() => {
    console.log("Efectito");
}, 
window);
*/