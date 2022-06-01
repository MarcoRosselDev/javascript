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