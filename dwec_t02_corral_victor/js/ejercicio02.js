console.log("T02 - Ejercicio 02");

let num;
let result;

while (isNaN(num)){
    num = prompt("Introduce un numero a comprobar: ");
    if (isNaN(num)){
        alert("No has introducido un numero")
    } else {
        num = parseInt(num);
    }
}


if (num%2 == 0 && num%5 != 0) {
    result= "El numero es multiplo de 2";
} else if ( num%2 != 0 && num%5 == 0){
    result= "El numero es multiplo de 5";
} else if (num%2 == 0 && num%5 == 0){
    result= "El numero es multiplo de 2 y de 5";
} else {
    result= "No es multiplo ni de 2 ni de 5";
}

alert(result);



