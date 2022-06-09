const total = [1, 2, 3, 4];

let suma = 0;

for (let i = 0;i < total.length; i++) {
    const element = total[i];
    suma = suma + element;
}

console.log(suma);

const rta = total.reduce((suma, element)  => suma + element)

console.log('rta', rta);