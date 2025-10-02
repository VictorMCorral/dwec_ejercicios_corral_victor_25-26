console.log("T03p02 - Ejercicio 01");
/*
Crea una función llamada oraculo que reciba un número variable 
de argumentos (edad, nivel de poder, número de batallas, etc.). 
Pueden pasar el número que quieran y si no reciben ninguno el valor por defecto recibido será 0.

La función debe hacer uso de otras funciones y una lógica básica:
    - Usar el objeto arguments para recorrer todos los valores, 
    sabiendo que si no recibe nada, el valor recibido por defecto es 0.
    - Función 1 - Tradicional: Verificar que todos los argumentos sean números. 
        Si alguno no lo es, mostrar un error en consola y devolver undefined. 
        Si se recibe una cadena numérica tipo "45" se convertirá en número. 
        Si recibe un cadena tipo "juan", dará el error indicado.
    - Función 2 - Anónima: Calcular la media de los argumentos
    - Función 3 - Flecha: Calcular el máximo
    - Función 4 - Flecha: Mínimo
    
    - Función 5 - Tradicional: Calcular la desviación respecto de la media (cada valor menos la media).
    - Función 6 - Anónima: Según el valor de la media, devolver un mensaje:
        < 30: "Tu destino es entrenar más duro. Tus estadísticas están por debajo del mínimo requerido."
        30 - 60: "Estás en el camino del héroe. El valor máximo alcanzado fue X y el mínimo Y."
        > 60: "Eres un maestro legendario. Tus desviaciones son: [...]."

Finalmente crea una función autoinvocada que haga uso de esta función oraculo. 
La IIFE no debe llamar a oraculo una sola vez, sino varias veces con distintos conjuntos de datos.
*/



(function() {
    oraculo(1, 2, "45", "255");
    oraculo(100, 20, "288", "3");
    oraculo(111, 222, "450", "55");
    oraculo(102, 502, "5", "25");
})();

function oraculo(...args) {
    if (args.length === 0) {
        console.log("No se pasaron argumentos");
    } else {

        /*
        Función 1 - Tradicional: Verificar que todos los argumentos sean números. 
        Si alguno no lo es, mostrar un error en consola y devolver undefined. 
        Si se recibe una cadena numérica tipo "45" se convertirá en número. 
        Si recibe un cadena tipo "juan", dará el error indicado.
      */
        for (let i = 0; i < args.length; i++) {
            let num1 = args[i];
            args[i] = verificarNumeros(num1);
        }
        console.log(args);


        //  Función 2 - Anónima: Calcular la media de los argumentos
        const media = function (args) {
            let suma = 0;
            let contador = args.length;
            for (let i = 0; i < args.length; i++) {
                suma += args[i];
            }
            suma = suma / contador;
            return suma;
        };
        console.log("Media: " + media(args));

        // Función 3 - Flecha: Calcular el máximo
        const maximo = (args) => {
            let temp = args[0];
            for (let i = 0; i < args.length; i++) {
                if (temp < args[i]) {
                    temp = args[i];
                }
            };
            return temp;
        };
        console.log("Maximo: " + maximo(args));

        // Recomendacion de la IA
        //const maximoA = args => Math.max(...args)
        //console.log(maximoA(args));

        //Función 4 - Flecha: Mínimo
        const minimo = (args) => {
            let temp = args[0];
            for (let i = 0; i < args.length; i++) {
                if (temp > args[i]) {
                    temp = args[i];
                }
            };
            return temp;
        };
        console.log("Minimo: " + minimo(args));

        // Adaptando lo que me dio la IA en maximo
        //const minimoA = args => Math.min(...args);
        //console.log(minimoA(args));


        //Función 5 - Tradicional: Calcular la desviación respecto de la media (cada valor menos la media).
        calcularDesviacion(media(args), args);


        /*
        Función 6 - Anónima: Según el valor de la media, devolver un mensaje:
        < 30: "Tu destino es entrenar más duro. Tus estadísticas están por debajo del mínimo requerido."
        30 - 60: "Estás en el camino del héroe. El valor máximo alcanzado fue X y el mínimo Y."
        > 60: "Eres un maestro legendario. Tus desviaciones son: [...]."
        */

        let mensaje = function (media) {
            if(media < 30){
                console.log("Tu destino es entrenar más duro. Tus estadísticas están por debajo del mínimo requerido.")
            } else if (media <= 30 && media >= 60){
                console.log("Estás en el camino del héroe. El valor máximo alcanzado fue X y el mínimo Y.")
            } else if (media > 60){
                console.log("Eres un maestro legendario. Tus desviaciones son: ");
                calcularDesviacion(media, args);
            }
        };

        mensaje(media(args));
    }

}


function verificarNumeros(num1) {
    if (isNaN(num1)) {
        console.log("No todos los datos son numeros");
        return undefined;
    } else {
        return Number(num1);
    }
}

function calcularDesviacion(media, args){
    for (let i = 0; i< args.length; i++){
        console.log(Math.abs(args[i] - media));
    }

}

