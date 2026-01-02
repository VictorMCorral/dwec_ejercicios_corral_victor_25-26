class TiposEnvios{
    // Un objeto TiposEnvios tiene las siguientes propiedades:
    // listado de tipos de envios: es un array con todos los tipos de envíos registrados en el sistema.
    #tiposEnvios;
    // Y un constructor que crea la lista de tipos vacía.
    constructor(){
        this.#tiposEnvios = [];
    }
    // También tiene los siguientes métodos:
    existeTipoPorNombre(nombreAbuscar){
        // existeTipoPorNombre(nombreAbuscar): devuelve true o false si ya existe el tipo de envío.
        return this.#tiposEnvios.some(tipoEnvio =>tipoEnvio.nombre === nombreAbuscar);
    }

    insertarTipos(tiposEnvios){
        // insertarTipos(tiposEnvios): recibe un array de tipos de envíos y los inserta en la lista. 
        //Verifica antes de insertar que el nombre completo no exista. Devuelve el número de tipos insertados.
        let contador = 0;
        tiposEnvios.forEach(tipoEnvio => {
            if(!this.existeTipoPorNombre(tipoEnvio.nombre)){
                this.#tiposEnvios.push(tipoEnvio);
                contador ++;
            }
        })
        return contador;
    }
    buscarTiposPorNombre(nombreAbuscar){
        // buscarTiposPorNombre (nombreAbuscar): devuelve un objeto tipo de envío por nombre.
        return this.#tiposEnvios.find(tipoEnvio => (tipoEnvio.nombre === nombreAbuscar));
    }
    obtenerCadenaTiposMenu(){
        // obtenerCadenaTiposMenu(): Devuelve una cadena con el listado numerado de los tipos de gastos en orden de precio mayor a menos y entre paréntesis el precio.
        let texto = "Tipos de Envio: ";
        this.#tiposEnvios.sort((a,b) => {
            const nombreA = a.nombre.toLowerCase();
            const nombreB = b.nombre.toLowerCase();
            if(nombreA < nombreB) return -1;
            if(nombreA > nombreB) return 1;
            return 0;
        })
        for( let i = 0; i<this.#tiposEnvios.length; i++){
            let tipoEnvio = this.#tiposEnvios[i];
            texto += `\n${i+1}.- ${tipoEnvio.nombre} (${tipoEnvio.precioPorEnvio}) `
        }

        return texto; 
    }
    // Aquellos otros métodos que consideres necesarios.
    
    // No se pueden modificar los tipos.
    // No se pueden borrar tipos.
}
