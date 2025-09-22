console.log("T03 - Ejercicio 06");
/*
Un usuario puede darte una fecha usando los siguientes formatos: "DD-MM-YYYY", "DD/MM/YYYY" o "DD MM YYYY". 
Determina qué separador ha usado el usuario y crea un objeto Date con la fecha introducida por el usuario. 
Después verifica si la fecha es válida.

No puedes usar patrones.

if (anio < 0) {
    console.log("Año inválido");
} else if (mes < 1 || mes > 12) {
    console.log("Mes inválido");
} else if (
    (dia < 1 || dia > 31) ||
    (mes === 2 &&
        ((esBisiesto(año) && dia > 29) ||
            (!esBisiesto(año) && dia > 28))
    ) ||
    ([4, 6, 9, 11].includes(mes) && dia > 30)
) {
    console.log("Día inválido");
} else {
    console.log("La fecha es válida");
}

¿Y otra forma?

*/

let fechaIntroducida = prompt("Introduce una fecha: ");
let fechaModificada = ""

if (fechaIntroducida.includes("/")) {
    fechaModificada = fechaIntroducida.split("/");
} else if (fechaIntroducida.includes(" ")) {
    fechaModificada = fechaIntroducida.split(" ");
} else if (fechaIntroducida.includes("-")){
    fechaModificada = fechaIntroducida.split("-");
} else {
    alert("El formato introducido no es valido");
}


let fechaInvertida = fechaModificada[2] + "-" + fechaModificada[1] + "-" + fechaModificada[0];

let fecha = new Date(fechaInvertida);
console.log("Fecha introducida: " + fechaIntroducida)  

// get.Time() devuelve el timestamp en milisegundos si la fecha no es valida devuelve NaN

if (!isNaN(fecha.getTime())) {
    console.log("La fecha es válida");
} else {
    console.log("La fecha no es válida");
}
