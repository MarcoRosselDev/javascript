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

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

//queremos hacer un filtro, por ejemplo queremos saber todas las ordenes de compra que fueron entregadas.

const rta2 = orders.filter(item => item.delivered)
console.log('rta2', rta2);

/* respuesta:  
rta2 [
  { customerName: 'Nicolas', total: 60, delivered: true },
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
*/

//podemos hacerlo más compleja en las condiciónes por ejemplo podemos decirle que ademas de las ordenes entregadas que los filtre por valor >= 100.

const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log(rta3)

/* respuesta:
[
  { customerName: 'Santiago', total: 180, delivered: true },
  { customerName: 'Valentina', total: 240, delivered: true }
]
*/
