/*
Definición de objetivos
En esta fase se define el alcance general del software y su papel dentro de una estrategia global o dentro del ecosistema que va a funcionar.

Análisis de los requisitos y su viabilidad
Se trata de recopilar la mayor cantidad de información posible para evaluar la viabilidad del producto, encontrar posibles restricciones y analizar todos los requisitos del cliente.

Diseño
Alto nivel: Se trata de realizar un diseño básico que valide la arquitectura de la aplicación.
Bajo nivel: Es una definición detallada de la estructura de la aplicación basada en el diseño general.

Programación
Es la implementación de un lenguaje de programación para crear las funciones definidas durante la etapa de diseño.

Pruebas de verificación
Aunque en todas las fases anteriores se hacen pruebas en esta fase se cubren: pruebas de componentes, integrales y de sistema.

Prueba beta (o validación)
Se hace para garantizar que el software cumple con las especificaciones originales o también se hacen las pruebas de aceptación.

Implementación
Se realiza una prueba del sistema implementado para encontrar posibles fallas en la Implementación.

Mantenimiento
Se hace para todos los procedimientos correctivos (mantenimiento correctivo) y a las actualizaciones secundarias del software (mantenimiento continuo), junto con la actualización de las pruebas.
*/

/* class 6 los 7 Principios del testing moderno

Los principios creados por Allan Page y Brenn Jensen es acerca del testing moderno, que es la evolución natural del testing ágil. Veían la necesidad de que el tester y el desarrollador evolucionen en su perspectiva, ambos hacen software y entregan al mismo cliente, por lo tanto deben trabajar más como un equipo y no como entidades separadas. El tester debería enfocarse en la calidad del sowftware, el desarrollador debería enfocarse a desarrollar la solución. El tester va a ayudar al desarrollador a utilizar las mejores herramientas, a entender los procesos de pruebas, a mejorar la calidad de su desarrollo.

Los 7 principios del testing moderno

“Los testers podemos comenzar a pasar de ser los dueños de las pruebas o la calidad, a ser los embajadores de la calidad del producto”.

Nuesta prioridad es mejorar el negocio.
Nosotros aceleramos al equipo, usamos modelos como Lean Thinking y Teoría de las Restricciones para ayudar a identificar, mitigar, priorizar y mitigar cuellos de botella en el sistema.
Somos la fuerza para la mejora continua, ayudando al equipo a adaptarse y optimizar para tener éxito, en lugar de proporcionar una red de seguridad para detectar fallas.
Nos preocupamos profundamente acerca de la cultura de calidad en el equipo, y asesoramos, lideramos y nutrimos al equipo para llevarlos a una cultura de calidad más madura.
Nosotros creemos que le cliente es el único capaz de juzgar y evaluar la calidad de nuestro producto.
Nosotros usamos datos de manera extensa y profunda para entender los casos de usos del cliente y entonces cerrar huecos entre hipótesis del producto e impacto del negocio.
Expandimos las habilidades de testing y el conocimiento en todo el equipo; entendemos que esto reduce o elimina la necesidad de un especialista dedicado al testing.

*/

/*16 Cajas
Cuando no estamos refiriendo a una caja es la manera de observar el contenido de software.

Negra: No podemos observar cómo fue construida, no vemos el código, no sabemos su arquitectura, no tenemos nociones más que la interfaz que estamos interactuando.

Partición de equivalencia
Valores límite
Tabla de decisiones
Transición de estados
Casos de usos
Blanca: Es como una caja de cristal, puedo ver todo lo que hay adentro e incluso puedo ser parte del equipo que desarrolla el software.

Cobertura de declaración
Cobertura de decisiones
Gris: Pueden ser la integraciones, cómo fluye el código y puedo ver como se transmiten los datos a través de las redes.

Casos de negocios
Pruebas End-to-End
Pruebas de integración */
/*17 Gestión de Pruebas:

Planeación: Definir los objetivos de las pruebas es muy importante, al no tener una estrategia clara termina causando una pobre cobertura de pruebas. Los elementos a considerar para una buena planeación son la estimación, recursos, el alcance y objetivo.

Monitoreo y Control: Durante el monitoreo lo que estamos buscando son esas métricas que nos digan si estamos llevando avances o tenemos retrasos. Son nuestras alertas cuando nuestro plan no se esta ejecutando.

Análisis: Incluye decidir cuáles son esas prioridades que nos ayudará a definir qué debemos probar.

Diseño: Normalmente cuándo estas iniciando las pruebas es necesario crear un mapa de ideas. Después de esto, puedes realizar el diseño a detalle de qué va a incluir cada caso de uso. Casos de alto nivel, diseñar y priorizar pruebas, identificar el entorno de pruebas, hacer una trazabilidad entre pruebas y sus
condiciones.

Implementación: También nos aseguramos de contar con la estructura necesaria para realizar las pruebas, con un ambiente, datos y dónde documentar o realizar las pruebas.

Ejecución: En esta etapa los suites de pruebas se ejecutan de acuerdo al programa o el plan diseñado con anterioridad. Se suelen agrupar los casos de pruebas para que no estén desorganizado y podemos hacerles un buen seguimiento.

Finalización: Cuando queremos cerrar el ciclo de las pruebas, necesitamos saber qué porcentaje se cubrió, ejecutó, cuántos defectos se derivaron, aprender lecciones sobre el proceso.*/
/*18 Roles y Responsabilidades

• Especialista en pruebas manuales. Entre las habilidades que debería de tener, es el pensamiento lateral, en la parte de organización, diseño y documentación, debería de ser el especialista en entender cuáles son los casos de uso que se van a llevar para cada área, debe de poder organizarse y asignar trabajo para sí mismo dependiendo las prioridades del negocio, los riesgos o el impacto.
• Especialista en pruebas técnicas. Esta persona se tiene que encargar de estar siempre actualizada en las herramientas que le permitan acelerar el trabajo, mejorar el trabajo, búsqueda, continuo entrenamiento, ser autodidacta.
• Líder del equipo de pruebas. Gestiona el equipo y es un facilitador para las actividades a realizar, como apoyar con ambiente de pruebas, darle seguimiento a los defectos, revisar que los lineamientos se sigan.
• Ingeniero de calidad. Se dedica a la parte del proceso, es quien se encarga de establecer las políticas, mantener involucrados a los equipos, alineados a las prioridades del negocio; además que verifica que todo esto se cumpla sobre todo para la entrega del cliente. */
/*19 
Independientemente del rol, un tester participa de todas las etapas del proceso de desarrollo de software, colaborando para asegurar la máxima calidad del producto. Su perfil conjuga un conjunto de habilidades con el conocimiento del negocio, de la aplicación bajo prueba y de cómo planificar, diseñar, ejecutar y administrar las pruebas.

“Un tester investiga un producto de software con el objetivo de obtener información acerca de su calidad y del valor que representa para quienes lo utilizan”

--------------------------------------------------------------------------
HABILIDADES DE UN TESTER

CAPACIDAD DE ABTRACCION
COMUNICACION
PENSAMIENTO LATERAL
PENSAMIENTO CRITICO
PRAGMATISMO
TRABAJO EN EQUIPO

--------------------------------------------------------------------------

Cuando el esfuerzo en la calidad se enfoca y se distribuye en roles y responsabilidades podemos encontrar que la mayoría de las empresas manejan los siguientes roles:

El tester manual, se enfoca en la estrategia, definición, ejecución y cobertura de pruebas para cumplir los requerimientos, echando mano de cualquier técnica para obtener información suficiente y así cumplir con las asignaciones correspondientes.

El tester técnico, trabaja muy de cerca con el tester manual, mientras que el tester manual define las pruebas, el tester técnico acelera la capacidad de ejecución de las pruebas. Esto lo hace implementando herramientas que permitan la automatización de pruebas, o la correcta selección de datos de pruebas, o el monitoreo de la ejecución de las pruebas.

El líder de pruebas, generalmente dentro de sus responsabilidad es volverse un facilitador de servicios, información y herramientas para el equipo de pruebas, para poder estimar presupuestos, recursos y tiempos respecto al plan de desarrollo de software.

El Ingeniero de calidad, ya no solamente está al pendiente del producto y los procesos, comienza a involucrarse más con el negocio, ayudando tanto a testers como cualquier otro miembro del equipo a llevar cabo pruebas que reduzcan, en todas las etapas del ciclo de vida del software, el error humano.*/
/*22 bugs 

La mala administración, malas prácticas o falta de seguimiento entorpece las tareas de todo el equipo sino que además sumamos el retrabajo en la mala documentación puede que nuestro proyecto se salga de presupuesto o tiempo.

Razones por las que aparecen defectos:

Hay presión de tiempo en la entrega del software
Descuidos en el diseño
Inexperiencia o falta de conocimiento
Falta de comunicación en los requerimientos
Diseño complejo de código
Desconocimiento de las tecnologías usadas
Preguntas a realizar para construir un proceso de gestión de bugs:

¿Qué debe de hacer la persona que encuentre el defecto?
¿En qué herramienta debe documentar el defecto?
¿Cómo vamos a almacenar la información?
¿Qué información requiere el equipo de desarrollo para poder resolver un defecto?
¿Cuáles son los estatus que se manejan para que fluya la resolución del defecto?
¿Cuáles son los criterios de aceptación de cierre del defecto? */
/*25 Pruebas de verificaion 

Las pruebas de verificación sirven para confirmar que un cambio se haya hecho o un defecto se haya corregido. Queremos verificar que lo que estamos buscando está en los requerimientos o documentación.

Pruebas de verificación

Tratan de reproducir el escenario fallido con los datos usados. Pero sería un error usar los mismo datos para después asumir que el error fue corregido.
Se buscan nuevos escenarios donde se utilicen valores relativos. Como Otras plataformas, otros sistemas operativos, otros exploradores, otros dispositivos
Pruebas de regresión

La matrices de pruebas cuando se implementan otros dispositivos u otros exploradores nos ayuda a tenerlos en cuenta nuestros puntos de verificación para que no sufran un impacto.
La matriz de prueba nos funciona para casos donde no solo vemos los defectos sino que todo lo que ya funciona siga funcionando.
Nos ayuda a tener una claridad con los casos de prueba claves que pueden ser automatizados.
Documentación

Comentarios en el código
Documentación técnica
Pruebas unitarias
Pruebas específicas
Matrices de pruebas
Plan de pruebas */
/*26 tecnicas de depuracion 

Las técnicas de depuración deben ir cambiando de ser reactivas a ser preventivas. Debemos recordar que parte de los principios del testing moderno es tratar de ir corrigiendo nuestras técnicas, implementar mejores prácticas y hacer uso de mejores herramientas. El debugging debería ser la última técnica que utilizas.

Técnicas de depuración:

Debugging: Observar valores de variables, detener temporalmente la aplicación.
Logs: Hacer un vaciado de cómo las variables van cambiando y es más fácil rastrear la información.
Historial: Agiliza la forma de monitorear y observar los comportamientos de nuestro software. Comparando valores, agrupando información.
Reportes: Observar anomalías, acelerar el tiempo de respuesta, prevenir ataques o fallas.
Pasos para depurar:

Ir al módulo que falla
Establecer breakpoints
Diseñar una matrix de pruebas
Establecer los datos de prueba
Comenzar a depurar */
/*27 atomatizacion de pruebas 

En esta unidad vamos a conocer las bases para la automatización de pruebas y podemos automatizar las siguientes tipos de pruebas.

Pruebas unitarias: Tienen que ver con un pedazo de código que el desarrollador esta codificando, pero no tienen que ver con todo el flujo de negocio y proceso del software.

Pruebas de integración: Cómo hacemos que el conjunto del equipo que libera pedacitos de software funcionen juntos y no hagan defectos adicionales.

Pruebas funcionales o de aceptación: Estas pruebas no necesariamente forman parte de los requerimientos especificados por el cliente, una recomendación para automatizar estas pruebas es que deban cumplir con los requerimientos dados por el cliente.

Test Driven Development: El desarrollo va a estar enfocado haciendo primera las pruebas y después el código. Haciendo que el desarollo sea muy específico con la mayor cobertura y no pongamos líneas de código que no van a funcionar o no se usan.

Escribimos una prueba
Ejecutamos la prueba: Falla
Se escribe el código
Ejecutamos la prueba: Pasa
Behavior Driven Development: Si primeros vamos a escribir las pruebas, debemos hacerlo bien y usando un lenguaje sencillo, simple para que la sirva al equipo para entender qué es lo que queremos hacer. */
/*28 Gherkin

Gherkin es un lenguaje de texto plano con estructura, usamos palabras que no son comandos pero permiten entender en un modo de pseudocódigo qué es lo que se tiene que hacer. Esta diseñado para ser fácil de aprender y ser entendido por todos.

Ventajas

Simple
Palabras claves o keywords
Estandariza los casos de uso
Reduce el tiempo de diseño

*/
/* */