console.log("T03 - Ejercicio 04");
/*
Dada una cadena de texto usando el siguiente formato: "1, 2, 3, 4". 
Primero elimina todos los espacios en blanco, después convierte la
cadena de texto en un array de números. El separador usado será la ",". 
Debes hacer uso de uno de los métodos del objeto String.
*/


let cadenaTexto = "1, 2, 3, 4";

let cadenaLimpia = cadenaTexto.replaceAll(" ", "");
console.log(cadenaLimpia);

let arrayCadena1 = cadenaTexto.split(",");

let arrayNumeros = [];

for (let i = 0; i< arrayCadena1.length; i ++){
    arrayNumeros[i]= Number(arrayCadena1[i]);
}


//console.log((arrayNumeros[1] + arrayNumeros[2]));

