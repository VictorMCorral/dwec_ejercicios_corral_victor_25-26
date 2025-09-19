console.log("T02 - Ejercicio 15");
/*
Desarrolla un script que pida un número entero al usuario y muestre el número con sus dígitos invertidos. Ejemplo: 12345 → 54321.

Después se calcula la suma de los dígitos del número original y del número invertido y se comprueba que son iguales.

Debes validar que el número introducido sea un entero positivo.
*/
let num1;

do {
    num1 = parseInt(prompt("Introduce un numero positivo entero: "));

} while (!Number.isInteger(num1) && num1 < 0);

sumarDigitos(num1);

function sumarDigitos(num1){
    num1 = 
    let arraynum = num1.split('');
    console.log(arraynum);



}