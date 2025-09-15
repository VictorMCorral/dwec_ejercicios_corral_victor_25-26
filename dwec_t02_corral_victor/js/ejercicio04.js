console.log("T02 - Ejercicio 04");
let num1 = Number(prompt("Introduce el numero a comprobar: "));

if (Number.isInteger(num1)){
    esPrimo(num1);
} else {
    alert("No has introducido un numero");
}



function esPrimo(num1){

    if (num1 <= 1 ){
        alert("No es primo");
    } else if (num1 == 2) {
        alert("Si es primo");
    } else if (num1%2 == 0 ){
        alert("No es primo");
    } else if (num1%2 !=0){
        let contador = 0; 
        for (let i = num1; i > Math.sqrt(i); i-=2){
            if ( num1 % i == 0){
                contador ++;
            }
        }
    
        if (contador == 1){
            alert("Si es primo");
        }
        else {
            alert("No es primo");
        }
    }

}

