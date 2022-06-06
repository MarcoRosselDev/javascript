const letters = ['a','b','c','d','e'];

// primero veremos una iteración normal de este arreglo llamado letras.

for (let i = 0;i < letters.length; i++) {
    const elemento = letters[i];
    console.log('for', elemento);
}

//ahora usando metodos de arrays para hacer el codigo más reducido.

letters.forEach(item => console.log('forEach', item))

/*  solución:
for a
for b
for c
for d
for e
forEach a
forEach b
forEach c
forEach d
forEach e */