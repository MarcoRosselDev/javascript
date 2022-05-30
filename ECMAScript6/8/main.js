const CompañerosTrabajo = {
    fronted: 'marco',
    backend: 'lusho',
    design: 'pelaho'
}

const entradas = Object.entries(CompañerosTrabajo);
console.log(entradas);

// nos devuelve 
// [
//   [ 'fronted', 'marco' ],
//   [ 'backend', 'lusho' ],
//   [ 'design', 'pelaho' ]
// ]
// devuelve una matriz de arreglos de strings

console.log(entradas.length);

// nos dice cuantos elementos tiene nuestro objeto. 
//---------------------------------------------------------------

const datitos = {
    fronted: 'marco',
    backend: 'lusho',
    design: 'pelaho'
}

const valores2 = Object.values(datitos);
console.log(valores2);

//nos devuelve los valores de los elementos en formato de arreglo.
//[ 'marco', 'lusho', 'pelaho' ]

console.log(valores2.length);

//---------------------------------------------------------------

const string = 'wena';
console.log(string.padStart(7,'---'));