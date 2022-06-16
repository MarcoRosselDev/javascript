/*3 Iniciar un proyecto

INICIAR UN PROYECTO NPM

Podemos crear una carpeta para nuestro proyecto con el comando

mkdir project_name 

nos movemos dentro de la carpeta con 

cd project_name

-------------------------------------------------
Primeros pasos

git init: Para tener el control de cambios y versiones en nuestro proyecto

npm init: con este comando vamos a crear nuestro archivo de configuración del proyecto, el package.json
Luego nos saldrá lo siguiente
-------------------------------------------------
package name: 
    el nombre de nuestro proyecto, generalmente es el nombre de la carpeta
version: 
    version con la que iniciaremos el proyecto, generalmente aparece 1.0.0
description: 
    descripcion breve del proyecto
entry point: 
    punto de acceso a nuestro proyecto
test command: 
    comando para gestionar los test
git repository: 
    repositorio de github u otro servicio
keywords: 
    palabras claves del proyecto
author**: 
    nombre del autor y < correo > **
license`: 
    licencia que tendrá el proyecto

------------------------------------------------
2da opción (para hacer package rápido
------------------------------------------------

Escribimos npm init -y y esto generará un package.json vacio para que lo configuremos más adelante.

Escribimos en nuestra terminal
npm set init.author.email "andresmarcorossel@gmail.com"
npm set init.author.name "marco rossel"
npm set init.license "MIT"
npm init -y
Y se creará un package.json con los datos que seleccionamos.

*/
/*4 Instalación de dependencias

en terminal 
nos ubicamos en la carpeta matriz y ejecutamos
npm install moment

"este moment es una dependencia para controlar el tiempo"

desde la verción 5 de npm se aplica por defecto --save
esto significa que es nesecario para vivir en produción
por lo que tener cuidado cuando un paquete de dependencia es a produción o solo para mi entorno local

--save-dev

de esta forma le decimos que solo es para mi entorno local y no mandarlo a produción. 
------------------------------------------------

una vez crado se deve ignorar la carpeta src en git
para eso creamos un archivo llamado .gitignore
y dentro escribimos la carpeta a ignorar.


*/
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
