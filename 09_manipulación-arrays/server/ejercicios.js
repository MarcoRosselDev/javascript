/*1 devolver array con cada elemento multiplicado por 2

soluci贸n:

function solution(array) {
 	// Tu c贸digo aqu铆 馃憟 
	const newArray = array.map(elemento => elemento * 2);
	return newArray
}; 
*/

/*2 Transforma un Array de objetos a un Array de strings

function solution(array) {
 	// Tu c贸digo aqu铆 馃憟 
}; 

En este desaf铆o tienes un array de objetos que representan datos de personas con los siguientes atributos:

name
lastName
age
El reto aqu铆 es retornar un array de strings con los nombres, la soluci贸n deber铆a tener un input y output como los siguientes:

Input
solution([
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  ...
]);

Output

['Nicolas', 'Valentina']

--------------------------------------------
soluci贸n:

function solution(array){
  return array.map(item => item.name);
}; 



*/

/*

j = [
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  }
];

function solution(array) {

	array.forEach(element => {
    const newArray = [];
    newArray.push(element.name);
    console.log(newArray);
    return newArray;
	})
}; 

solution(j);

*/

