console.log("T04 - Ejercicio 02 - Aula");

function Aula(maxAlumnos, id, descripcion, curso) {
    this._alumnos = [];
    this.numAlumnos = 0;
    this.maxAlumnos = maxAlumnos;
    this.id = id;
    this.descripcion = descripcion;
    this.curso = curso;

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
        let notaPrimer = Number(prompt("Introduce la nota del primer trimestre: "));
        let notaSegundo = Number(prompt("Introduce la nota del segundo trimestre: "));
        let notaTercero = Number(prompt("Introduce la nota del tercer trimestre: "));
        let sexo = prompt("Introduce el sexo en formato \"h - m - o\": ");
        let alumno;
        if (this.comprobarFechaAlumno(fechaNac)) {
            if(!isNaN(notaPrimer) && !isNaN(notaSegundo) && !isNaN(notaTercero)){
                alumno = new Alumno(dni, nombre, fechaNac, notaPrimer, notaSegundo, notaTercero, sexo);
            } else {
                console.log("Alguna nota no es correcta")
            }
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

    this.pedirDatos = function (){
        let numAlumnos = Number(prompt("Introduce cuantos alumnos quieres matricular: "));
        let alumnosTemp = [];
        if(this.haySitioAlumnos() && numAlumnos<=this.maxAlumnos){
            for (let i = 0; i<numAlumnos; i++){
                let alumno = this.pedirDatosUnAlumno();
                alumnosTemp.push(alumno);
            }
        } else {
            alert("No se pueden agregar mas alumnos")
        };
        
        return alumnosTemp;
    }

    this.mostrarDatos = function (){
        let alumnosTexto = "";

        if (this.hayAlumnos()){
            for (let i = 0; i < this._alumnos.length; i++) {
                alumnosTexto += this._alumnos[i].mostrarInformacion() + "\n";
            }
        } else {
            alumnosTexto = "No hay alumnos matriculados."
        }


        return  alumnosTexto;
    }

    this.mediasNota = function(){
        let mediasNota = 0;
        let cantidadAlumnos = 0;
        for (let i = 0; i<this._alumnos.length; i++){
            mediasNota = mediasNota + this._alumnos[i].notaFinalInfo;
            cantidadAlumnos ++;
        }
        return mediasNota/cantidadAlumnos;
    }

    this.mejorNota = function(){
        let alumnoMejorNota = this._alumnos[0];
        let mejorNota = this._alumnos[0].notaFinalInfo;
        for (let i = 0; i<this._alumnos.length; i++){
            if(mejorNota<this._alumnos[i].notaFinalInfo){
                mejorNota = this._alumnos[i].notaFinalInfo;
                alumnoMejorNota = this._alumnos[i];
            }
        }

        return alumnoMejorNota;
    }

    this.porcentajeSuspensos = function (){
        let totalAlumnos = this.numAlumnos;
        let suspensos = 0;

        for (let i = 0; i<this._alumnos.length; i++){
            if(this._alumnos[i].notaFinalInfo<5){
                suspensos ++;
            }
        }
        return (suspensos/totalAlumnos)*100;
    }

    this.mostrarSuspensosAprobados = function(){
        let porcentajeSuspensos = this.porcentajeSuspensos();
        let porcentajeAprobados = 100 - porcentajeSuspensos;

        return "Hay un " + porcentajeAprobados + "% de aprobados y " + porcentajeSuspensos + "% de suspensos";
    }

    this.insertarAlumnos = function(alumnos){
        for(let i = 0; i<alumnos.length; i++){
            this._alumnos.push(alumnos[i]);
            this.numAlumnos ++;
        }
    }


}

Object.defineProperty(Aula.prototype, "alumnos", {
    get: function() {
        return this._alumnos;
    },
    set: function(valor) {
        this._alumnos = valor;
    }
});

Object.defineProperty(Aula.prototype, "numAlumnos", {
    get: function() {
        return this._numAlumnos;
    },
    set: function(valor) {
        this._numAlumnos = valor;
    }
});

Object.defineProperty(Aula.prototype, "maxAlumnos", {
    get: function() {
        return this._maxAlumnos;
    },
    set: function(valor) {
        this._maxAlumnos = valor;
    }
});

Object.defineProperty(Aula.prototype, "id", {
    get: function() {
        return this._id;
    },
    set: function(valor) {
        this._id = valor;
    }
});

Object.defineProperty(Aula.prototype, "descripcion", {
    get: function() {
        return this._descripcion;
    },
    set: function(valor) {
        this._descripcion = valor;
    }
});

Object.defineProperty(Aula.prototype, "curso", {
    get: function() {
        return this._curso;
    },
    set: function(valor) {
        if(valor == 1 || valor == 2 || valor == 3 || valor == 4){
            this._curso = valor;
        } else {
            this._curso = null;
        }
        
    }
});