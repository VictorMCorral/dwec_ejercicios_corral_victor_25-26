console.log("T03 - Ejercicio 27");
/*
Crea un script que pida al usuario una cadena y diga cuántas palabras tiene esa cadena.
Suponemos que una palabra está formada por uno o más caracteres distintos al espacio y al tabulador. 
Usa expresiones regulares.
*/

let cadena = prompt("Introduce una cadena de texto: ");

let cantidad = contarPalabras(cadena);

console.log(cadena + " tiene " + cantidad + " palabras")



function contarPalabras(cadena) {
    const regex = /[\t ]+/g;

    let arrayPalabras = cadena.split(regex);

    return arrayPalabras.length;
}