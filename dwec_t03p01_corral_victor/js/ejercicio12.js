console.log("T03 - Ejercicio 12");
/*
Elabora un script que simule el sorteo del cupón diario de la once sin número de serie. 
El número premiado se obtiene de cinco bombos: unidades, decenas, centenas, unidades de millar y decenas de millar. 
Cada bombo dará un número entero entre 0 y 9. Haz uso del método "random()" del objeto Math. 
Define la función: "generar_numeros_entre_0_9()" que no recibe nada y devuelve un número entre 0 y 9.
*/


let numeroCompleto = "";

for (let i = 0; i<5; i++){
    numeroCompleto += generar_numeros_entre_0_9();
}

numeroCompleto = parseInt(numeroCompleto);

console.log("El numero premiado es: " + numeroCompleto)


function generar_numeros_entre_0_9() {
    let num = 0;
    num = Math.floor(Math.random() * 10);
    return num;
}