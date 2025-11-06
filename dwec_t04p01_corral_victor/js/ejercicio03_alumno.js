console.log("T04 - Ejercicio 02 - Alumno");
function Alumno(dni, nombre) {
    this.dniInfo = dni,
    this.nombreInfo = nombre,
    this._asignaturas = new Map(),

    this.mostrarInformacion = function () {
        let info = this.nombre + ":" + "DNI: " + this.dni
        info += this.asignaturaInfo
        return info;
    }

    this.insertarAsignatura = function (asignatura) {
        this._asignaturas.set(asignatura, 0)
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
        return this.nombre;
    },
    set(valor) {
        if (valor.trim() != "") {
            this.nombre = valor;
        } else {
            this.nombre = "SinNombre";
        }
    }
});


Object.defineProperty(Alumno.prototype, 'asignaturaInfo', {
    get() {
        let info= ""
        for (const [vlave, valor] of this._asignaturas) {
            info += "\n" + clave.getNombre + ': ' + valor;
        }
        return info;
    }
});



