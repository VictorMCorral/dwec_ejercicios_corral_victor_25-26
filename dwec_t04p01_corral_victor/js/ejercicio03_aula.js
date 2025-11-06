console.log("T04 - Ejercicio 02 - Aula");

function Aula(id, descripcion, maxAlumnos, curso) {
    this._alumnos = [];
    this._numAlumnos = 0;
    this._maxAlumnos = maxAlumnos;
    this._id = id;
    this._descripcion = descripcion;
    this._curso = curso;

    this.haySitioAlumnos = function () {
        if (this.numAlumnos < this.maxAlumnos) {
            return true;
        } else {
            return false;
        }
    }

    this.hayAlumnos = function () {
        if (this.numAlumnos != 0) {
            return true;
        } else {
            return false;
        }
    }

    this.pedirDatosUnAlumno = function () {
        let dni = prompt("Introduce un dni valido formato \"00000000X\": ");
        let nombre = prompt("Introduce un nombre: ");
        let fechaNac = prompt("Introduce una fecha valida en formato \"AAA-MM-DD\": ");
        let alumno;
        if (this.comprobarFechaAlumno(fechaNac)) {
                alumno = new Alumno(dni, nombre, fechaNac, sexo);
        } else {
            console.log("La fecha no es valida");
        }
        return alumno;
    }

    this.comprobarFechaAlumno = function (fechaNac) {
        let datosValidos = false;
        if (fechaNac.includes("-")) {
            let arrayFecha = fechaNac.split("-");
            let anio = parseInt(arrayFecha[0]);
            let mes = parseInt(arrayFecha[1]);
            let dia = parseInt(arrayFecha[2]);

            if (anio < 0) {
                datosValidos = false;
            } else if (mes < 1 || mes > 12) {
                datosValidos = false;
            } else if (
                (dia < 1 || dia > 31) ||
                (mes === 2 && ((esBisiesto(anio) && dia > 29) || (!esBisiesto(anio) && dia > 28))) ||
                ([4, 6, 9, 11].includes(mes) && dia > 30)
            ) {
                datosValidos = false;
            } else {
                datosValidos = true;
            }
        } else {
            datosValidos = false;
        }
        return datosValidos;
    }


    this.mostrarDatos = function () {
        let alumnosTexto = "";
        if (this.hayAlumnos()) {
            for (let i = 0; i < this._alumnos.length; i++) {
                alumnosTexto += this._alumnos[i].mostrarInformacion() + "\n";
            }
        } else {
            alumnosTexto = "No hay alumnos matriculados."
        }
        return alumnosTexto;
    }


    this.insertarAlumnos = function (infoAlumno) {
        /* [alumno, nota]*/
        //let alumno = [infoAlumno, 0]
        this._alumnos.push(infoAlumno);
        this.numAlumnos++;
    }
}

Object.defineProperty(Aula.prototype, "alumnos", {
    get: function () {
        let info = "";
        for(let i = 0; i<this._alumnos.length; i++){
            info += "\n" + this._alumnos[i].mostrarInformacion();
        }

        return info;
    },
    set: function (valor) {
        this._alumnos = valor;
    }
});

Object.defineProperty(Aula.prototype, "numAlumnos", {
    get: function () {
        return this._numAlumnos;
    },
    set: function (valor) {
        this._numAlumnos = valor;
    }
});

Object.defineProperty(Aula.prototype, "maxAlumnos", {
    get: function () {
        return this._maxAlumnos;
    },
    set: function (valor) {
        this._maxAlumnos = valor;
    }
});

Object.defineProperty(Aula.prototype, "id", {
    get: function () {
        return this._id;
    },
    set: function (valor) {
        this._id = valor;
    }
});

Object.defineProperty(Aula.prototype, "descripcion", {
    get: function () {
        return this._descripcion;
    },
    set: function (valor) {
        this._descripcion = valor;
    }
});