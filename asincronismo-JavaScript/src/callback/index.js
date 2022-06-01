function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(7, 8, sum));

function resta(num1, num2, num3) {
    return num1 - num2 - num3;
}

// console.log(resta(89, 43, 11));
//aparentemente si funcióna, da 35 pero no entiendo ahun por que hacer el callback...

function calc2(num1, num2, num3, callback) {
    return callback(num1, num2, num3);
}

console.log(calc2(89, 43, 11, resta));



function divicion(num1, num2) {
    return num1 / num2;
}

console.log(divicion(50, 7));
//7.142857142857143 esta bueno.

function multDiv(num1, num2, num3, num4) {
    return ((num1 * num2) / num3) + num4;
}

console.log(multDiv(4, 7, 2, 100));
//114 esta bueno.

//----------------------------------------------------------

function operation1 (a, b, c, d, e, f, g) {
    return (((((a ** b) / c) + d) - e) ** f) / g;
}

// console.log(operation1(2,3,2,35,10,2,3));
//answer: 280.3333333333333

console.log(operation1(5,7,2,35,10,5,3));
//answer: 3.04136270831283e+22
//le tomo menos de un segundo en realizar esta operación. looooool