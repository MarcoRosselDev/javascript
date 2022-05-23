const marco = {
    name: "marcus",
    age: 29,
    approvedCourses: ["curso 1"],
    addCourse(newCourese) {
        this.approvedCourses.push(newCourese);
    }
};

//vamos a practicar los metodos prototipos vistos asta ahora

console.log(Object.keys(marco));
console.log(Object.getOwnPropertyNames(marco));
console.log(Object.entries(marco));

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