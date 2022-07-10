/*3
2
¿Qué son los principios de diseño?
------------------------------------------
Los colores, tamaños, fuentes y espaciados que usa un equipo de diseño para diseñar.
------------------------------------------
a
Los colores, tamaños, fuentes y espaciados que usa un equipo de diseño para diseñar.
b
Las reglas, normas y lineamientos generales que sigue un equipo para trabajar.
c
El conjunto de herramientas que usa un equipo para trabajar.
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
/*8 +++
3
¿Qué principios podemos seguir para decidir dónde colocar nuestro estado?
------------------------------------------
Máxima cercanía a la relevancia o stateful vs. stateless components, pero no ambos porque son incompatibles.
------------------------------------------
a
Máxima cercanía a la relevancia y/o stateful vs. stateless components, ambos soncompatibles.+++++++++++++++++++++++++++
b
Máxima cercanía a la relevancia o stateful vs. stateless components, pero no ambosporque son incompatibles.
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
a
Los componentes que SÍ aplican composición SÍ defi nen su contenido interno. Loscomponentes que NO la aplican le delegan esa responsabilidad al componente que losllame.
b
Los componentes que aplican composición llaman a otros componentes dentro de sucontenido.
c
Los componentes que aplican composición no defi nen su contenido, sino que le deleganesa responsabilidad al componente que los llame.
*/
/*11
8
¿Cuál de los siguientes bloques de código es un ejemplo de render props?
------------------------------------------
function Componente(props) { return / … /; }git
const ComponenteWithHOC = withHoc(Componente);
------------------------------------------
a
class Componente { render() { return / … /; } }
b
function Componente(props) { return / … /; }
const ComponenteWithHOC = withHoc(Componente);
c
<Componente render={() => <OtroComponente />} />
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