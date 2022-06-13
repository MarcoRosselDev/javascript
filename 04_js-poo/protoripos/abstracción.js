class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

// creamos las escuelas;

const escuelaWeb = new LearningPath({
    name:"escuela H",
    courses: [
        "curso F",
        "curso L",
        "curso K",
    ],
});


const escuelaVgs = new LearningPath({
    name:"escuela VGS",
    courses: [
        "curso QS",
        "curso Ls",
        "curso Kg",
    ],
});