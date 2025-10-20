console.log("T03 - Ejercicio 25");
/*
Desarrolla un script que pida al usuario una cadena y una letra e indique
cuántas veces aparece dicha letra en esa cadena. 
Si la letra no existe se indicará un error. 
Debes hacer uso del método match() del objeto String usando expresiones regulares.
*/

let cadena = prompt("Introduce una cadena de texto: ");
let letra = prompt("Introduce una letra: ");

let cadenaUpper = cadena.toUpperCase();
let letraUpper = letra.toUpperCase();
let reLetra = new RegExp(letraUpper);

if (buscarLetra(cadenaUpper, reLetra)){
    console.log("La letra si existe");

    // Devuleve un array con la cadena separada por la letra, por lo que la cantidad -1 seria las veces que aparece
    let cantidad = cadenaUpper.split(letraUpper).length -1;
    console.log("La letra aparece " + cantidad + " veces");
} else {
    console.group("La letra no esta en la cadena");
}


function buscarLetra(cadena, reLetra){
    return reLetra.test(cadena);
}

