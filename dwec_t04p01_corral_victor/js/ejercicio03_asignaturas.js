console.log("T04 - Ejercicio 03 - Asignaturas");

const programacion = new Object({
    curso: 1,
    nombre: "Programacion",
    tipo: "Obligatoria",
    profesor: "",
    alumnos: [],
});

const baseDeDatos = new Object({
    curso: 1,
    nombre: "Base de Datos",
    tipo: "Obligatoria",
    profesor: "",
    alumnos: [],
});

const interfaces = new Object({
    curso: 2,
    nombre: "Interfaces",
    tipo: "Obligatoria",
    profesor: "",
    alumnos: [],
});

const despliegue = new Object({
    curso: 2,
    nombre: "Despliegue",
    tipo: "Obligatoria",
    profesor: "",
    alumnos: [],
});

const frameworks = new Object({
    curso: 1,
    nombre: "Frameworks",
    tipo: "Optativa",
    profesor: "",
    alumnos: [],
});

const servidor = new Object({
    curso: 1,
    nombre: "Servidor",
    tipo: "Optativa",
    profesor: "",
    alumnos: [],
});

const sostenibilidad = new Object({
    curso: 1,
    nombre: "Sostenibilidad",
    tipo: "Optativa",
    profesor: "",
    alumnos: [],
});

const proyecto = new Object({
    curso: 1,
    nombre: "Proyecto",
    tipo: "Optativa",
    profesor: "",
    alumnos: [],
});

function addAllGetters(obj){
    Object.defineProperty(obj, "getCurso", {
        get: function () {
            return this.curso;
        }
    })

    Object.defineProperty(obj, "getNombre", {
        get: function () {
            return this.nombre;
        }
    })

    Object.defineProperty(obj, "getTipo", {
        get: function () {
            return this.tipo;
        }
    })

    Object.defineProperty(obj, "getAlumnos", {
        get: function () {
            return this.alumnos;
        }
    })

    Object.defineProperty(obj, "getProfesor", {
        get: function () {
            return this.profesor;
        }
    })


}

function addInsertar(obj){
    Object.defineProperty(obj, "agregarAlumno", {
        value: function(alumno){
            this.alumnos.push(alumno);
        }
    })

    Object.defineProperty(obj, "agregarProfesor", {
        value: function(profesor) {
            this.profesor = profesor;
        }
    })
}
const asignaturas = [programacion, baseDeDatos, interfaces, despliegue, frameworks, servidor, sostenibilidad, proyecto]
asignaturas.forEach(addAllGetters);
asignaturas.forEach(addInsertar);