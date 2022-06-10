const numeritos = [1, 2, 4, 3, 2, 1];

let respuesta = false;

// primero lo haremos con un for

for(let i = 0;i < numeritos.length; i++) {
    const elemento = numeritos[i];
    if(elemento % 2 === 0) {
        respuesta = true;
        break;
    }
}
// console.log(respuesta);

//imprime : true

//ahora con .some

const respuesta2 = numeritos.some(item => item % 2 === 0);
console.log(respuesta2);

//impreime : true