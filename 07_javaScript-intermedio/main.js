const marco = {
    name: "marcus",
    age: 29,
    approvedCourses: ["curso 1"],
    addCourse(newCourese) {
        this.approvedCourses.push(newCourese);
    }
};

//vamos a practicar los metodos prototipos vistos asta ahora

// console.log(Object.keys(marco));
// console.log(Object.getOwnPropertyNames(marco));
// console.log(Object.entries(marco));

/*-------------------------------------------------------- 
nos miestra los siguientes resultados :
----------------------------------------------------------

[ 'name', 'age', 'approvedCourses', 'addCourse' ]

-----------------------------------------------------------

[ 'name', 'age', 'approvedCourses', 'addCourse' ]

-----------------------------------------------------------
[
  [ 'name', 'marcus' ],
  [ 'age', 29 ],
  [ 'approvedCourses', [ 'curso 1' ] ],
  [ 'addCourse', [Function: addCourse] ]
]
-----------------------------------------------------------
*/

//probemos el metodo prototipo más interesante

// console.log(Object.getOwnPropertyDescriptors(marco));

/*--------------------------------------------------------
esto nos imprime en consola:

{
  name: {
    value: 'marcus',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 29, writable: true, enumerable: true, configurable: true },
  approvedCourses: {
    value: [ 'curso 1' ],
    writable: true,
    enumerable: true,
    configurable: true
  },
  addCourse: {
    value: [Function: addCourse],
    writable: true,
    enumerable: true,
    configurable: true
  }
}

*/

//ahora trabajaremos un 5to metodo prototipo que puede agregar propiedades al metodo y modificarle estos parametros.

//el primer parametro es el de ciempre, el segundo es la nueva propiedad que queremos crear, y el tercer argumento es nuestro objeto lista de atributos

Object.defineProperty(marco, "navegator", {
  value: "Chrome",
  enumerable: false,
  writable: true,
  configurable: true
});
Object.defineProperty(marco, "editor", {
  value: "VSCode",
  enumerable: true,
  writable: false,
  configurable: true
});
Object.defineProperty(marco, "pruebaNASA", {
  value: "extraterrestres",
  enumerable: false,
  writable: false,
  configurable: false
});
Object.defineProperty(marco, "terminal", {
  value: "WSL",
  enumerable: true,
  writable: true,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptors(marco));

// --------------------------------------------------------------
// --------------------------------------------------------------
//clase 6 

const objeto1 = {
  a: "a",
  b: "b",
};

const objeto2 = {};

for (prop in objeto1) {
  objeto2[prop] = objeto1[prop];
}
 console.log(objeto1);
 console.log(objeto2);

 objeto2.a = "AAAAAABBBBB";

 console.log(objeto1);
 console.log(objeto2);
 
// de esta forma podemos copiar los valores del objeto sin dañar los datos en la memoria heap.