console.log("T04 - Ejercicio 03 - Profesores");

const profesorReutilizable = {
    mostrarInfo : function () {
        //TODO hacer el bind()
    }
};

const manuel = new Object({
    _nombre: "Manuel",
    _correo: "Manuel@correo.es",
    _asignaturas: [],
});

const paula = new Object({
    _nombre: "Paula",
    _correo: "Paula@correo.es",
    _asignaturas: [],
});

function addAllGetters(obj) {
    Object.defineProperty(obj, "nombre", {
        get: function () {
            return this._nombre;
        }
    })

    Object.defineProperty(obj, "correo", {
        get: function () {
            return this._correo;
        }
    })

    Object.defineProperty(obj, "asignaturas", {
        get: function () {
            return this._asignaturas;
        }
    })
}

function addInsertarAsignatura(obj) {
    Object.defineProperty(obj, "agregarAsignatura", {
        value: function (asignatura) {
            asignatura.profesor = this;
            this.asignaturas.push(asignatura);
        }
    })

    Object.defineProperty(obj, "mostrarInformacion", {
        value: function(){
            let info ="Nombre: " + this.nombre +  "; Correo: " + this.correo 
            for(let i = 0; i<this.asignaturas.length; i++){
                info += "\n" + this.asignaturas[i].nombre;
            }
            return info;
        }
    })
}
const profesores = [manuel, paula];
profesores.forEach(addAllGetters);
profesores.forEach(addInsertarAsignatura);
