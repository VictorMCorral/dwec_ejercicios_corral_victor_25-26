
class Clientes{
    // Un objeto Clientes tiene las siguientes propiedades:
    // listado de clientes: es un array con todos los clientes registrados en el sistema.
    #clientes;
    // También tiene los siguientes métodos:
    // Y un constructor que crea la lista de clientes vacía.
    constructor(){
        this.#clientes = [];
    }

    get clientes(){
        return this.#clientes;
    }
    existeClientePorDNI(dniAbuscar){
        // existeClientePorDNI(dniAbuscar): devuelve true o false si ya existe el cliente.
        return this.#clientes.some(cliente => cliente.dni == dniAbuscar);
    }
    insertarClientes(clientes){
        // insertarClientes(clientes): recibe un array de clientes y los inserta 
        //en la lista de clientes. Verifica antes de insertar que el dni no exista.
        // Devuelve el número de clientes insertados.
        let contador = null;
        clientes.forEach(cliente => {
            if(!this.existeClientePorDNI(cliente.dni)){
                this.#clientes.push(cliente);
                contador ++;
            }
        });

        return contador;
    }
    buscarClientePorDNI(dniAbuscar){
        // buscarClientePorDNI (dniAbuscar): devuelve un objeto cliente por dni.
        return this.#clientes.find(cliente => cliente.dni == dniAbuscar);
        
    }
    borrarClientePorDNI(dniAborrar){
        // borrarClientePorDNI (dniAborrar): devuelve true / false si puede o no borrar un cliente. Cuando se borra un cliente también se borran todos sus pedidos. Usa splice()
        //TODO need Pedidos para comprobar
        if(this.existeClientePorDNI(dniAborrar)){
            let indiceABorrar = this.#clientes.findIndex(cliente => cliente.dni == dniAborrar);
            this.#clientes.splice(indiceABorrar, 1);
        }

    }
    // No se pueden modificar los clientes.
    // Aquellos otros métodos que consideres necesarios.
}


