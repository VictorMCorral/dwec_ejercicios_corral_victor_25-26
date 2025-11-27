console.log("T04 - Ejercicio 01_Principal");

const boton = document.getElementById("btn-comprar");
boton.addEventListener("click", () => {
    main();
})

function main(){
    const rinconLector = Tienda.getInstancia("El Rincon del lector");
    rinconLector.iniciar();
    rinconLector.cargarDatosPrueba();
    

    console.log("TODOS");
    rinconLector.clientes.clientes.forEach(cliente => {
        console.log(cliente.mostrarDatosCliente());
    });
    console.log("TRUE");
    console.log(rinconLector.tiposEnvios.existeTipoPorNombre("Envio 1"));
    console.log("FALSE");
    console.log(rinconLector.tiposEnvios.existeTipoPorNombre("Envio 3"));
    console.log(rinconLector.tiposEnvios.buscarTiposPorNombre("Envio a"));
    console.log(rinconLector.tiposEnvios.buscarTiposPorNombre("Envio 3"));
    console.log(rinconLector.tiposEnvios.obtenerCadenaTiposMenu());
    
    
    



    // switch (opcion){
    //     case 1: 
    //         break;
    // }
}