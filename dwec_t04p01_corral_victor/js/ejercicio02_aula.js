console.log("T04 - Ejercicio 02 - Aula");

function Aula(maxAlumnos, id, descripcion, curso, grupos) {
    this._alumnos = [];
    this._numAlumnos = 0;
    this._maxAlumnos = maxAlumnos;
    this._id = id;
    this._descripcion = descripcion;
    this._curso = curso;
    this.gruposInfo = grupos;

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
        let grupo = prompt("Introduce el grupo: ");
        let alumno;
        if (this.comprobarFechaAlumno(fechaNac)) {
            if (!isNaN(notaPrimer) && !isNaN(notaSegundo) && !isNaN(notaTercero)) {
                alumno = new Alumno(dni, nombre, fechaNac, notaPrimer, notaSegundo, notaTercero, sexo, grupo);
            } else {
                console.log("Alguna nota no es correcta")
            }
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

    this.pedirDatos = function () {
        let numAlumnos = Number(prompt("Introduce cuantos alumnos quieres matricular: "));
        let alumnosTemp = [];
        if (this.haySitioAlumnos() && numAlumnos <= this.maxAlumnos) {
            for (let i = 0; i < numAlumnos; i++) {
                let alumno = this.pedirDatosUnAlumno();
                alumnosTemp.push(alumno);
            }
        } else {
            alert("No se pueden agregar mas alumnos")
        };

        return alumnosTemp;
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

    this.mediasNota = function () {
        let mediasNota = 0;
        let cantidadAlumnos = this._alumnos.length;
        for (let i = 0; i < cantidadAlumnos; i++) {
            mediasNota = Number(mediasNota) + Number(this._alumnos[i].notaFinalInfo);
        }
        return mediasNota / cantidadAlumnos;
    }


    this.mejorNota = function () {
        if (this._alumnos.length === 0) return [];

        let mejorNota = this._alumnos[0].notaFinalInfo;
        const resultado = [];

        for (let i = 0; i < this._alumnos.length; i++) {
            const nota = this._alumnos[i].notaFinalInfo;
            if (nota > mejorNota) {
                mejorNota = nota;
                resultado.length = 0;
                resultado.push(this._alumnos[i]);
            } else if (nota === mejorNota) {
                resultado.push(this._alumnos[i]);
            }
        }

        return resultado;
    };

    this.porcentajeSuspensos = function () {
        let totalAlumnos = this.numAlumnos;
        let suspensos = 0;

        for (let i = 0; i < this._alumnos.length; i++) {
            if (this._alumnos[i].notaFinalInfo < 5) {
                suspensos++;
            }
        }
        return (suspensos / totalAlumnos) * 100;
    }

    this.mostrarSuspensosAprobados = function () {
        let porcentajeSuspensos = this.porcentajeSuspensos();
        let porcentajeAprobados = 100 - porcentajeSuspensos;

        return "Hay un " + porcentajeAprobados + "% de aprobados y " + porcentajeSuspensos + "% de suspensos";
    }

    this.insertarAlumnos = function (alumnos) {
        /* [alumno, "grupo 0"]*/
        for (let i = 0; i < alumnos.length; i++) {
            const alumno = alumnos[i];
            this._alumnos.push(alumno);
            this.numAlumnos++;

            for (let j = 0; j < this._grupos.length; j++) {
                if (alumno.grupoInfo == this._grupos[j][0]) {
                    this._grupos[j][1].push(alumno);
                    break;
                }
            }
        }
    }
}

Object.defineProperty(Aula.prototype, "alumnos", {
    get: function () {
        return this._alumnos;
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

Object.defineProperty(Aula.prototype, "curso", {
    get: function () {
        return this._curso;
    },
    set: function (valor) {
        if (valor == 1 || valor == 2 || valor == 3 || valor == 4) {
            this._curso = valor;
        } else {
            this._curso = null;
        }

    }
});

Object.defineProperty(Aula.prototype, "gruposInfo", {
    get: function () {
        return this._grupos;
    },
    set: function (valor) {
        if (Array.isArray(valor)) {
            this._grupos = valor.map(g => [g, []]);
        } else {
            this._grupos = []
        }
    }
})

Aula.prototype.agregarGrupo = function (grupoNuevo) {
    this._grupos.push([grupoNuevo, []]);
}

Aula.prototype.eliminarGrupo = function (grupoEliminar) {
    this._grupos.splice(grupoEliminar, 1);
}

Aula.prototype.hayAlumnosGrupo = function (grupoAComprobar) {
    let hayAlumnos = false;
    for (let i = 0; i < this._alumnos.length; i++) {
        if (this._alumnos[i].grupoInfo == grupoAComprobar) {
            hayAlumnos = true;
        }
    }
    return hayAlumnos;
}


Aula.prototype.mostrarPorGrupo = function (grupoAMostrar) {
    let alumnosTexto = "";
    let hayAlumnos = true;
    /* grupos = [
                ["grupo 0", [alumno1, alumno2]], 
                ["grupo 1", [alumno1, alumno2]]
            ]*/

    for (let i = 0; i < this._grupos.length && hayAlumnos; i++) {
        if (this._grupos[i][0] == grupoAMostrar) {
            const alumnosEnGrupo = this._grupos[i][1];
            if (alumnosEnGrupo.length > 0) {
                alumnosTexto += grupoAMostrar + ":\n";
                for (let j = 0; j < alumnosEnGrupo.length; j++) {
                    alumnosTexto += "\n" + alumnosEnGrupo[j].mostrarInformacion();
                }
            } else {
                hayAlumnos = false;
            }
            
        }
    }

    if (!hayAlumnos) {
        alumnosTexto = "No hay alumnos en " + grupoAMostrar;
    }
    return alumnosTexto;
};

Aula.prototype.mostrarResumenGrupos = function () {
    let texto = "Resumen por grupos: \n";
    for (let i = 0; i<this._grupos.length; i++){
        const grupo = this._grupos[i];
        texto += grupo[0];
        if(grupo[1].length<=0){
            texto += "\n\t No tiene Alumnos"
        }
        for (let j = 0; j<grupo[1].length; j++ ){
            const alumno = grupo[1][j]
            texto += "\n" + alumno.mostrarInformacion();
        }
    }
    return texto;
}

Aula.prototype.cambiarGrupo = function (alumno, grupo) {
    let grupoAnterior = alumno.grupoInfo;

    if(grupoAnterior != grupo){
        for (let i = 0; i < this._grupos.length; i++) {
            if (this._grupos[i][0] == grupoAnterior) {
                let indiceAlumno = 0;
                for (let j = 0; j < this._grupos[i][1].length; j++) {
                    if (this._grupos[i][1][j] === alumno) {
                        indiceAlumno = j;
                    }
                }
    
                this._grupos[i][1].splice(indiceAlumno, 1);
            }
        }
    
    
        for (let i = 0; i < this._grupos.length; i++) {
            if (this._grupos[i][0] == grupo) {
                this._grupos[i][1].push(alumno);
                alumno.grupoInfo = this._grupos[i][0];
                console.log(alumno.nombreInfo + " cambiado al grupo \"" + grupo +"\"")
            }
        }
    
    } else {
        console.log(alumno.nombreInfo + " ya esta en el grupo " + grupo);
    }

}

Aula.prototype.mediaPorGrupo = function (grupoACalcular){
    let cantidadAlumnos = 0;
    let notas = 0;
    let encontrado = false;
    let media = null;
    for (let i = 0; i<this._grupos.length; i++){
        if (this._grupos[i][0] == grupoACalcular){
            encontrado = true;
            const alumnosEnGrupo = this._grupos[i][1];
            cantidadAlumnos = alumnosEnGrupo.length
            for (let j = 0; j<cantidadAlumnos; j++){
                notas += Number(alumnosEnGrupo[j].notaFinalInfo);
            }
        } 
    } 
    
    if(encontrado){
        media = notas/cantidadAlumnos;
    }

    return media
}

Aula.prototype.alumnoMejorNotaGrupo = function(grupo){
    let mejorNota = 0;

    for (let a = 0; a<this._grupos.length; a++){
        if (this._grupos[a][0] == grupo){
            const alumnos = this._grupos[a][1];

            if (alumnos.length === 0) return [];

            mejorNota = alumnos[0].notaFinalInfo;
            const resultado = []

            for (let i = 0; i < alumnos.length; i++) {
                const nota = alumnos[i].notaFinalInfo;
                if (nota > mejorNota) {
                    mejorNota = nota;
                    resultado.length = 0;
                    resultado.push(this._alumnos[i]);
                } else if (nota === mejorNota) {
                    resultado.push(this._alumnos[i]);
                }
            }

            return resultado;
        }


    
    }
}

Aula.prototype.porcentajeSuspensosGrupo = function(grupo){   
    let suspensos = 0;
    let totalAlumnos = 0;
    for (let a = 0; a<this._grupos.length; a++){
        if (this._grupos[a][0] == grupo){
            const alumnos = this._grupos[a][1];
            totalAlumnos = alumnos.length;
            if (alumnos.length === 0) return [];

            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].notaFinalInfo < 5) {
                    suspensos++;
                }
            }
        }
    }

    return (suspensos / totalAlumnos) * 100;
}