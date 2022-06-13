thing1 = [{
    name: "Product 1",
    price: 1000,
    stock: 10
},{
    name: "Product 2",
    price: 2000,
    stock: 20
}];

/*
function solution(array) {
    const newArray = array.map((item => {
        return {
            ...item.price,
            taxes: item.price*0.19
        }
    }))
    return newArray;
}; 

// solution(thing1);
console.log(solution(thing1));
// console.log(thing1);

*/

function solution(array) {
    // Tu código aquí 👈 
    return array.map(item => {
      return {
        ...item,
        taxes: Math.trunc(0.19 * (item.price))
      };
    });
  }; 

console.log(solution(thing1));

//correcto