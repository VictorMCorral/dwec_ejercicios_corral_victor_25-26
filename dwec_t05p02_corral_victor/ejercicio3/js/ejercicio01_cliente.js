class Cliente{
    // La clase cliente tiene los siguiente atributos:    
    //  - dni (aunque en nuestro caso para simplificar las pruebas será un número entero simple que introduce el  usuario al insertar el cliente en el sistema.
    //       No puede haber dos dni iguales aunque no lo controlo yo).
    //  - nombre completo
    //  - dirección
    //  - lista de pedidos hechos por el usuario (es un array de referencias a objetos Pedido). 
    #dni;
    #nombreCompleto;
    #direccion;
    #listaPedidos;
    // Y un constructor que recibe el dni, el nombre y la dirección.
    constructor(dni, nombreCompleto, direccion){
        this.dni = dni;
        this.nombreCompleto = nombreCompleto;
        this.direccion = direccion;
        this.#listaPedidos = [];
    }
    
    // Los siguientes métodos:
    // getter // setter
    get dni() {
        return this.#dni;
    }

    set dni(dni){
        if(Util.validarDni(dni)){
            this.#dni = dni;
        } else {
            throw new Error ("El dni no es correcto");
        }
    }

    get nombreCompleto() {
        return this.#nombreCompleto;
    }

    set nombreCompleto(nombreCompleto){
        if(Util.validarNombrePersona(nombreCompleto)){
            this.#nombreCompleto = nombreCompleto;
        } else {
            throw new Error("El nombre no es valido");
        }
    }

    get direccion() {
        return this.#direccion;
    }

    set direccion(direccion){
        if(Util.validarDireccion(direccion)){
            this.#direccion = direccion;
        }
    }

    get listaPedidos(){
        return this.#listaPedidos;
    }
    // mostrarDatosCliente(): Devuelve una cadena con toda la información del objeto. No recibe nada.
    mostrarDatosCliente(){
        return `${this.nombreCompleto}, dni: ${this.dni} direccion: ${this.direccion}; \n${this.mostrarPedidosClienteAbierto()}`;
    }
    // mostrarPedidosClienteAbierto(): Devuelve una cadena con toda la información de los pedidos abiertos de este cliente. No recibe nada.
    mostrarPedidos(){
        return this.listaPedidos;
    }

    insertarPedido(pedido){
        // insertarPedido(pedido): Inserta un pedido en la lista de pedidos del cliente. Devuelve el número de pedidos que tiene el cliente.
        this.#listaPedidos.push(pedido);
        return this.#listaPedidos.length;
    }

}

