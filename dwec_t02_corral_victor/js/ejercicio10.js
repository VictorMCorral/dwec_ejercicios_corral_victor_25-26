console.log("T02 - Ejercicio 10");
/*
Haz un script que pida un número al usuario y muestre por pantalla el factorial de dicho número. 
El script definirá la función "factorial" que recibe un número entero y devuelve el factorial de dicho número. 
La solución se deberá hacer de forma NO recursiva.

Recuerda: El factorial de un número n es el producto de todos los números naturales desde 1 hasta n inclusive. Así, factorial de 5 (5!) es: 5! = 5 x 4 x 3 x 2 x 1 = 120.

Contempla qué debe ocurrir si el número es 0 o 1 y qué debe ocurrir si el número es negativo.
*/
let num1;
let factorial;

do {
    num1 = Number(prompt("Introduce un numero: "));
    if (num1 < 0) {
        alert("El numero es negativo, no se puede calcular el factorial.")
    } else if (!Number.isInteger(num1)){
        alert("No has introducido un numero.")
    }

} while (num1 < 0 || !Number.isInteger(num1));



if (num1 == 0){
    factorial = 1; 
} else {
    factorial = calcularFactorial(num1);
}

alert("El factorial de " + num1 + " es " + factorial);


function calcularFactorial(num1) {
    let resultado = num1;

    for (let i = num1; i > 0; i--){
        if (i > 1) {
            console.log(resultado + " x " + (i-1) );
            resultado = resultado * (i-1);
        }
    }

    return resultado
}