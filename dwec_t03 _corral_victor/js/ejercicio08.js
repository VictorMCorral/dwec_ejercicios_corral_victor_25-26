console.log("T03 - Ejercicio 08");
/*
¿Para qué sirve el método match(), el método search() y el método includes() del objeto String? Haz un ejemplo donde demuestres su uso.
https://www.w3schools.com/js/js_string_search.asp 

Objeto Math // Random
*/


/*match():
busca el parametro que le pases y te devuelve un array con la primera vez que lo encuentra,
a menos que se haga la busqueda global que te buscaria en toda la frase devolviendo las veces que lo encuentra.
*/

let texto = "Esto es una prueba de estado de estudio español";
console.log(texto);
let prueba = texto.match("es");
console.log(prueba.length + " " + prueba);
let prueba2= texto.match(/es/g); // busqueda global
console.log(prueba2.length + " " + prueba2);
let prueba3= texto.match(/es/gi); // busqueda global incluyendo mayusculas.
console.log(prueba3.length + " " + prueba3);

console.log("");
/*includes():
Es un metodo para comprobar, ya que devuelve true si aparece el parametro y false si no aparece.
*/

let texto2 = "Esto es una prueba de estado de estudio español"
console.log(texto2)
console.log("es: " + texto2.includes("es") + "; ñaña: " + texto2.includes("ñaña"));

console.log("");
/*search():
parecido al match(), pero devuelve la posicion.
*/
let texto3 = "Esto es una prueba de estado de estudio español";
console.log(texto3);
let pruebaSearch = texto.search("es");
console.log("\"es\" se encuentra en la posicion: " + pruebaSearch);