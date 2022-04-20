const natalia = {
    name : "natalia",
    age : 20,
    cursosAprobados: [
        "curso x",
        "curso y",
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    },
};

// hacer que natalia apruebe otro curso

// natalia.cursosAprobados.push("curso z");--lo metimos dentro




// creación de un prototipo
function student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // para crear metodos dentro de los prototipos
    this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}