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

//imprime en consola: ---wena

console.log(string.padEnd(12,' --- --'));

//imprime en consola: wena --- --
//esto nos sirve para imprimir en pantalla algo más presentable en caso de nesecitar un buen diseño, a la hora de imprimirlo en la web y jugar con el usuario.

// tmbn podemos facilitar el string en el lugar:

console.log('wsp bro'.padEnd(13,'  ---.'));

// nos imprime;   wsp bro  ---.

//------------------------------------------------------------------

const holaMundo = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('wena, mundo.'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await holaMundo();
    console.log(hello);
};

helloAsync();