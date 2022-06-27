//ejemplo de console.table()

let tablaEjemplo = [
    {
        nombre: 'marco',
        edad: 29,
        casado: false
    },
    {
        nombre: 'Lusho',
        edad: 39,
        casado: true
    }
]

console.log(tablaEjemplo);
console.table(tablaEjemplo);

/*[
  { nombre: 'marco', edad: 29, casado: false },
  { nombre: 'Lusho', edad: 39, casado: true }
]
┌─────────┬─────────┬──────┬────────┐
│ (index) │ nombre  │ edad │ casado │
├─────────┼─────────┼──────┼────────┤
│    0    │ 'marco' │  29  │ false  │
│    1    │ 'Lusho' │  39  │  true  │
└─────────┴─────────┴──────┴────────┘

que cosa más bonita <3*/