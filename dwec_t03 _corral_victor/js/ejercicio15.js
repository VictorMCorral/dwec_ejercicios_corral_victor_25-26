console.log("T03 - Ejercicio 15");
/*
Repite el ejercicio verificando si la fecha es correcta sin usar expresiones regulares 
(la fecha solo será correcta con este formato: DD/MM/YYYY)
*/

let fecha = prompt("Introduce tu fecha de nacimiento separada por \"/\": ");


if(esFechaValida(fecha)){
    let fechaNac = new Date(fecha);

    let fechaActual = new Date();
    
    let years = fechaActual - fechaNac;
    let msEnYear = 1000 * 60 * 60 * 24 * 365;
    
    
    console.log("Tienes " + (parseInt(years / msEnYear)) + " años");
} else {
    console.log("La fecha no esta en el formato adecuado")
}


function esFechaValida(fecha) {
    let isValido = false;

    if (fecha.includes("/")) {
        let arrayFecha = fecha.split("/");
        let anio = parseInt(arrayFecha[0]);
        let mes = parseInt(arrayFecha[1]);
        let dia = parseInt(arrayFecha[2]);

        if (anio < 0) {
            isValido = false;
        } else if (mes < 1 || mes > 12) {
            isValido = false;
        } else if (
            (dia < 1 || dia > 31) ||
            (mes === 2 && ((esBisiesto(anio) && dia > 29) || (!esBisiesto(anio) && dia > 28))) ||
            ([4, 6, 9, 11].includes(mes) && dia > 30)
        ) {
            isValido = false;
        } else {
            isValido = true;
        }
    } else {
        isValido = false;
    }

    return isValido;
}

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}