import './App.css';
/* 
function App() {
  return (
    <div className="App">
      Hola Mundillo.
    </div>
  );
}
*/

//se puede declarar o inicializar la variable por ejemplo:

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

const App = () => {
  const mensaje = 'wena cabros.';
  const a = 5;
  const b = 2;

  return (
    <div className="App">
      {mensaje + ", esoy probando el texto"}
    </div>
  );
}
export default App;
  