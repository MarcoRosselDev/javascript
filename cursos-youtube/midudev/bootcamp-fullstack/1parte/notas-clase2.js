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

//imprime:| 4 | 2 | 16.|

//----------------------------------------------------------------
//diferencia entre una expreción y una declaración:
/* lo de arriba es una expreción pero podemos declararla como function restar.
por que? --- por que const sumar lo que hacemos es asignarle una funcióna una constante.

esto seria asi:

function restar (a, b) {
    return a - b;
}

es parecido al metodo anterior pero con grandes diferencias de como lo trata el navegador.
para empezar podemos escribir esto al final de la hoja y podemos usar restar en cualquier parte de la hoja inclusive arriba de donde se escribio este codigo.
¿ por que ?
por que javascript primero parsea toda la hoja y priorisa las funciones declaradas.

 */