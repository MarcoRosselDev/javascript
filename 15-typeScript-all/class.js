/*2--5 +++
¿Cuál es la opción correcta para decirle al compilador de TS la versión de JavaScript a la cual debe transpilar?
----------------------------------
npx tsc src/** --es es6
----------------------------------
a
npx tsc src/** --target es6 ++++++++++
b
npx tsc src/** --version es6
c
npx tsc src/** --js es6
*/
/*6--11 +++
Teniendo en cuenta esta instrucción `const rta = 1 + '1';` ¿Cuál sería el tipo de dato que infiere TS de rta?
----------------------------------
undefined
----------------------------------
a
number
b
string +++++++++++++++++
*/
/*7--12 +++
¿Cuál sería la forma correcta de definir un array que solo soporte números y booleanos?
----------------------------------
let mixed: [number | boolean ];
----------------------------------
a
let mixed: (Number | Boolean )[]; *****Tiene mayuscula**
c
let mixed: (number | boolean )[]; ++++++++++++++++++
*/
/*11--18 +++
Si quiero declarar una función que no tiene retorno ¿cuál de las siguientes palabras reservadas de TS usaría?
----------------------------------
empty
----------------------------------
b
any xxx[no cero, esto es = cualquier tipo]
c
void +++++++++++++++++
*/
/*13--20 +++
¿Cuál es la manera correcta de crear un propio tipo para definir los atributos de un Producto?
----------------------------------
new type Product = { 
    title: string, 
    createAt: Date, 
    stock: number, 
    shirtSize?: Sizes 
};
----------------------------------
a
class Product = { 
    title: string, 
    createAt: Date,
    stock: number, 
    shirtSize?: Sizes
};
c       ++++++++++++++++++++++++++++++++
type Product = {
    title: string,
    createAt: Date,
    stock: number,
    shirtSize?: Sizes
};
*/
/*14--23 +++
Cuando hay librerías que no tiene  soporte a tipos por ejemplo en el caso de  lodash podemos agregar el soporte a tipos usando el comando...
----------------------------------
npm i @lodash/types --save-dev
----------------------------------
a
npm i @ts/lodash --save-dev
c
npm i @types/lodash --save-dev +++++++++++
*/