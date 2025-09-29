console.log("T03 - Ejercicio 24");
/*
Desarrolla un script que pida al usuario una cadena de texto y una palabra. 
El script deberá buscar la palabra en la cadena e indicar si está presente. 
Si se encuentra, mostrará un mensaje con la posición en la que empieza la palabra. 
Si no está, el script ofrecerá la opción de realizar otra búsqueda (esto puede ser en bucle). 
El método search() se usará con una expresión regular para evitar distinguir entre mayúsculas y minúsculas.
*/

let cadena = prompt("Introduce una cadena de texto: ");
let palabra = prompt("Introduce una palabra: ");

let cadenaUpper = cadena.toUpperCase();
let palabraUpper = palabra.toUpperCase();

if (buscarPalabra(cadenaUpper, palabraUpper)){
    console.log("La palabra si existe");
    let posicion = cadenaUpper.search(palabraUpper);
    console.log("Esta en la posicion: " + posicion);
} else {
    console.group("La palabra no esta en la cadena");
}


function buscarPalabra(cadena, palabra){
    let rePalabra = new RegExp(palabra);

    return rePalabra.test(cadena);

}