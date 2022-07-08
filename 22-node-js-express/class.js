/*3
3
¿Cuál método de express nos sirve para retornar un formato json como respuesta?
------------------------------------------------------
app.sendJson({...})
------------------------------------------------------
------------------------------------------------------

*/
/*4
6
¿Cuál es la manera de  correcta de declarar una ruta que reciba un parámetro llamado productId?
------------------------------------------------------
app.get(’/products/<productid>’, …)
------------------------------------------------------
------------------------------------------------------

*/
/*5
6
¿Cuál la manera de  correcta obtener el parámetro productId enviado desde una ruta con GET?
------------------------------------------------------
const productId = req.param(' productId ');
------------------------------------------------------
------------------------------------------------------

*/
/*6
7
¿Cuál es la manera de  correcta obtener parámetros tipo query de una ruta con GET?
------------------------------------------------------
const { limit, offset } = req.queryParams;
------------------------------------------------------
------------------------------------------------------

*/
/*8
10
¿Cuál es el middleware de express que me permite recibir la información de POST en formato json?
------------------------------------------------------
app.use(express.jsonApply())
------------------------------------------------------
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