console.log("T03 - Ejercicio 19");
/*
Determina en un folio qué hace este script. Después comprueba que has acertado, haciendo uso de un depurador:
*/

let a = ["Sung", "Luffy", "Goku", "Sakura", "Asta", "Kenshin", "Meliodas"];
let b = new Date(); // 25/09/2025
let c = a[b.getDay() % a.length]; // b = 4 % a.length = 7  === a[4]  => "Asta"
let d = 0;
for (let i = 0; i < c.length; i++) { // c.length == 4
    let e = Math.floor(Math.random() * c.length); // e = random del 0-3 
    let f = c.charAt(e); // coje el e de la cadena "Asta"
    if (i % 2 === 0) {  // si la cadena es par
        f = f.toUpperCase(); // Pone el valor de f en mayusculas
        c = c.slice(0, i) + f + c.slice(i + 1); // elimna toda la palabra (0,0) + f + resto de cadena(0+1);
    }
    if ("aeiou".includes(f.toLowerCase())) {
        d += Math.pow(2, i);
    }
    console.log(f);
}
console.log(d.toFixed(0)); //
console.log(c);
console.log(e); // Error, la e esta dentro del for