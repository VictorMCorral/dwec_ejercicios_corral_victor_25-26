function Alumno(dni, nombre, fechaNac, notaPrimer, notaSegundo, notaTercero, sex) {
    this.dniInfo = dni,
    this.nombreInfo = nombre,
    this.fechaNacInfo = fechaNac,
    this.notaPri = notaPrimer,
    this.notaSeg = notaSegundo,
    this.notaTer = notaTercero,
    this.sexo = sex,

    this.mostrarInformacion = function () {
        return this.nombre + ":" +
            "\n\tEdad: " + this.edadInfo + " años" +
            "\n\tSexo: " + this.sexo +
            "\n\tDNI: " + this.dni +
            "\n\tFecha nacimiento: " + this.fechaNac +
            "\nTiene las siguientes notas: \n" +
            "\tPrimer trimestre: " + this.notaPri + "\n" +
            "\tSegundo trimestre: " + this.notaSeg + "\n" +
            "\tTercera trimestre: " + this.notaTer + "\n" +
            "\t\tNota final: " + this.notaFinal + "\n"
    }

    this.calcularEdad = function () {
        let fechaActual = new Date();
        let fechaNacimiento = new Date(this.fechaNac);
        let years = fechaActual - fechaNacimiento;
        let msEnYear = 1000 * 60 * 60 * 24 * 365;
        let edad = parseInt(years/msEnYear);
        return edad;
    }

    this.edad = this.calcularEdad();

    this.calcularNota = function () {
        let notaFinales = (this.notaPri + this.notaSeg + this.notaTer) /3;
        return notaFinales.toFixed(2);
    }

    this.notaFinal = this.calcularNota();

    this.cambiarNotas = function (notaP, notaS, notaT){
        this.notaPrimer = notaP;
        this.notaSegundo = notaS;
        this.notaTercer = notaT;
        this.notaFinal = this.calcularNota();
    }

    this.comparar = function(persona) {
        if(persona.notaFinalInfo > this.notaFinalInfo){
            return 1;
        } else if (persona.notaFinalInfo < this.notaFinalInfo){
            return -1;
        } else {
            return 0;
        }
    }

    this.estaAprobado = function (){
        if (this.notaFinalInfo >= 5){
            return true;
        } else {
            return false;
        }
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

Object.defineProperty(Alumno.prototype, 'edadInfo', {
    get() {
        return this.edad;
    }
});

Object.defineProperty(Alumno.prototype, 'fechaNacInfo', {
    get() {
        return this.fechaNac;
    },
    set(valor) {
        if (valor) this.fechaNac = valor;
    }
});

Object.defineProperty(Alumno.prototype, 'notaFinalInfo', {
    get() {
        return this.notaFinal;
    }
});

Object.defineProperty(Alumno.prototype, 'notaPrimer', {
    get() {
        return this.notaPri;
    },
    set(valor) {
        if (valor) this.notaPri = valor;
    }
});

Object.defineProperty(Alumno.prototype, 'notaSegundo', {
    get() {
        return this.notaSeg;
    },
    set(valor) {
        if (valor) this.notaSeg = valor;
    }
});

Object.defineProperty(Alumno.prototype, 'notaTercer', {
    get() {
        return this.notaTer;
    },
    set(valor) {
        if (valor) this.notaTer = valor;
    }
});

Object.defineProperty(Alumno.prototype, 'sex', {
    get() {
        return this.sexo;
    },
    set(valor) {
        if (valor == 'h' || valor == 'm' || valor == 'o') {
            this.sexo = valor;
        } else {
            this.sexo = "o";
        }
    }
});

const alum = new Alumno("00", "Victor", "1989-07-17", 5, 7, 8, "m");


alum.nombreInfo = "Pepito";

console.log(alum.mostrarInformacion());

alum.cambiarNotas(9,9,9);
console.log(alum.mostrarInformacion());