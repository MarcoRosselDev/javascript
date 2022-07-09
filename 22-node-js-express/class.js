/*3
3
¿Cuál método de express nos sirve para retornar un formato json como respuesta?
------------------------------------------------------
app.sendJson({...})
------------------------------------------------------
a
app.json({...}) +++++++++++++++++
b
app.xml({...})
c
app.sendJson({...})
------------------------------------------------------
res.json({...})
------------------------------------------------------
*/
/*4
6
¿Cuál es la manera de  correcta de declarar una ruta que reciba un parámetro llamado productId?
------------------------------------------------------
app.get(’/products/<productid>’, …)
------------------------------------------------------
a app.get(’/products/<productid>’, …)
b app.get('/products/:productId', ...)+++++++++++
c app.get('/products/*productId', ...)
------------------------------------------------------

*/
/*5
6
¿Cuál la manera de  correcta obtener el parámetro productId enviado desde una ruta con GET?
------------------------------------------------------
const productId = req.param(' productId ');
------------------------------------------------------
a const { productId } = req.params;++++++++++++++++++++++++
b const productId = req.get(' productId ');
c const productId = req.param(' productId ');
------------------------------------------------------

*/
/*6
7
¿Cuál es la manera de  correcta obtener parámetros tipo query de una ruta con GET?
------------------------------------------------------
const { limit, offset } = req.queryParams;
------------------------------------------------------
a const { limit, offset } = req.getQuery;
b const { limit, offset } = req.queryParams;
c const { limit, offset } = req.query; +++++++++++++++++++
------------------------------------------------------

*/
/*8
10
¿Cuál es el middleware de express que me permite recibir la información de POST en formato json?
------------------------------------------------------
app.use(express.jsonApply())
------------------------------------------------------
a app.use(JSON.parse())
b app.use(express.jsonApply())
c app.use(express.json())
------------------------------------------------------

*/
/*10
12
¿Cuál es la forma correcta enviar un error de tipo 404 con una repsuesta tipo json?
------------------------------------------------------
res.statusCode(404).json({message})
------------------------------------------------------
-res.httpStatus(404).json({message})
-res.status(404).json({message})
-res.statusCode(404).json({message})
------------------------------------------------------

*/
/*11
13
¿Cuál es la responsabilidad principal de los servicios?
------------------------------------------------------
Usualmente se encarga de conectarse con datos de terceros como una DB
------------------------------------------------------
Usualmente está toda la lógica de negocio y resuelve los casos de uso
Usualmente expone el servicio al cliente
Usualmente se encarga de conectarse con datos de terceros como una DB
------------------------------------------------------
*/
/*12
16
¿Qué parámetros debemos recibir para tener un middleware que lea errores?
------------------------------------------------------
solo el error xxxxxxx
------------------------------------------------------
-error, req, res y next
-req, res y next
-solo el error
------------------------------------------------------
*/
/*13
18
3.
¿Cuál es el objetivo de la librería Boom?
------------------------------------------------------
Validación de datos por medio de un schema
------------------------------------------------------
a
Llevar un log de los errores.
b
Validación de datos por medio de un schema
c
Manejo de errores http
------------------------------------------------------
*/