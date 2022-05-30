let hello = "hello";
let world = "world";

let fraseEpica = hello + '' + world;
console.log(fraseEpica);

let fraseEpica2 = `${hello} texto de prueba ${world} `
console.log(fraseEpica2);

let lorem = "teniamos una frase epica y luego \n"
+ "teniamos que usar la n con el \ para un salto de línea."

let lorem2 = `tenemos que usar la comilla fransesa
y no es nesesario la n y el \ para saltar la línea.`

console.log(lorem);
console.log(lorem2);

// ------------------------------------------------

let team1 = ['marco', 'lusho', 'pelao'];
let team2 = ['el shipa', 'el mogli', 'el papas'];

//aqui se viene lo shido. aplicamos ... tres puntos y luego el nombre de el arreglo que queremos unir;

let teamFuciónado = ['moko', ...team2, ...team1];

console.log(teamFuciónado);

//---------------------------------------------------
let name = 'marco';
let age = 29;

obj = {
    name: name,
    age: age
};

obj2 = {
    name,
    age
};

console.log(obj);
console.log(obj2);

//-----------------------------------------------------

const names = [
    { name: 'marco', age: 29},
    { name: 'lusho', age: 23}
]

let listaNombres = names.map(function (item) {
    console.log(item.name);  
});

let listaEdades = names.map(function (item) {
    console.log(item.age);
});

//-----------------------------------------------------
//ahora con las arrow functions aremos lo mismo.
const names2 = [
    { name: 'marco', age: 29},
    { name: 'lusho', age: 23}
]

let listaNombres2 = names2.map(item => console.log(item.name));
let listaEdades2 = names2.map(item => console.log(item.age));

//---------------------------------------------

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    } 
}


const calc = new calculator();
console.log(calc.sum(2, 4));

//---------------------------------------------------------
//import and export

const hello = require('./module')

console.log(hello())