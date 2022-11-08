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
/* 9 GET



*/
/* 11 Manipulación dinamica del DOM



*/
/* 13 Headers

¿Qué son los Headers HTTP?
Los headers HTTP son parámetros que se envían en una transacción HTTP, que contienen información del estado de la transacción en curso.

Cuando un cliente solicita información a un servidor, este puede pasarle información adicional en el header de la solicitud. información del tipo de datos que se esperan recibir, del tipo de datos que envían, información de autenticación etc.

De la misma forma el servidor puede incluir estos headers en las respuestas para mostrar información del estado de la solicitud.(HTTP Status Codes)

Estos pueden ser separados en varios grupos:

-------------------------------------------------------------
Request Headers
Pasan información de la solicitud. Contienen información sobre el recurso solicitado e información del cliente que la solicita.

URL a la que se le hace la solicitud, detalles de autenticación o políticas de cache

Estos pueden ser:

Accept: 
    Informan al servidor el tipo de datos que el cliente puede entender

Accept: text/html
Accept: application/xhtml+xml
Accept: image/png

Accept-Encoding: 
    Envían información sobre el tipo de codificación que el cliente puede entender

Accept-Encoding: gzip
Accept-Encoding: gzip, compress

Authorization: 
    sirve para pasar credenciales que le servirán al servidor determinar si el cliente tiene acceso a ciertos recursos

Authorization: Basic 
Authorization: Bearer 

Accept-Language: 
    Permite saber al servidor que tipo lenguaje es entendido por el cliente logrando entender que configuración local es viable enviar. Por ejemplo: los horarios, fechas, medidas, etc.

Accept-Language: fr-CH
Accept-Language: en-US

Cache-Control: 
    contiene información sobre el control de la cache por parte del cliente y del servidor.

Cache-Control: stale-while-revalidate=60
Cache-Control: no-cache

-------------------------------------------------------------

Response Headers
Así como los request headers contienen información del cliente, los response headers contienen información del servidor al que se le hace la petición.

En realidad todos los headers enviados en un respuesta del servidor pueden ser llamados de esta manera.

Age: 
    Contienen información del tiempo que un objeto estuvo en caché. Se representa en segundos. Si es 0(cero) significa que la solicitud se obtuvo del servidor de origen. Sino se calcula como la diferencia entre el Date del proxy y el date enviado por la respuesta original.

    Age: 24

Server: 
    Describen el software usado por el servidor que manejó la solicitud. Es decir el que generó la respuesta.

    Hay que tener en cuenta que hay que evitar demasiado detalle en estas respuesta ya que sino se estaría enviando información que podrían utilizar los atacantes(por ejemplo la versión del sistema operativo que utiliza el servidor). Se utiliza por ejemplo para exponer la versión de apache utilizada,

    Server: Apache/2.4.1 (Unix)

Location: 
    indica la URL a la que redirigir una página. Solo proporciona un significado cuando se sirve con una respuesta de estado 3xx (redireccionamiento) o 201 (creado).

-------------------------------------------------------------

Representation Headers
Contienen información acerca del body de la solicitud, enviado en una respuesta o (en un POST)

Content-type: 
    Indica el tipo de contenido (formato de archivo) es enviado en una solicitud.

    ejemplo: Content-Type: text/html; charset=UTF-8

Content-Enconding: 
    Contienen la información necesaria para decodificar un archivo a su formato original.

Content-Encoding: compress
Content-Encoding: gzip

Content-Languaje: 
    Indica el lenguaje para los cuales es más relevante el contenido de una página, de modo que los usuarios puedan diferenciarlos según su propio idioma preferido.

Content-Language: en-US
Content-Language: en-CA

Content-Location: 
    Indican un URL o dirección alternativa para la respuesta. A diferencia de Location (en Request Headers). Este indica la url directa que puede ser utilizada para acceder al recurso. Mientras Location esta asociada la respuesta en si, content-location esta asociada a los datos devueltos.

Por ejemplo: Si una api puede devolver datos en los formatos JSON, XML o CSV y su ruta se encuentra en https://ejemplo.com/documents/archivo.

El sitio podría retornan distintas url dependiendo del parámetro Accept pasado en la solicitud.

Request header	                   Response header

Accept:                             Content-Location:
application/json,                   /documents/foo.json
text/json	
    
Accept: 
application/xml,        	        Content-Location: 
text/xml                            /documents/foo.xml

Accept: 
text/plain,                 	    Content-Location: 
text/*                              /documents/foo.txt

-------------------------------------------------------------

Payload Headers
contiene información acerca de la carga de la respuesta. Lenght, Enconding, Range.

Content-Lenght: 
    Indica el tamaño del body del mensaje en bytes

    Content-Length: 3495

Content-Range: 
    Indica la posición a la que pertenece una porción del mensaje respecto al body.

Content-Range: 
    <unit> <range-start>-<range-end>/<size>

Content-Range: 
    bytes 200-1000/67589


*/
/* */
