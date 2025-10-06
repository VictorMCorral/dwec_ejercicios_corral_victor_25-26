console.log("T03p3 - Ejercicio 05");
/*
Desarrolla un script que cree dos arrays de 10 elementos. 
El primer array tendrá los nombres de 10 personas y el segundo array tendrá 
los teléfonos móviles de esas 10 personas, de forma que la persona que ocupa 
la posición 4 del primer array tendrá su número de teléfono en la posición 4 del segundo array.

El script pedirá el nombre de una persona y mostrará el teléfono de dicha persona. 
Puede ocurrir que no exista esa persona o que haya dos personas con el mismo nombre. 
En ese caso se mostrarán los dos teléfonos.
*/

const arrayNombres = ["nombre1", "nombre2", "nombre3", "nombre4", "nombre1", "nombre6", "nombre7", "nombre8", "nombre9", "nombre10"];
const arrayTelefonos = [654, 643, 633, 644, 655, 666, 677, 688, 699, 610];

let nombreBuscar = prompt("Introduce el nombre a buscar: ");
let encontrado = false;

for(let i = 0; i<arrayNombres.length; i++){
    if(arrayNombres[i] == nombreBuscar.toLowerCase()){
        console.log(arrayNombres[i] + " tiene el telefono " + arrayTelefonos[i]);
        encontrado = true;
    }
}

if (!encontrado){
    console.log("No se ha encontrado " + nombreBuscar);
}