//REVISAR PAGINA 20 CON EL PATRON SINGELTON
class Tienda {
    static instancia = null;
    static getInstancia(nombreTienda) {
        if (Tienda.instancia === null) {
            Tienda.instancia = new Tienda("El rincon del lector");
        }
        return Tienda.instancia;
    }
    // La clase Tienda tiene los siguiente atributos:
    //  - Un objeto de Libros.
    //  - Un objeto de Autores.
    //  - Un objeto de Tipos de Envío.
    //  - Un objeto de Clientes.
    //  - Un objeto de Pedidos.
    //  - Nombre de la tienda.
    #libros;
    #autores;
    #tiposEnvios;
    #clientes;
    #pedidos;
    #nombreTienda;
    // Un objeto lector, instancia de la clase LeerDatosPrompt. 
    //Esta instancia será utilizada por la Tienda en todos los procesos 
    //que requieran la lectura de datos del usuario. De esta forma, 
    //si en el futuro se desea cambiar la forma de leer los datos 
    //(por ejemplo, usar un formulario en lugar de prompt), 
    //solo será necesario sustituir esta instancia por otra subclase de LeerDatos.
    #leerDatosPrompt;
    // La clase Tienda tiene también los siguiente atributos estáticos:
    //  - IVA
    static IVA = 4;

    constructor(nombreTienda) {
        // Y un constructor que recibe el nombre de la tienda.
        if (Tienda.instancia !== null) {
            throw new Error("Use Tienda.getInstancia() en lugar de new Tienda");
        }
        this.#libros = new Libros();
        this.#autores = new Autores();
        this.#tiposEnvios = new TiposEnvios();
        // Los tipos de pedidos estarán precargados y  no se van a gestionar desde el menú principal.
        this.#clientes = new Clientes();
        //this.#pedidos = new Pedidos();
        this.#leerDatosPrompt = new LeerDatosPrompt();
    }
    // La clase Tienda además implementa todos los métodos necesarios 
    //para su funcionamiento. Además de los siguientes métodos:

    get libros() {
        return this.#libros;
    }

    get autores() {
        return this.#autores;
    }

    get clientes() {
        return this.#clientes;
    }

    get tiposEnvios() {
        return this.#tiposEnvios;
    }
    cargarDatosPrueba() {
        //  - cargarDatosPrueba(): Nos permite iniciar la aplicación con datos de prueba Reales. 
        let autorPrueba = new Autor("JRR Tolkien");
        let autorPrueba2 = new Autor("JK Rowling");
        this.#autores.insertarAutores([autorPrueba, autorPrueba2]);
        let libro1 = new Ebook(555555555, "Titulo 1", [autorPrueba, autorPrueba2], "Novela", 10.24, 1024, "pdf")
        autorPrueba.insertarLibro(libro1);
        autorPrueba2.insertarLibro(libro1);

        let libro2 = new LibroPapel(44444, "Titulo 2", [autorPrueba], "Poesía", 10.25, 1024, "20x05x50", 1222)
        autorPrueba.insertarLibro(libro2);

        let libro3 = new LibroPapel(111, "Titulo 3", [autorPrueba2], "Teatro", 10.25, 1024, "20x05x50", 1222)
        autorPrueba2.insertarLibro(libro3);

        let libro4 = new LibroPapel(222, "Titulo 4", [autorPrueba2], "Novela", 10.25, 1024, "20x05x50", 1222)
        autorPrueba2.insertarLibro(libro4);

        let libro5 = new LibroPapel(333, "Titulo 5", [autorPrueba], "Teatro", 10.25, 1024, "20x05x50", 1222)
        autorPrueba.insertarLibro(libro5);

        this.#libros = new Libros();
        this.#libros.insertarLibros([libro1, libro2, libro3, libro4, libro5]);
        let cliente1 = new Cliente("05708827C", "Victor", "calle calle 123");
        let cliente2 = new Cliente("12345678Z", "Orwin", "123 calle calle");
        this.#clientes.insertarClientes([cliente1, cliente2]);
        let tipoEnvio1 = new TipoEnvio("Envio z", 5, 5.50);
        let tipoEnvio2 = new TipoEnvio("Envio a", 10, 10.50);
        this.#tiposEnvios.insertarTipos([tipoEnvio1, tipoEnvio2]);
        //nombre, diasMaximo, precioPorEnvio

        let nuevoPedido = new Pedido(cliente1);
        nuevoPedido.insertarLibro(libro1, 1);
        nuevoPedido.insertarLibro(libro3, 5);
        nuevoPedido.establecerTipoEnvio(tipoEnvio1);
        nuevoPedido.calcularTotal();
        cliente1.insertarPedido(nuevoPedido);

        let nuevoPedido1 = new Pedido(cliente1);
        nuevoPedido1.insertarLibro(libro1, 1);
        nuevoPedido1.insertarLibro(libro2, 2);
        nuevoPedido1.establecerTipoEnvio(tipoEnvio1);
        nuevoPedido1.calcularTotal();
        cliente1.insertarPedido(nuevoPedido1);

        let nuevoPedido2 = new Pedido(cliente2);
        nuevoPedido2.insertarLibro(libro3, 1);
        nuevoPedido2.insertarLibro(libro4, 2);
        nuevoPedido2.establecerTipoEnvio(tipoEnvio2);
        nuevoPedido2.calcularTotal();
        cliente2.insertarPedido(nuevoPedido2);
    }

    iniciar() {
        //  - iniciar(): Es la función que arranca el sistema en sí.
        // Los autores siempre se insertan al crear un libro y no se van a gestionar desde el menú principal.

    }

    mostrarMenu() {
        //  - mostrarMenú(): Devuelve una cadena con las opciones del menú.
        let texto = "\t1- Mostrar Catálogo de Libros Disponibles." +
            //Muestra al usuario todos los libros disponibles para comprar, separando los ebooks de los libros en papel.
            "\n\t2- Insertar Libros o modificar datos de un libro existente." +
            //Se buscará el libro por ISBN. Si no existe, se crea, si existe se modifica.
            "\n\t3- Actualizar stock libros." +
            //Pide los datos necesarios y actualiza el stock de los libros indicados por el usuario.
            "\n\t4- Ver notificaciones stock libros. " +
            //Muestra un listado de los libros en papel que están sin stock o por debajo del mínimo.
            "\n\t5- Insertar cliente." +
            "\n\t6- Mostrar pedidos abiertos de un cliente por DNI." +
            "\n\t7- Borrar cliente cliente por DNI." +
            "\n\t8- Hacer pedido por cliente identificado por DNI. " +
            // Se busca el cliente. Debe estar creado previamente.
            // Se debe permitir la compra usando un buscador o mostrando un listado de libros 
            //(tanto con stock como sin stock).
            // Se debe poder seleccionar el método de envío.
            // Al finalizar mostrará el total del pedido y un resumen completo del mismo. 
            //También preguntará si hay que aplicar algún descuento.
            "\n\t9- Mostrar pedido por ID de pedido." +
            "\n\t10- Mostrar estadísticas:" +
            // Libro más vendido (reduce y/o find).
            // Autor que más dinero ha ganado (reduce).
            // Cliente que más pedidos has realizado (solo mirando pedidos) (reduce y/o find).
            // Cliente que más libros ha comprado (mirando unidades) (reduce).
            // Número total de pedidos abiertos (filter). 
            // Importe total facturado (sumando todos los pedidos cerrados) (filter y reduce).
            // Tipo de envío más utilizado (reduce).
            "\n\t11- Salir."
        return texto;
    }

    pedirOpcionMenu() {
        //Muestra el menú usando mostrarMenu() y devuelve la opción del menú pedida al usuario.
        let opcion = this.LeerDatosPrompt.leerEnteroHasta(this.mostrarMenu());
        if (Util.validarEntero(opcion)) {
            return opcion;
        }
    }

    pedirYcrearLibro() {
        //Este método solicitará al usuario todos los datos necesarios 
        //(ISBN, título, autor, precio, género, etc.)
        // utilizando el lector de datos configurado en la Tienda. 
        //Cada dato introducido será validado mediante la clase Util como primera 
        //capa de seguridad. Si algún valor no es válido, se volverá a solicitar 
        //hasta obtener uno correcto. Además, se comprobará que el ISBN no exista 
        //previamente en el sistema. 
        let isbn = null;
        let titulo = null;
        let autorCantidad = null;
        let autores = [];
        let tipoLibro = null;
        let genero = null;
        let precio = null;
        let libroAux = null;

        while (!Util.validarReal(isbn) || this.#libros.existeLibroPorIsbn(isbn)) {
            isbn = this.#leerDatosPrompt.leerEnteroHasta("Introduce el ISBN: ");
            if (this.#libros.existeLibroPorIsbn(isbn)) {
                console.log("El isbn ya existe");
            }
        }

        while (!Util.validarTitulo(titulo)) {
            titulo = this.#leerDatosPrompt.leerCadenaHasta("Introduce el titulo: ");
        }

        while (!Util.validarGenero(genero, Libro.GENEROS_LITERARIOS)) {
            genero = this.#leerDatosPrompt.leerCadenaHasta("Introduce el genero: ");
        }

        while (!Util.validarReal(precio)) {
            precio = this.#leerDatosPrompt.leerRealHasta("Introduce el precio: ");
        }

        //Una vez validados los datos, se localizará el 
        //autor correspondiente en la colección de autores; si no existe, se 
        //creará un nuevo objeto Autor y se insertará en el sistema. 
        autorCantidad = this.#leerDatosPrompt.leerEnteroHasta("¿Cuantos autores tiene?: ");
        for (let i = 0; i < autorCantidad; i++) {
            let autorAux = 1;
            let autor = null;
            while (!Util.validarNombrePersona(autorAux)) {
                autorAux = this.#leerDatosPrompt.leerCadenaHasta(`Introduce el nombre del autor ${i + 1}:`);
            };
            if (!this.#autores.existeAutorPorNombre(autorAux)) {
                if (confirm(`El autor ${autorAux} no existe, se creara ¿Esta seguro?`)) {
                    autor = this.pedirYcrearAutor(autorAux);
                }
            } else {
                autor = this.#autores.buscarAutoresPorNombre(autorAux)
            }
            autores.push(autor);
        }

        tipoLibro = this.#leerDatosPrompt.leerEnteroHasta("¿Que tipo de libro es? \n1. Ebook\n2. Libro en papel");

        if (tipoLibro == 1) {
            let tamanoArchivo = null;
            let formato = null;

            while (!Util.validarTamanoArchivo(tamanoArchivo)) {
                tamanoArchivo = this.#leerDatosPrompt.leerReal("Introduce el tamaño del archivo: ");
            }

            while (!Util.validarFormato(formato, Ebook.FORMATOS)) {
                formato = this.#leerDatosPrompt.leerCadenaHasta("Introduce el formato: ").toLowerCase();
            }

            libroAux = new Ebook(isbn, titulo, autores, genero, precio, tamanoArchivo, formato);

        } else if (tipoLibro == 2) {
            let peso = null;
            let dimensiones = null;
            let stock = null;

            while (!Util.validarPeso(peso)) {
                peso = this.#leerDatosPrompt.leerReal("Introduce el peso: ");
            }

            while (!Util.validarDimensiones(dimensiones)) {
                dimensiones = this.#leerDatosPrompt.leerCadenaHasta("Introduce las dimensiones: ", 5, /^\d+x\d+x\d+$/)
            }

            while (!Util.validarStock(stock)) {
                stock = this.#leerDatosPrompt.leerEnteroHasta("Introduce el stock: ");
            }

            libroAux = new LibroPapel(isbn, titulo, autores, genero, precio, peso, dimensiones, stock);
        }

        if (libroAux != null) {
            this.libros.insertarLibros([libroAux]);

            autores.forEach(autor => {
                autor.insertarLibro(libroAux);
            });
        }
        //A continuación, se construirá el libro (de tipo Ebook o LibroPapel según 
        //corresponda) utilizando los setters internos, que aplicarán una segunda 
        //capa de validación. Finalmente, el libro quedará vinculado al autor 
        //mediante la inserción del objeto libro en la lista interna del autor, 
        //y el método devolverá la instancia completa del libro creado.
        return libroAux;
    }

    pedirYcrearVariosLibros() {
        //permite la creación de múltiples libros de forma consecutiva. 
        //Este método invocará internamente a pedirYCrearLibro() para crear un 
        //libro completamente válido y, una vez creado, lo insertará en la 
        //colección de libros del sistema. Después, se preguntará al usuario 
        //si desea crear otro libro.
        do {
            this.pedirYcrearLibro();
        } while (confirm("¿Desea crear otro libro?"));
    }

    pedirYcrearAutor(nombre) {

        let autor = new Autor(nombre);
        this.#autores.insertarAutores([autor]);
        return autor;
    }

    pedirYcrearVariosAutores() {
        do {
            this.pedirYcrearAutor();
        } while (confirm("¿Desea crear otro Autor?"));
    }

    pedirYcrearClientes() {
        let dni = null;
        let nombreCompleto = null;
        let direccion = null;

        while (!Util.validarDni(dni) && !this.#clientes.existeClientePorDNI(dni)) {
            dni = this.#leerDatosPrompt.leerCadenaHasta("Introduce el dni:", 9, /^[0-9]{8}[A-Z]$/i);
        }

        console.log(!Util.validarNombrePersona(nombreCompleto))
        while (!Util.validarNombrePersona(nombreCompleto)) {
            nombreCompleto = this.#leerDatosPrompt.leerCadenaHasta("Introduce el nombre completo:");
        }

        while (!Util.validarDireccion(direccion)) {
            direccion = this.#leerDatosPrompt.leerCadenaHasta("Introduce la direccion: ");
        }

        let clienteAux = new Cliente(dni, nombreCompleto, direccion);

        return clienteAux; //¿Es necesario?
    }

    pedirYcrearVariosClientes() {
        while (confirm("¿Quieres crear un cliente?")) {
            this.pedirYcrearClientes();
        }
    }

    pedirYcrearPedido() {
        //TODO need Pedidos
    }

    //la Tienda contará con métodos equivalentes para solicitar y crear autores y
    //clientes siguiendo la misma estructura descrita en Libro. 
    //Los pedidos se hacen un poco diferentes. Tiene su opción en menú y en 
    //momento determinado solo hacemos un pedido. Si queremos hacer otro, 
    //pulsamos de nuevo la opción correspondiente.



    mostrarCatálogoLibrosDisponibles(texto = null) {
        if (texto == null) {
            return this.#libros.libros;
        } else {
            console.log("Texto:" + texto);
        }


    }

    buscarLibroPorIsbn(isbnAbuscar) {
        return this.libros.buscarLibroPorIsbn(isbnAbuscar);
    }

    buscarLibroPorNombreAutor(nombreAutor) {
        let autores = this.autores.buscarAutoresPorNombre(nombreAutor);
        let libros = [];
        autores.forEach(autor => {
            let librosAutor = autor.libros
            librosAutor.forEach(libro => {
                if (!libros.includes(libro)) {
                    libros.push(libro);
                }
            })
        });
        return libros;
    }

    buscarLibroPorGenero(genero) {
        return this.libros.buscarLibroPorGenero(genero);
    }

    buscarLibroPorTitulo(titulo) {
        return this.libros.buscarLibroPorTitulo(titulo);
    }

    actualizarStockLibros() {
        //pide los datos necesarios y actualiza el stock de los libros indicados 
        //por el usuario.
        let titulo = "Actualizar el stock:\n"
        let libro = null;
        let nuevoStock = null;
        let isbn = this.#leerDatosPrompt.leerEnteroHasta(`${titulo}\tIntroduce el isbn del libro a buscar: `);
        console.log(isbn);
        if (this.#libros.existeLibroPorIsbn(isbn)) {
            libro = this.#libros.buscarLibroPorIsbn(isbn);

            if (libro instanceof LibroPapel) {
                nuevoStock = this.#leerDatosPrompt.leerRealHasta(`${titulo}\tIntroduce el nuevo stock de ${libro.titulo}`);
                libro.ampliarStock(nuevoStock);
                alert(`El stock actual es: ${libro.stock}`);
            } else {
                alert(`${libro.titulo} no es un libro que maneje Stoks`)
            }

        } else {
            alert("Libro no encontrado");
        }

    }

    notificacionesStockLibrosMinimo() {
        //muestra un listado de los libros en papel que están sin stock o por 
        //debajo del mínimo establecido.
        let texto = "";
        this.#libros.libros.forEach(libro => {
            if (libro instanceof LibroPapel && libro.stock < LibroPapel.minimoStock) {
                texto += `${libro.titulo} esta por debajo del stock minimo, stock actual: ${libro.stock}`;
            }
        });

        if (texto == "") {
            texto = "No hay ningun libro por debajo del stock minimo";
        }

        alert(texto);

    } 

    mostrarPedidosAbiertoCliente() {
        //pide los datos necesarios y muestra un listado de los pedidos abiertos 
        //de un cliente determinado.
        //TODO need Pedidos and clientes

    }

    borrarCliente() {
        //pide los datos necesarios y borra un cliente y sus pedidos
        //TODO need Pedidos
        let dni = null;
        while (!Util.validarDni(dni)) {
            dni = this.#leerDatosPrompt.leerCadenaHasta("Introduce el dni:", 9, /^[0-9]{8}[A-Z]$/i);
        }
        this.#clientes.borrarClientePorDNI(dni);

    }

    hacerPedidoPorCliente() {
        //pide los datos necesarios y crea un nuevo pedido para el cliente indicado.
        //TODO need Pedidos and Clientes
    }

    mostrarPedidoPorID() {
        //pide los datos necesarios y muestra el pedido en cuestión.
        //TODO need Pedidos
    }

    existeClientePorDNI(dniAbuscar) {
        return this.#clientes.existeClientePorDNI(dniAbuscar);
    }   

    crearCliente(dni, nombreCompleto, direccion) {
        if (!this.existeClientePorDNI(dni)) {
            let nuevoCliente = new Cliente(dni, nombreCompleto, direccion);
            this.#clientes.insertarClientes([nuevoCliente]);
        }
    }

    existeLibroPorIsbn(isbnAbuscar) {
        return this.#libros.existeLibroPorIsbn(isbnAbuscar);
    }

    crearEbook(isbn, titulo, autores, genero, precio, tamanoArchivo, formato) {
        if (!this.existeLibroPorIsbn(isbn)) {
            let nuevoEbook = new Ebook(isbn, titulo, autores, genero, precio, tamanoArchivo, formato);
            this.#libros.insertarLibros([nuevoEbook]);
            autores.forEach(autor => {
                autor.insertarLibro(nuevoEbook);
            });
        }   
    }
    crearLibroPapel(isbn, titulo, autores, genero, precio, peso, dimensiones, stock) {
        if (!this.existeLibroPorIsbn(isbn)) {
            let nuevoLibroPapel = new LibroPapel(isbn, titulo, autores, genero, precio, peso, dimensiones, stock);
            this.#libros.insertarLibros([nuevoLibroPapel]);
            autores.forEach(autor => {
                autor.insertarLibro(nuevoLibroPapel);
            });
        }
    }
    //  - Todos aquellos que consideres necesarios.
}
