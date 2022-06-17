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

------------------------------------------------

otra forma de hacerla más rapida es

npm i date-fns -D
i= install
-D = como desarrollo (--save-dev = -D)

------------------------------------------------

llegado el caso en el que tengamos que instalar un paquete de forma global aplicamos:

npm install -g nodemon

luego para corroborar que se installo aplicamos:

npm list -g --depth 0

esto me lista todos los paquetes globales que tengo instalado
en el caso de que no se pudo instalar es por que necesita permisos de administrador.
en caso de mac usar sudo




*/
/*6 Instalación con force

simular que se instala una dependencia y ver el output de esta, por ejemplo con react sera asi:

npm install react --dry-run

-------------------------------------------------
otra forma de instalar dependencias es con force o -f
esta se ocupa cuando queremos forzar la instalación del 
paquete desde la ultima verción.
-------------------------------------------------
tmbn podemos especificar la vercion de el paquete.
si es que nesecitamos una verción espesifica del paquete.

*/
/*7 Actualizar y eliminar

npm list
    me va a listar todos los paquetes que tengo instalado en orden de jerarquia.

npm outdate
    con seste comando puedo ver que paquetes estan desactualizados.

npm outdate --dd
    nos muestra todo lo que pasa por detras, los GET a los servidores y el output que nos arroja.

npm update
    nos actualiza todos los paquetes que no esten actualizados.

npm install json-server@latest
    nos aseguramos que en este caso json-server este en su ultima verción.

npm uninstall json-server
    elimina json-server o cualquier paquete que ya no queramos.

npm uninstall webpack --no-save
    desinstala de la carpeta node pero en el archivo json sigue installado. 
*/
/*8 Package lock y ^ and ~

en package-lock.json
tenemos la siguiente estructura y sus significados

"dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.3.2",
        "globals": "^13.15.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },

donde "ajv": "^a.b.c",
^ = 
a = major, cambio mayor
b = minor, cambios menores
c = patch, parches o bug fixes

b and c = caret ^
esto le dice al terminal actualizar cada vez que se pueda los bugs y cambios menores 

para garantizar que no se actualize eliminamos el ^
esto garantiza que se queda en x verción y asi todos pueden tener la misma 

*/
/*9 Ejecutar tareas

dentro de package.json
se pueden agregar atajos en la parte de script
en la llave aplicamos el atajo y en el valor el =

{
    apple: npm lushito && npm react base
}

*/
/*10 Solución de problemas

aplicar --dd 
el final de cualquier comando para ver el error
salen todos los detalles de lo que se hace por detras

--------------------------------------------------
npm cache clean --force
limpia el cache de carpetas o archivos residuales

npm cache verify
verifica el estado del cache, para ver si se elimino todo.

*/
/* */
/* */
/* */
