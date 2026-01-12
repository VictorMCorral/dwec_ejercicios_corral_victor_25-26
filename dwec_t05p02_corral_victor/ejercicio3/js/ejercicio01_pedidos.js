// Un objeto Pedidos tiene las siguientes propiedades:
//  - listado de pedidos: es un array con todos los pedidos registrados en el sistema.

// También tiene los siguientes métodos:
//  - existePedidoPorID(idAbuscar): devuelve true o false si ya existe el pedido.
//  - insertarPedido(pedidos): recibe un array de pedidos y los inserta en la lista de pedidos. Devuelve el número de pedidos insertados.
//  - buscarPedidoPorId (idAbuscar): devuelve un objeto pedido por id.
//  - cerrarPedidoPorId (idAbuscar): cierra un pedido por id. Devuelve true / false si lo ha pidido cerrar o no.
//  - borrarPedidos (pedidosAborrar): devuelve true / false si puede o no borrar todos los pedidos que recibe en un array. Usa splice()
//  - No se pueden modificar los pedidos.
//  - Aquellos otros métodos que consideres necesarios.

// Y un constructor que crea la lista de pedidos vacía.
class Pedidos{
    #listadoPedidos;

    constructor(){
        this.#listadoPedidos = [];
    }
    get listadoPedidos(){
        return this.#listadoPedidos;
    }   
    existePedidoPorID(idAbuscar){
        return this.#listadoPedidos.some(pedido => pedido.id === idAbuscar);
    }
    insertarPedido(pedidos){
        let contador = 0;   
        pedidos.forEach(pedido => {
            this.#listadoPedidos.push(pedido);
            contador++;
        });
        return contador;
    }
    buscarPedidoPorId(idAbuscar){
        return this.#listadoPedidos.find(pedido => pedido.id === idAbuscar);
    }
    cerrarPedidoPorId(idAbuscar){
        let pedidoEncontrado = this.buscarPedidoPorId(idAbuscar);
        if(pedidoEncontrado && pedidoEncontrado.abierto){
            pedidoEncontrado.abierto = false;
            return true;
        } else {
            return false;
        }   
    }
    borrarPedidos(pedidosAborrar){
        for (let pedido of pedidosAborrar){
            let index = this.#listadoPedidos.indexOf(pedido);
            if (index !== -1) {
                this.#listadoPedidos.splice(index, 1);
            }
        }   
        return true;
    }
}
