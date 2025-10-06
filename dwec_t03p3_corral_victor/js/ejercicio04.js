console.log("T03p3 - Ejercicio 04");
/*
Desarrolla un script que ordene un array de cadenas alfabéticamente 
usando un método del objeto Array que permite hacerlo de forma directa.
Se pueden ordenar de forma ascendente o descendente a decisión del usuario.
*/

const cadenas = ["f", "b", "a", "d", "e","c" ];

let opcion = (prompt("Orden asc o desc: ")).toLowerCase();

if (opcion == "asc"){
    cadenas.sort();
} else if (opcion == "desc"){
    cadenas.sort().reverse();
} else {
    console.log("Has introducido una opcion erronea")
}

console.log("El array resultante es: ");
console.log(cadenas);
