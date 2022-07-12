/*2 +++
1
Si nos basamos en el patrón MVC (modelo-vista-controlador), ¿de cuál se encarga React.js?
----------------------------------------------
Se encarga de las 3.
----------------------------------------------
a
Vista ++++++++++++++++++++++++++++++
b
Se encarga de las 3.
c
Modelo
d
Controlador
*/
/*3 +++
1
React.js nos permite construir interfaces con base en:
----------------------------------------------
Funciones
----------------------------------------------
a
Componentes ++++++++++++++++++++++++++
b
Funciones
c
Clases
d
Objetos
creo que es en componentes
*/
/*6 -
8
¿Cómo creamos un elemento de React que se transforme en un input de tipo texto usando JSX?
----------------------------------------------
<input typename="text">
----------------------------------------------
a
<input type="text">
b
<input typename="text">
c
React.createComponent("input", { type: "text" });
d
React.createText("input", { type: "text" });
e
<input type=“text” />
*/
/*8 -
4
¿Cómo renderizamos el componente principal de nuestra aplicación con React 17?
----------------------------------------------
React.createElement()
----------------------------------------------
a
React.createElement()
b
React.render()
c
ReactDOM.createComponent()
d
ReactDOM.render()
*/
/*9 +++
5
Escalar nuestro proyecto será mucho más fácil si usamos Create React App en vez de configurar manualmente Webpack y Babel. Esta afirmación es:
----------------------------------------------
Verdadero
----------------------------------------------
entoncese Falso
*/
/*12 -
11
¿Cuál es la forma correcta crear un 404 con React Router DOM 5?
----------------------------------------------
Dentro de los componentes BrowserRouter y Switch. De primer lugar con las demás rutas de la aplicación. Y con <Route path="*" component={NotFound} />.
----------------------------------------------
a
Dentro del componente BrowserRouter. De último lugar con las demás rutas de laaplicación. Y con
<Route component={NotFound} />
.
b
Dentro de los componentes BrowserRouter y Switch. De último lugar con las demás rutasde la aplicación. Y con
<Route path="*" component={NotFound} />
.
c
Dentro del componente BrowserRouter. De primer lugar con las demás rutas de laaplicación. Y con
<Route path="*" component={NotFound} />
.
d
Dentro de los componentes BrowserRouter y Switch. De primer lugar con las demás rutasde la aplicación. Y con
<Route path="*" component={NotFound} />
.
*/
/*13 -
17
¿Qué herramienta de React nos permite trabajar con el estado en nuestros componentes?
----------------------------------------------
React.Context
----------------------------------------------
a
React.useEffect
b
React.useState
c
React.Context
*/
/*15 -
17
¿Cuál es la forma correcta de actualizar un estado cuando los usuarios den click en un botón?
----------------------------------------------
  const { count, setCount } = React.useState(1);
  return (
    <button onclick={() => setCount(count + 1)}>
      ¡Click!
    </button>
  );
} 
----------------------------------------------
a
const Button = () => {
    const [count, setCount] = React.useState(1);
    return (
        <button onClick = {setCount(count + 1 )}>
            ¡Click!
        </ button>
    );
}

b
const Button = () => {
    const [count, setCount] = React.useState(1);
    return (
        <button onClick = {() => setCount(count + 1)}>
            ¡Click!
        </button>
    );
}

c
const Button = () => {
    const { count, setCount } = React.useState(1);
    return (
        <button onclick = {setCount(count + 1 )}>
            ¡Click!
        </button>
    );
}
*/
let array = {
    2:1,
    3:1,
    6:8,
    8:4,
    9:5,
    12:11,
    13:17,
    15:17
}