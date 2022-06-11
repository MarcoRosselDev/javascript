const elem1 = [1, 1, 2, 2, 3];
const elem2 = [3, 4, 4, 5, 5];

let resp1 = [...elem1]

for(let i = 0;i < elem2.length; i++) {
    const item = elem2[i];
    resp1.push(item);
}

console.log(resp1);

//[
//  1, 1, 2, 2, 3,
//  3, 4, 4, 5, 5
//]