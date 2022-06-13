const numeritos = [1, 30, 48, 12, 22];

let respuesta = true;

for(let i = 0;i < numeritos.length; i++) {
    const elemento = numeritos[i];
    if(elemento >= 40) {
        respuesta = false;
    }
}
console.log(respuesta, 'rta');

//false rta

const respuesta2 = numeritos.every(item => item <= 50);

console.log(respuesta2);

//true

//------------------------
//desarrollar algorito para chequear que todos los miembros del equipo de futbol sean menores de 15 años.

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];

const respuesta3 = team.every(item => item.age <= 15);

console.log(respuesta3);

//todo bien