console.log("T02 - Ejercicio 15");
/*
Desarrolla una aplicación que permita calcular los salarios mensuales de los trabajadores de una empresa a partir de los siguientes datos:

a. 	Número de horas trabajadas.
b. 	Turno realizado: Mañanas (m), Tardes (t) o Noches (n).

Para el cálculo del salario bruto se tendrá en cuenta que el turno de mañana se paga a 45 €/hora, el de tarde se paga a 47 €/hora y el turno de noche se paga 50 €/hora.

Para el cálculo del salario neto se realizan determinados descuentos destinados al pago de impuestos de la siguiente forma:
-    	Si el salario bruto es menor de 600 € el descuento es del 8%.
-    	Si el salario bruto está entre 600 € y 1000 € el descuento es del 10%.
-    	Si el salario bruto es mayor de 1000 € el descuento es del 12%.
Se desea calcular el salario neto de cada trabajador. Para ello la aplicación irá pidiendo uno a uno los trabajadores hasta que el usuario indique lo contrario. 
Para cada trabajador se mostrará su salario neto.

Antes de finalizar la aplicación mostrará el importe total de salarios abonados.
El script se escribirá usando tantas funciones como sea posible con el fin de poder reutilizar la máxima cantidad de código en un futuro.
*/

let p1;
let nombre;
let horasTrabajadas;
let turnoTrabajado;
let trabajadores = [];
let salariosTotal = 0;

do {
    nombre = prompt("Introduce el nombre del trabajador: ");
    horasTrabajadas = prompt("Introduce las horas trabajadas: ");
    turnoTrabajado = prompt("Introduce el turno realizado:\nMañanas (m), Tardes (t) o Noches (n): ")

    if (Number.isInteger(horasTrabajadas) ||
        (turnoTrabajado.toLowerCase() == "t" ||
            turnoTrabajado.toLowerCase() == "m" ||
            turnoTrabajado.toLowerCase() == "n")) {
                p1 = new Person(nombre, horasTrabajadas, turnoTrabajado.toLowerCase());
                p1.calcularSalario();
                trabajadores.push(p1);
    } else {
        alert("Los datos introducidos son erroneos");
    }


} while (confirm("¿Quieres agregar otro trabajador?"));

for (let i = 0; i < trabajadores.length; i++) {
    salariosTotal += trabajadores[i].salario;
}

console.log("Los salarios totales abonados son: " + salariosTotal.toFixed(2));
for (let i = 0; i < trabajadores.length; i++) {
    console.log(trabajadores[i].nombre + " tiene un salario de: " + trabajadores[i].salario.toFixed(2));
}

//console.table(trabajadores);



function Person(nombre, horasTrabajadas, turno) {
    this.nombre = nombre;
    this.horasTrabajadas = horasTrabajadas;
    this.turno = turno;
    this.salario;

    this.calcularSalario = function () {
        if (turno == "m") {
            this.salario = this.horasTrabajadas * 45;
        } else if (turno == "t") {
            this.salario = this.horasTrabajadas * 47;
        } else if (turno == "n") {
            this.salario = this.horasTrabajadas * 50;
        }

        this.salario = parseFloat(this.salario.toFixed(2));

        if (this.salario < 600) {
            this.salario -= this.salario * 0.08;
        } else if (this.salario >= 600 && this.salario <= 1000) {
            this.salario -= this.salario * 0.10;
        } else if (this.salario > 1000) {
            this.salario -= this.salario * 0.12;
        }


    }
}
