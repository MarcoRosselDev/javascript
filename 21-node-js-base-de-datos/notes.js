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
notas de la clase:
-----------------------------------------------
*/
/*2

-----------------------------------------------
¿Qué método HTTP se usaría para cambiar la foto de un usuario?
-----------------------------------------------
respuestas malas:
    -POST
    -
    -
-----------------------------------------------
notas de la clase:
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
    a-Los WebSockets se quedan abiertos y permiten una comunicación en tiempo real.
    
    b-No hay ninguna ventaja

    c-Los WebSockets son más seguros

    d-Los WebSockets son exactamente lo mismo que las peticiones HTTP, pero más modernos
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

    d Sí, siempre que en vez de INSERT uses UPSERT
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
    a Por la cabecera Content-type

    b No se puede saber

    c Por la cabecera Authorization

    d Por el método HTTP

    e Por la URL
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

    d Sí, usando el middleware express.static

    e Sí, pasándolo por un intérprete de código
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

    e Sí, se pueden enviar tantos eventos como se desee
-----------------------------------------------
notas de la clase:
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

    b Para comunicar con servidores en internet

    c Para añadir tareas a una cola de ejecución

    d Para acceder de forma remota a una consola
-----------------------------------------------
notas de la clase:
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
    a Si, con res.send(200)

    b Sólo si es un error

    c No, siempre tienes que devolver contenido

    d No, el estado 200 es un estado prohibido
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

    b express.Router(app)

    c No hace falta indicarlo

    d express.use(app.router)

    e app.use(router)
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/
/*9
11
-----------------------------------------------
¿Cuál es la principal ventaja de responder las peticiones de manera coherente yuniforme?
-----------------------------------------------
respuestas malas:
    -Conseguir mejores tiempos de respuesta
    -
    -
-----------------------------------------------
opciónes:
    a Facilita trabajo con nuestra API desde cualquier cliente

    b Conseguir mejores tiempos de respuesta

    c Que los test ya están hechos

    d No hay ninguna ventaja
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

    e res.body.uid
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
    a Sí, se pueden recibir tantos eventos como el servidor envíe

    b Sí, siempre y cuando no pasen más de 3 segundos entre eventos

    c No, los WebSockets no te permiten recibir eventos

    d No, sólo se puede recibir un evento por cada conexión

    e Sí, siempre y cuando los eventos sean idénticos
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

    c Conexiones puntuales que se abren y se cierran, o una conexión permanente

    d Encriptada o sin encriptar
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

    b Sí, así facilitas al usuario el reporte del error, y te añade información extra para solucionarlo

    c No, es un riesgo para la seguridad, ya que le estás dando información de tu código al atacante

    d Sí, sólo si también guardas el registro
-----------------------------------------------
notas de la clase:
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

    e El controlador
-----------------------------------------------
notas de la clase:
-----------------------------------------------
*/