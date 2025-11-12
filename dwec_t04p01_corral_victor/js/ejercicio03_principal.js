console.log("T04 - Ejercicio 02 - Principal");

const grupos = new Set(["grupo 0", "grupo 1"]);

function Prueba3() {
    const aula1 = new Aula("AU01", "Aula de primero", 40, 1);
    const aula2 = new Aula("AU02(Con alumnos de base)", "Aula de segundo", 30, 2);
    const aula3 = new Aula("AU03", "Aula de tercero", 30, 3);
    const aula4 = new Aula("AU04", "Aula de cuarto", 30, 4);
    const aulas = [aula1, aula2, aula3, aula4];

    insertarAlumnosPrueba(aula2, profesores, asignaturas);

    let texto = "Eligue el aula: " +
        "\n=============="
    for (let i = 0; i < aulas.length; i++) {
        texto += "\n" + (i + 1) + " " + aulas[i].id;
    }

    let opcionAula = Number(capturarOpcion(texto));

    let aula = aulas[opcionAula - 1];

    let opcion = 6;
    do {
        let texto = "\nGestion de Aulas: " + aula.id +
            "\n=================================" +
            "\n1. Añadir alumnos" +
            //Matricular obligatorias
            //Preguntar por optativa
            "\n2. Asignar asignatura a profesor" +
            "\n3. Consultar alumnado" +
            //Profesor
            //Asignatura

            "\n4. Insertar notas por alumno" +
            //Profesor
            //Asignatura
            "\n5. Listado de % y nota (por aula)" +
            "\n0. Salir"
        opcion = Number(capturarOpcion(texto));


        switch (opcion) {
            case 1:
                agregarAlumnos(aula, asignaturas);
                break;

            case 2:
                asignarAsignaturaProfesor(aula, profesores, asignaturas);
                break;
            case 3:
                consultarAlumnado(aula, profesores);
                break;
            case 4:
                insertarNotasAlumno(aula, profesores);
                break;
            case 5:
                listadoAprobadosSuspensos(aula);
                break;
            case 0:
                alert("Saliendo del programa...");
                break;
            default:
                alert("No es una opcion valida...")
        }

    } while (opcion != 0)

}

function agregarAlumnos(aula, asignaturas) {
    let cantidad = Number(capturarOpcion("¿Cuantos alumnos quieres agregar?"))

    if (hayHuecoAlumnos(aula, cantidad)) {
        for (let i = 0; i < cantidad; i++) {
            let texto = "\nInsertar alumno: " + aula.id +
                "\n================================" +
                "\nIntroduce el dni:"
            let dni = prompt(texto);
            texto = "\nInsertar alumno: " + aula.id +
                "\n================================" +
                "\nIntroduce el nombre:"
            let nombre = capturarOpcion(texto);

            let alumno = new Alumno(dni, nombre)

            texto = "\nInsertar alumno: " + aula.id +
                "\n================================" +
                "\n¿Que optativas? Elige separadas por \",\" :"

            const optativas = [];
            let contador = 1;
            let curso = aula.curso;
            for (let j = 0; j < asignaturas.length; j++) {
                if (asignaturas[j].curso == curso && asignaturas[j].tipo == "Obligatoria") {
                    alumno.insertarAsignatura(asignaturas[j]);
                } else if (asignaturas[j].tipo == "Optativa") {
                    optativas.push(asignaturas[j]);
                    texto += "\n" + contador + ". " + asignaturas[j].nombre;
                    contador++;
                }
            }

            let optativasElegidas = capturarOpcion(texto);
            let indicesOptativas = optativasElegidas.split(",");

            for (let i = 0; i < indicesOptativas.length; i++) {
                let indice = Number(indicesOptativas[i]) - 1
                alumno.insertarAsignatura(optativas[indice]);
            }

            aula.insertarAlumnos(alumno)
            //console.log("Alumnos: " + aula.alumnos)
        }


    } else {
        console.log("No hay hueco en el aula")
    }
}

function asignarAsignaturaProfesor(aula, profesores, asignaturas) {
    let texto = "\nSeleccione profesor: " + aula.id +
        "\n================================";
    for (let i = 0; i < profesores.length; i++) {
        texto += "\n" + (i + 1) + " " + profesores[i].nombre;
    }
    let opcion = Number(capturarOpcion(texto)) - 1;
    const profesor = profesores[opcion];
    texto = "\nSeleccione asignatura: " + profesor.nombre +
        "\n================================";

    const asignaturasYaAsignadas = profesor.asignaturas;
    const asignaturasDisponibles = []
    let contador = 1;

    if (asignaturasYaAsignadas.length < 2) {
        for (let i = 0; i < asignaturas.length; i++) {
            let asignatura = asignaturas[i];
            let yaAsignada = false;

            for (let j = 0; j < asignaturasYaAsignadas.length && !yaAsignada; j++) {
                if (asignaturasYaAsignadas[j] === asignatura ||
                    asignaturasYaAsignadas[j].curso == asignaturas[i].curso) {
                    yaAsignada = true;
                }
            }

            if (!yaAsignada && asignaturas[i].profesor == undefined) {
                texto += "\n" + contador + " " + asignaturas[i].nombre;
                asignaturasDisponibles.push(asignaturas[i])
                contador++;
            }
        }

        if (asignaturasDisponibles.length === 0) {
            alert("No hay asignaturas disponibles para este profesor.");
        } else {
            opcion = Number(capturarOpcion(texto)) - 1;
            let asignatura = asignaturasDisponibles[opcion];

            profesor.agregarAsignatura(asignatura);
        }
    } else {
        console.log("El profesor ya tiene 2 asignaturas asignadas")
    }



    console.log(profesor.mostrarInformacion());
}

function consultarAlumnado(aula, profesores) {
    let texto = "\nSeleccione profesor: " + aula.id +
        "\n================================";
    for (let i = 0; i < profesores.length; i++) {
        texto += "\n" + (i + 1) + ". " + profesores[i].nombre;
    }
    let opcionProfesor = Number(capturarOpcion(texto));
    let profesor = profesores[opcionProfesor - 1];

    texto = "\nSelecciona una asignatura: " + profesor.nombre +
        "\n===================================="
    for (let i = 0; i < profesor.asignaturas.length; i++) {
        texto += "\n" + (i + 1) + " " + profesor.asignaturas[i].nombre;
    }

    let opcionAsignatura = Number(capturarOpcion(texto));
    let asignatura = profesor.asignaturas[opcionAsignatura - 1];

    texto = profesor.nombre + ": " + asignatura.nombre + ""

    for (let i = 0; i < asignatura.alumnos.length; i++) {
        texto += "\n" + asignatura.alumnos[i].mostrarInformacion();
    }

    console.log(texto);

}

function insertarNotasAlumno(aula, profesores) {
    // let alumnos = aula.alumnos;
    // let texto = "Eligue el alumno: "
    // for (let i = 0; i < alumnos.length; i++) {

    //     texto += "\n" + (i + 1) + ". " + alumnos[i].nombreInfo;
    //     console.log(alumnos[i].nombreInfo);
    // }
    // let opcionAlumno = Number(capturarOpcion(texto));
    // let alumno = alumnos[opcionAlumno - 1];

    // for (let i = 0; i < asignaturas.length; i++) {
    //     let asignatura = asignaturas[i];
    //     if (alumno.tieneAsignatura(asignatura)) {
    //         let nota = capturarOpcion(("Nota para " + asignatura.nombre));
    //         alumno.ponerNota(asignatura, nota);
    //     }
    // }
    let texto = "Eligue el alumno: ";
    for (let i = 0; i < profesores.length; i++) {
        texto += "\n" + (i + 1) + ". " + profesores[i].nombre;
    }

    let opcion = Number(capturarOpcion(texto));
    let profesor = profesores[opcion - 1];

    texto = "Eligue una asignatura: " + profesor.nombre;
    for (let i = 0; i < profesor.asignaturas.length; i++) {
        texto += "\n" + (i + 1) + ". " + profesor.asignaturas[i].nombre;
    }

    opcion = Number(capturarOpcion(texto));
    const asignatura = profesor.asignaturas[opcion - 1];

    for (let i = 0; i < asignatura.alumnos.length; i++) {
        const alumno = asignatura.alumnos[i];
        let nota = Number(capturarOpcion("Nota para " + alumno.nombreInfo));
        alumno.ponerNota(asignatura, nota);
    }


}

function listadoAprobadosSuspensos(aula) {
    const alumnos = aula.alumnos;
    let texto = "Listado de aprobados y suspensos: " +
        "\n=================================" +
        "\nAprobados:";
    let textoAprobados = "";
    let textoSuspensos = "";
    let expedientesSinCerrar = "";
    let aprobados = 0;
    for (let i = 0; i < alumnos.length; i++) {
        const alumno = alumnos[i];
        let asignaturas = alumno.asignaturaInfo;
        let notaMedia = 0;
        let faltaNota = false;
        console.log(asignaturas);
        for (const nota of asignaturas.values()) {
            if (nota == undefined) {
                faltaNota = true;
            } else {
                notaMedia += Number(nota);
            }

        }

        if (faltaNota) {
            notaMedia = undefined;
        } else {
            notaMedia = notaMedia / asignaturas.size;
        }


        if (notaMedia >= 5) {
            textoAprobados += "\n\t" + alumno.nombreInfo + " nota media " + notaMedia;
            aprobados++
        } else if (notaMedia < 5) {
            textoSuspensos += "\n\t" + alumno.nombreInfo + " nota media " + notaMedia
        } else {
            expedientesSinCerrar += "\n\t" + alumno.nombreInfo;
        }
    }

    texto += "\n" + textoAprobados +
        "\nSuspensos: " +
        "\n" + textoSuspensos;

    if (expedientesSinCerrar == "") {
        let porcenAprovados = (aprobados / alumnos.length) * 100;
        texto += "\n\n El porcentaje de aprobados es: " + porcenAprovados + "%" +
            "\n y el de suspensos es : " + (100 - porcenAprovados) + "%"
    } else {
        texto += "\nExpendientes sin cerrar: " + expedientesSinCerrar;
    }


    console.log(texto);

}

function hayHuecoAlumnos(aula, cantidad) {
    let cantidadDisponible = aula.maxAlumnos - aula.numAlumnos;
    if (cantidadDisponible >= cantidad) {
        return true;
    } else {
        return false;
    }
}

function capturarOpcion(texto) {
    let opcion = "";
    do {
        opcion = prompt(texto);

        if(opcion == ""){
            alert("Has dejado la opcion en blanco, por favor introduce una accion")
        }

    } while (opcion == "");

    return opcion;
}

function insertarAlumnosPrueba(aula, profesores, asignaturas) {
    const alumno1 = new Alumno("00000000A", "Prueba-1");
    const alumno2 = new Alumno("00000000B", "Prueba-2");
    const alumno3 = new Alumno("00000000C", "Prueba-3");
    const alumnosPrueba = [alumno1, alumno2, alumno3];
    //[programacion, baseDeDatos, interfaces, despliegue, frameworks, servidor, sostenibilidad, proyecto]
    for (let i = 0; i < alumnosPrueba.length; i++) {
        const alumno = alumnosPrueba[i];
        alumno.insertarAsignatura(asignaturas[0]);
        alumno.insertarAsignatura(asignaturas[1]);
        alumno.insertarAsignatura(asignaturas[4]);
        alumno.insertarAsignatura(asignaturas[5]);
    };


    aula.insertarAlumnos(alumno1);
    aula.insertarAlumnos(alumno2);
    aula.insertarAlumnos(alumno3);

    profesores[0].agregarAsignatura(asignaturas[0]);
    profesores[0].agregarAsignatura(asignaturas[4]);
    profesores[1].agregarAsignatura(asignaturas[1]);
    profesores[1].agregarAsignatura(asignaturas[5]);
}


