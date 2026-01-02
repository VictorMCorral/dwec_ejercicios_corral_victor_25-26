console.log("T05 - Ejercicio 03");

document.addEventListener("DOMContentLoaded", () => {

    const currentUrl = location.pathname;
    
    if(currentUrl.search("catalogo") !== -1){
        cargarTabla();
        
        let buscador = document.querySelector("#formBuscador");
        buscador.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation();
            let textoBuscar = document.querySelector("#buscador").value;
            cargarTabla(textoBuscar);
        })
    } else if (currentUrl.search("clientes") !== -1){
        cargarClientes();
    }

})

const rinconLector = Tienda.getInstancia("El Rincon del lector");
rinconLector.iniciar();
rinconLector.cargarDatosPrueba();




function cargarTabla(texto = null) {
    let tabla = document.getElementById("resultadosBusqueda");
    let cuerpo = tabla.querySelector("tbody");
    let entradaTabla = "";

    if (texto == null || texto == "") {
        let libros = rinconLector.mostrarCatálogoLibrosDisponibles();

        libros.forEach(libro => {
            entradaTabla += generarLinea(libro);
        });

    } else {
        let librosMostrar = []

        let libros = rinconLector.buscarLibroPorTitulo(texto);

        libros.forEach(libro => {
            if (!librosMostrar.includes(libro)) {
                librosMostrar.push(libro);
            }
        })


        libros = rinconLector.buscarLibroPorGenero(texto);

        libros.forEach(libro => {
            if (!librosMostrar.includes(libro)) {
                librosMostrar.push(libro);
            }
        })


        libros = rinconLector.buscarLibroPorNombreAutor(texto);

        libros.forEach(libro => {
            if (!librosMostrar.includes(libro)) {
                librosMostrar.push(libro);
            }
        })


        librosMostrar.forEach(libro => {
            entradaTabla += generarLinea(libro);
        })

    }

    cuerpo.innerHTML = entradaTabla;

    let botones = cuerpo.querySelectorAll("input");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            cargarModal(boton.id);
        })
    });

}

function cargarModal(isbn) {
    let libroPulsado = rinconLector.buscarLibroPorIsbn(isbn);
    console.log(libroPulsado);
    let modal = document.getElementById("modalLibros");
    let autor = libroPulsado.autor;
    let texto = `
        <h5>Isbn: ${libroPulsado.isbn}</h5>
        <p class="ps-5">Genero: ${libroPulsado.genero}</p>
        <p class="ps-5">Autor: ${autor[0].nombreCompleto}</p>
        <p class="ps-5">Precio: ${libroPulsado.precio} €</p>
    `
    if (libroPulsado instanceof Ebook) {
        texto += `
            <p class="ps-5">Tamaño de archivo: ${libroPulsado.tamanoArchivo} kb</p>
            <p class="ps-5">Formato: ${libroPulsado.formato}</p>
            `
    } else if (libroPulsado instanceof LibroPapel) {
        texto += `
            <p class="ps-5">Peso: ${libroPulsado.peso} gr</p>
            <p class="ps-5">Dimensiones: ${libroPulsado.dimensiones} cm</p>
            <p class="ps-5">Stock: ${libroPulsado.stock} unidades</p>
            `

    }


    modal.querySelector("#titulo").innerHTML = libroPulsado.titulo;
    modal.querySelector("#cuerpo").innerHTML = texto;

}


function generarLinea(libro) {
    let entradaTabla = "";
    if (libro != null) {
        let tipoLibro = "";
        let stock = 1;
        let autores = "";
        for (let i = 0; i < libro.autor.length; i++) {
            autores += `${libro.autor[i].nombreCompleto}`
            if (i != libro.autor.length - 1)
                autores += ", "
        }

        if (libro instanceof Ebook) {
            tipoLibro = "Ebook";
        } else if (libro instanceof LibroPapel) {
            tipoLibro = "Libro en Papel";
            stock = libro.stock;
        }
        entradaTabla += `
        <tr>
            <td>${libro.isbn}</td>
            <td>${libro.titulo}</td>
            <td>${autores}</td>
            <td>${libro.genero}</td>
            <td>${libro.precio} €</td>
            <td>${tipoLibro}</td>
            <td>${stock}</td>
            <td>
                <input type="button" value="Ver detalles" id="${libro.isbn}" data-bs-toggle="modal" data-bs-target="#modalLibros"/>
            </td>
        </tr>`
    }

    return entradaTabla
}

function cargarClientes(texto = null) {
    //TODO cargar clientes
    let tabla = document.getElementById("resultadosBusquedaClientes");
    let cuerpo = tabla.querySelector("tbody");
    let entradaTabla = "";
    let clientes = rinconLector.clientes.clientes
    clientes.forEach(cliente => {
        entradaTabla += generarLineaCliente(cliente);
    });

    cuerpo.innerHTML = entradaTabla;

    let botones = cuerpo.querySelectorAll("input");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            cargarModal(boton.id);
        })
    });
}


function generarLineaCliente(cliente) {
    let entradaTabla = "";
    if (cliente != null) {
        entradaTabla = `
            <tr>
                <td class="text-center">${cliente.dni}</td>
                <td class="text-center">${cliente.nombreCompleto}</td>
                <td class="text-center">${cliente.direccion}</td>
                <td class="text-center">
                    <input type="button" value="Ver pedidos" id="${cliente.dni}"/>   
                </td>
            </tr>
        `
    }

    return entradaTabla
}
