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