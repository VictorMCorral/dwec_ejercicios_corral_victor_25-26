console.log("T03 - Ejercicio 07");
/*
Un usuario puede darte una hora usando los siguientes formatos: "HH:MM", "HH-MM" o "HH.MM".
Determina qué separador ha usado el usuario y crea un objeto Date con la hora introducida por el usuario. 
Después verifica si la hora es válida.

No puedes usar patrones.

if (hora < 0 || hora > 23) { 
    console.log("Hora inválida"); 
} else if (minutos < 0 || minutos > 59) {
    console.log("Minutos inválidos"); 
} else { 
    console.log("La hora es válida"); 
}
¿Y otra forma?

*/
/* No se come bien el 31-09-2025 -- porque la transforma en el mes posterior.
let horaIntroducida = prompt("Introduce una hora: ");
let horaModificada = ""

if (horaIntroducida.includes(":")) {
    horaModificada = horaIntroducida.split(":");
} else if (horaIntroducida.includes(".")) {
    horaModificada = horaIntroducida.split(".");
} else if (horaIntroducida.includes("-")){
    horaModificada = horaIntroducida.split("-");
} else {
    alert("El formato introducido no es valido");
}

let fecha = new Date();

fecha.setHours(horaModificada[0], horaModificada[1], 0, 0);


if (horaModificada[0] == fecha.getHours() && horaModificada[1] == fecha.getMinutes()){
    console.log("La hora introducida \"" + horaIntroducida + "\" es correcta");
} else {
    console.log("La hora introducida \"" + horaIntroducida + "\" no es correcta");
}
*/
let entrada = prompt("Introduce una fecha (DD-MM-YYYY, DD/MM/YYYY o DD MM YYYY):");

// Esta parte es mejor hacerla asi, es mas rapida y eficaz a modificar el codigo
let separador = "-";
if (entrada.includes("/")) {
    separador = "/";
} else if (entrada.includes(" ")) {
    separador = " ";
}

let partes = entrada.split(separador);
let dia = parseInt(partes[0], 10);
let mes = parseInt(partes[1], 10);
let anio = parseInt(partes[2], 10);

let fecha = new Date(anio, mes - 1, dia);

if (
    fecha.getFullYear() === anio &&
    fecha.getMonth() + 1 === mes &&
    fecha.getDate() === dia
) {
    alert("La fecha es válida")
    console.log("la fecha es válida");
} else {
    alert("La fecha es inválida")
    console.log("la fecha es inválida")
}