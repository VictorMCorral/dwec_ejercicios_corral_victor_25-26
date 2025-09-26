console.log("T03 - Ejercicio 18");
/*
Crea un script que pida al usuario la fecha de su nacimiento (para saber su cumpleaños). 
El script mostrará si hoy es su cumpleaños y su edad. 
Si hoy no es su cumpleaños mostrará los días que quedan para su próximo cumpleaños.

Hay que verificar previamente si la fecha es correcta sin usar expresiones regulares 
(la fecha solo será correcta con este formato: DD/MM/YYYY).
*/


let fecha = prompt("Introduce tu fecha de nacimiento \"DD/MM/YYYY\": ");
let arrayFecha = fecha.split("/")

let dia = parseInt(arrayFecha[0]);
let mes = parseInt(arrayFecha[1]);
let year = parseInt(arrayFecha[2]);


let fechaNac = new Date(year, mes - 1, dia);
let fechaActual = new Date();
let fechaProximo = new Date(fechaActual.getFullYear(), mes - 1, dia);

let diferenciaMs = 0;

if (fechaActual == fechaProximo) {
    console.log("Enhorabuena es tu cumpleaños!! ")

} else if (fechaActual < fechaProximo) {
    diferenciaMs = fechaProximo - fechaActual;
} else {
    fechaProximo = new Date(fechaActual.getFullYear() + 1, mes - 1, dia);
    diferenciaMs = fechaProximo - fechaActual;
    let dias = diferenciaMs / (1000 * 60 * 60 * 24);
    console.log("Te faltan " + parseInt(dias) + " para tu cumpleaños");
}

let years = fechaActual - fechaNac;
let msEnYear = 1000 * 60 * 60 * 24 * 365;


console.log("Tienes " + (parseInt(years / msEnYear)) + " años");
