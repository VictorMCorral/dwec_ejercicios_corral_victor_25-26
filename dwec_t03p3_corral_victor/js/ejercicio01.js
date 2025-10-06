console.log("T03p3 - Ejercicio 01");
/*

Desarrolla un script que pregunte al usuario si quiere borrar el último 
elemento de un array o el primero, ambos o ninguno o deshacer al último estado. 
Se  empieza con un array inicial definido.

Si el usuario contesta que ninguno, el script mostrará el array. 
Si el usuario contesta que quiere borrar el último o el primero, 
el script mostrará el array sin el último elemento o sin el primero y volverá 
a preguntar si se quiere borrar el último elemento o el primero o ninguno. 
También se puede indicar ambos, en ese caso se elimina el primero y 
el último (si hay al menos dos elementos). 
Esto se repetirá mientras el usuario conteste que quiere borrar algún elemento 
o hasta que no queden más elementos en el array.

Es necesario guardar el estado del array antes de borrar por si 
el usuario contesta deshacer. Solo se guarda un estado.

Asegúrate de que la eliminación no deje huecos en el array (undefined).
*/


/* 
    TODO NO se pueden manipular arrays si no los mandamos 
*/


const array = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji","Chopper", "Nico Robin", "Franki", "Brook", "Jinbe" ]
/*let arrayActual = array.slice();*/
/*let arrayAnterior = [];*/
console.log(array);
let opcion = 0;
let accionAnterior =[];

do{
let texto = "¿Que quieres hacer?: " +
            "\n1-Borrar el ultimo elemento " +
            "\n2-Borrar el primer elemento" +
            "\n3-Borar el ultimo y el primero" +
            "\n5-Deshacer el ultimo estado" + 
            "\n0-No borar ninguno";

opcion = Number(prompt(texto));


switch(opcion){
    case 1: 
        accionAnterior[0] = "ultimo";
        break;
    case 2:
        accionAnterior[0] = "primero";
        break;
    case 3:
        accionAnterior[0] = "ambos";
        break;
    case 4:
        accionAnterior[0] = "imprimir";
        accionAnterior[1] = "";
        accionAnterior[2] = "";
        imprimirArray();
        break;
    case 5:
        //deshacer();
        deshacerAccion();
        accionAnterior[0] = "deshacer";
        accionAnterior[1] = "";
        accionAnterior[2] = "";
        break;
    case 0:
        accionAnterior[0] = "salir";
        accionAnterior[1] = "";
        accionAnterior[2] = "";
        console.log("Saliste del programa");
        break;
    default:
        console.log("No es una opcion valida");
        break;
}

guardarAccion();
imprimirArray();

}while (opcion != 0);

function guardarAccion(){
    switch(accionAnterior[0]){
        case "ultimo": 
            // Borrar Ultimo
            borrarUltimo(1);
            break;
        case "primero":
            // Borrar primero 
            borrarPrimero(1);
            break;
        case "ambos":
            // Borrar ambos
            borrarAmbos(1,2);
            break;
    }
}

function deshacerAccion(){
    switch(accionAnterior[0]){
        case "ultimo": 
            array.push(accionAnterior[1])
            break;
        case "primero":
            array.unshift(accionAnterior[1])
            break;
        case "ambos":
            array.unshift(accionAnterior[1]);
            array.push(accionAnterior[2]);
            break;
    }
}

function imprimirArray(){
    console.log("Array:");
    console.log(array);
    /*console.log("Anterior: ");
    console.log(arrayAnterior);
    console.log("Actual: ");
    console.log(arrayActual);*/
}

function borrarUltimo(lugar){
    if (array.length >= 1){
        accionAnterior[lugar]=array.pop();
    } else {
        alert("No hay suficientes elementos");
    }
}

function borrarPrimero(lugar){
    if (array.length >= 1){
        accionAnterior[lugar] = array.shift();
    } else {
        alert("No hay suficientes elementos");
    }
}

function borrarAmbos(lugar1,lugar2){
    if(array.length >= 2){
        borrarPrimero(lugar1);
        borrarUltimo(lugar2);
    } else {
        alert("No hay suficientes elementos");
    }
}




/*function deshacer(){
    array = arrayAnterior.slice();
    arrayAnterior = arrayActual.slice();
    arrayActual = array.slice();
    imprimirArray();
}*/

/*function guardarArray(){
    arrayAnterior = arrayActual.slice();
    arrayActual = array.slice();
    imprimirArray();
}*/