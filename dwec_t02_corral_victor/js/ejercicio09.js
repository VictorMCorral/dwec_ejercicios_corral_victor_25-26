console.log("T02 - Ejercicio 09");

/*
Desarrolla un script que pida un número y a continuación muestre el siguiente menú:

Menú
----
1. Calcular si es múltiplo de 2.
2. Calcular si es múltiplo de 3.
3. Calcular si es múltiplo de 5.
0. Salir
 
El programa mostrará el resultado en función de la opción elegida. Deberás crear tres funciones para resolver cada una de las opciones. 
*/


let num1 = Number(prompt("Introduce un numero: "));
let opcion = Number(prompt("Menú" +
    "\n----" +
    "\n1. Calcular si es múltiplo de 2. " +
    "\n2. Calcular si es múltiplo de 3." +
    "\n3. Calcular si es múltiplo de 5." +
    "\n0. Salir "));

switch (opcion) {
    case 1:
        multiplo_2(num1);
        break;
    case 2:
        multiplo_3(num1);
        break;
    case 3:
        multiplo_5(num1);
        break;
    case 0:
        alert("Saliendo del programa... ")

}

function multiplo_2(num1){

    if (num1 % 2 == 0) {
        alert("Es multiplo de 2");
    } else {
        alert("No es multiplo de 2");
    }

};

function multiplo_3(num1){
    if (num1 % 3 == 0) {
        alert("Es multiplo de 3");
    } else {
        alert("No es multiplo de 3");
    }
};

function multiplo_5(num1){
    if (num1 % 5 == 0) {
        alert("Es multiplo de 5");
    } else {
        alert("No es multiplo de 5");
    }
};