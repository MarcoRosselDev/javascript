const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
};
fruits();
console.log(fruit)//error fruit no esta definido (es local dentro de fruits)

const anotherFunction = () => {
    var x = 1;
    var x = 5;
    let y = 2;      //procurar solo ocupar var en el caso de que llamada de variables esto nos garantiza que el codigo va a funcionar y que no reescribiremos nada.
    // let y = 2;
    console.log(x);
    console.log(y);
};
anotherFunction();
