console.log("T03 - Ejercicio 01");

/*Investiga los métodos toFixed() y toPrecision() del objeto Number. ¿Qué diferencia hay entre ellos? Úsalos en un ejemplo con diferentes parámetros de entrada.*/

/* toFixed():
    El toFixed()método convierte un número en una cadena.
    El toFixed()método redondea la cadena a un número específico de decimales.

    controla los decimales exactos
    el dato introducido son la cantidad de decimales.
*/
let num = 123.456
console.log(num.toFixed(5)); //"123.45600" 


/* toPrecision():
    El toPrecision()método formatea un número a una longitud especificada.
    Se agrega un punto decimal y valores nulos (si es necesario) para crear la longitud especificada.

    controla las cifras significativas (y puede dar notación científica).

    el dato introducido son la cantidad de cifras
*/

let num2 = 123.456
console.log(num.toPrecision(5)); //"123.46"
