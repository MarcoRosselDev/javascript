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
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // para crear metodos dentro de los prototipos
    // this.aprobarCurso = function (nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // }

    // tenemos esto mismo pero más interesante

}
Student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanito = new Student(
    "Juanito Medina",
    33,
    [
        "curso a",
        "curso b",
        "curso c",
    ]
)