console.log("T02 - Ejercicio 05");

/*

Desarrolla un script que pida cinco números y muestre los que sean mayores que la media. Sin usar arrays. Suponemos que siempre se introducen números.

El mensaje de salida será: "Los siguientes números introducidos son superiores a la media (VALORMEDIA): NUM1, NUMX…."

*/

let num1 = Number(prompt("Introduce el primer numero: "));
console.log(num1);
let num2 = Number(prompt("Introduce el segundo numero: "));
console.log(num2);
let num3 = Number(prompt("Introduce el tercer numero: "));
console.log(num3);
let num4 = Number(prompt("Introduce el cuarto numero: "));
console.log(num4);
let num5 = Number(prompt("Introduce el quinto numero: "));
console.log(num5);

let media = (num1 + num2 + num3 + num4 + num5) / 5;
console.log(media);

let mensaje = "Los siguientes números introducidos son superiores a la media: (" + media + "): " 

let hayAnterior = false;

if (num1 > media){
    hayAnterior = true;
    mensaje +=  num1
} 


if (num2 > media){
    if (hayAnterior){
        mensaje += ", ";
    }
    hayAnterior = true;
    mensaje +=  num2
}

if (num3 > media){
    if (hayAnterior){
        mensaje += ", ";
    }
    hayAnterior = true;
    mensaje +=  num3 
}

if (num4 > media){
    if (hayAnterior){
        mensaje += ", ";
    }
    hayAnterior = true;
    mensaje += num4 
}

if (num5 > media){
    if (hayAnterior){
        mensaje += ", ";
    }
    hayAnterior = true;
    mensaje += num5 
}

console.log(mensaje);
