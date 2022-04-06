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

let cantidad = prompt(`¿cuantos alumnos son?`);
let alumnosTotales = [];                            // este es un array que vamos a rellenar

for (i = 0;i < cantidad; i++)   {
    alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0]     //es un array dentro de un array
}

const pasarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "p") {
        alumnosTotales[p][1]++;
    }
}
//pasamos la lista 30 días seguidos con el bucle llamando la const pasarAsistencia( aqui arriba).

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
        pasarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
//recopilados todos los datos devemos notificar si se reprueba por inasistencia

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Asistencias: ${alumnosTotales[alumno][1]} <br>
    ________Ausencias: ${30 - alumnosTotales[alumno][1]}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= `reprobado por inasistencia.`
    }else {
        resultado+= `<br>`
    }
    document.write(resultado);
}