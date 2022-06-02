const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('hey');
        } else {
            reject('buuuuu');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));
//si ejecutamos con true = hey
//si ejecutamos con false = buuuuu

//----------------------------------------------------------

const somethingWillHappen2 = () => {
    return new Promise((responder, siesqueno) => {
        if(false) {
        setTimeout(() => {
            responder('todo bien');
        }, 2000)
        } else {
            const error = new Error('Shuta!')
            siesqueno('todo mal');
        }
    });
}

somethingWillHappen2()
    .then(responder => console.log(responder))
    .catch(err => console.log(err));

//si es true = todo bien
// [Done] exited with code=0 in 2.143 seconds
//se tarda 2000 milisegundos en responder el texto 'todo bien'.

//-------------------------------------------------------------

//si es false = todo mal
//y responde altiro por que no le puse setTimeout.

//-------------------------------------------------------------

//importante en la parte de crear el error, funciona para que salte en consola toda la parafernalia de por que ocurrio el error y todos los pasos que se dieron, asi podemos debugear más facilmente.
//            const error = new Error('Shuta!')
//a esa linea de codigo me refiero

