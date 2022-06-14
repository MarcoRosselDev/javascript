/* 1 API REST:
API REST 🌐
API: Application Program Interface -> Interfaz
Una interfaz es el medio por el cual la computadora se conecta con los humanos. Es lo visible para el usuario que interactúe con una app, por ejemplo.

API REST
Es el medio por el cual se comunican computadoras con otras computadoras. O también podemos pensarlo como robots con robots 🤖🔁🤖. Puede ser backend con frontend, backend con backend, etc.

REST: Representational State Transfer

A diferencia de una página web, que se muestra con imágenes, textos formateados, etc.; la llamada de una API REST se devuelve en un archivo JSON.

Aunque pocas, algunas aplicaciones todavía usan el método SOAP para mandar información entre computadoras. Sin embargo, actualmente REST está dominando su aplicación.
*/
/* 2 Flujo de comunicación 

👨‍💻 Cuando tenemos una aplicación que recibe el HTML una sola vez, JavaScript se encargara de sobreescribirlo segun la interacción del usuario y los datos recibidos del backend (por medio de la API) y a esto se le llama:

SPA (Single Page Aplication) - Aplicación de una sola pagina.

Y ya que estas aplicaciones solo te regresan una pagina, todo el renderizado sucede en el navegador gracias a JS, a esto se le llama:
Server Side Rendering

*/
/* 3 Consumo de API REST



*/
/* 5 HTTP Status codes

1XX Respuestas Afirmativas

2XX Respuestas satisfactorias

3XX Re-direcciones

4XX Error del cliente

5XX Error de servidor

*/
/* 6 API KEY

API KEY
Son una, no la única, de las formas en que el backend puede identificar quien está haciendo cada solicitud.

Debemos entender dos conceptos importantes, la Autenticación y la Autorización.

AUTENTICACIÓN
Consiste en identificar quien es cada quien. No sabe que permisos tiene fulano, No sabe que puede o no hacer fulano, Solamente sabe que él es fulano, que ella es pamela o que esa es una persona sin identificar.

AUTORIZACIÓN
Es la que nos dice que permisos tiene cada quien, es decir, si fulano quiere ir a la nevera para comerse un pastel, es la que dice, espérate fulano, tienes permisos para abrir la nevera?, a listo ábrela, tienes permisos de comerte el pastel?, a bueno comételo.

Y además por poner un ejemplo más real, si fulano trata de ver las fotos privadas de pamela, la autorización va a decir, ok quien eres?, la autenticación ya te dijo que eras fulano, a listo perfecto, autenticación me pasas un token, listo ya sé que tu eres fulano, y luego empieza a revisar los permisos, como no los tiene se lo va a prohibir,

Obviamente estos trabajan en conjunto para prohibir o permitir a toda la información que tenemos en nuestra aplicación, y ahí es donde entran las API KEYs.

Estas API Keys son una de las formas en que el backend puede indentificar quien es cada quien.

El backend necesita saber quien esta haciendo cada solicitud, para proteger la información privada de las personas, pero también en muchos casos, para limitar la cantidad o las solicitudes que le hacemos a la aplicación.

Para que nosotros podamos enviarle esta API KEY en cada solicitud que hagamos al backend podemos utilizar varias formas:

Query parameter: 
    ?apy_key=ABC123
Authorization Header: 
    X-API-Key: ABC123

ALTERNATIVAS

Authorization: Basic

Authorization: Barer Token

OAuth 2.0 (es de las mejores y más complicadas formas de autenticar en la modernidad)

Access Key + Secret Key
    En este caso estamos haciendo una:
    Application-based authentication

es decir estamos autenticando nuestra aplicación, estamos autenticando a nuestro frontend para que pueda hacer solicitudes al backend, pero hay aplicaciones donde no solamente necesitamos una Application-based authentication, también hay apps que necesitamos usar esta con una User-based authentication

*/
/* 7 Maquetación del proyecto

*/
/* 8 Mètodos HTTP

HTTP Methods

GET Lee datos del server (Solo Lectura)

HEAD Recupera datos de los headers (Solo Lectura)

POST Envía datos al server

PUT/PATCH Salva datos en el server

DELETE Borra datos del server

*/
/* */
/* */
/* */
/* */