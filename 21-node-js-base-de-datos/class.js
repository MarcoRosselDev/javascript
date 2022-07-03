/*Métodos, cabeceras y estados

Métodos HTTP:

GET: Recoger información del servidor.
POST: Añadir información al servidor.
PUT: Reemplazar información en el servidor.
PATCH: Actualizar parte de la información.
DELETE: Eliminar información del servidor.
OPTIONS: Pedir información sobre métodos (saber si podemos ejecutar alguno de los métodos anteriores).
Las cabeceras serán el envío al servidor de cómo queremos hacer la petición.

Los estados son números que indica el estado de la petición:

2XX: Todo ha ido bien.
3XX: La petición se ha redirigido.
4XX: Errores del cliente.
5XX: Ha habido un error al procesar la petición.

*/
/*Cuerpo y query de la petición
-------------------------------------------------
[[[El cuerpo]]] de la petición es la información en sí que queremos enviar, editar o que el servidor nos devuelva.
-------------------------------------------------
¿Que tiene y cómo viene?
    Depende de las cabeceras

        Content-Type
        Content-Length

        Posibles content-type

            text/html
            text/css
            application/javascript  "application le dice al navegador que se debe   ejecutar"
            image/jpeg
            application/json    "datos crudos parecidos a un objeto de javascript"
            application/xml     "html evolución de html"


---------------------------------
En la request(solicitud)

[POST]
http://api.com/user
    content-type: application/json
    {
        "name": "Lusho",
        "username": "CodigoLushito"
    }
---------------------------------
En la response(respuesta)

-En cualquier método
-Un archivo html, css, js...
-Los datos de un producto

-------------------------------------------------
ejemplo de petición a una paguina
-------------------------------------------------
[GET]
http://marcus.com
content-type: text/html

<html>
    <head> ... </head>
    <body> ... </body>
</html>
-------------------------------------------------
-------------------------------------------------
Las queries van a permitirte añadir información extra a los datos que queramos enviarle al servidor.
-------------------------------------------------
Información extra.
-Orden en el que quieres que se devuelvan los datos
-Parámetro que quieres medir.

un ejemplo es 
youtube.com/watch?v=zkfwqfweg
{
    le estoy pidiendo a youtube pero le espesifico despues del ? el video que quiero ver.
    
}

-------------------------------------------------
tmbn nos sirven para compartir información con el frontend (pero ojo que el usuario lo verá.)
    por ejemplo
    
    miweb.com?utm_source=medium
    {
        le espesifica de donde vienen los datos
        (medium) y esto lo vera el usuario
    }

    ejemplo2
    miweb.com?color=red
    {
        le solicita datos de una web roja
    }
-------------------------------------------------
ESTRUCTURA DE UNA QUERY

-Añadir ? al final de la URL
-nombre=valor
-Separarlos con &



*/
/* */