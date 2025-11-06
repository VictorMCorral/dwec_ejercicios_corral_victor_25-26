console.log("T04 - Ejercicio 03 - Profesores");

const manuel = new Object({
    nombre: "Manuel",
    correo: "Manuel@correo.es",
    asignaturas: [],
});

const paula = new Object({
    nombre: "Paula",
    correo: "Paula@correo.es",
    asignaturas: [],
});

function addAllGetters(obj) {
    Object.defineProperty(obj, "getNombre", {
        get: function () {
            return this.nombre;
        }
    })

    Object.defineProperty(obj, "getCorreo", {
        get: function () {
            return this.correo;
        }
    })

    Object.defineProperty(obj, "getAsignaturas", {
        get: function () {
            return this.asignaturas;
        }
    })
}

function addInsertarAsignatura(obj) {
    Object.defineProperty(obj, "agregarAsignatura", {
        value: function (asignatura) {
            this.asignaturas.push(asignatura);
        }
    })

    Object.defineProperty(obj, "mostrarInformacion", {
        value: function(){
            let info ="Nombre: " + this.nombre +  "; Correo: " + this.correo 
            for(let i = 0; i<this.asignaturas.length; i++){
                info += "\n" + this.asignaturas[i].getNombre;
            }
            return info;
        }
    })
}
const profesores = [manuel, paula];
profesores.forEach(addAllGetters);
profesores.forEach(addInsertarAsignatura);
