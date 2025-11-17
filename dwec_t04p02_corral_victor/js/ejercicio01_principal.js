console.log("T04 - Ejercicio 01_Principal");

const boton = document.getElementById("btn-comprar");
boton.addEventListener("click", () => {
    main();
})

function main(){
    let leerDatos = new LeerDatosPrompt();


    let valor = leerDatos.leerCadenaHasta("Esto es una prueba");
    console.log(valor);
}