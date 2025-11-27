
class Libros{
    // Un objeto Libros tiene las siguientes propiedades:
    // listado de libros: es un array con todos los libros de la tienda.
    #libros;
    
    constructor(){
        // Y un constructor que crea la lista de libros vacía.
        this.libros = []
    }

    get libros(){
        return this.#libros;
    }

    set libros(libros){
        this.#libros = libros;
    }
    
    // También tiene los siguientes métodos:
    existeLibroPorIsbn(isbnAbuscar){
        // existeLibroPorIsbn(isbnAbuscar): devuelve true o false si ya existe 
        // el isbn que se recibe como argumento en la lista de libros.
        // let existe = false;
        // if(Util.validarReal(isbnAbuscar)){
        //     this.libros.forEach(element => {
        //         if(element.isbn === isbnAbuscar){
        //             existe = true;
        //         }
        //     });

            return this.libros.some(libro => libro.isbn === isbnAbuscar);
        //return existe;
    }

    insertarLibros(libros){
        // insertarLibros(libros): recibe un array de libros y los inserta en la lista de libros. 
        //Verifica antes de insertar que el isbn no exista. Devuelve el número de libros insertados.
        let contador = 0;

        libros.forEach(element => {
            if(!this.existeLibroPorIsbn(element.isbn)){
                this.libros.push(element);
                contador ++;
            }
        });

        return contador;
    }
    buscarLibroPorIsbn(isbnAbuscar){
        // buscarLibroPorIsbn(isbnAbuscar): devuelve un objeto libro por isbn.
        let libro = null;
        if(Util.validarReal(isbnAbuscar)){
            this.libros.forEach(element => {
                if(element.isbn === isbnAbuscar){
                    libro = element;
                }
            });
            return libro;
        } 
    }
    
    buscarLibroPorTitulo(tituloAbuscar){
        // buscarLibroPorTitulo(tituloAbuscar): devuelve un array de objetos libro por título.
        const libros = [];
        if(Util.validarTitulo(tituloAbuscar)){
            this.libros.forEach(element => {
                if(element.titulo === tituloAbuscar){
                    libros.push(element);
                }
            });
            if(libros.length === 0){
                return null;
            } else {
                return libros;
            }
        } 
    }

    modificarLibroPorIsbn(isbnAmodificarm, mapaConInfo){
        // modificarLibroPorIsbn(isbnAmodificar, mapaConInfo): modifica un objeto libro por isbn 
        // con los datos recibidos en el mapa.
        let libro = this.buscarLibroPorIsbn(isbnAmodificarm)
        if(libro !== null){
            libro.modificarLibro(mapaConInfo);
        }
        
    }

    obtenerCadenaLibrosMenu(){
        // obtenerCadenaLibrosMenu(): Devuelve una cadena con el listado numerado de los 
        // títulos de los libros en orden alfabético y entre paréntesis si es Ebook o libro en papel.
        let texto = "Libros: ";
        for(let i = 0; i<this.libros.length; i++){
            let tipoLibro = "";
            if(this.libros[i] instanceof Ebook){
                tipoLibro = "Ebook";
            } else if (this.libros[i] instanceof LibroPapel){
                tipoLibro = "Libro en papel";
            }

            texto += `\n${i+1}.- ${this.libros[i].titulo} (${tipoLibro})`
        }

        if(this.libros.length <= 0){
            texto ="No existe ningun libro";
        }
        return texto;
    }

    // No se pueden borrar libros.
    // Aquellos otros métodos que consideres necesarios.
}