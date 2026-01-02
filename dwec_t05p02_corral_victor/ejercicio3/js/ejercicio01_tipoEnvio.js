class TipoEnvio{
    // Una clase TipoEnvio tiene las siguientes propiedades:
    // -    	nombre (no puede haber dos tipos de envío con el mismo nombre)
    // -    	días máximo de entrega.
    // -    	paso máximo soportado.
    // -    	precio sin iva (*Solo hay un gasto de envío por pedido, independientemente del número de productos).
    #nombre;
    #diasMaximo;
    #pesoMaximo;
    #precioPorEnvio;

    // Y un constructor que recibe el nombre, el número de días y el precio.
    constructor(nombre, diasMaximo, precioPorEnvio){
        this.nombre = nombre;
        this.diasMaximo = diasMaximo;
        this.pesoMaximo = 0;
        this.precioPorEnvio = precioPorEnvio;
    }
    // Los siguientes métodos:
    // -getter // setter
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        if(Util.validarNombrePedido(nombre)){
            this.#nombre = nombre;
        }
    }

    get diasMaximo(){
        return this.#diasMaximo;
    }
    set diasMaximo(diasMaximo){
        if(Util.validarDiasEnvio(diasMaximo)){
            this.#diasMaximo =diasMaximo;
        }
    }

    get pesoMaximo(){
        return this.#pesoMaximo;
    }
    set pesoMaximo(pesoMaximo){
        if(Util.validarPeso(pesoMaximo)){
            this.#pesoMaximo = pesoMaximo
        }
    }

    get precioPorEnvio(){
        return this.#precioPorEnvio;
    }
    set precioPorEnvio(precioPorEnvio){
        if(Util.validarReal(precioPorEnvio)){
            this.#precioPorEnvio =precioPorEnvio;
        }
    }

    mostrarDatosTipoEnvio(){
        // -mostrarDatosTipoEnvio(): Devuelve una cadena con toda la información del objeto. No recibe nada.
        return `${this.nombre}; dias maximos de entrega: ${this.diasMaximo}; precio: ${this.#precioPorEnvio}`;
    }
    // -      Aquellos métodos que consideres necesarios.

}


