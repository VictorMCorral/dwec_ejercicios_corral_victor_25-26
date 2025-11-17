//Dos clases: LeerDatos y LeerDatosPrompt
//LeerDatos tiene metodos abstractos y la segunda los implementa, es decir, LeerDatosPrompot "extends" LeerDatos
class LeerDatos {
    leerEntero(mensaje_o_id) {
        throw new Error("Método no implementado");
    }
    leerEnteroHasta(mensaje_o_id) {
        throw new Error("Método no implementado");
    }

    leerReal(mensaje_o_id) {
        throw new Error("Método no implementado");
    }

    leerEnteroEntre(mensaje_o_id, min, max) {
        throw new Error("Método no implementado");
    }

    leerEnteroEntreHasta(mensaje_o_id, min, max) {
        throw new Error("Método no implementado");
    }
    leerCadena(mensaje_o_id) {
        throw new Error("Método no implementado");
    }

    leerCadenaHasta(mensaje_o_id) {
        throw new Error("Método no implementado");
    }
    // Aquellos otros métodos que consideres necesarios.

}

class LeerDatosPrompt extends LeerDatos {
    leerEntero(mensaje_o_id) {
        // Recibe: una cadena con el mensaje a mostrar al usuario.
        // Hace: solicita un número entero mediante prompt(). Si el valor no es entero, lanza excepción.
        // Devuelve: el número entero válido, o lanza excepción si no lo es.
        let valor = prompt(mensaje_o_id);
        let valorNumber = Number(valor);
        if (!Util.validarEntero(valorNumber)) {
            throw new Error("El valor ingresado no es un número entero válido.");
        }
        return valorNumber;
    }
    leerEnteroHasta(mensaje_o_id) {
        // Recibe: una cadena con el mensaje.
        // Hace: llama a leerEntero() repetidamente hasta que el usuario introduzca un entero válido.
        // Devuelve: el número entero válido.
        let valor = 0;
        while (valor === 0) {
            try {
                valor = this.leerEntero(mensaje_o_id);
            } catch (err) {
                console.error(err);
            }

        }

        return valor;
    }

    leerReal(mensaje_o_id) {
        // Recibe: una cadena con el mensaje.
        // Hace: solicita un número real mediante prompt(). Si no es válido, lanza excepción.
        // Devuelve: el número real válido, o lanza excepción si no lo es. 
        let valor = prompt(mensaje_o_id);
        let valorNumber = Number(valor);
        if (!Util.validarReal(valorNumber)) {
            throw new Error("El valor ingresado no es un número real válido.");
        }
        return valorNumber;
    }

    leerEnteroEntre(mensaje_o_id, min, max) {
        // Recibe: mensaje, valor mínimo y valor máximo.
        // Hace: solicita un entero y valida que esté entre los límites. Si no, lanza excepción.
        // Devuelve: el número entero válido, o lanza excepción si no lo es.
        let valor = prompt(mensaje_o_id + " entre " + min + " y " + max);
        let valorNumber = Number(valor);

        if (!Util.validarEntero(valorNumber) || valorNumber < min || valorNumber > max) {
            throw new Error("El numero no es valido o no esta entre " + min + " y " + max);
        }
        return valorNumber;
    }

    leerEnteroEntreHasta(mensaje_o_id, min, max) {
        // Recibe: mensaje, valor mínimo y valor máximo.
        // Hace: llama a leerEnteroEntre() repetidamente hasta que el usuario introduzca un entero válido.
        // Devuelve: el número entero válido.
        let valorNumber = 0;
        while (valorNumber === -1) {
            try {
                valorNumber = this.leerEnteroEntre(mensaje_o_id, min, max);
            } catch (err) {
                console.error(err);
            }
        }

        return valorNumber;
    }
    leerCadena(mensaje_o_id) {
        // Recibe: una cadena con el mensaje.
        // Hace: solicita una cadena mediante prompt(). Comprueba que no esté vacía y tenga al menos 1 carácter. Si no, lanza excepción.
        // Devuelve: la cadena válida, o lanza excepción si no lo es.
        let valor = prompt(mensaje_o_id);
        if (valor.trim() === "" || valor.trim().length === 1) {
            throw new Error("El texto introducido esta vacio o tiene menos de 2 letras");
        }
        return valor;
    }

    leerCadenaHasta(mensaje_o_id) {
        // Recibe: una cadena con el mensaje.
        // Hace: llama a leerCadena() repetidamente hasta que el usuario introduzca una cadena válida.
        // Devuelve: la cadena válida.
        let valor = "";

        while (valor === "") {
            try {
                valor = this.leerCadena(mensaje_o_id);
            } catch (err) {
                console.error(err);
            }
        }

        return valor;
    }
    // Aquellos otros métodos que consideres necesarios.

}










