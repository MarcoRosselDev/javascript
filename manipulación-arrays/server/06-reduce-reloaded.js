const items = [1, 3, 2, 3];

//queremos un .reduce que itere por el array y nos diga cuantos 1,2,3... tiene el array.
/*se espera algo asi:
{
    1:1,
    2:1,
    3:2
}

el atributo sera el elemento y el valor es el número de veces que se repite en el arrat

*/

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

//consola = { '1': 1, '2': 1, '3': 2 }