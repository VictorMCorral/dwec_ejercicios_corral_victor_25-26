class Util {
    //20/11/2025 --> 16 funciones
    static validarEntero(valor) {
        if (valor === null ||
            typeof valor === "boolean" ||
            String(valor).trim() === ""
        ) {
            return false;
        }

        const numero = Number(valor);
        return Number.isInteger(numero);
    }

    static validarReal(valor) {
        if (
            valor === null ||
            typeof valor === "boolean" ||
            String(valor).trim() === ""
        ) {
            return false;
        }

        const numero = Number(valor);
        return !Number.isNaN(numero);
    }

    static validarCadenaFecha(valor) {
        // Comprueba que valor es una cadena fecha correcta. Admite distintos formatos de fecha.
        // YYYY-MM-DD
        // YYYY-M-D
        // DD-M-YYYY
        // DD-MM-YYYY
        const regex = /^(?:\d{4}-\d{1,2}-\d{1,2}|\d{1,2}-\d{1,2}-\d{4})$/;
        return regex.test(valor);
    }
    static validarFecha(valor) {
        // Comprueba que valor es una fecha correcta. Hará uso de la función anterior.
        let fechaValida = false;
        if (this.validarCadenaFecha(valor)) {
            const regexYMD = /^\d{4}-\d{1,2}-\d{1,2}$/; // YYYY-M-D o YYYY-MM-DD
            const regexDMY = /^\d{1,2}-\d{1,2}-\d{4}$/; // D-M-YYYY o DD-MM-YYYY

            let arrayFechas = valor.split("-");
            let year = 0;
            let month = 0;
            let day = 0;

            if (regexYMD.test(valor)) {
                year = Number(arrayFechas[0]);
                month = Number(arrayFechas[1]);
                day = Number(arrayFechas[2]);
            } else if (regexDMY.test(valor)) {
                year = Number(arrayFechas[2]);
                month = Number(arrayFechas[1]);
                day = Number(arrayFechas[0]);
            }

            let fecha = new Date(year, month - 1, day);
            fechaValida = fecha.getFullYear() === year && fecha.getMonth() === month - 1 && fecha.getDate() === day;
        }
        return fechaValida;
    }
    static validarTitulo(titulo) {
        // Comprueba que el titulo sea una cadena y tenga longitud mínima de 1 carácter.
        return typeof titulo === "string" && titulo.length > 0;
    }

    static validarNombrePersona(nombre) {
        // Comprueba que el nombre sea una cadena formada por letras y tenga longitud mínima de 3 carácter.
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{4,}$/;
        return typeof nombre === "string" && regex.test(nombre);
    }

    static validarDireccion(direccion) {
        //Comprueba que el direccion sea una cadena que tenga longitud mínima de 3 caracteres.
        return typeof direccion === "string" && direccion.length > 2;
    }

    static validarPrecio(precio) {
        // Comprueba que el precio sea un número real positivo mayor que 0.
        return this.validarReal(precio) && precio > 0;
    }
    static validarTamanoArchivo(tamanoArchivo) {
        // Comprueba que el tamaño sea un número positivo mayor que 0.
        return this.validarReal(tamanoArchivo) && tamanoArchivo > 0;
    }

    static validarPeso(peso) {
        // Comprueba que el peso sea un número positivo mayor que 0.
        return this.validarReal(peso) && peso > 0;
    }

    static validarStock(stock) {
        //Comprueba que el stock sea un número positivo mayor que 0.
        return this.validarEntero(stock) && stock > 0;
    }

    static validarDimensiones(dimensiones) {
        // Comprueba que las dimensiones tengan el formato correcto (ejemplo: 20x15x3).
        const regex = /^\d+x\d+x\d+$/
        return regex.test(dimensiones);
    }

    static esMesPromocion(fecha, array_meses_promocion) {
        // Comprueba que la fecha está en uno de los meses de promoción. Devuelve true / false.
        let promocion = false;
        if (this.validarFecha(fecha)) {
            fecha = new Date(fecha);
            promocion = array_meses_promocion.includes(fecha.getMonth() + 1);
        }

        return promocion;
    }

    static validarFormato(formato, setFormatosValidos) {
        // Comprueba que el formato esté entre PDF, EPUB, MOBI.
        return setFormatosValidos.has(formato);
    }

    static validarGenero(generoLeido, setGenerosValidos) {
        //Comprueba que el genero leído sea válido dentro de la lista de géneros soportados.
        return setGenerosValidos.has(generoLeido);
    }

    static validarDiasEnvio(dias) {
        //Comprueba que los días sea un número positivo mayor que 0.
        return this.validarEntero(dias) && dias > 0;
    }
    // Aquellas otras validaciones que consideréis que son fundamentales.

    static validarDni(dni) {
        let valido = false;
        const dniRegex = /^[0-9]{8}[A-Z]$/i;
        
        if(dniRegex.test(dni)){
            // dato % 23 = resto -->  letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            let letras = "TRWAGMYFPDXBNJZSQVHLCKE"
            let letra = dni.substring(dni.length - 1).toUpperCase();
            let numero = dni.substring(0, dni.length - 1);
    
    
            if (numero % 23 == letras.indexOf(letra)) {
                valido = true; 
            } 
        }

        return valido;
    }

    static validarNombrePedido(nombrePedido){
        return typeof nombrePedido === "string" && nombrePedido.length > 2;
    }
}
