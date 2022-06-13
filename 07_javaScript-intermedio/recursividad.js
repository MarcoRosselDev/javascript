const numeritos = [0, 1, 3, 6, 7, 4, 2, 0, 7];

// let numerito = 0; 

// for (let index = 0; index < numeritos.length; index++) {
//     numerito = numeritos[index];
//     console.log({index, numerito});
// }

function recursiva(parametro) {
    if(parametro.length != 0) {
        const firstNumber = parametro[0];
        console.log(firstNumber);
        parametro.shift();
        return recursiva(parametro);
    }
}

console.log(recursiva(numeritos));