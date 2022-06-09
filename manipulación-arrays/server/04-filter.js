const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];

for (let i = 0;i < words.length; i++) {
    const item0 = words[i];
    if (item0.length >= 6) {
        newArray.push(item0);
    }
}

// console.log('newArray :' , newArray);
// console.log('original :' , words);

/* respuesta:

newArray : [ 'exuberant' ]
original : [ 'spray', 'limit', 'elite', 'exuberant' ]
*/

//****************************** */

const rta = words.filter(item1 => item1.length >= 6);

console.log('rta :' , rta);
console.log('original :' , words);

//fimcopma de pana