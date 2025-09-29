console.log("T03 - Ejercicio 22");
/*
Busca en internet dos expresiones regulares. Una que permita validar un DNI y otra que permita validar un CIF. 
Crea script que pida al usuario una cadena y determine si es DNI o CIF válido. 
Es necesario que definas una función que se denomine "validarDNIyCIF()" que reciba una cadena y devuelva un booleano.

La expresión regular debes crear usando el método: 

var patt =/pattern/modifiers;

Después, busca el algoritmo que permite comprobar si el DNI o el CIF 
son correctos (es decir, si corresponde la letra al número)

Puedes usar una IA para generar el patrón y el segundo algoritmo de comprobación, entiendo el código dado.
*/


let dato = prompt("Introduce tu dni o cif valido: ");


if (validarDNIyCIF(dato)) {
    console.log("El dato introducido es un DNI o CIF válido.");
} else {
    console.log("El dato introducido no es DNI o CIF válido.");
}



function validarDNIyCIF(dato) {
    const dniRegex = /^[0-9]{8}[A-Z]$/i;
    const cifRegex = /^[ABCDEFGHJKLMNPQRSUVW][0-9]{7}[0-9A-J]$/i;

    if (dniRegex.test(dato)) {
        return validarDNI(dato);
    } else if (cifRegex.test(dato)) {
        return validarCIF(dato);
    } else {
        return false;
    }

}


// dato % 23 = resto -->  letras = "TRWAGMYFPDXBNJZSQVHLCKE";
function validarDNI(dato) {
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE"
    let letra = dato.substring(dato.length - 1).toUpperCase();
    let numero = dato.substring(0, dato.length - 1);


    if (numero % 23 == letras.indexOf(letra)) {
        console.log("El DNI es correcto");
        return true;
    } else {
        console.log("El dni no es correcto");
        return false;
    }


}

function validarCIF(dato) {
    const cifRegexNum = /^[ABCDEFGHJKLMNPQRSUVW][0-9]{7}[0-9]$/i;  // CIF que termina en número
    const cifRegexLetra = /^[ABCDEFGHJKLMNPQRSUVW][0-9]{7}[A-J]$/i; // CIF que termina en letra

    let principio = dato.substring(0, 1).toUpperCase();
    let medio = dato.substring(1, 8);
    let final = dato.substring(8, 9).toUpperCase();

    let digitosImpares = 0;
    let digitosPares = 0;

    for (let i = 0; i < medio.length; i++) {
        let digito = parseInt(medio.substring(i, i + 1));

        if (i % 2 !== 0) { // posiciones impares
            let temp = digito * 2;
            digitosImpares += Math.floor(temp / 10) + (temp % 10);
        } else { // posiciones pares
            digitosPares += digito;
        }
    }

    let sumaTotalMedio = digitosImpares + digitosPares;
    let control = (10 - (sumaTotalMedio % 10)) % 10;

    // CIF que termina en letra
    if (cifRegexLetra.test(dato)) {
        if ("KPQS".includes(principio)) {
            let controlLetras = "JABCDEFGHI";
            return final === controlLetras[control];
        } else {
            return false;
        }
    }
    // CIF que termina en número
    else if (cifRegexNum.test(dato)) {
        if ("ABEH".includes(principio)) {
            return final === String(control);
        } else {
            return false;
        }
    } else {
        console.log("No es un CIF válido");
        return false;
    }

    //todo FALTA POR CONTROLAR LA "X" Y LA "P"
}

