console.log("T04 - Ejercicio 02 - Principal");

const grupos = new Set(["grupo 0", "grupo 1"]);

function Prueba3() {
    const aula1 = new Aula("AU01", "Aula de primero", 40, 1);
    const aula2 = new Aula("AU02", "Aula de segundo", 30, 2);
    const aula3 = new Aula("AU03", "Aula de primero", 30, 3);
    const aula4 = new Aula("AU04", "Aula de primero", 30, 4);
    //TODO Pedir aula a elegir
    


    let opcion = 6;
    do {
        let texto = "\nGestion de Aulas: Aula de Primero" +
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
        opcion = Number(prompt(texto));


        switch (opcion) {
            case 1:
                //TODO Meter bucle
                agregarAlumnos(aula1, asignaturas);
                break;
            case 2:
                asignarAsignaturaProfesor(profesores, asignaturas);
                break;
            case 3:
                //TODO Continuar por aqui
                consultarAlumnado(aula1, profesores);
                break;
            case 4:
                //TODO Insertar notas alumno
                insertarNotasAlumno();
                break;
            case 5:
                //TODO Listado aprovado suspenso
                listadoAprobadosSuspensos();
                break;
            case 0:
                alert("Saliendo del programa...");
                break;
            default:
                alert("No es una opcion valida...")
        }

    } while (opcion != 0)

}

function agregarAlumnos(aula1, asignaturas) {
    let texto = "\nInsertar alumno: Aula de primero" +
        "\n================================" +
        "\nIntroduce el dni:"
    let dni = prompt(texto);
    texto = "\nInsertar alumno: Aula de primero" +
        "\n================================" +
        "\nIntroduce el nombre:"
    let nombre = prompt(texto);

    let alumno = new Alumno(dni, nombre)

    texto = "\nInsertar alumno: Aula de primero" +
        "\n================================" +
        "\n¿Que optativas? Elige separadas por \",\" :"

    const optativas = [];
    let contador = 1;
    for (let j = 0; j < asignaturas.length; j++) {
        if (asignaturas[j].getCurso == 1 && asignaturas[j].getTipo == "Obligatoria") {
            alumno.insertarAsignatura(asignaturas[j]);
        } else if (asignaturas[j].getTipo == "Optativa") {
            optativas.push(asignaturas[j]);
            texto += "\n" + contador + ". " + asignaturas[j].getNombre;
            contador++;
        }
    }

    let optativasElegidas = prompt(texto);
    let indicesOptativas = optativasElegidas.split(",");

    for (let i = 0; i < indicesOptativas.length; i++) {
        let indice = Number(indicesOptativas[i]) - 1
        alumno.insertarAsignatura(optativas[indice]);
    }

    aula1.insertarAlumnos(alumno)
    console.log("Alumnos: " + aula1.alumnos)
}

function asignarAsignaturaProfesor(profesores, asignaturas) {
    let texto = "\nSeleccione profesor: Aula de primero" +
        "\n================================";
    for (let i = 0; i < profesores.length; i++) {
        texto += "\n" + (i + 1) + " " + profesores[i].getNombre;
    }
    let opcion = Number(prompt(texto)) - 1;
    const profesor = profesores[opcion];
    texto = "\nSeleccione asignatura: " + profesor.getNombre +
        "\n================================";

    const asignaturasYaAsignadas = profesor.getAsignaturas;
    const asignaturasDisponibles = []
    let contador = 1;

    if (asignaturasYaAsignadas.length < 2) {
        for (let i = 0; i < asignaturas.length; i++) {
            let asignatura = asignaturas[i];
            let yaAsignada = false;

            for (let j = 0; j < asignaturasYaAsignadas.length && !yaAsignada; j++) {
                if (asignaturasYaAsignadas[j] === asignatura || 
                    asignaturasYaAsignadas[j].getCurso == asignaturas[i].getCurso) {
                    yaAsignada = true;
                }
            }

            if (!yaAsignada && asignaturas[i].getProfesor == "") {
                texto += "\n" + contador + " " + asignaturas[i].getNombre;
                asignaturasDisponibles.push(asignaturas[i])
                contador++;
            }
        }

        if (asignaturasDisponibles.length === 0) {
            alert("No hay asignaturas disponibles para este profesor.");
            return;
        }

        opcion = Number(prompt(texto)) - 1;
        let asignatura = asignaturasDisponibles[opcion];

        profesor.agregarAsignatura(asignatura);
        asignatura.agregarProfesor(profesor.getNombre);
    } else {
        console.log("El profesor ya tiene 2 asignaturas asignadas")
    }



    console.log(profesor.mostrarInformacion());
}

function consultarAlumnado(aula, profesores) {
    let texto = "\nSeleccione profesor: Aula de primero" +
                "\n================================";
    for(let i = 0; i<profesores.length; i++){
        texto += "\n" + (i+1) + ". " + profesores[i].getNombre;
    }
    let opcion = Number(prompt(texto));

}

function insertarNotasAlumno() {

}

function listadoAprobadosSuspensos() {

}




