console.log("T04 - Ejercicio 02 - Alumno");
function Alumno(dni, nombre) {
    this.dniInfo = dni,
    this.nombreInfo = nombre,
    this._asignaturas = new Map(),

    this.mostrarInformacion = function () {
        let info = "\t" + this.nombreInfo + ":" + "DNI: " + this.dniInfo
        info += this.mostrarInfoAsignaturas();
        return info;
    }

    this.insertarAsignatura = function (asignatura) {
        asignatura.agregarAlumno(this);
        this.asignaturaInfo.set(asignatura, undefined);
    }

    this.tieneAsignatura = function(asignatura){
        return this.asignaturaInfo.has(asignatura);
    }

    this.ponerNota = function(asginatura, nota){
        this.asignaturaInfo.set(asginatura, nota)
    }

    this.mostrarInfoAsignaturas = function (){
        let info= ""
        for (const [clave, valor] of this.asignaturaInfo) {
            info += "\n\t\t" + clave.nombre + ': ' + valor;
        }
        return info;
    }
}

Object.defineProperty(Alumno.prototype, 'dniInfo', {
    get() {
        return this.dni;
    },
    set(valor) {
        const dniRegex = /^[0-9]{8}[A-Z]$/i;
        if (dniRegex.test(valor)) {
            this.dni = valor;
        } else {
            this.dni = "00000000X";
        }
    }
});

Object.defineProperty(Alumno.prototype, 'nombreInfo', {
    get() {
        return this._nombre;
    },
    set(valor) {
        if (valor.trim() != "") {
            this._nombre = valor;
        } else {
            this._nombre = "SinNombre";
        }
    }
});


Object.defineProperty(Alumno.prototype, 'asignaturaInfo', {
    get() {
        return this._asignaturas;
    }
});



