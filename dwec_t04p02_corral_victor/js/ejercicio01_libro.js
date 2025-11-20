//gestiona la clase Libro y las subclases Ebook y LibroPapel.


class Libro{
    // La clase Libro tiene las siguientes propiedades (privadas):
    // -    	isbn (aunque en nuestro caso para simplificar las pruebas será un número entero simple que introduce el  usuario al insertar el libro en el sistema. No puede haber dos isbn iguales -aunque esto no lo controlo yo-).
    // -    	título (puede haber libros con el mismo título -aunque esto no lo controlo yo-)
    // -        género literario (solo puede tener uno)
    // -    	autor/es (puede haber más de un autor - necesito un array-)
    // -    	precio (sin IVA)
    #isbn;
    #titulo;
    #genero;
    #autor = [];
    #precio;
    #precioOriginal;

    // La clase Libro también tiene las siguientes propiedades estáticas:

    // static GENEROS_LITERARIOS = new Set([
    //   "Novela",
    //   "Poesía",
    //   "Ensayo",
    //   "Teatro",
    //   "Ciencia Ficción",
    //   "Fantasía",
    //   "Histórico",
    //   "Biografía",
    // "Terrr",
    //   "Infantil",
    // ]);

    static GENEROS_LITERARIOS = new Set([
            "Novela",
            "Poesía",
            "Ensayo",
            "Teatro",
            "Ciencia Ficción",
            "Fantasía",
            "Histórico",
            "Biografía",
            "Terror",
            "Infantil",
        ]);
    

    constructor(isbn, titulo, autor, genero, precio){
        // Y un constructor que recibe el isbn, el título, el autor, el género y el precio. 
        //Aquí se harán validaciones antes de crear.

        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.precio = precio;
        this.#precioOriginal = precio;
    }

    //Y los siguientes métodos:
    // getter//setter

    set isbn(isbn){
        if(Util.validarEntero(isbn)){
            this.#isbn = isbn; 
        } else {
            throw new Error ("No es un Isbn valido");
        }
        
    }

    get isbn(){
        return this.#isbn;
    }

    set titulo(titulo){
        if(Util.validarTitulo(titulo)){
            this.#titulo = titulo;
        } else {
            throw new Error ("No es un Titulo valido");
        }
        
    }

    get titulo(){
        return this.#titulo;
    }

    set genero(genero){
        if(Util.validarGenero(genero, Libro.GENEROS_LITERARIOS)){
            this.#genero = genero;
        } else {
            throw new Error ("No es un genero valido");
        }
        
    }

    get genero(){
        return this.#genero;
    }

    set autor(autor){
        let texto = "";
        //TODO modificar para cuando haga la clase autor
        for(let i = 0; i<autor.length; i++){
            if(!Util.validarNombrePersona(autor[i])){
                texto += `\n ${autor[i]} no es valido`;
            } 
        }

        if(texto === ""){
            this.#autor = autor;
        } else {
            throw new Error(texto);
        }
    }

    get autor(){
        return this.#autor;
    }

    set precio(precio){
        if(Util.validarReal(precio)){
            this.#precio = precio;
        } else {
            throw new Error("El precio no es valido");
        }
        
    }

    get precio(){
        return this.#precio;
    }

    set precioOriginal(precioOriginal){
        if(Util.validarReal(precioOriginal)){
            this.#precioOriginal = precioOriginal;
        } else {
            throw new Error("El descuento no es valido");
        }  
    }

    get precioOriginal(){
        return this.#precioOriginal;
    }

    mostrarDatosLibro(){
        //mostrarDatosLibro(): Devuelve una cadena con toda la información de un libro. No recibe nada. Debe usar template strings.
        //isbn, titulo, autor, genero, precio
        return `Titulo: ${this.titulo}
                \nIsbn: ${this.isbn} 
                \nAutor: ${this.autor}
                \nGenero: ${this.genero}
                \nPrecio: ${this.precio}€ sin IVA`
    }

    deshacerDescuentoLibro(){
        //deshacerDescuentoLibro(): deshace el último descuento aplicado. Si no hay ningún descuento previo aplicado, no hace nada. Por tanto, el libro conservará el precio original antes del descuento.
        if(this.precio !== this.precioOriginal){
            this.precio = this.precioOriginal;
        } else {
            throw new Error (`${this.titulo} no tiene un descuento aplicado. `)
        }
    }
    
    aplicarDescuentoLibro(descuento){
        //aplicarDescuentoLibro(descuento): cambiar el precio del libro una vez aplicado el descuento. No devuelve nada. Solo se puede aplicar un descuento. Así que si el libro ya tenía descuento, se deshace el que hubiese y se aplica el nuevo.
        if(this.precio !== this.precioOriginal && Util.validarReal(descuento)){
            this.precio = this.precio * (descuento/100);
        } else {
            throw new Error (`${this.titulo} ya tiene un descuento aplicado. `)
        }
    }
    //Algun metodo que consideres necesarios y sean comunes a los hijos e identicos.
}

class Ebook extends Libro{
// La subclase Ebook: Extiende la clase Libro para representar libros electrónicos con los siguientes atributos 
// adicionales (privados):
//      tamanoArchivo: tamaño del archivo en MiB.
//      formato: formato del archivo valido (mirar el set FORMATOS).
    #tamanoArchivo;
    #formato;

    // La clase Ebook también tiene las siguientes propiedades estáticas:
    // static FORMATOS = new Set([
        //   "pdf",
        //   "epub",
        //   "mobi",
    // ]);

    static FORMATOS = new Set([
            "pdf",
            "epub",
            "mobi",
        ]);

    constructor(isbn, titulo, autor, genero, precio, tamanoArchivo, formato){
        // Y un constructor que recibe todo lo esperado y llama al padre con super(). 
        //Aquí se harán validaciones antes de crear.

        super(isbn, titulo, autor, genero, precio);
        this.tamanoArchivo = tamanoArchivo;
        this.formato = formato;
    }

    // Métodos específicos:
    // getter//setter
    set tamanoArchivo(tamanoArchivo){
        if(Util.validarTamanoArchivo(tamanoArchivo)){
            this.#tamanoArchivo = tamanoArchivo;
        } else {
            throw new Error("El tamaño del archivo no es valido");
        }
        
    }
    get tamanoArchivo(){
        return this.#tamanoArchivo
    }

    set formato(formato){
        if(Util.validarFormato(formato, Ebook.FORMATOS)){
            this.#formato = formato;
        } else {
            throw new Error("El formato no es valido");
        }
    }

    get formato(){
        return this.#formato;
    }

    descargar(){
        // descargar(): Simula la descarga del libro. Devuelve la cadena "Descargando…"
        return `Descargando...`
    }
    
    convertirFormato(formato){
        // convertirFormato(formato): Cambia el formato del archivo manteniendo el ISBN).
        if(Util.validarFormato(formato, Ebook.FORMATOS)){
            this.formato = formato;
        } else {
            throw new Error("El formato a cambiar no es valido");
        }
    }
    mostrarDatosLibro(){
        // Sobrescribe el método mostrarDatosLibro() para incluir información adicional como el tamaño del archivo y el formato. Debe usar template strings.
        return `${super.mostrarDatosLibro()} 
                \nFormato: ${this.formato} 
                \nTamaño: ${this.tamanoArchivo}`
    }

    comprobarDisponibilidad(){
        // En Ebook, este método devuelve siempre true, ya que los ebooks siempre están disponibles.
        return true;
    }
    modificarLibro(mapaInfo){
        // Define un método modificarLibro() que sea diferente para cada subclase (polimorfismo) 
        // que reciba toda la información que se pueda modificar en un mapa y la modifique.
        for (const [clave, valor] of mapaInfo){
            this[clave] = valor;
        }
    }
}

class LibroPapel extends Libro{
    // La subclase LibroPapel: Extiende la clase Libro para representar libros físicos 
    //con los siguientes atributos adicionales (privados):
    // peso: peso del libro en gramos.
    // dimensiones: dimensiones del libro (por ejemplo: "20x15x3 cm").
    // stock: número de libros en papel
    #peso;
    #dimensiones;
    #stock;
    // La clase LibroPapel también tiene una propiedad estática que avisa del número mínimo de unidades que se permiten en stock antes de pedir más unidades.
    static minimoStock;

    constructor(isbn, titulo, autor, genero, precio, peso, dimensiones, stock){
        // Y un constructor que recibe todo lo esperado y llama al padre con super().
        //Aquí se harán validaciones antes de crear.
        super(isbn, titulo, autor, genero, precio);
        this.peso = peso;
        this.dimensiones = dimensiones;
        this.stock =stock;
        LibroPapel.minimoStock = 2;
        // Métodos específicos:
        // getter//setter
    }
    
    set peso(peso){
        if(Util.validarPeso(peso)){
            this.#peso = peso;
        } else {
            throw new Error ("El peso no es valido");
        }      
    }
    get peso(){
        return this.#peso;
    }

    set dimensiones(dimensiones){
        if(Util.validarDimensiones(dimensiones)){
            this.#dimensiones = dimensiones;
        } else {
            throw new Error ("Las dimensiones no son validas");
        }  
        
    }

    get dimensiones(){
        return this.#dimensiones;
    }

    set stock(stock){
        if(Util.validarStock(stock)){
            this.#stock = stock; 
        } else {
            throw new Error ("El stock no es valido");
        }  
        
        
    }

    get stock(){
        return this.#stock;
    }

    embalar(){
        // embalar(): Simula el embalaje del libro. Devuelve la cadena: "Embalando…"
        return `Embalando...`;
    }

    reducirStock(){
        // reducirStock() y amplicarStock(numUnididades). Se reduce siempre en una unidad y se amplia en las unidades que se indiquen.
        if(this.comprobarDisponibilidad()){
            this.stock = this.stock - 1;
        } else {
            throw new Error("El stock es 0, no se pueden vender más unidades")
        }
    }

    ampliarStock(numUnididades){    
        if(Util.validarReal(numUnididades)){
            this.stock = this.stock + numUnididades;
        } else {
            throw new Error ("Numero de unidades no valido");
        }
    }

    mostrarDatosLibro(){
        // Sobrescribe el método mostrarDatosLibro() para incluir información adicional como el peso, las dimensiones y el stock. Debe usar template strings.
        return `${super.mostrarDatosLibro()} 
                \nPeso: ${this.peso} 
                \nDimensiones: ${this.dimensiones} 
                \nStock: ${this.stock}`
    }
    // Aquellos otros métodos que consideres necesarios.

    comprobarDisponibilidad(){
        // En LibroPapel, este método devuelve true o false según una cantidad en inventario definida como un atributo privado stock.
        return this.stock > 0;
    }

    modificarLibro(mapaInfo){
    // Define un método modificarLibro() que sea diferente para cada subclase (polimorfismo) que reciba toda la información que se pueda modificar en un mapa y la modifique.
        for (const [clave, valor] of mapaInfo){
            this[clave] = valor;
        }
    }
}