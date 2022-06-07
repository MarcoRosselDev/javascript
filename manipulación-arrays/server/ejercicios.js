/*1 devolver array con cada elemento multiplicado por 2

solución:

function solution(array) {
 	// Tu código aquí 👈 
	const newArray = array.map(elemento => elemento * 2);
	return newArray
}; 
*/

/*2 Transforma un Array de objetos a un Array de strings

function solution(array) {
 	// Tu código aquí 👈 
}; 

En este desafío tienes un array de objetos que representan datos de personas con los siguientes atributos:

name
lastName
age
El reto aquí es retornar un array de strings con los nombres, la solución debería tener un input y output como los siguientes:

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



*/

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
  }
]);

function solution(array) {
  const j = [];

  array.map(element => {
    j.push(element.name)
  });

  return j
}; 

solution();