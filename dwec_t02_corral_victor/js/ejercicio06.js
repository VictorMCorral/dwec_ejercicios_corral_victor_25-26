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

do {
    num1 = Number(prompt("Introduce el numero a multiplicar: "));
    if (!Number.isNaN(num1)){
        numCorrecto = true;
        console.log("Numero 1 correcto");
    }
    
} while (!numCorrecto);

numCorrecto = false;
do {
    num2 = Number(prompt("Introduce el multiplicador: "));  
    if (!Number.isNaN(num2)){
        numCorrecto = true;
        console.log("Numero 2 correcto");
    }
    
} while (!numCorrecto);

for (let i = 0; i<num2; i++){
    resultado += num1;
}

console.log(num1 + " x " + num2 + " = " + resultado );
