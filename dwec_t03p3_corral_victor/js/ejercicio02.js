console.log("T03p3 - Ejercicio 02");
/*
Desarrolla un script que pida al usuario cuántos números va a introducir. 
Se comprobará que el número sea un número y que sea mayor que cero. 
En caso contrario se volverá a pedir el número de elementos hasta 
que el usuario introduzca un número mayor que cero.

Después el script le pedirá números al usuario uno a uno y los almacenará en un array. 
Finalmente el script dirá cuántos números son superiores a la media y el array original. 
Usa las siguientes funciones:
-    	pedirDatos() => Recibe: nada. Devuelve: array.
-    	calcularMedia() => Recibe: array. Devuelve: media.
-    	calcuarlSuperioresMedia() => Recibe: array y media. 
        Devuelve: un array con los números superiores a la media.
-   	ordenarArray => Recibe: array y orden (asc, desc). Devuelve: 
        un array ordenado usando el método de ordenación por inserción programado 
        por ti de forma manual.
-    	mostrarArray() => Recibe: array. Devuelve: nada.
-      mostrarArrayOrdenado() => Recibe: array. Devuelve: nada.
*/



/*
pedirDatos() => Recibe: nada. Devuelve: array.
*/

const array = pedirDatos();
let media = calcularMedia(array);
console.log("La media es: " + media);

let supMedia = calcuarlSuperioresMedia(array, media);
console.log("Superiores a la media: ");
mostrarArrayOrdenado(supMedia);

console.log("Array inicial: ");
mostrarArrayOrdenado(array);

function pedirDatos() {
    const array = [];
    let cantidad = 0;
    let seguir = false;

    while (!seguir) {
        cantidad = Number(prompt("¿Cuantos numeros vas a introducir?: "));
        seguir = !isNaN(cantidad) || cantidad > 0;
        if (!seguir) {
            alert("No es un numero valido");
        }
    }


    for (let i = 0; i < cantidad; i++) {
        let num = "";
        do {
            num = Number(prompt("Introduce el numero de la posicion " + (i + 1) + ": "));

            if (isNaN(num)) {
                alert("El numero para la posicion " + (i + 1) + " no es valido.")
            } else {
                array.push(num);
                console.log(num + " añadido");
            }
            
        } while (isNaN(num));

    }

    return array;
}

/*
calcularMedia() => Recibe: array. Devuelve: media.
*/

function calcularMedia(array) {
    let media = 0;
    let contador = array.length;
    for (let i = 0; i < contador; i++) {
        media += array[i];
    }
    media = media / contador;
    return media;
}

/*
calcuarlSuperioresMedia() => Recibe: array y media. 
Devuelve: un array con los números superiores a la media.
*/

function calcuarlSuperioresMedia(array, media) {
    const arraySupMedia = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > media) {
            arraySupMedia.push(array[i]);
        }
    }
    return arraySupMedia;
}

/*
ordenarArray => Recibe: array y orden (asc, desc). Devuelve: 
un array ordenado usando el método de ordenación por inserción programado 
por ti de forma manual.
*/
function ordenarArray(array, orden) {
    if (orden == "desc") {
        // 1 - 5 - 2 - 8
        for (let i = 1; i < array.length; i++) { // i = 2
            let num = array[i]; //2
            let j = i - 1; //2-1 = 1
            while (j >= 0 && array[j] < num) { //mientras 1 > 0 y 5 > 2
                array[j + 1] = array[j]; // 2 = 5 
                j = j - 1; // 1 = 1-1 = 0
            }
            array[j + 1] = num; // pasa atras
        }

    }

    if (orden == "asc") {
        // 1 - 5 - 2 - 8
        for (let i = 1; i < array.length; i++) { // i = 2
            let num = array[i]; //2
            let j = i - 1; //2-1 = 1
            while (j >= 0 && array[j] > num) { //mientras 1 > 0 y 5 < 2
                array[j + 1] = array[j]; // 2 = 5 
                j = j - 1; // 1 = 1-1 = 0
            }
            array[j + 1] = num; // pasa atras
        }

    }
    return array;
}


/*
mostrarArray() => Recibe: array. Devuelve: nada.
*/

function mostrarArray(array) {
    console.log(array);
};
/*
mostrarArrayOrdenado() => Recibe: array. Devuelve: nada.
*/

function mostrarArrayOrdenado(array) {
    let orden = prompt("Como quieres ordenar el array asc o desc: ");
    const arrayOrdenado =  ordenarArray(array, orden);
    mostrarArray(arrayOrdenado);
}
