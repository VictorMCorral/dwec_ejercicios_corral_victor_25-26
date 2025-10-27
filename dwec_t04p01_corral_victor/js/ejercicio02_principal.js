console.log("T04 - Ejercicio 02 - Principal");

funcionPrueba2();

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

function funcionPrueba2(){
    let opcion = 0;
    let maxAlumnos = Number(prompt("Introduce la cantidad maxima de alumnos: "));
    let daw2 = new Aula(maxAlumnos, 102, "Curso de prueba", 1);
    do {
        let texto = "Menu Aula y Alumnos" +
                    "\n===================" +
                    "\n 1. Alumnos ya matriculados " +
                    "\n 2. Agregar alumnos " +
                    "\n 3. Nota media de los alumnos " +
                    "\n 4. Mejor nota " +
                    "\n 5. Porcentaje de aprobados y suspensos " +
                    "\n 0. Salir"

        opcion = Number(prompt(texto));

        switch(opcion){
            case 1: 
                alert(daw2.mostrarDatos());
                break;
            case 2:
                daw2.insertarAlumnos(daw2.pedirDatos());
                break;
            case 3:
                alert(daw2.mediasNota() + " es la nota media de todos los alumnos");
                break;
            case 4:
                let alumno = daw2.mejorNota();
                alert(alumno.notaFinalInfo + " y la obtuvo " + alumno.nombreInfo);
                break;
            case 5: 
                alert(daw2.mostrarSuspensosAprobados());
        }

    } while (opcion != 0);

}


