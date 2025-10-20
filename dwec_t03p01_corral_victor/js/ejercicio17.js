console.log("T03 - Ejercicio 17");
/*
Crea un script que pida al usuario dos fechas e indique los meses que hay entre ambas fechas. 
El script debe determinar qué fecha es la mayor.
*/

let fecha = prompt("Introduce una fecha separada por \"/\": "); // 1998-07-17
let fecha2 = prompt("Introduce una segunda fecha separada por \"/\": "); // 2025-07-17

let fechaDate = new Date(fecha);
let fechaDate2 = new Date(fecha2);
let diferenciaMs = 0;


if (fechaDate >= fechaDate2){
    diferenciaMs = fechaDate - fechaDate2;
} else {
    diferenciaMs = fechaDate2 - fechaDate;
}

let meses = diferenciaMs / (1000 * 60 * 60 * 24 * 30) ;

console.log("Hay " + meses + " entre las dos fechas");



