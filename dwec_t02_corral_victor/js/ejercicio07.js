console.log("T02 - Ejercicio 07");

/*

Desarrolla un script que pida parejas de números enteros hasta que sean iguales o uno de ellos sea cero.

*/

let num1;
let num2;
let condicion = true;

do {
    num1 = Number(prompt("Introduce el numero 1: "));
    num2 = Number(prompt("Introduce el numero 2: "));

    if (num1 == num2){
        condicion = false;
    } else {
        condicion = true;
        if (num1 == 0 || num2 == 0){
            condicion = false;
        } else {
            condicion = true;
        }
    }


    
} while (condicion);

alert("Los numeros son iguales o uno de ellos es 0");
