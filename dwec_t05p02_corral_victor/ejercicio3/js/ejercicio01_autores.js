class Autores{
    // Un objeto Autores tiene las siguientes propiedades:
    // listado de autores: es un array con todos los autores registrados en el sistema.
    #autores;
    // Y un constructor que crea la lista de autores vacía.
    constructor(){
        this.autores = [];
    }

    get autores(){
        return this.#autores;
    }

    set autores(autores){
        this.#autores = autores;
    }
    // También tiene los siguientes métodos:
    existeAutorPorNombre(nombreAbuscar){
        //  - existeAutorPorNombre(nombreAbuscar): devuelve true o false si 
        // ya existe el autor.
        return this.autores.some(autor => autor.nombreCompleto === nombreAbuscar);
    }
    insertarAutores(autores){
        // Recibe un array de autores y 
        // los inserta en la lista de autores. 
        // Verifica antes de insertar que el nombre completo no exista. 
        // Devuelve el número de autores insertados.
        let contador = 0;
        if(Array.isArray(autores)){
            autores.forEach(autor => {
                if(!this.existeAutorPorNombre(autor.nombreCompleto)){
                    this.autores.push(autor);
                    contador ++;
                }
            });
        }
        return contador;
    }
    buscarAutoresPorId(idAbuscar){
        //  - buscarAutoresPorId (idAbuscar): devuelve un objeto autor por id.
        return this.autores.find(autor => autor.id === idAbuscar);
    }
    buscarAutoresPorNombre(nombreAbuscar){
        return this.autores.filter(autor => autor.nombreCompleto.includes(nombreAbuscar));
    }
    obtenerCadenaAutoresMenu(){
        //  - obtenerCadenaAutoresMenu(): Devuelve una cadena con el listado numerado de los
        // autores en orden alfabético y entre paréntesis el número de libros escritos.
        let texto = "Autores: ";
        this.autores.sort((a,b)=> {   
            const nombreA = a.nombreCompleto.toLowerCase();
            const nombreB = b.nombreCompleto.toLowerCase();
            if (nombreA < nombreB) return -1;
            if (nombreA > nombreB) return 1;
            return 0;
        }); 
        for(let i = 0; i<this.autores.length; i++){
            texto += `\n${i+1}.- ${this.autores[i].nombreCompleto} (${this.autores[i].libros.length})`;
        }
        return texto;
    }
    //  - No se pueden modificar los autores.
    //  - No se pueden borrar autores.

    //  - Aquellos otros métodos que consideres necesarios.


}




