/*1 +++
2
¿Cuál es la capa que evalúa si un usuario puede o no ingresar al sistema?
-----------------------------------
Autorización
-----------------------------------
a
Autenticación +++++++
b
Firma de token
c
Autorización
*/
/*2 +++
2
¿Cuál es la capa que evalúa los permisos de un usuario?
-----------------------------------
Autenticación
-----------------------------------
a
Autorización ++++++++
b
Autenticación
c
Firma de token
*/
/*3
4
¿Cuál es la forma correcta de obtener el atributo 'api' desde los headers de una petición?
-----------------------------------
req.headers.get('api')
-----------------------------------
a req.headers['api']
b req.get('api')
c req.headers.get('api')
*/
/*7
7
¿Cuál middleware de Passport.js funciona para hacer un inicio de sesión?
-----------------------------------
passport-auth
-----------------------------------
a
passport-jwt
b
passport-local
c
passport-auth
*/
/*8 +++
8
¿Es posible saber el contenido de un JWT?
-----------------------------------
Falso
-----------------------------------
a
Falso
b
Verdadero +++++++++++
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
a
jwt.check(token, 'my-secret');
b
jwt.verify(token, 'my-secret');
c
jwt.isValid(token, 'my-secret');
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