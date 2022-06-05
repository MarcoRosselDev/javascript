import './App.css';
/*  class 1
function App() {
  return (
    <div className="App">
      Hola Mundillo.
    </div>
  );
}
*/

//class 2-----------------------se puede declarar o inicializar la variable por ejemplo:

// const App = () => {
//   //podemos meter el msn en una variable:
//   const mensaje = 'wena cabros.';

//   return (
//     <div className="App">
//       {mensaje + `, esoy probando el texto
//       para concatenarlo a una variable, y usando la
//        comilla francesa para no romper 
//       el codigo al hacer saltos de linea` }

//     {/* usamos las llaves para evaluar  */}
//     </div>
//   );
// }
// export default App;

/* class 3

// const App = () => {
//   const mensaje = 'wena cabros.';
//   const a = 6;
//   const b = 4;

//   return (
//     <div className="App">
//       {mensaje + ", esoy probando el texto"}
//       <br/>
//       {a ** b}
//     </div>
//     // los objetos no son validos como hijos de react. por lo que solo podemos trabajar con cosas que se puedan pintar como numeros, textos.

//     //si queremos jugar con algo como por ejemplo {new Date()} no lo reconoseria, entonces lanzaria error.
//   )
// }
// export default App;

*/

//class 4--------------------------------------------------
//

//ahora empezamos a meterle cosas para ver como trabaja react

// const App = () => {
//   const mensaje = 'wena cabros.';
//   const a = 6;
//   const b = 4;

//   return (
//     <div className="App">
//       <h1>Titulo de la App</h1>
//       <strong>Estamos testeando react</strong>
//       <div>
//         {mensaje + ", esoy probando el texto"}
//         <br/>
//         {a ** b}
//       </div>
//     </div>
//     // en el caso htmlx no se pueden dejar etiquetas abiertas como <br/>
//   )
// }
// export default App;

/*calss 5-------------------------------------------------

ahora vamos a probar meter una funcion dentro de htmlx


*/

const Mensaje = () => {
  return <h1>Hola mundo</h1>
}

const App = () => {
   const mensaje = 'wena cabros.';
   const a = 6;
   const b = 4;

   return (
     <div className="App">
       <Mensaje />
       <Mensaje />
       <Mensaje />
       {/* si funciono. aparesen titulos h1 con "hola mundo en chrom" */}
       {mensaje + ", esoy probando el texto"}
       <br/>
       {a ** b}
     </div>
   )
 }
export default App;

//laksdfa alsdfj asd



//creo que podemos introducir unas funciones dentro de otras para imprimir html en el navegador

//lo importante es buscar ahorar datos y no recargar la paguina despues de cada interación en el navegador
  