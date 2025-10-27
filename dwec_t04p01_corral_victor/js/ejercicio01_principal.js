console.log("T04 - Ejercicio 01");

funcionPrueba1();

function funcionPrueba1(){

    const alum1 = new Alumno("00", "Victor", "1989-07-17", 8, 7, 10, "m");



    const alum2 = new Alumno("00", "Orwin", "2007-07-17", 8, 7, 10, "m");
    
    
    console.log(alum1.mostrarInformacion());
    
    console.log(alum2.mostrarInformacion());
    
    if(alum1.comparar(alum2) === 1){
        console.log(alum2.nombreInfo + " tiene la mayor nota final, y es " + alum2.notaFinalInfo);
    } else if (alum1.comparar(alum2) === 0){
        console.log(alum1.nombreInfo + " y " + alum2.nombreInfo + " tiene la misma nota, y es " + alum2.notaFinalInfo);
    } else {
        console.log(alum1.nombreInfo + " tiene la mayor nota final y es " + alum1.notaFinalInfo);
    }
    
    
    console.log("Cambiando notas de " + alum1.nombreInfo + " a 5,5,5");
    alum1.cambiarNotas(5,5,5);
    
    if(alum1.comparar(alum2) === 1){
        console.log(alum2.nombreInfo + " tiene la mayor nota final, y es " + alum2.notaFinalInfo);
    } else if (alum1.comparar(alum2) === 0){
        console.log(alum1.nombreInfo + " y " + alum2.nombreInfo + " tiene la misma nota, y es " + alum2.notaFinalInfo);
    } else {
        console.log(alum1.nombreInfo + " tiene la mayor nota final y es " + alum1.notaFinalInfo);
    }

}


