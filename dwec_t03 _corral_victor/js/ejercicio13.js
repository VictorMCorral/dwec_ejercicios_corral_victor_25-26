console.log("T03 - Ejercicio 13");
/*
¿Cómo se resolvería el ejercicio anterior definiendo un nuevo método en el 
objeto Math que se llame "random2(lim_inf, lim_sup)"?
*/


let numeroCompleto = "";

for (let i = 0; i<5; i++){
    numeroCompleto += random2(0, 9);
}

numeroCompleto = parseInt(numeroCompleto);

console.log("El numero premiado es: " + numeroCompleto)



function random2(lim_inf, lim_sup){

    let num = Math.floor(Math.random() * (lim_sup - lim_inf +1 )) + lim_inf;


    return num;

}