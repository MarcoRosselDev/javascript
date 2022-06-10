const numeros = [1, 22, 4, 52, 10, 14];

let respuesta = undefined;

for (let i = 0;i < numeros.length; i++) {
    const elemento = numeros[i];
    if (elemento === 30) {
        respuesta = elemento;
        break
    }
}
console.log(respuesta);