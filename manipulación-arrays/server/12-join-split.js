const avatar = ['fuego', 'agua', 'tierra', 'aire'];

let respFinal = '';
const separador = '++';
for (let i = 0;i < avatar.length; i++) {
    const item = avatar[i];
    respFinal = respFinal + item + separador;
}

console.log(respFinal);

//fuego++agua++tierra++aire++
//notece que agrego el ++ al final, para evitar esto son más líneas de codigo.