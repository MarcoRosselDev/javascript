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