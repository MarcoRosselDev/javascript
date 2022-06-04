//funciones

const sumar = (a, b) => {
    console.log(a);
    console.log(b);
    return a**b;
}

//podemos asignar el retorno a una variable, asignandole un espacio en memoria o podemos solo imprimirlo directamente con un console.log

//const resultado = sumar(4, 2);

//console.log(sumar(4, 2));

//en este caso lo asignaremos y luego imprimiremos esa asignación;

const resultado = sumar(4, 2);
console.log(resultado);

//imprime 4 | 2 | 16.