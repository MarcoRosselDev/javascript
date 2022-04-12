const fruits = () => {
    if(true) {
        var fruits1 = "apple"
        let fruits2 = "banana"
        const fruits3 = "kiwi"
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();
// apple
// error : fruits2 is not defined, por que ?
// por que var es una asignaciòn del scope local dentro de una funciòn 
// pero con let y const se establecen dentro del bloque
// por lo que solo podemos acceder a ellos dentro de ese bloque

// si aplico console.log(fruits2);
    //       console.log(fruits3);  dentro de if se imprimen los tres(apple, banana, kiwi).si problemas.

otro ejemplo:

let x = 1;
{
    let x = 5;
    console.log(x);
}
console.log(x);

// imprime 5 luego 1 , esto significa que se le asigno 5 en local y luego 1 global.
// si cambiamos let por var en los dos imprime 5 luego 5 por que local aplico 5 y luego quedo sobreescrito en x asi que en la segunda llamada no da 1 sino 5

//pregunta 5 test

const fruits = () => {
    if(true) {
        var fruit1 = "apple";
        const fruit2 = "banana";
        let fruit3 = "kiwi";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();