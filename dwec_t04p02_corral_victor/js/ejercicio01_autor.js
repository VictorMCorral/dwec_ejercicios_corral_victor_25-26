class Autor{
    // La clase Autor tienes las siguientes propiedades (privadas):
    // id (es un identificador único de tipo incremental interno de la aplicación). 
    // nombre completo (no puede haber dos autores con el mismo nombre completo)
    // libros (al construirse será un array vacío [])
    #id;
    #nombreCompleto;
    #libros;
    
    static ultimoIDasignado = 0;
    constructor (nombreCompleto){
        // Y un constructor que recibe el nombre completo. 
        //Aquí se harán validaciones antes de crear.
        this.nombreCompleto = nombreCompleto;
        this.#id = this.obtenerSiguienteID();
        this.#libros = [];
    }
    
    // Y los siguientes métodos:
    // -    	getter//setter
    set nombreCompleto(nombreCompleto){
        if(Util.validarNombrePersona(nombreCompleto)){
            this.#nombreCompleto = nombreCompleto;
        } else {
            throw new Error ("El nombre no es valido");
        }
    }

    get nombreCompleto(){
        return this.#nombreCompleto;
    }

    get id(){
        return this.#id;
    }

    get libros(){
        return this.#libros;
    }

    // También tiene la siguiente propiedad y el siguiente método static:

    obtenerSiguienteID(){
        // obtenerSiguienteId(): Incrementa el último ID en 1 y devuelve su valor. 
        //Se invoca desde el constructor de la Clase Autor.
        let nuevoID = Autor.ultimoIDasignado + 1
        Autor.ultimoIDasignado ++
        return nuevoID;
    }
    
    mostrarDatosAutor(){
        //mostrarDatosAutor(): Devuelve una cadena con toda la información de un autor. 
        //No recibe nada. Debe usar template strings.
        let librosTexto = "";
        this.libros.forEach(libro => {
            librosTexto += `\n\t${libro.titulo}`;
        });

        return `\nID: ${this.id} \nNombre: ${this.nombreCompleto} \nLibros: ${librosTexto}`;

    }
    insertarLibro(libro){
        //insertarLibro(libro): añade un libro a la lista de libro ya escritos 
        //por este autor. Solo se pueden añadir libros previamente existentes en el sistema. 
        //Devuelve el número de libros escritos hasta ese momento (incluido el nuevo libro).
        if(libro instanceof Libro){
            this.libros.push(libro);
        }

        return this.libros.length;
    }
    tieneLibros(){
        //tieneLibros(): devuelve true / false si ha escrito libros.
        if(this.libros.length>0){
            return true;
        } else {
            return false;
        }
    }
    //Aquellos métodos que necesitéis.
}
