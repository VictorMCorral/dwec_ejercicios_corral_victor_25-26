console.log("T03p3 - Ejercicio 03");
/*
Desarrolla un script que cambie el orden de los elementos de un array, 
es decir que el primero será el último, el segundo será el penúltimo y
así sucesivamente hasta que el último sea el primero. 
Lo harás definiendo dos funciones. La primera función lo resolverá de 
forma "manual" y la segunda lo resolverá usando uno de los métodos del 
objeto Array que permite cambiar el orden de forma directa. 
¿Qué método es ese?
*/

const array = [1,5,8,9];

invertirManual(array);

invertirMetodo(array);


function invertirManual(array){
    let arrayTemporal = array.slice();

    // 1 - 5 - 8 - 9
    for (let i = 0; i< array.length; i++){
        let num = array[array.length -1 -i]; //9
        arrayTemporal[i] = num;
    }

    array = arrayTemporal.slice();
    console.log("Array invertido manual: ")
    console.log(array);
}

function invertirMetodo(array){
    array.reverse();
    console.log("Array invertido metodo: ")
    console.log(array);
}
