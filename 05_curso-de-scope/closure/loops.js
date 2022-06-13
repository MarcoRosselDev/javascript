const scope2 = () => {
    for (let i = 0; i < 10; i++) { //cambiamos var por let y se soluciona el problema, si no itera 10 veces 10.
        setTimeout(() => {
            console.log(i);
        },500);
    }
}
scope2();

//explicaron lo mismo de la clase pasadoa 
//tener cuidado con var y saber cuando usarla
//tambien que biene por defecto asi que colocar let si o si.