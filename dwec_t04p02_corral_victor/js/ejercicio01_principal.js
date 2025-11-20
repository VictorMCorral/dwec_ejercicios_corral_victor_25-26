console.log("T04 - Ejercicio 01_Principal");

const boton = document.getElementById("btn-comprar");
boton.addEventListener("click", () => {
    main();
})

function main(){
    let libro1 = new Ebook(555555555, "Titulo 1", ["este", "esta", "Estos"], "Novela", 10.24, 1024, "pdf")


    let libro2 = new LibroPapel(555555555, "Titulo 1", ["este", "esta", "Estos"], "Novela", 10.25, 1024, "20x05x50", 2)


    let biblioteca = new Libros();
    biblioteca.insertarLibros([libro1, libro2]);
    console.log(biblioteca.obtenerCadenaLibrosMenu());
    //TODO Terminar de comprobar los metodos
    
}