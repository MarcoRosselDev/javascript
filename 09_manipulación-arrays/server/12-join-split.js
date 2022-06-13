const avatar = ['fuego', 'agua', 'tierra', 'aire'];

let respFinal = '';
const separador = '++';
for (let i = 0;i < avatar.length; i++) {
    const item = avatar[i];
    respFinal = respFinal + item + separador;
}

// console.log(respFinal);

//fuego++agua++tierra++aire++
//notece que agrego el ++ al final, para evitar esto son más líneas de codigo.

//metodo .join

const respuesta2 = avatar.join('-');
console.log(respuesta2);

//fuego-agua-tierra-aire
//notece que no agrego el guion al final.

//---------------------ejemplo---------------------

const titulo = 'Me gusta Correr y pasear en Bici';

const respuesta3 = titulo.split(' ').join('-').toLowerCase();

console.log(respuesta3);

//me-gusta-correr-y-pasear-en-bici
//ideal para convertir texto en barra de direción.