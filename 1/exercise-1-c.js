//exercise 1 :

//      a
//-dejar pasar solo a los mayores de 18
//-el primero que entre después de las 2 am no paga

//      b
//-crear mini-sistema para registrar presentes (P)
// y ausentes (A)
//-pasados 30 dias mostrar su situación final del alumno 
//-maximo de 10% de ausencias.

//      c
//-crear calculadora que nos simplifique el trabajo

let options = prompt(`escoge la operación: 1(sumar), 2(restar), 3(dividir), 4(multiplicares))`);

if (options == 1) {
    let numero1 = parseInt(prompt(`dime el primer número`));
    let numero2 = parseInt(prompt(`dime el segundo número`));
    document.write(numero1+numero2);
}
else if (options == 2) {
    let numero1 = parseInt(prompt(`dime el primer número`));
    let numero2 = parseInt(prompt(`dime el segundo número`));
    document.write(numero1-numero2);
}
else if (options == 3) {
    let numero1 = parseInt(prompt(`dime el primer número`));
    let numero2 = parseInt(prompt(`dime el segundo número`));
    document.write(numero1/numero2);
}
else if (options == 4) {
    let numero1 = parseInt(prompt(`dime el primer número`));
    let numero2 = parseInt(prompt(`dime el segundo número`));
    document.write(numero1*numero2);
}
else {
    document.write(`introducir un número valido por favor.`)
}