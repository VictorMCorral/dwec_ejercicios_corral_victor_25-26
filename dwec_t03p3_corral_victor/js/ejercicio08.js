console.log("T03p3 - Ejercicio 08");
/*
Desarrolla un script que reciba dos matrices de cualquier dimensión y te indique 
si se pueden sumar o no. Si se pueden sumar, dicho script mostrará la suma de ambas. 
Deberás definir una función que realice la operación de la suma y otra que compruebe 
que si se pueden sumar o no.
*/

const array1 = [
    [1, 2],
    [3, 4],
];

const array2 = [
    [1, 2],
    [3, 4],
];


if (esSumable(array1, array2)) {
    console.log("Si se pueden sumar el array1 y el array2: ")

    const arraysSumados1y2 = sumaArrays(array1, array2);

    console.log(arraysSumados1y2);

} else {
    console.log("No se pueden sumar");
}



function esSumable(array1, array2) {

    let longitudFilas = array1.length == array2.length;
    let longitudColum = array1[0].length == array2.length;
    console.log()

    return longitudFilas && longitudColum;
}

function sumaArrays(array1, array2) {
    let filas = array1.length;
    let columnas = array1[0].length;

    const arraysSumados = [];

    for (let i = 0; i<filas; i++){
        arraysSumados[i] =[];
        for (let j = 0; j<columnas; j++){
            arraysSumados[i].push(array1[i][j] + array2[i][j]);
        }
    }

    return arraysSumados;
}