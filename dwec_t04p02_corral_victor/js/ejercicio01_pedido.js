class Pedido{
    // Un objeto Pedido tiene las siguientes propiedades:
    // -    	id (es un identificador único de tipo incremental interno de la aplicación). 
    // -    	cliente
    // -    	librosPedido: Mapa con isbn del libro pedido y el número de unidades. Solo puede ser 1 si es Ebook. 
                        //El pedido puede contener tanto libros de tipo Ebook como LibroPapel.
    // -    	fecha
    // -    	tipoEnvioPedido: un objeto de tipo TipoEnvio. Por defecto null.
    // -    	precioTotalSinEnvioSinIVA: Coste total de todos los libros del pedido. Por defecto 0.
    // -    	precioTotalConEnvioSinIVA: precioTotalSinEnvioSinIVA más el coste del envío seleccionado. Por defecto 0.
    // -    	precioTotalConEnvioConIVA: precio final con IVA. Por defecto 0.
    // -    	descuento. Por defecto 0.
    // -        abierto. Por defecto true.
    #id;
    #cliente;
    #librosPedido;
    #fecha;
    #tipoEnvioPedido;
    #precioTotalSinEnvioSinIVA;
    #precioTotalConEnvioSinIVA;
    #precioTotalConEnvioConIVA;
    #descuento;
    #abierto;

    #hayEbook;
    #hayLibroPapel;
    // También tiene la siguiente propiedad y el siguiente método static:
    // último ID asignado.
    // obtenerSiguienteId(): Incrementa el último ID en 1 y devuelve su valor. Se invoca desde el constructor de la Clase Pedido.
    static ultimoIdAsignado = 0;
    obtenerSiguienteId(){
        let nuevoID = Pedido.ultimoIdAsignado +1;
        Autor.ultimoIDasignado ++;
        return nuevoID;
    }
    // Y un constructor que recibe el cliente y crea el mapa vacío y asigna su ID y la fecha de hoy.
    constructor(cliente){
        this.id=this.obtenerSiguienteId();
        this.cliente = cliente;
        this.#librosPedido = new Map();
        this.#fecha = new Date();
        this.tipoEnvioPedido = null;
        this.#precioTotalSinEnvioSinIVA = 0;
        this.#precioTotalConEnvioSinIVA = 0;
        this.#precioTotalConEnvioConIVA = 0;
        this.#descuento = 0;
        this.#abierto = true;

        this.#hayEbook = false;
        this.#hayLibroPapel = false;
    }
    
    // Los siguientes métodos:

    hayLibros(){
        // -hayLibros(): Devuelve true o false si el pedido tiene libros. No recibe nada.
        //TODO comprobar
        return this.#librosPedido.size>0;
    }
    mostrarDatosPedido(catalogoLibros){
        // -mostrarDatosPedido(): Devuelve una cadena con toda la información de un pedido, 
        //detallando los libros (ebooks y en papel), el tipo de envío y los costes finales. No recibe nada.
        //TODO need more 
    }
    insertarLibro(libro, unidades){
        // -insertarLibro(libro, unidades): Añade un libro y sus unidades al final del mapa librosPedido. 
        //Un libro Ebook solo es una unidad. Devuelve el número de unidades que ya tiene el pedido en total.
        //TODO modificar total
        this.#librosPedido.add(libro.isbn, unidades);
        if(libro instanceof Ebook){
            this.#hayEbook = true;
        } else {
            this.#hayLibroPapel = true;
        }

        this.#precioTotalSinEnvioSinIVA += libro.precio;

        this.calcularTotal();

        let total =0;
        this.#librosPedido.forEach(function(value) {
            total += value
        });
        return total; 
    }
    establecerTipoEnvio(tipoEnvio, catalogoLibros){
        // -establecerTipoEnvio(): Establece un objeto de tipo TipoEnvio que recibe como parámetro. 
        //Si un pedido solo tiene Ebook no puede tener un tipo de envío. Devuelve true o false.
        //TODO comprobar
        if(this.#hayLibroPapel){
            this.#tipoEnvioPedido = tipoEnvio;
        }

        return this.#hayLibroPapel;
    }
    // También se tiene que comprobar que el peso de los libros físicos es acorde al máximo de peso permitido en el tipo de envío.
    calcularTotal(){
        // -calcularTotal(): Calcula el precio total del pedido. Toma en cuenta:
        // Los libros de tipo Ebook no generan gastos de envío. 
        // Si el pedido contiene únicamente ebooks, el coste del envío será siempre 0.
        // Si el pedido incluye al menos un LibroPapel, el envío se calcula según el tipo de envío seleccionado.
        //TODO
        let costeEnvio = 0;
        if(this.#hayLibroPapel){
            costeEnvio += this.#tipoEnvioPedido.precioPorEnvio;
        }
        this.aplicarDescuento(this.#descuento);
        this.#precioTotalConEnvioConIVA = this.#precioTotalSinEnvioSinIVA + costeEnvio;
    }
    aplicarDescuento(porcentaje){
        // -aplicarDescuento(porcentaje): Aplica un descuento al total del pedido, 
        //reduciendo el coste de los libros en el porcentaje especificado. Devuelve true / false 
        //si se ha podido aplicar correctamente. El descuento debe ser aplicado únicamente a los libros, 
        //no al coste del envío. Recuerda que además si el pedido se realiza en noviembre y diciembre, 
        //se aplica un descuento del 10% a cada libro individualmente, antes de calcular los gastos de envío. 
        //Esto se hace de forma automática. 
        //TODO
        
    }
    // Solo los clientes pueden hacer pedidos. Si una persona no es cliente, primero se dará de alta como cliente.
}



