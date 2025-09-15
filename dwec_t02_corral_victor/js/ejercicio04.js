console.log("T02 - Ejercicio 03");
let year = "";
let correctYear = false;


while (!correctYear) {
    year = prompt("Introduce un año entre 0 y 2025: ")
    correctYear = comprobarYear(year);
    if (!correctYear){
        alert("El año no es correcto");
    } else {
        esBisiesto(year);
    }
    

}


function comprobarYear(year){
    let esCorrecto;
    if (year >= 0 && year <= 2025){
        esCorrecto = true;
        console.log("Es correcto")
    } else {
        esCorrecto = false;
        console.log("No es correcto")
    }
    return esCorrecto
}

function esBisiesto(year){
    if (year%4 == 0){
        alert("Es bisiesto");
    } else if (year%100 == 0 && year%400 != 0){
        alert("No es bisiesto");
    } else if (year%400 == 0){
        alert("Es bisiesto");
    } else {
        alert("No es bisiesto")
    }

}