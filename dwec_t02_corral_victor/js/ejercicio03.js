console.log("T02 - Ejercicio 03");
let year = "";
let correctYear = false;
let respuesta;
let continuar = true;

do {
    preguntarYear();
    respuesta = prompt("¿Quieres comprobar un año? S o N: ")
    if (respuesta == "S" || respuesta == "s"){
        preguntarYear();
    } else {
        continuar = false;
    }

} while (condition);



function preguntarYear(){
    correctYear = false;
    while (!correctYear) {
        year = Number(prompt("Introduce un año entre 0 y 2025: "));
        correctYear = comprobarYear(year);
        if (!correctYear){
            alert("El año no es correcto");
        } else {
            esBisiesto(year);
        } 
    }

}



function comprobarYear(year){
    let esCorrecto;
    let dateActual = new Date();
    let yearActual = dateActual.getFullYear();
    console.log(yearActual);
    if (year >= 0 && year <= yearActual){
        esCorrecto = true;
        console.log("Es correcto")
    } else {
        esCorrecto = false;
        console.log("No es correcto")
    }
    return esCorrecto
}

function esBisiesto(year){
    if (year%400 == 0){
        alert("Es bisiesto");
    } else if (year%100 == 0){
        alert("No es bisiesto");
    } else if (year%4 == 0){
        alert("Es bisiesto");
    } else {
        alert("No es bisiesto")
    }

    /*
        SOLUCION RESUMIDA

    if (year%400== 0 || year%100 != 0 && year%4 == 0){
        alert("Es bisiesto");
    } else {
        alert("No es bisiesto");
    }
        */

}