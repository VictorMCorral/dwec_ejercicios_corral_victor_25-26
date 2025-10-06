console.log("T03p3 - Ejercicio 07");
/*
Desarrolla un script que pida el número de filas y columnas de una matriz. 
Dichos valores deben ser mayores de 0 y confiamos en que el usuario los introduce de forma correcta. 
Después se pedirán los valores de dicha matriz. Finalmente se mostrarán los datos por pantalla. 
Usa las siguientes funciones:
-    	pedirDatos() -Recibe: filas y columnas. Devuelve: matriz.
-    	mostrarDatos() - Recibe: matriz. Devuelve: nada.
*/

let filas = 0;
let columnas = 0;

let array = pedirDatos(filas, columnas);
mostrarDatos(array);


function pedirDatos(filas, columnas) {
    let continuar = false;

    while (!continuar) {
        filas = Number(prompt("Introduce el numero de filas: "));
        columnas = Number(prompt("Introduce el numero de columnas: "));

        continuar = filas > 0 && columnas > 0 && !isNaN(filas) && !isNaN(columnas);

        if (!continuar) {
            alert("Alguno de los valores no es valido");
        } 
    }

    let arrayBi = [];

    for (let i = 0; i<filas; i++){
        arrayBi[i]=[];

        for(let j =0; j<columnas; j++){
            let num = Number(prompt("Introduce el numero en la posicion [" + i + "][" + j + "]"));
            arrayBi[i][j] = num;
        }
    }
    return arrayBi;
}

function mostrarDatos(array) {
    for (let i = 0; i<array.length; i++){
        let datos = "";
        for(let j =0; j<array[0].length; j++){
            datos += array[i][j] + " ";
        }
        console.log(datos);
    }

}