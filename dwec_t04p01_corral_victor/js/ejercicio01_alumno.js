function Alumno(dni, name, fechaNacimiento, notaPrimer, notaSegundo, notaTercero, sex) {
    this.dniInfo = dni;
    this.nombre = name;
    this.edad = 0;
    this.fechaNac = fechaNacimiento;
    this.notaFinal = 0;
    this.notaPri = notaPrimero;
    this.notaSeg = notaSegundo;
    this.notaTer = notaTercero;
    this.sexo = sex;

    Object.defineProperty(this, 'dni', {
        get() {
            return this.dniInfo;
        },
        set(valor) {
            if (valor) this.dniInfo = valor;
        }
    });

    Object.defineProperty(this, 'name', {
        get() {
            return this.nombreInfo;
        },
        set(valor) {
            if (valor) this.nombreInfo = valor;
        }
    });
}