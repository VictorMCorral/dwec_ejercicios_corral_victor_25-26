console.log("T03 - Ejercicio 23");
/*
Desarrolla un script que determine si el formato usado en una fecha dada por el usuario es válido o no. 
Los formatos de fechas válidos son DD-MM-YYYY, DD-MM-YY, DD/MM/YYYY y DD/MM/YY. Deberás hacer uso del 
objeto ExpReg y crear una función que se denomine "validarFormatoFecha()" que reciba la cadena 
introducida por el usuario y devuelva un booleano. 

La expresión regular debes crear usando el método: 
var patt=new RegExp(pattern, modifiers); 
Puedes usar una IA para generar el patrón, entendiendo dicho patrón.

Después tienes que crear un objeto de tipo Date y determinar si la fecha es correcta.

Objeto String y RegExp
*/


let fechaIntroducida = prompt("Introduce una fecha: ");


if (validarFormatoFecha(fechaIntroducida)){
    console.log(fechaIntroducida + " es una fecha valida en formato.")
} else {
    console.log(fechaIntroducida + " no cumple los formatos pedidos.")
}


function validarFormatoFecha(fecha) {
    const reFormato1 = new RegExp(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/); //DD-MM-YYYY
    const reFormato2 = new RegExp(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{2}$/); //DD-MM-YY
    const reFormato3 = new RegExp(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/); // DD/MM/YYYY
    const reFormato4 = new RegExp(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/); // DD/MM/YY
    let fechaModificada ="";
    let separador = "";


    if (reFormato1.test(fecha) || reFormato2.test(fecha)){
        separador = "-";
    } else if (reFormato3.test(fecha) || reFormato4.test(fecha)) {
        separador = "/";
    } else {
        return false;
    }

    fechaModificada = fecha.split(separador);
    fechaModificada.reverse();
    return crearFecha(fechaModificada);
}


function crearFecha(arrayFecha){
    let dia = parseInt(arrayFecha[2], 10);
    let mes = parseInt(arrayFecha[1], 10) - 1;
    let anio = parseInt(arrayFecha[0], 10);


    if (arrayFecha[0].length === 2) {
        anio = 2000 + anio;
    }

    let fecha = new Date(annio, mes, dia);

    if (fecha.getFullYear() === anio &&
        fecha.getMonth() === mes &&
        fecha.getDate() === dia){
        return true;
    } else {
        return false;
    }
}