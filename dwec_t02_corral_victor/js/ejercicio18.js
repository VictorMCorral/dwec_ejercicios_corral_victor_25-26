console.log("T02 - Ejercicio 18");
/*
Desarrolla un script que pida un número entero mayor que 1 y muestre su descomposición en factores primos.
Ejemplo: 60 → 2 x 2 x 3 x 5.
Algoritmo:
Divide el número entre 2 todas las veces que puedas.
Luego sigue con 3, 5, etc. hasta que quede 1.

Debes validar que el número introducido sea un entero positivo y mayor que 1.
*/

let num = 0;
let aux = 0;

do {
    num = Number(prompt("Introduce un numero mayor que 1: "));    
} while (Number.isNaN(num) || num<=1 || !Number.isInteger(num));

aux = num;

while( num%2 == 0 || num%3 == 0 || num%5 == 0){
    if (num%2 == 0){
        console.log(num + " /2 = " + (num/2));
        num = num/2;
    } else if (num%3 == 0){
        console.log(num + " /3 = " + (num/3));
        num = num/3;
    } else if (num%5 == 0){
        console.log(num + " /5 = " + (num/5));
        num = num/5;
    }
}

alert("La descomposicion de " + aux + " es " + num + " un numero primo");