/*2--5
¿Cuál es la opción correcta para decirle al compilador de TS la versión de JavaScript a la cual debe transpilar?
----------------------------------
npx tsc src/** --es es6
----------------------------------
*/
/*6--11
Teniendo en cuenta esta instrucción `const rta = 1 + '1';` ¿Cuál sería el tipo de dato que infiere TS de rta?
----------------------------------
undefined
----------------------------------
*/
/*7--12
¿Cuál sería la forma correcta de definir un array que solo soporte números y booleanos?
----------------------------------
let mixed: [number | boolean ];
----------------------------------
*/
/*11--18
Si quiero declarar una función que no tiene retorno ¿cuál de las siguientes palabras reservadas de TS usaría?
----------------------------------
empty
----------------------------------
*/
/*13--20
¿Cuál es la manera correcta de crear un propio tipo para definir los atributos de un Producto?
----------------------------------
new type Product = { title: string, createAt: Date, stock: number, shirtSize?: Sizes };
----------------------------------
*/
/*14--23
Cuando hay librerías que no tiene  soporte a tipos por ejemplo en el caso de  lodash podemos agregar el soporte a tipos usando el comando...
----------------------------------
npm i @lodash/types --save-dev
----------------------------------
*/