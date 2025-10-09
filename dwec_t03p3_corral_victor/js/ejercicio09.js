console.log("T03p3 - Ejercicio 09");
/*
Desarrolla un script que dada una matriz te devuelva su transpuesta. 
¿Qué es la transpuesta de una matriz? Define las funciones pertinentes.
*/


// PENDIENTE DE TERMINAR
const matriz1 = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(matriz1);
const matrizTrans = matrizTranspuesta(matriz1);
console.log(matrizTrans);

function matrizTranspuesta(matriz){
    let filas = matriz.length; // 2
    let columnas = matriz[0].length; // 3
    const matrizTrans = [];

    for (let i = 0; i<columnas; i++){
        matrizTrans[i] = [];
        for (let j = 0; j<filas; j++){
            matrizTrans[i].push(matriz[j][i]);
        }
    }
    return matrizTrans;
}
