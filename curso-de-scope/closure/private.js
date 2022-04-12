//ejecutar la logica

//tener metodos internos con los cuales podremos obtener la informacion de una variable o asignarle algun valor a esta variable pero nunca poder hacerlo desde afuera.

const persona = () => {
    var guardarNombre = "nombre";
    return {
        dameElNombre: () => {
            return guardarNombre;
        },      //ojo esta coma. con ; marca error y sin nada tmbn
        escribirNombre: (name) => {
            guardarNombre = name;
        },
    };
};

nuevaPersona = persona();
console.log(nuevaPersona.dameElNombre());
nuevaPersona.escribirNombre("lushito");
console.log(nuevaPersona.dameElNombre());
console.log(persona);