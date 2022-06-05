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

const App = () => {
  //podemos meter el msn en una variable:
  const mensaje = 'wena cabros.';

  return (
    <div className="App">
      {mensaje}

    {/* usamos las llaves para evaluar  */}
    </div>
  );
}
export default App;
  