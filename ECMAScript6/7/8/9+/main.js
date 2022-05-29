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