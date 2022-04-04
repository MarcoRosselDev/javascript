//exercise 1 :

//      a
//-dejar pasar solo a los mayores de 18
//-el primero que entre después de las 2 am no paga

//      b
//-crear mini-sistema para registrar presentes (P)
// y ausentes (A)
//-pasados 30 dias mostrar su situación final del alumno 
//-maximo de 10% de ausencias.

//      c
//-crear calculadora que nos simplifique el trabajo

let free = false;

const validarCliente = (time)=>{
    let edad = prompt(`¿cuanl es tu edad?`);        // hacemos una validación con if (si)
    if (edad >18 )  {                               // hacemos una validación dentro de la validación XD
        if (time >= 2 && time < 7 && free == false) {
            alert(`puedes pasar gratis`);
            free = true;
        } else  {
            alert(`puedes pasar, pero tienes que pagar la entrada`);
        }
    } else  {
        alert(`eres menor de edad por lo que no puedes pasar`);
    }
}