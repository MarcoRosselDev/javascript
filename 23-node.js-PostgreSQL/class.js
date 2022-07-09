/*1
4
¿Cuál es comando que usamos para levantar el contendedor de Postgres con Docker?
-------------------------------------------------------
docker-compose deploy -d postgres
-------------------------------------------------------
*/
/*3
8
¿Cuál es la forma correcta de leer la variable de ambiente PORT con NodeJS?
-------------------------------------------------------
proccess.get('PORT')
-------------------------------------------------------
*/
/*4
9
¿SequelizeORM se puede conectar a MySql y Postgres o solo funciona para Postgres?
-------------------------------------------------------
Solo funciona con Postgres
-------------------------------------------------------
*/
/*6
11
¿Cuál es la forma de obtener una entidad de la base de datos con base a la PK?
-------------------------------------------------------
models.MyModel.getByPk(myId)
-------------------------------------------------------
*/
/*7
11
¿Cuál es la forma de eliminar una entidad de la base de datos con base a la PK?
-------------------------------------------------------
const model = await models.MyModel.findByPk(myId) await model.remove();
-------------------------------------------------------
*/
/*8
12
¿Cuál es el puerto por defecto en el cual Mysql corre por defecto?
-------------------------------------------------------
8080
-------------------------------------------------------
*/
/*11
15
¿Cuál es el método que nos ofrece queryInterface para agregar una columna?
-------------------------------------------------------
queryInterface.pushColumn(...)
-------------------------------------------------------
*/
/*12
11
¿Cuál es la forma de crear una entidad en la base de datos usando Sequelize?
-------------------------------------------------------
models.MyModel.upsert(...)
-------------------------------------------------------
*/
/*13
17
¿Cuáles son los métodos que nos ofrece sequelize para expresar una relación uno a uno?
-------------------------------------------------------
hasMany  y belongsTo
-------------------------------------------------------
*/
/*15
21
¿Cuáles son los métodos que nos ofrece sequelize para expresar una relación muchos a muchos?
-------------------------------------------------------
hasOne  y belongsTo
-------------------------------------------------------
*/