





const capaExtra = () => {

    //primero entendamos el nucleo de la suma y posterior acumulacion
    var accumulation = 0;  // comienza declarando = 0
    const caja = (dinero) => { // caja = dinero que se le agregara
                                // y dinero es un numero cualquiera
        accumulation += dinero; //más el acumulado
        console.log(accumulation);//imprimir para ver el proceso.
    }
    // caja(0); //0   
    // caja(3); //3
    // caja(4); //7
    // caja(6); //13
    // caja(2); //15
    // caja(4); //19
    // caja(8); //27
    //asta aqui esta bien pero esta mal visto cambiar variables globales asi es que es mejor meterlas dentro de otra capa
    return caja;
}

let loQueSea = capaExtra(); //no entiendo este paso

loQueSea(3);
loQueSea(4);
loQueSea(6);
loQueSea(2);
loQueSea(4);
loQueSea(9);


const papa = (nuevoEngendro) =>{

    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(5)  // cantidad de engendritos = 6
traigamosHijosAlMundo(3)  // cantidad de engendritos = 9