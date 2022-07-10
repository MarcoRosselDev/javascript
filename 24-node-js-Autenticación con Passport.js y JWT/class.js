/*1
2
¿Cuál es la capa que evalúa si un usuario puede o no ingresar al sistema?
-----------------------------------
Autorización
-----------------------------------
*/
/*2
2
¿Cuál es la capa que evalúa los permisos de un usuario?
-----------------------------------
Autenticación
-----------------------------------
*/
/*3
4
¿Cuál es la forma correcta de obtener el atributo 'api' desde los headers de una petición?
-----------------------------------
req.headers.get('api')
-----------------------------------
*/
/*7
7
¿Cuál middleware de Passport.js funciona para hacer un inicio de sesión?
-----------------------------------
passport-auth
-----------------------------------
*/
/*8
8
¿Es posible saber el contenido de un JWT?
-----------------------------------
Falso
-----------------------------------
*/
/*9
9
¿Cuál es el método para generar un JWT?
-----------------------------------
jwt.generate({...}, 'my-secret');
-----------------------------------
a
jwt.make({...}, 'my-secret');
b
jwt.generate({...}, 'my-secret');
c
jwt.sign({...}, 'my-secret');
*/
/*14
17
¿Cuál es el método para verificar un JWT?
-----------------------------------
jwt.check(token, 'my-secret');
-----------------------------------
*/
/*15 +++
9
El secret el JWT debe ser guardado dentro del código y no en una variable de ambiente.
-----------------------------------
Verdadero
-----------------------------------
a
Verdadero
b
Falso +++++++++
*/