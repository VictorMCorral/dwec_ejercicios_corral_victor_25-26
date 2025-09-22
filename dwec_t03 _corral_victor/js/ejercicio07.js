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