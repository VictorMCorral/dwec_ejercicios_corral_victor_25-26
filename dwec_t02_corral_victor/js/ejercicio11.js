console.log("T02 - Ejercicio 11");
/*
Realizar un programa en script que calcule el factorial impar de un número entero. 
El factorial impar de un número n es el producto de todos los números naturales impares desde el 1 hasta n o n-1, dependiendo de si n es par o impar. 

Ejemplo:
5! = 5 x 3 x 1 = 15
10! = 9 x 7 x 5 x 3 x 1 = 945
*/

let num1;
let aux;
let factorial;

do {
    num1 = Number(prompt("Introduce un numero: "));
    if (num1 < 0) {
        alert("El numero negativo, no se puede calcular el factorial.")
    } else if (!Number.isInteger(num1)) {
        alert("No has introducido un numero.")
    }

} while (num1 < 0 || !Number.isInteger(num1));





if (num1%2 == 0) {
    aux = num1-1
    factorial = calcularFactorial(aux);
} else {
    if (num1 == 0){
        factorial = 1; 
    } else {
        factorial = calcularFactorial(num1);
    }
}

alert("El factorial de " + num1 + " es " + factorial);

/*
    FORMA NO RECURSIVA
function calcularFactorial(num1) {
    let resultado = num1;
    for (let i = num1; i > 0; i -= 2) {
        if (i > 1) {
            console.log(resultado + " x " + (i - 2));
            resultado = resultado * (i - 2);
        }
    }

    return resultado
}*/

//  FORMA RECURSIVA
function calcularFactorial(num1){
    if (num1 <= 1){
        return 1;
    } else {
        console.log(num1 + " x " + (num1 -2));
        return num1 * calcularFactorial(num1 - 2);
    }

}
