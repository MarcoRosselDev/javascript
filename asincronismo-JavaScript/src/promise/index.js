const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('hey');
        } else {
            reject('buuuuu');
        }
    });
};