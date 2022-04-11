// class1

// let class1 = {
//     var hello = 'wsp dude';
//     // si la asigno denuevo se sobreescribe (mala practica,cuidado)

//     let world = "hello world";
//     // si la asigno denuevo lanza error

//     const helloWorld = "hello world¡¡¡";
//     // const tmbn no puede ser reasignado

//     const anotherFunction = () => {
//         console.log(hello);
//         console.log(world);
//         console.log(helloWorld);
//     }

//     anotherFunction();
// }

// const anotherFunction = () => {
//     globalVar = "im global";
// }

// anotherFunction();
// console.log(globalVar);

// const anotherFunction = () => {
//     var localVar = globalVar = "im global";
// }

// anotherFunction();
// console.log(globalVar);

class2 local scope 

// const helloWorld = () => {
//     const hello = "hola mundo";
//     console.log(hello);
// };

// helloWorld();

// console.log(hello)



        var scope = "lo que sea";

        const functionScope = () => {
            var scope = "ahora soy local";
            const func = () => {
                return scope
            }
            console.log(func());
        };
        functionScope();
        console.log(scope);

        // lo que paso es que dentro de [const functionScope = () => ]
        //se asigno localmente otro valor a scope y luego se llamo 
        //por fuera (global) a scope.

        // nos imprime : ahora soy local
                    //   lo que sea