console.log("T02 - Ejercicio 13");
/*
Crear un script que dada una palabra determine si es un palíndromo.

Palíndromo: Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; 
por ejemplo, anilina; dábale arroz a la zorra el abad.
*/

let palabra = prompt("Introduce una palabra: ");

if (isPalindromo(palabra)){
    alert(palabra + " si es un palindromo");
} else {
    alert(palabra + " no es un palindromo");
};

console.log(palabra + " tiene " + longitud + " letras");


function isPalindromo (palabra) {
    palabra = palabra.toLowerCase();
    let arrayCh = palabra.split('');
    let arrayinvertido = arrayCh.slice().reverse();
    console.log(arrayCh);
    console.log(arrayinvertido);

    if (arrayCh.join('') === arrayinvertido.join(``)){
        return true;
    } else {
        return false;
    }
}
