/*
 tenemos las propiedades basicas del algebra
 
 conmutatiba
 asociativa
 distributiva

 para probar estas propiedades se pide hacer el ejercicio 15
--------------------------------------------------------
ejercicio 15:

(5x + 1)3 = 15x + 3

probemos aplicar esta propiedad en JavaScript
--------------------------------------------------------
--------------------------------------------------------
*/

function distributiva(num) {
    return (5*num + 1)*3 - 3 - 15*num;        
}

console.log(distributiva())