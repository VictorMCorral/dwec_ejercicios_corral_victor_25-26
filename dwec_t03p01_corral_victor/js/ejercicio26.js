console.log("T03 - Ejercicio 26");
/*
Elabora un script que pida al usuario una cadena y dos letras. 
Después reemplazará una letra por otra. Si la primera letra no existe se indicará un error. 
Debes resolverlo usando el método replace() del objeto String usando expresiones regulares. 
No debe distinguir entre mayúsculas y minúsculas. Controla esto desde la expresión regular.
*/

let cadena = prompt("Introduce una cadena de texto: ").toLowerCase();
let letras = prompt("Introduce dos letras separadas por \"-\" : ").toLowerCase();

let arrayLetras = letras.split("-");

if (arrayLetras[0] === "" || arrayLetras[1] === "") {
    console.log("No has introducido la primera o la segunda letra.")
} else {
    let letra1 = arrayLetras[0];
    let reLetra1 = new RegExp(letra1, "g");

    let letra2 = arrayLetras[1];
    let reLetra2 = new RegExp(letra2, "g");

    let letraTemporal = "#";
    let reTemporal = new RegExp(letraTemporal, "g");


    cadena = cadena.replaceAll(reLetra1, letraTemporal);
    cadena = cadena.replaceAll(reLetra2, letra1);
    cadena = cadena.replaceAll(reTemporal, letra2);

    console.log(cadena);

}


