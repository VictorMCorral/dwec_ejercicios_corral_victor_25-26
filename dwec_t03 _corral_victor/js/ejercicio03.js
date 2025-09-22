console.log("T03 - Ejercicio 03");
/*
Crea un script que pida al usuario una cadena y diga cuántas palabras tiene esa cadena. 
Después mostrará cada una de las palabras que constituyen la  cadena. 
Suponemos que una palabra está formada por uno o más caracteres distintos al espacio y al tabulador.
No puedes usar patrones.
*/


let texto = prompt("Introduce una cadena de texto: ");
let separadores = [",", ";", "?", "¿", ".", ":"]; //He tenido que quitar el " " porque agregaba al array ""

let partes = [texto];

for (let sep of separadores){
    let temporal = [];
    for (let p of partes){
        let separa = p.split(sep);
        temporal = temporal.concat(separa); 
    }
    partes = temporal;
}
console.log(partes);

let textoLimpio = "";

//Los bucles anidados forEach dan error con los espacios, por eso lo limpio aqui abajo
for (let i = 0; i< partes.length; i++){
    textoLimpio = textoLimpio.concat(partes[i]);
}

textoLimpio = textoLimpio.split(" ");

console.log(textoLimpio);

console.log("Tu cadena tiene la siguiente cantidad de palabras: " + textoLimpio.length);

