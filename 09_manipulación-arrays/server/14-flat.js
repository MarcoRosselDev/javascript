const array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const newArray = [];
for (let i = 0;i < array1.length; i++) {
    const jarray = array1[i];
    for (let j = 0;j < array1.length; j++) {
        const xarray = array1[i][j];
        newArray.push(xarray);
    }
}

console.log(newArray);
/*[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
] */

//se complica si tenemos más niveles de profundidad.
//solucionar esto sin .flat() se usa en entrevisas de trabajo.

const respuesta = array1.flat(2);
console.log(respuesta);

//esta de pana. 
//ojo de poner el numero de profundidad del array dentro de .flat(4), por ejemplo