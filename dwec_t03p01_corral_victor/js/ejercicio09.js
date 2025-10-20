console.log("T03 - Ejercicio 09");
/*
Haz un script que pida al usuario cuántos números quiere introducir, 
después los introducirá en un array y finalmente mostrará el menor y el mayor. 
Para mostrar el menor y el mayor deberás hacer uso de los métodos "max()" y "min()" del objeto Math.
*/

let cantidad = Number(prompt("Introduce la cantidad de numeros que quieres introducir: "));
let numeros =[];

for (let i = 0; i<cantidad; i++){
    let numero = Number(prompt("Introduce el numero en la posicion " + (i+1) + " :"));
    numeros[i]= numero;
}

let min = numeros[0];
let max = numeros[0];


for (let i = 0; i<numeros.length; i++){
    if (min > numeros[i]){
        min = numeros[i];
    }
    if (max < numeros[i]){
        max = numeros[i];
    }
}

console.log("El mayor es: " + max + " y el menor: " + min);
