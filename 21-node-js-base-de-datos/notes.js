/*2
4
-----------------------------------------------
¿Qué método HTTP se usaría para cambiar la foto de un usuario?
-----------------------------------------------
respuestas malas:
    -POST
    -
    -
-----------------------------------------------
opciónes:
    a GET

    b PUT

    c POST

    d PATCH ++++++++++++

    e DELETE
-----------------------------------------------
notas de la clase:
    Métodos HTTP:

    GET: Recoger información del servidor.
    POST: Añadir información al servidor.
    PUT: Reemplazar información en el servidor.
    PATCH: Actualizar parte de la información.
    DELETE: Eliminar información del servidor.
    OPTIONS: Pedir información sobre métodos (saber si podemos ejecutar alguno de los métodos anteriores).
-----------------------------------------------
*/
/*1
5
-----------------------------------------------
¿Para qué se utilizan las peticiones HTTP?
-----------------------------------------------
respuestas malas:
    -Para escuchar eventos del servidor en tiempo real
    -
    -
-----------------------------------------------
opciónes:
    a Para escuchar eventos del servidor en tiempo real

    [[[b Para comunicar con servidores en internet ++++++]]]

    c Para añadir tareas a una cola de ejecución

    d Para acceder de forma remota a una consola
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*3
5
-----------------------------------------------
¿Cómo sabemos qué tipo de contenido hay en el cuerpo de una petición HTTP?
-----------------------------------------------
respuestas malas:
    -Por la cabecera Authorization
    -
    -
-----------------------------------------------
opciónes:
    [[[[a Por la cabecera Content-type+++++++++++++++]]]]

    b No se puede saber

    c Por la cabecera Authorization

    d Por el método HTTP

    e Por la URL
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*5
7
-----------------------------------------------
¿Cómo le indicamos a nuestra app que use el router?
-----------------------------------------------
respuestas malas:
    -express.use(app.router)
    -
    -
-----------------------------------------------
opciónes:
    a app.router(use)

    b express.Router(app)------2°lugar

    c No hace falta indicarlo

    d express.use(app.router)

    [[[[e app.use(router)]]]]+++++++++++++
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*6
8
-----------------------------------------------
En una petición hacia /user?uid=123, ¿cómo recogemos el valor de "uid"?
-----------------------------------------------
respuestas malas:
    -res.query.uid
    -
    -
-----------------------------------------------
opciónes:
    a req.body.uid

    b res.query.uid

    c req.url.uid

    d req.url.uid

    e res.body.uid++++++++++++++++++++
-----------------------------------------------
notas de la clase:
req.query.uid --este no esta
req.body.uid  --parece que es este.
-----------------------------------------------
*/
/*7
9
-----------------------------------------------
¿Cómo recogemos la cabecera Authorization de la petición?
-----------------------------------------------
respuestas malas:
    -req.auth['Authorization']
    -
    -
-----------------------------------------------
opciónes:
    a req.headers.auth

    b req.headers['Authorization']+++++++++++++

    c res.headers.auth

    d req.auth['Authorization']

    e No se puede recoger
-----------------------------------------------
notas de la clase:
req.headers('Authorizatoin');
-----------------------------------------------
*/
/*8
10
-----------------------------------------------
¿Se puede enviar sólo un código de estado 200 en la response?
-----------------------------------------------
respuestas malas:
    -No, el estado 200 es un estado prohibido
    -
    -
-----------------------------------------------
opciónes:
    a Si, con res.send(200)+++++++++++++++

    b Sólo si es un error

    c No, siempre tienes que devolver contenido

    d No, el estado 200 es un estado prohibido
-----------------------------------------------
notas de la clase:
podemos dar cualquier tipo de respuesta, como arreglos o objetos.
-----------------------------------------------
*/
/*9
11
-----------------------------------------------
¿Cuál es la principal ventaja de responder las peticiones de manera coherente y uniforme?
-----------------------------------------------
respuestas malas:
    -Conseguir mejores tiempos de respuesta
    -
    -
-----------------------------------------------
opciónes:
    a Facilita trabajo con nuestra API desde cualquier cliente +++++++++++++++

    b Conseguir mejores tiempos de respuesta

    c Que los test ya están hechos

    d No hay ninguna ventaja
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*10
12
-----------------------------------------------
¿Se pueden servir los archivos de una carpeta con nuestra app de express?
-----------------------------------------------
respuestas malas:
    -Sí, usando un módulo para renderizar los estáticos
    -
    -
-----------------------------------------------
opciónes:
    a No, sólo se puede servir una API

    b Sí, usando un módulo para renderizar los estáticos

    c No, sólo archivos que hayas subido desde la API

    d Sí, usando el middleware express.static++++++++++++++++++++++++

    e Sí, pasándolo por un intérprete de código
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*11
13
-----------------------------------------------
¿Es una buena práctica devolver la traza del error y una descripción detallada?
-----------------------------------------------
respuestas malas:
    -Sí, así facilitas al usuario el reporte del error, y te añade información extra para solucionarlo
    -
    -
-----------------------------------------------
opciónes:
    a No, puede confundir al usuario y pensar que está haciendo algo mal

    b Sí, así facilitas al usuario el reporte del error, y te añade información extra para solucionarlo******[segunda opción]

    c No, es un riesgo para la seguridad, ya que le estás dando información de tu código al atacante +++++++++++++++++++

    d Sí, sólo si también guardas el registro
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*12
14
-----------------------------------------------
¿Es una buena práctica separar las rutas, la funcionalidad y el almacenamiento?
-----------------------------------------------
respuestas malas:
    -No. Es una práctica desaconsejada, porque te separa de la totalidad del problema
    -
    -
-----------------------------------------------
opciónes:
    a Sí, y te permite separar la lógica de la interfaz, y abstraer tu código de la base de datosque uses +++++

    b Solo si vas a cambiar la base de datos en el futuro

    c No. Es una práctica desaconsejada, porque te separa de la totalidad del problema

    d No, porque se generan muchos archivos y carpetas

    e Sí, porque así puedes tener tu codigo separado en carpetas
-----------------------------------------------
notas de la clase:
definitivamente es la (a)
-----------------------------------------------
*/
/*15
17
-----------------------------------------------
¿Quién es el encargado de llamar a la capa de datos?
-----------------------------------------------
respuestas malas:
    -La capa de red
    -
    -
-----------------------------------------------
opciónes:
    a Nadie puede llamarla

    b Otra capa de datos

    c La capa de red

    d Cualquiera puede llamarla

    e El controlador +++++++++++++++
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*17
18
-----------------------------------------------
¿Las bases de datos no relacionales pueden consultarse con SQL?
-----------------------------------------------
respuestas malas:
    -Sí, SQL es un lenguaje universal 
    -
    -
-----------------------------------------------
opciónes:
    a No, SQL no es un lenguaje de bases de datos

    b Normalmente, no

    c Sí, SQL es un lenguaje universal

    d Sí, siempre que en vez de INSERT uses UPSERT++++
-----------------------------------------------
notas de la clase:
no me quedo claro la respuesta, puedes ser culquiera
-----------------------------------------------
*/
/*18
20
-----------------------------------------------
¿Hay que crear manualmente un ID cada vez que añadamos un registro a MongoDB?
-----------------------------------------------
respuestas malas:
    -Sí, y tiene que ser criptográfico
    -
    -
-----------------------------------------------
opciónes:
    a No, lo hace automáticamente ++++++

    b No, Mongo no usa ID

    c No, Mongo no usa ID

    d Sí, y tiene que ser criptográfico

    e Sí, si no, no lo guarda
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*20
24
-----------------------------------------------
¿De qué formas podemos conectar nuestra API con la base de datos?
-----------------------------------------------
respuestas malas:
    -Sólo puede haber una conexión permanente
    -
    -
-----------------------------------------------
opciónes:
    a Sólo se puede abrir y cerrar una conexión con cada petición

    b Sólo puede haber una conexión permanente

    c Conexiones puntuales que se abren y se cierran, o una conexión permanente +++++++++++++++

    d Encriptada o sin encriptar
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*21
27
-----------------------------------------------
¿Se pueden enviar ficheros a nuestra API, y recibirlos desde el servidor?
-----------------------------------------------
respuestas malas:
    -Se puede enviar, pero el servidor no lo va a recibir
    -
    -
-----------------------------------------------
opciónes:
    a Sí, usando el módulo multer+++++++++++++++++++

    b Se puede enviar, pero el servidor no lo va a recibir

    c Sólo podemos enviar texto plano

    d No se puede.

    e Sí, pero hay que llamarla desde jQuery
-----------------------------------------------
notas de la clase:
en el fondo todos los archivos son texto que se leen de diferentes formas.
    una de las formas es con el metodo multipart
    exportando el módulo multer
-----------------------------------------------
*/
/*23
29
-----------------------------------------------
¿Cuál es la principal ventaja de los WebSockets sobre las peticiones HTTP?
-----------------------------------------------
respuestas malas:
    -Los WebSockets son exactamente lo mismo que las peticiones HTTP, pero más modernos 
    -
    -
-----------------------------------------------
opciónes:
    a-Los WebSockets se quedan abiertos y permiten una comunicación en tiempo real.++++++++++++++++++++++
    
    b-No hay ninguna ventaja

    c-Los WebSockets son más seguros

    d-Los WebSockets son exactamente lo mismo que las peticiones HTTP, pero más modernos
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*24
30
-----------------------------------------------
¿Se puede recibir más de un evento desde una conexión WebScoket?
-----------------------------------------------
respuestas malas:
    -Sí, siempre y cuando no pasen más de 3 segundos entre eventos
    -
    -
-----------------------------------------------
opciónes:
    a Sí, se pueden recibir tantos eventos como el servidor envíe ++++++++++++++++++++++

    b Sí, siempre y cuando no pasen más de 3 segundos entre eventos

    c No, los WebSockets no te permiten recibir eventos

    d No, sólo se puede recibir un evento por cada conexión

    e Sí, siempre y cuando los eventos sean idénticos
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*25
31
-----------------------------------------------
¿Se puede mandar más de un evento a la misma conexión?
-----------------------------------------------
respuestas malas:
    -No, sólo se puede enviar un evento por cada conexión
    -
    -
-----------------------------------------------
opciónes:
    a Sí, siempre y cuando los eventos sean idénticos

    b Sí, pero tienen que pasar menos de 5 segundos entre eventos

    c No, sólo se puede enviar un evento por cada conexión

    d No, a través de un WebSocket no se pueden mandaar eventos

    e Sí, se pueden enviar tantos eventos como se desee+++++++++++++++++++
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*26
31
-----------------------------------------------
¿Podemos tener en la misma aplicación HTTP y WebSockets?
-----------------------------------------------
respuestas malas:
    -No, son protocolos diferentes y no pueden convivir ni compartir información
    -
    -
-----------------------------------------------
opciónes:
    a Sí, pero no pueden compartir información

    b No, son protocolos diferentes y no pueden convivir ni compartir información

    c No se puede, habría conflictos en la capa de red

    d Sí, se pueden tener en el mismo servidor, y mandar eventos cuando surjan acciones
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/








