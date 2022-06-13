/*
Tienes un array de números y debes retornar la suma de todos los valores en él.

La solución debería tener un input y output como los siguientes:

solution([1, 1, 1]);
solution([2, 4, 8]);

Output

3
14

*/

function solution(numbers) {
	let sum = 0;

	for (let i = 0; i < numbers.length; i++) {
		const element = numbers[i];
		sum = sum + element;
	}

	const rta = numbers.reduce((sum, element) => sum + element);

	return rta;
}; 

console.log(solution([1, 2, 3, 4,10]));

//solución: 20
//quedo de pana.