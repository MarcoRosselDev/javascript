a = 2;          //primero le asignamos un valor
var a;          //lo inicializamos
console.log(a); //lo imprimimos (declaración)
    //igual nos da el resultado =2 
    //esto es el hoisting, deberia ser inicializada y despues asignada.

//EJEMPLO 2

console.log(a);
var a = 2;  //esto si que imprime error , que a no esta definido.
//undefined

//hoisting en declaraciones y no en las inicializaciones


//EJEMPLO 3

const fruits = () => { 
	if (true) { 
		var fruit1 = 'apple'; 
		const fruit2 = 'banana'; 
		let fruit3 = 'kiwi'; 
		} 
}
let frutas = fruits
console.log(frutas);