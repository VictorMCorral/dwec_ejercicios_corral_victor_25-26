console.log("T03 - Ejercicio 02");
/*
¿Qué diferencia hay entre el método slice(), el método substr() y el método substring(). Haz un ejemplo donde se aprecie la diferencia entre dichos métodos.
*/

let texto = "Hola voy a probar slice(), substr() y substring()";

/* slice():
slice()extrae una parte de una cadena y devuelve la parte extraída en una nueva cadena.

El método toma 2 parámetros: posición inicial y posición final (final no incluido).
*/

let pruebaSlice = texto.slice(18, 25); //18 es donde comienza y 25 donde acaba
console.log(pruebaSlice);


/* sbstr():
substr()es similar a slice().

La diferencia es que el segundo parámetro especifica la longitud de la parte extraída.
Si omite el segundo parámetro, substr()se eliminará el resto de la cadena.
Si el primer parámetro es negativo, la posición cuenta desde el final de la cadena.
*/


let pruebaSbstr = texto.substr(27, 8); //27 es donde empieza y 8 la longitud
let pruebaSbstr2= texto.substr(-22, 8); //Admite valores negativos como comienzo
console.log(pruebaSbstr);
console.log(pruebaSbstr2);   

/* substring():
substring()es similar a slice().

La diferencia es que los valores iniciales y finales menores a 0 se tratan como 0 en substring().
Si omite el segundo parámetro, substring()se eliminará el resto de la cadena.
*/

let pruebaSubstring = texto.substring(38, 49); //
console.log(pruebaSubstring);

