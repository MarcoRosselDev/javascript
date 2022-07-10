/*3
2
¿Qué son los principios de diseño?
------------------------------------------
Los colores, tamaños, fuentes y espaciados que usa un equipo de diseño para diseñar.
------------------------------------------
*/
/*7
2
¿Qué es el código aburrido? ¿Es mejor que el código elegante?
------------------------------------------
No, el código elegante es mejor que el código aburrido porque causa una mejor impresión de nuestro trabajo.
------------------------------------------
a
No, el código elegante es mejor que el código aburrido porque es más presumible yavanzado.
b
Sí, el código aburrido es mejor que el código elegante porque es más fácil de cambiar ymejorar.
c
Lo importante es que funcione y ya.
d
No, el código elegante es mejor que el código aburrido porque causa una mejor impresiónde nuestro trabajo.
*/
/*8
3
¿Qué principios podemos seguir para decidir dónde colocar nuestro estado?
------------------------------------------
Máxima cercanía a la relevancia o stateful vs. stateless components, pero no ambos porque son incompatibles.
------------------------------------------
*/
/*9
3
Tienes un componente App que por dentro tiene un componente TodoHeader que por dentro tiene un componente TodoCounter. ¿Cómo envías props desde App hasta TodoCounter sin usar React Context ni pasar esas mismas props por el componente TodoHeader?
------------------------------------------
Con React Portals.
------------------------------------------
*/
/*10
3
¿Cómo identificas a un componente que aplica composición de uno que no la aplica?
------------------------------------------
Los componentes que SÍ aplican composición SÍ definen su contenido interno. Los componentes que NO la aplican le delegan esa responsabilidad al componente que los llame.
------------------------------------------
*/
/*11
8
¿Cuál de los siguientes bloques de código es un ejemplo de render props?
------------------------------------------
function Componente(props) { return / … /; }git
const ComponenteWithHOC = withHoc(Componente);
------------------------------------------
*/
/*13
13
¿Cuál de los siguientes bloques de código está construyendo un high order component?
------------------------------------------
function Componente(props) { return ( <React.Fragment>{props.render()}</React.Fragment> ); }
------------------------------------------
*/
/*15
17
¿Cuál es una ventaja de los High Order Components?
------------------------------------------
Permiten separar las validaciones de render y los componentes que vamos a renderizar.
------------------------------------------
*/