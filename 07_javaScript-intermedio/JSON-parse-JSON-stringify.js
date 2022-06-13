const obj1 = {
    a: "b",
    c: "c",
    d:{e: "e",
       f: "f"},
};

//si quiciera copiar este objeto y luego modificarlo usamos

const obj2 = JSON.stringify(obj1);

console.log(obj2);

// nos imprime:     {"a":"b","c":"c","d":{"e":"e","f":"f"}} que es un string
//luego tenemos JSON.parse para combertir un string en un objeto.

const obj3 = JSON.parse(obj2);

console.log(obj3);