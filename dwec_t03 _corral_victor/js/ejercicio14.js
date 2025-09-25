console.log("T03 - Ejercicio 14");
/*
Crea un script que pida al usuario la fecha de su nacimiento (para saber su cumpleaños) y le indique su edad actual.
*/

let fecha = prompt("Introduce tu fecha de nacimiento \"YYYY-MM-DD\": ");


let fechaNac = new Date(fecha);

let fechaActual = new Date();

let years = fechaActual - fechaNac;
let msEnYear = 1000 * 60 * 60 * 24 * 365;


console.log("Tienes " + (parseInt(years/msEnYear)) + " años");