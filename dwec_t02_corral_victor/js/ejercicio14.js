console.log("T02 - Ejercicio 14");
/*
Determinar si un número entero dado leído desde el teclado es abundante o no. 
Un número abundante es un número natural cuyos divisores (todos los divisores excepto el propio número) sumen más que dicho número. 
Ejemplo: 24 < 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36.
*/

let num1;

do {
    num1 = prompt("Introduce un numero entero: ");
} while (isNaN(num1));


if (esAbundante(num1)){
    console.log(num1 + " si es un numero abundante");
    alert(num1 + " si es un numero abundante");
} else {
    console.log(num1 + " si es un numero abundante");
    alert(num1 + " no es un numero abundante");
};





function esAbundante(num1) {
    let aux = 0;
    let divisores = "Los divisores son: "
    for (let i = 0; i< num1; i++){
        if (num1%i == 0){
            aux += i;
            divisores += " " + i
        }
    }

    console.log(divisores)

    if (aux > num1){
        return true;
    } else {
        return false;
    }


}