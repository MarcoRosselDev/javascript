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
        if(true) {
        setTimeout(() => {
            responder('todo bien');
        }, 2000)
        } else {
            const error = new Error('Shuta!')
            siesqueno('todo mal');
        }
    });
}

