// léxical se tilda en la e en español pero no es buena idea tildar texto en codigo por que es un caracter ireconosible para ciertos interpretadores.

//crearemos un nuevo closure y ver como puedo asignarle valores y como reasignar nuevos elementos o construir nuevos elementos a partir de este mismo y como van a recordar el valor que presentan segun cada uno de los llamados que les aremos.

const armadoConteo = (i) => {
    let conteo = i;
    const despalazamientoConteo = () => {
        console.log(conteo++); //le suma 1 al conteo
    }
    return despalazamientoConteo;// que retorne 

    //tenemos nuestro clouser y si analizamos es que el ambito lexico es las funciones que se ejucutan utilizando la cadena del alcanze donde estaba vigente en su momento 

    //la funcion que esta dentro de la funcion padre va a poder acceder a conteo y ejecutar la suma y retornar el valor 

};

const miConteo = armadoConteo(9); //lo esta recordando
miConteo(); //9
miConteo(); //10
miConteo(); //11

const miOtroConteo = armadoConteo(55);//resulta que tenemos un nuevo alcance y podemos ejecutarla desde donde nesecitemos.
miOtroConteo();
miOtroConteo();
miOtroConteo();
miOtroConteo();