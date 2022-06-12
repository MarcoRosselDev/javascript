//estructura basica de una promesa
//si algo va a pasar o no.  sirve para trabajar con el asincoronismo de javaScript

const promesa1 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('bien hecho');
        } else {
            reject('Buuuuuuu !');
        }
    });
};

promesa1()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//otra forma de declarar la promesa con .setTimeout para que tarde x tiempo en milisegundos:

const promesa2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('sheeet!');
            reject(error);
        }
    });
}

promesa2()
    .then(response => console.log(response))
    .catch(err => console.error(err)); 
    
//para ejecutar varias promesas a la vez:

Promise.all([promesa1(), promesa2()])
    .then(response => {
        console.log('todo junto:', response);
    })
    .catch(err => {
        console.error(err);
    })

