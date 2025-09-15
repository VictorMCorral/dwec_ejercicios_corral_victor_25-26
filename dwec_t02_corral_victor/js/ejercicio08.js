console.log("T02 - Ejercicio 08");

/*

Desarrolla un script que pida dos números enteros. 
El programa determinará cuál es el menor y mostrará todos los número que hay entre ellos y cuantos hay. 
El script tendrá una función para calcular cual es el menor de los dos: calcular_menor

Usa console.table() para mostrar listas de números.

*/

let num1 = Number(prompt("Introduce un numero entero: "))
let num2 = Number(prompt("Introduce otro numero entero: "))
let contador = 0;
let menor = calcular_menor(num1, num2);
let mayor = calcular_mayor(num1, num2);


for (let i = menor; i < mayor; i++){
    console.log(i)
    contador ++
}
console.log("Hay " + contador + " entre " + menor + " y " + mayor);



function calcular_menor(num1, num2){
    if (num1 <= num2){
        return num1;
    } else if (num2 < num1){
        return num2;
    } else {
        return null;
    }
}

function calcular_mayor(num1, num2){
    if (num1 >= num2){
        return num1;
    } else if (num2 > num1){
        return num2;
    } else {
        return null;
    }
}