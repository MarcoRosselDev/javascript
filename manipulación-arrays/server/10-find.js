const numeros = [1, 22, 4, 52, 10, 14];

let respuesta = undefined;

for (let i = 0;i < numeros.length; i++) {
    const elemento = numeros[i];
    if (elemento === 52) {
        respuesta = elemento;
        break
    }
}
// console.log(respuesta);

//respuesta = 52

//ahora con .find

const respuesta2 = numeros.find(item => item === 22);
console.log(respuesta2);

//esta de pana, responde 22