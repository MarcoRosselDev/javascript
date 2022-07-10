/*1 +++
4
¿Cuál es comando que usamos para levantar el contendedor de Postgres con Docker?
-------------------------------------------------------
docker-compose deploy -d postgres
-------------------------------------------------------
a
docker-compose up -d postgres ++++++++++++++++++++
b
docker-compose deploy -d postgres
c
docker-compose run -d postgres
*/
/*3
8
¿Cuál es la forma correcta de leer la variable de ambiente PORT con NodeJS?
-------------------------------------------------------
proccess.get('PORT')
-------------------------------------------------------
a
proccess.PORT
b
proccess.env.PORT
c
proccess.get('PORT')
*/
/*4
9
¿SequelizeORM se puede conectar a MySql y Postgres o solo funciona para Postgres?
-------------------------------------------------------
Solo funciona con Postgres
-------------------------------------------------------
a
Solo funciona para Postgres
b
Funciona para ambos
*/
/*6
11
¿Cuál es la forma de obtener una entidad de la base de datos con base a la PK?
-------------------------------------------------------
models.MyModel.getByPk(myId)
-------------------------------------------------------
a
models.MyModel.fi ndOne(myId)
b
models.MyModel.getByPk(myId)
c
models.MyModel.fi ndByPk(myId)
*/
/*7
11
¿Cuál es la forma de eliminar una entidad de la base de datos con base a la PK?
-------------------------------------------------------
const model = await models.MyModel.findByPk(myId) await model.remove();
-------------------------------------------------------
a
const model = await models.MyModel.fi ndByPk(myId)
await model.delete();
b
const model = await models.MyModel.fi ndByPk(myId)
await model.remove();
c
const model = await models.MyModel.fi ndByPk(myId)
await model.destroy();
*/
/*8
12
¿Cuál es el puerto por defecto en el cual Mysql corre por defecto?
-------------------------------------------------------
8080
-------------------------------------------------------
a
3306
b
8080
c
5432
*/
/*11
15
¿Cuál es el método que nos ofrece queryInterface para agregar una columna?
-------------------------------------------------------
queryInterface.pushColumn(...)
-------------------------------------------------------
a
queryInterface.addRow(...)
b
queryInterface.addColumn(...)
c
queryInterface.pushColumn(...)
*/
/*12
11
¿Cuál es la forma de crear una entidad en la base de datos usando Sequelize?
-------------------------------------------------------
models.MyModel.upsert(...)
-------------------------------------------------------
a
models.MyModel.create(...)
b
models.MyModel.upsert(...)
c
models.MyModel.insert(...)
*/
/*13
17
¿Cuáles son los métodos que nos ofrece sequelize para expresar una relación uno a uno?
-------------------------------------------------------
hasMany  y belongsTo
-------------------------------------------------------
a
hasOne y belongsTo
b
hasMany y belongsTo
c
belongsToMany
*/
/*15
21
¿Cuáles son los métodos que nos ofrece sequelize para expresar una relación muchos a muchos?
-------------------------------------------------------
hasOne  y belongsTo
-------------------------------------------------------
a
hasOne y belongsTo
b
belongsToMany
c
hasMany y belongsTo
*/