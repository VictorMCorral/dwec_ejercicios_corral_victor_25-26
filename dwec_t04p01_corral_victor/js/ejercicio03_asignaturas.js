console.log("T04 - Ejercicio 03 - Asignaturas");

const asignaturaReutilizable = {
    mostrarInfo : function () {
        //TODO hacer el Call()
    }
};


const programacion = new Object({
    _curso: 1,
    _nombre: "Programacion",
    _tipo: "Obligatoria",
    _profesor: undefined,
    _alumnos: [],
});

const baseDeDatos = new Object({
    _curso: 1,
    _nombre: "Base de Datos",
    _tipo: "Obligatoria",
    _profesor: undefined,
    _alumnos: [],
});

const interfaces = new Object({
    _curso: 2,
    _nombre: "Interfaces",
    _tipo: "Obligatoria",
    _profesor: undefined,
    _alumnos: [],
});

const despliegue = new Object({
    _curso: 2,
    _nombre: "Despliegue",
    _tipo: "Obligatoria",
    _profesor: undefined,
    _alumnos: [],
});

const frameworks = new Object({
    _curso: 2,
    _nombre: "Frameworks",
    _tipo: "Optativa",
    _profesor: undefined,
    _alumnos: [],
});

const servidor = new Object({
    _curso: 2,
    _nombre: "Servidor",
    _tipo: "Optativa",
    _profesor: undefined,
    _alumnos: [],
});

const sostenibilidad = new Object({
    _curso: 2,
    _nombre: "Sostenibilidad",
    _tipo: "Optativa",
    _profesor: undefined,
    _alumnos: [],
});

const proyecto = new Object({
    _curso: 2,
    _nombre: "Proyecto",
    _tipo: "Optativa",
    _profesor: undefined,
    _alumnos: [],
});

function addAllGetters(obj){
    Object.defineProperty(obj, "curso", {
        get: function () {
            return this._curso;
        }
    })

    Object.defineProperty(obj, "nombre", {
        get: function () {
            return this._nombre;
        }
    })

    Object.defineProperty(obj, "tipo", {
        get: function () {
            return this._tipo;
        }
    })

    Object.defineProperty(obj, "alumnos", {
        get: function () {
            return this._alumnos;
        }
    })

    Object.defineProperty(obj, "profesor", {
        get: function () {
            return this._profesor;
        },
        set: function (profesor) {
            this._profesor = profesor;
        }
    })


}

function addInsertar(obj){
    Object.defineProperty(obj, "agregarAlumno", {
        value: function(alumno){
            this.alumnos.push(alumno);
        }
    })
}
const asignaturas = [programacion, baseDeDatos, interfaces, despliegue, frameworks, servidor, sostenibilidad, proyecto]
asignaturas.forEach(addAllGetters);
asignaturas.forEach(addInsertar);