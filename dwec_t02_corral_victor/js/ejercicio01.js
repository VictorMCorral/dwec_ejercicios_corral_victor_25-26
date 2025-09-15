console.log("T02 - Ejercicio 01");

let contenido = "";
let calificacion; 


let num1 = Number(prompt('Introduce la primera nota: '));
contenido += "Nota 1: " + num1 + "<br>";
console.log("Nota 1:" + num1);

let num2 = Number(prompt('Introduce la Segunda nota: '));
contenido += "Nota 2: " + num2 + "<br>";
console.log("Nota 2: " + num2);

let num3 = Number(prompt('Introduce la tercera nota: '));
contenido += "Nota 3: " + num3 + "<br>";
console.log("Nota 3: " + num3);

let result = (num1 + num2 + num3) / 3;


if (result < 5 && result > 0) {
    calificacion = "SUSPENSO";
} else if (result >= 5 && result < 7) {
    calificacion = "APROBADO";
} else if (result >= 7 && result <= 8.5){
    calificacion = "NOTABLE";
} else if (result > 8.5 && result <= 10){
    calificacion = "SOBRESALIENTE"
} else {
    calificacion = "ERROR"
    alert("La nota es superior a 10, algun numero es erroneo")
    
}

contenido += "<br> Tu media aritmetica seria: " + result + "<br>" + "Tu calificacion es: " + calificacion;



document.getElementById("output").innerHTML = contenido;

if (calificacion != "ERROR"){
    alert ("Tu media aritmetica seria: " + result + " - " + calificacion);
}


