console.log("T04 - Ejercicio 02 - Principal");

const grupos = new Set(["grupo 0", "grupo 1"]);

funcionPrueba2();

function funcionPrueba1() {

    const alum1 = new Alumno("00", "Victor", "1989-07-17", 8, 7, 10, "m");



    const alum2 = new Alumno("00", "Orwin", "2007-07-17", 8, 7, 10, "m");


    console.log(alum1.mostrarInformacion());

    console.log(alum2.mostrarInformacion());

    if (alum1.comparar(alum2) === 1) {
        console.log(alum2.nombreInfo + " tiene la mayor nota final, y es " + alum2.notaFinalInfo);
    } else if (alum1.comparar(alum2) === 0) {
        console.log(alum1.nombreInfo + " y " + alum2.nombreInfo + " tiene la misma nota, y es " + alum2.notaFinalInfo);
    } else {
        console.log(alum1.nombreInfo + " tiene la mayor nota final y es " + alum1.notaFinalInfo);
    }


    console.log("Cambiando notas de " + alum1.nombreInfo + " a 5,5,5");
    alum1.cambiarNotas(5, 5, 5);

    if (alum1.comparar(alum2) === 1) {
        console.log(alum2.nombreInfo + " tiene la mayor nota final, y es " + alum2.notaFinalInfo);
    } else if (alum1.comparar(alum2) === 0) {
        console.log(alum1.nombreInfo + " y " + alum2.nombreInfo + " tiene la misma nota, y es " + alum2.notaFinalInfo);
    } else {
        console.log(alum1.nombreInfo + " tiene la mayor nota final y es " + alum1.notaFinalInfo);
    }

}

function funcionPrueba2() {
    let opcion = 0;
    let maxAlumnos = Number(prompt("Introduce la cantidad maxima de alumnos: "));
    let daw2 = new Aula(maxAlumnos, 102, "Curso de prueba", 1, []);
    do {
        let texto = "Menu Aula y Alumnos" +
            "\n===================" +
            "\n 1. Alumnos ya matriculados " +
            "\n 2. Agregar alumnos " +
            "\n 3. Nota media de los alumnos " +
            "\n 4. Mejor nota " +
            "\n 5. Porcentaje de aprobados y suspensos " +
            "\n 6. Siguiente Menú" +
            "\n 0. Salir"

        opcion = Number(prompt(texto));

        switch (opcion) {
            case 1:
                alert(daw2.mostrarDatos());
                break;
            case 2:
                daw2.insertarAlumnos(daw2.pedirDatos());
                break;
            case 3:
                let notaMedia = daw2.mediasNota();
                alert(notaMedia + " es la nota media de todos los alumnos");
                break;
            case 4:
                let alumno = daw2.mejorNota();
                let texto = "La mejor nota es: " + alumno[0].notaFinalInfo + " y la obtuvo: ";
                for (let i = 0; i < alumno.length; i++) {
                    texto += "\n - " + alumno[i].nombreInfo;
                }
                alert(texto);
                break;
            case 5:
                alert(daw2.mostrarSuspensosAprobados());
                break;
            case 6:
                ampliacion1();
                break;
        }

    } while (opcion != 0);

}

function ampliacion1() {
    let opcion = 0;
    let daw2_1 = new Aula(3, 102, "Curso de prueba2", 2, [...grupos]);
    const alumnos = [
                        new Alumno("00000001A", "Victor", "1989-07-17", 5, 5, 5, "m", "grupo 0"),
                        new Alumno("00000001B", "Orwin", "2008-07-17", 8, 8, 8, "m", "grupo 0"),
                        new Alumno("00000001C", "Mary", "1999-07-17", 4, 4, 4, "h", "grupo 0")
                    ]
    daw2_1.insertarAlumnos(alumnos);


    do {
        let texto = "Menu Aula y Alumnos" +
            "\n===================" +
            "\n 1. Mostrar todos los alumnos " +
            "\n 2. Mostrar alumnos por grupo " +
            "\n 3. Agregar alumno a un grupo " +
            "\n 4. Eliminar un grupo " +
            "\n 5. Mostrar resumen de grupos " +
            "\n 6. Calcular media de un grupo" +
            "\n 7. Mostrar alumno con mejor nota de un grupo" +
            "\n 8. Porcentaje de suspensos en un grupo"
        "\n\n\t 0. Salir"
        opcion = Number(prompt(texto));

        switch (opcion) {
            case 1:
                // Mostrar todos los alumnos
                console.log(daw2_1.mostrarDatos());
                break;
            case 2:
                //Mostrar alumnos por grupo
                let grupoAMostrar = prompt("Introduce el grupo del que deseas ver los alumnos: ")
                if (grupos.has(grupoAMostrar.toLowerCase())) {
                    console.log(daw2_1.mostrarPorGrupo(grupoAMostrar));
                }
                break;
            case 3:
                //Agregar alumno a un grupo
                let texto = "¿Que alumno quieres cambiar de grupo?: ";
                for (let i = 0; i < daw2_1.alumnos.length; i++) {
                    texto += "\n" + (i + 1) + ". " + daw2_1.alumnos[i].nombreInfo + " -- " + daw2_1.alumnos[i].grupoInfo;
                }
                let alumnoCambio = Number(prompt(texto)) - 1;
                texto = "¿A que grupo quieres cambiar a " + daw2_1.alumnos[alumnoCambio].nombreInfo + "?: ";
                let arrayGrupos = [...grupos];
                for (let i = 0; i < arrayGrupos.length; i++) {
                    texto += "\n" + arrayGrupos[i];
                }
                texto += "\nPara agregar otro grupo, escribelo:";
                let grupoAsignado = prompt(texto)

                if (!grupos.has(grupoAsignado)) {
                    grupos.add(grupoAsignado);
                }

                daw2_1.cambiarGrupo(alumnoCambio, grupoAsignado, [...grupos])
                break;
            case 4:
                //Eliminar un grupo
                if (grupos.size >= 0) {
                    let textoGrupos = "¿Que grupo quieres eliminar?";
                    let arrayGrupos = [...grupos];
                    for (let i = 0; i < arrayGrupos.length; i++) {
                        textoGrupos += "\n" + (i + 1) + ". " + arrayGrupos[i];
                    }
                    let opcion = Number(prompt(textoGrupos)) - 1;
                    let grupoEliminar = arrayGrupos[opcion];
                    let eliminar = true;

                    for (let i = 0; i < daw2_1.alumnos.length; i++) {
                        if (daw2_1.alumnos[i].grupoInfo == grupoEliminar) {
                            eliminar = false;
                            break;
                        }
                    }
                    if (eliminar) {
                        grupos.delete(grupoEliminar);
                        console.log("Se ha eliminado el " + grupoEliminar + " correctamente!")
                    } else {
                        console.log("No se puede eliminar, hay alumnos en " + grupoEliminar)
                    }
                    console.log([...grupos]);
                } else {
                    alert("No hay grupos para eliminar...");
                }

                break;
            case 5:
                //Mostrar resumen de grupos
                let textoPorGrupos = daw2_1.mostrarResumenGrupos();
                console.log(textoPorGrupos);
                break;
            case 6:
                //Calcular media de un grupo

                break;
            case 7:
                //Mostrar alumno con mejor nota de un grupo
                break;
            case 8:
                //Porcentaje de suspensos en un grupo
                break;
        }



    } while (opcion != 0)

}


