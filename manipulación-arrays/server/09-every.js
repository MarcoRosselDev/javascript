const numeritos = [1, 30, 48, 12, 22];

let respuesta = true;

for(let i = 0;i < numeritos.length; i++) {
    const elemento = numeritos[i];
    if(elemento >= 40) {
        respuesta = false;
    }
}
console.log(respuesta, 'rta');

//false rta

const respuesta2 = numeritos.every(item => item <= 50);

console.log(respuesta2);

//true