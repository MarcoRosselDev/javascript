/*3
3


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