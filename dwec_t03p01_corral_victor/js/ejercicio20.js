console.log("T03 - Ejercicio 20");
/*
Desarrolla un script que determine si el precio de venta de un artículo dado por un usuario es válido. 
El precio no puede tener más de 6 dígitos en la parte entera y sólo podrá tener dos decimales. 
Los decimales podrán estar indicados por “.” ó “,”. 
Deberás hacer uso del objeto RegExp y crear una función que se denomine "validaMiReal()" que reciba 
la cadena introducida por el usuario y devuelva un booleano.

Si el precio es válido, el número se convertirá en un real válido para JS. Para ello, 
define la función convertirMiReal() que recibe un precio válido y devuelve un Number. 
Por tanto, si el precio válido es 123,34; se convertirá en 123.34

La expresión regular debes crear usando el método: 

-- var patt-new RegExp(pattern,modifiers); --

Puedes usar una IA para generar el patrón, entendiendo dicho patrón. 
*/


let precio = prompt("Introduce el precio del producto: ");
let precioReal = 0;

if(validaMiReal(precio)){
    precioReal = convertirMiReal(precio);
    console.log(precioReal + " es un precio valido.")
} else {
    console.log(precioReal + " no es un precio valido.")
}


function validaMiReal(precio){
    /*
        Parte entera: hasta 6 dígitos = \d{1,6}
        Parte decimal opcional: un separador que puede ser . o ,, seguido de exactamente dos dígitos = ([.,]\d{2})?
        Anclaje al inicio y fin de la cadena = ^ al inicio y $ al final.
    */
    let regex = new RegExp(/^\d{1,6}([.,]\d{2})?$/);
    let comprobar = regex.test(precio);
    return comprobar;
}

function convertirMiReal(precio){
    if(precio.includes(",")){
        precio= precio.replaceAll(",", ".");
    }
    return precio;
}

