console.log("T03 - Ejercicio 04");
/*
Elabora un script que lea una frase del usuario y una palabra. 
Después mostrará las veces que aparece dicha palabra en esa frase. 
Debes hacer uso de uno de los métodos del objeto String. 
Si la palabra no existe se mostrará un error.
*/

let textoIntroducido = prompt("Introduce una cadena de texto: ");
let palabraIntroducida = prompt("Introduce la palabra a comprobar: ");

let texto = textoIntroducido.toLowerCase(textoIntroducido).split(" ");
let palabraComprobar = palabraIntroducida.toLowerCase(palabraIntroducida);
let contador = 0;

if (texto.includes(palabraComprobar)){
    for (let palabra of texto){
        if (palabra == palabraComprobar){
            contador ++;
        }
    }
    /*const iterator = texto.matchAll(palabraComprobar);
    contador = Array.from(iterator).length;*/
    

} else {
    alert("La palabra no existe")
}

console.log("El texto que has introducido es: \"" + textoIntroducido + "\" y la palabra a comprobar es \"" + palabraIntroducida + "\"");
console.log("Aparece " + contador + " veces")
