class Student {
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const lusho = new Student(
    "lushin",
    22,
    [
        "curso g",
        "curso k",
        "curso 7",
        "curso d",
    ],
);