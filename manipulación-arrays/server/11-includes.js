const animales = ['dog', 'cat', 'pollito', 'cuyu'];

//primero lo hacermos con el metodo largo (for)

let incluido = false;

for (let i = 0; i < animales.length; i++) {
    const elemento = animales[i];
    if (elemento === 'pollito') {
        incluido = true;
        break;
    }
}

console.log(incluido);

//devuelve true