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
        let valor = undefined;
        let continuar = true;
        while (continuar) {
            try {
                valor = this.leerEntero(mensaje_o_id);
                continuar = false;
            } catch (err) {
                console.error(err);
                continuar = true;
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

    leerRealHasta(mensaje_o_id) {
        let valor = undefined;
        let continuar = true;
        while (continuar) {
            try {
                valor = this.leerReal(mensaje_o_id);
                continuar = false;
            } catch (err) {
                console.error(err);
                continuar = true;
            }

        }

        return valor;
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
        let continuar = true;
        let valorNumber = null;
        while (continuar) {
            try {
                valorNumber = this.leerEnteroEntre(mensaje_o_id, min, max);
                continuar = false;
            } catch (err) {
                console.error(err);
                continuar = true;
            }
        }

        return valorNumber;
    }

    leerCadena1(mensaje_o_id) {
        // Recibe: una cadena con el mensaje.
        // Hace: solicita una cadena mediante prompt(). Comprueba que no esté vacía y tenga al menos 1 carácter. Si no, lanza excepción.
        // Devuelve: la cadena válida, o lanza excepción si no lo es.
        let valor = prompt(mensaje_o_id);
        if (valor.trim() === "" || valor.trim().length <= 1) {
            throw new Error("El texto introducido esta vacio o tiene menos de 2 letras");
        }
        return valor;
    }

    leerCadena2(mensaje_o_id, longitud){
        // Recibe: una cadena con el mensaje y su longitud mínima.
        // Hace: solicita una cadena mediante prompt(). Comprueba que no esté vacía y tenga al menos la longitud de caracteres indicada. Si no, lanza excepción.
        // Devuelve: la cadena válida, o lanza excepción si no lo es.
        let valor = prompt(mensaje_o_id + " de la siguiente longitud minima: " + longitud);
        if(valor.trim() === "" || valor.trim().length < longitud){
            throw new Error("El texto introducido esta vacio o tiene menos de " + longitud + " letras")
        }
        return valor;
    }

    leerCadena3(mensaje_o_id, longitud, patron){
        // Recibe: una cadena con el mensaje, su longitud mínima y un patrón.
        // Hace: solicita una cadena mediante prompt(). Comprueba que no esté vacía, tenga al menos la longitud de caracteres indicada y cumpla el patrón. Si no, lanza excepción.
        // Devuelve: la cadena válida, o lanza excepción si no lo es.
        const regex = patron;
        let valor = prompt(mensaje_o_id + " de la siguiente longitud minima: " + longitud  + " y el siguiente patron: " + patron);
        if(valor.trim() === "" || 
            valor.trim().length < longitud ||
            !regex.test(valor.trim())){
            throw new Error("El texto introducido esta vacio o tiene menos de " + longitud + " letras")
        }
        return valor;
    }

    leerCadenaHasta(...atributos) {
        // Recibe: una cadena con el mensaje.
        // Hace: llama a leerCadena() repetidamente hasta que el usuario introduzca una cadena válida.
        // Devuelve: la cadena válida.
        
        let valor = null;
        let continuar = true;
        while (continuar) {
            try {
                switch(atributos.length) {
                    case 1: 
                        valor = this.leerCadena1(atributos[0]);
                        break;
                    case 2: 
                        valor = this.leerCadena2(atributos[0], atributos[1]);
                        break;
                    case 3: 
                        valor = this.leerCadena3(atributos[0], atributos[1], atributos[2])
                }
                
                continuar = false;
            } catch (err) {
                console.error(err);
                continuar = true;
            }
        }

        return valor;
    }
    // Aquellos otros métodos que consideres necesarios.

}

class LeerDatosInput extends LeerDatos {
    leerTitulo(){

    }
}










