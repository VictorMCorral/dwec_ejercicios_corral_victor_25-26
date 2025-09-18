console.log("T02 - Ejercicio 06");

/*

Desarrolla un script que pida dos números enteros y los multiplique usando sumas sucesivas.
Se tiene que comprobar si el usuario ha introducido o no números válidos. En el caso de que alguno de los números no sea válido, se le volverá a pedir el número hasta que lo introduzca correctamente.

Se pueden multiplicar números negativo.s

*/

let numCorrecto = false;
let resultado = 0;
let num1 = 0;
let num2 = 0;
let isNegative = false;

do {
    num1 = parseInt(prompt("Introduce el numero a multiplicar: "));
    if (!Number.isNaN(num1)){
        numCorrecto = true;
        console.log("Numero 1 correcto");
    }
    
} while (!numCorrecto);

numCorrecto = false;
do {
    num2 = parseInt(prompt("Introduce el multiplicador: "));  
    if (!Number.isNaN(num2)){
        numCorrecto = true;
        console.log("Numero 2 correcto");
    }
    
} while (!numCorrecto);

if (num1 < 0){
    num1 = num1 * -1;
    isNegative = !isNegative;
}

if (num2 < 0){
    num2 = num2 * -1
    isNegative = !isNegative;
}

console.log(isNegative)

for (let i = 0; i<num2; i++){
/* falta hacer las comprobaciones de signos */

    resultado += num1;
}

if (isNegative){
    resultado = resultado * -1
}

console.log(num1 + " x " + num2 + " = " + resultado );
