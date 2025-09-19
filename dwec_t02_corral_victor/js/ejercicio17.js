console.log("T02 - Ejercicio 17");
/*
Desarrolla un script que pida un número entero mayor que 0 y determine si es un número perfecto. 
Un número es perfecto si la suma de sus divisores propios (excluyendo el número en sí) es igual al número.

Debes validar que el número introducido sea un entero positivo y mayor que 0.
*/

let num = 0;
let arrayDivisores = []
let suma = 0;
let index = 0;

do {
    num = Number(prompt("Introduce el numero a comprobar: "));
} while (num <=0 || !Number.isInteger(num));


for (let i = 0; i < num; i++){
    if (num%i == 0){
        arrayDivisores[index] = i;
        index ++;
        console.log(index);
    }
};


for (let i = 0; i< arrayDivisores.length; i++){
    suma += arrayDivisores[i];
}


if (suma == num){
    alert("El numero " + num + " es un numero perfecto");
} else {
    alert("El numero " + num + " no es un numero perfecto");
}


console.log(arrayDivisores)