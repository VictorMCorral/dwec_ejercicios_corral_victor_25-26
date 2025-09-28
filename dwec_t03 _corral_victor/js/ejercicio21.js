console.log("T03 - Ejercicio 21");
/*
Elabora un script que determine si un usuario ha introducido un número nacional fijo o móvil válido. 
Suponer que los números fijos válidos empiezan por 8 o 9 y que constan de 9 dígitos. 
Asimismo, un número móvil válido empieza por 6 o 7 y constan también de 9 dígitos. 
Deberás hacer uso del objeto RegExp y crear una función que se denomine "validaTelefono()" 
que reciba la cadena introducida por el usuario y devuelva un booleano.

La expresión regular debes crear usando el método: 

    -- var patt = /pattern/modifiers;

Puedes usar una IA para generar el patrón, entendiendo dicho patrón.

Hecho esto, definirás una función que se llame validarPrefijoTeléfonoEsp() 
que permita validar si un teléfono introducido tiene el prefijo +34. 
Y para terminar harás una función llamada validarTelefonoConSin() que invoque a las 
dos funciones anteriores, según sea conveniente.
*/

let numeroTelefono = prompt("Introduce un numero de telefono: ");

if (validarTelefonoConSin(numeroTelefono)){
    console.log("Es un telefono movil o fijo valido")
} else {
    console.log("No es un telefono valido")
}


function validarTelefonoConSin(telefono) {
    if (telefono.length == 9 ){
        return validaTelefono(telefono);
    } else if (telefono.length == 12){
        return validarPrefijoTeléfonoEsp(telefono);
    }
}


function validaTelefono(telefono){
    let regexFijos = new RegExp(/^[89]\d{8}$/);
    let regexMovil = new RegExp(/^[67]\d{8}$/);


    if (regexFijos.test(telefono) || regexMovil.test(telefono)){
        return true;
    } else {
        return false;
    }

};

function validarPrefijoTeléfonoEsp(telefono){
    if (telefono.substring(0,3) == "+34"){
        return true;
    } else {
        return false;
    }

}

