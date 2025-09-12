console.log("T02 - Ejercicio 03");
let year = "";


while (!isNaN(year)) {
    year = prompt("Introduce un año entre 0 y 2025: ")
    comprobarYear(year);

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