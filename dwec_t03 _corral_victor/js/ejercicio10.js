console.log("T03 - Ejercicio 10");
/*
Investiga sobre los métodos para redondear del objeto Math: "ceil()", "floor()" y "round()". 
Haz un ejemplo donde los uses y se observe la diferencia entre cada uno de ellos.
*/


/*ceil():
El Math.ceil()método redondea un número hacia arriba al entero más cercano.
*/
console.log("Ceil");
let num = 0.60;
let redondeo = Math.ceil(num);
console.log(redondeo);


console.log("Floor");
/*floor():
El Math.floor()método redondea un número hacia abajo hasta el entero más cercano.
*/

let num2 = 0.60;
let redondeo2 = Math.floor(num2);
console.log(redondeo2);

console.log("Round");
/*round():
El Math.round()método redondea un número al entero más cercano.
*/
let num3 = 0.60;
let redondeo3 = Math.round(num3);
console.log(redondeo3);

let num4 = 2.02;
let redondeo4 = Math.round(num4);
console.log(redondeo4);