console.log("T05 - Ejercicio 03");

document.addEventListener("DOMContentLoaded", () => {

    const currentUrl = location.pathname;

    if (currentUrl.search("catalogo") !== -1) {
        cargarTabla();

        let buscador = document.querySelector("#formBuscador");
        buscador.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation();
            let textoBuscar = document.querySelector("#buscador").value;
            cargarTabla(textoBuscar);
        })
    } else if (currentUrl.search("clientes") !== -1) {
        cargarClientes();

        let lanzador = document.querySelector("#formCrearCliente");
        lanzador.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation();
            let dni = document.querySelector("#dni").value;
            let nombre = document.querySelector("#nombre").value;
            let direccion = document.querySelector("#direccion").value;
            validarDatos(dni, nombre, direccion);
            lanzador.classList.add('was-validated');
            cargarClientes();
        })
    } else if (currentUrl.search("nuevoLibro") !== -1) {
        let lanzador = document.querySelector("#formCrearLibro");
        let tipoLibroSelect = document.querySelector("#tipo");
        cargarAutoresEnSelect(rinconLector.autores.autores);
        tipoLibroSelect.addEventListener("change", () => {
            cargarTipoLibro();
        });

        lanzador.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation();
            validarDatosLibro();
            lanzador.classList.add('was-validated');
        })
    }
});
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

function cargarClientes() {
    let tabla = document.getElementById("resultadosBusquedaClientes");
    let cuerpo = tabla.querySelector("tbody");
    let entradaTabla = "";
    let clientes = rinconLector.clientes.clientes.slice().reverse();
    clientes.forEach(cliente => {
        entradaTabla += generarLineaCliente(cliente);
    });

    cuerpo.innerHTML = entradaTabla;

    let botones = cuerpo.querySelectorAll("input");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            cargarModalCliente(boton.id);
        })
    });
}

function cargarModalCliente(dni) {
    let clientePulsado = rinconLector.clientes.buscarClientePorDNI(dni);
    //console.log(clientePulsado);
    let modal = document.getElementById("modalClientes");
    let card = "";
    clientePulsado.listaPedidos.forEach(pedido => {
        let librosTexto = "";
        pedido.librosPedido.forEach((unidades, libro) => {
            librosTexto += `<p class="ps-5"> - ${libro.titulo} (ISBN: ${libro.isbn}): ${unidades} unidades</p>`;
        })

        card += `
            <div class="card" style="width: 18rem; margin: 10px;">
                <div class="card-body">
                    <h5 class="card-title">Pedido: ${pedido.id}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Fecha: ${pedido.fecha.toLocaleDateString()}</h6>
                    <p class="card-text">Libros pedidos: </p>
                    ${librosTexto}
                    <p class="card-text">Precio total con IVA: ${pedido.precioTotalConEnvioConIVA} €</p>    
                </div>
            </div>
        `
    }
    )
    modal.innerHTML = card;
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

function validarDatos(dni, nombreCompleto, direccion) {
    let dniInput = document.querySelector("#dni");
    let nombreInput = document.querySelector("#nombre");
    let direccionInput = document.querySelector("#direccion");
    let contadorErrores = 0;

    if (!Util.validarDni(dni) || rinconLector.existeClientePorDNI(dniInput.value)) {
        dniInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        dniInput.classList.remove('is-invalid');
    }
    if (!Util.validarNombrePersona(nombreCompleto)) {
        nombreInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        nombreInput.classList.remove('is-invalid');
    }
    if (!Util.validarDireccion(direccion)) {
        direccionInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        direccionInput.classList.remove('is-invalid');
    }

    if (contadorErrores == 0) {
        rinconLector.crearCliente(dniInput.value, nombreInput.value, direccionInput.value);
    }
}

function cargarTipoLibro() {
    let tipoLibro = document.querySelector("#tipo").value;
    let camposExtra = document.querySelector("#camposExtra");
    camposExtra.innerHTML = "";
    if (tipoLibro === "Ebook") {
        let tamanoArchivo = document.createElement("div");
        tamanoArchivo.id = "tamanoArchivoDiv";
        let formato = document.createElement("div");
        formato.id = "formatoDiv";

        tamanoArchivo.innerHTML = `
                    <label for="tamanoArchivo" class="form-label">Tamaño de archivo (kb): </label>
                    <input type="text" name="tamanoArchivo" id="tamanoArchivo" placeholder="Introduce el tamaño del archivo en kb" required class="form-control"/>
                    <div class="invalid-feedback">El tamaño del archivo debe ser un número positivo mayor que 0.</div>
                    `;
        formato.innerHTML = `
                    <label for="formato" class="form-label">Formato: </label>
                    <select name="formato" id="formato" required class="form-select">
                        <option value="" disabled selected>Selecciona un formato</option>
                        <option value="PDF">PDF</option>
                        <option value="EPUB">EPUB</option>
                        <option value="MOBI">MOBI</option>
                    </select>
                    <div class="invalid-feedback">Debes seleccionar un formato válido.</div>
                `;
        camposExtra.appendChild(tamanoArchivo);
        camposExtra.appendChild(formato);
        let br = document.createElement("br");
        camposExtra.appendChild(br);
    } else if (tipoLibro === "LibroPapel") {
        let peso = document.createElement("div");
        peso.id = "pesoDiv";
        let dimensiones = document.createElement("div");
        dimensiones.id = "dimensionesDiv";
        let stock = document.createElement("div");
        stock.id = "stockDiv";
        peso.innerHTML = `
                    <label for="peso" class="form-label">Peso (gr): </label>
                    <input type="number" name="peso" id="peso" placeholder="Introduce el peso en gramos" required class="form-control"/>
                    <div class="invalid-feedback">El peso debe ser un número positivo mayor que 0.</div>
                    `;
        dimensiones.innerHTML = `
                    <label for="dimensiones" class="form-label">Dimensiones (cm): </label>
                    <input type="text" name="dimensiones" id="dimensiones" placeholder="Introduce las dimensiones (LxAxH)" required class="form-control"/>      
                    <div class="invalid-feedback">Las dimensiones deben tener el formato correcto (ejemplo: 20x15x3).</div>
                    `;
        stock.innerHTML = `
                    <label for="stock" class="form-label">Stock (unidades): </label>
                    <input type="number" name="stock" id="stock" placeholder="Introduce el stock en unidades" required class="form-control"/>      
                    <div class="invalid-feedback">El stock debe ser un número positivo mayor que 0.</div>
                    `;
        camposExtra.appendChild(peso);
        camposExtra.appendChild(dimensiones);
        camposExtra.appendChild(stock);
        let br = document.createElement("br");
        camposExtra.appendChild(br);
    }

}

function cargarAutoresEnSelect(arrayAutores) {
    let selectAutor = document.querySelector("#autor");
    arrayAutores.forEach(autor => {
        let option = document.createElement("option");
        option.id = autor.id;
        option.value = autor.nombreCompleto;
        option.text = autor.nombreCompleto;
        selectAutor.appendChild(option);
    });
}

function validarDatosLibro() {
    let isbnInput = document.querySelector("#isbn");
    let tituloInput = document.querySelector("#titulo");
    let autorInput = document.querySelector("#autor");
    let generoInput = document.querySelector("#genero");
    let precioInput = document.querySelector("#precio");
    let tipoLibroInput = document.querySelector("#tipo").value;
    let pesoConvertido = null;

    let contadorErrores = 0;
    if (!Util.validarEntero(isbnInput.value) || rinconLector.existeLibroPorIsbn(isbnInput.value)) {
        isbnInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        isbnInput.classList.remove('is-invalid');
    }
    if (!Util.validarTitulo(tituloInput.value)) {
        tituloInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        tituloInput.classList.remove('is-invalid');
    }
    if (!Util.validarNombrePersona(autorInput.value)) {
        autorInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        autorInput.classList.remove('is-invalid');
    }
    if (!Util.validarGenero(generoInput.value, Libro.GENEROS_LITERARIOS)) {
        generoInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        generoInput.classList.remove('is-invalid');
    }
    if (!Util.validarReal(precioInput.value)) {
        precioInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        precioInput.classList.remove('is-invalid');
    }
    if (tipoLibroInput === "Ebook") {
        let tamanoArchivo = document.querySelector("#tamanoArchivo").value;
        let formato = document.querySelector("#formato").value;
        if (!Util.validarTamanoArchivo(tamanoArchivo)) {
            document.querySelector("#tamanoArchivo").classList.add('is-invalid');
            contadorErrores++;
        } else {
            document.querySelector("#tamanoArchivo").classList.remove('is-invalid');
        }
        if (!Util.validarFormato(formato, Ebook.FORMATOS)) {
            document.querySelector("#formato").classList.add('is-invalid');
            contadorErrores++;
        } else {
            document.querySelector("#formato").classList.remove('is-invalid');
        }
    } else if (tipoLibroInput === "LibroPapel") {
        let peso = document.querySelector("#peso").value;
        let dimensiones = document.querySelector("#dimensiones").value;
        let stock = document.querySelector("#stock").value;


        if (!Util.validarPeso(peso)) {
            document.querySelector("#peso").classList.add('is-invalid');
            contadorErrores++;
        } else {
            pesoConvertido = Util.validarYConvertirReal(peso);
            document.querySelector("#peso").classList.remove('is-invalid');
        }
        if (!Util.validarDimensiones(dimensiones)) {
            document.querySelector("#dimensiones").classList.add('is-invalid');
            contadorErrores++;
        } else {
            document.querySelector("#dimensiones").classList.remove('is-invalid');
        }
        if (!Util.validarStock(stock)) {
            document.querySelector("#stock").classList.add('is-invalid');
            contadorErrores++;
        } else {
            document.querySelector("#stock").classList.remove('is-invalid');
        }
    }
    if (autorInput.selectedOptions.length === 0) {
        autorInput.classList.add('is-invalid');
        contadorErrores++;
    } else {
        autorInput.classList.remove('is-invalid');
    }

    if (contadorErrores == 0) {
        let autorSeleccionado = [];
        let autorEncontrado = rinconLector.autores.buscarAutoresPorNombre(autorInput.value);
        console.log(autorEncontrado);
        autorSeleccionado.push(autorEncontrado);

        if (tipoLibroInput === "Ebook") {
            rinconLector.crearEbook(isbnInput.value, tituloInput.value, autorSeleccionado, generoInput.value, parseFloat(precioInput.value), tamanoArchivo.value, formato.value);
        } else if (tipoLibroInput === "LibroPapel") {
            rinconLector.crearLibroPapel(isbnInput.value, tituloInput.value, autorSeleccionado, generoInput.value, parseFloat(precioInput.value), pesoConvertido, dimensiones.value, stock.value);
        }
    }
    console.log(rinconLector.libros)
}


