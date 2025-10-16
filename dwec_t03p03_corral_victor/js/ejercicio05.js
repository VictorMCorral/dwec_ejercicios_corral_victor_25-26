console.log("T03p3 - Ejercicio 05");
/*
Desarrolla un script que dado un array de números los ordene de forma ascendente o 
descendente (según indique el usuario) usando un método del objeto Array diseñado para ello.
*/

const numeros = [5, 10, 3, 4, 20, 1];

let opcion = (prompt("Orden asc o desc: ")).toLowerCase();

if (opcion == "asc"){
    numeros.sort(function(a, b){return a - b});
} else if (opcion == "desc"){
    numeros.sort(function(a, b){return b - a});
} else {
    console.log("Has introducido una opcion erronea")
}

console.log("El array resultante es: ");
console.log(numeros);