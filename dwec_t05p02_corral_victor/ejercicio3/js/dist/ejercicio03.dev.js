"use strict";

console.log("T05 - Ejercicio 03");
document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = location.pathname;

  if (currentUrl.search("catalogo") !== -1) {
    cargarTabla();
    var buscador = document.querySelector("#formBuscador");
    buscador.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
      var textoBuscar = document.querySelector("#buscador").value;
      cargarTabla(textoBuscar);
    });
  } else if (currentUrl.search("clientes") !== -1) {
    cargarClientes();
    var lanzador = document.querySelector("#formCrearCliente");
    lanzador.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
      var dni = document.querySelector("#dni").value;
      var nombre = document.querySelector("#nombre").value;
      var direccion = document.querySelector("#direccion").value;
      validarDatos(dni, nombre, direccion);
      lanzador.classList.add('was-validated');
      cargarClientes();
    });
  } else if (currentUrl.search("nuevoLibro") !== -1) {
    var _lanzador = document.querySelector("#formCrearLibro");

    var tipoLibroSelect = document.querySelector("#tipo");
    cargarAutoresEnSelect(rinconLector.autores.autores);
    tipoLibroSelect.addEventListener("change", function () {
      cargarTipoLibro();
    });

    _lanzador.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
      validarDatosLibro();

      _lanzador.classList.add('was-validated');
    });
  } else if (currentUrl.search("crearPedido") !== -1) {
    var _lanzador2 = document.querySelector("#formBuscadorCliente");

    _lanzador2.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
      validarBusquedaCliente();

      _lanzador2.classList.add('was-validated');
    });

    var lanzadorLibro = document.querySelector("#formCrearPedido");
    lanzadorLibro.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
      validarBusquedaLibro();
      lanzadorLibro.classList.add('was-validated');
    });
    var btnPagar = document.querySelector("#btnPagarPedido");
    btnPagar.addEventListener("click", function () {
      validarPedido();
    });
    var btnCancelar = document.querySelector("#btnCancelarPedido");
    btnCancelar.addEventListener("click", function () {
      borrarTodo();
    });
  }
});
var rinconLector = Tienda.getInstancia("El Rincon del lector");
rinconLector.iniciar();
rinconLector.cargarDatosPrueba();

function cargarTabla() {
  var texto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var tabla = document.getElementById("resultadosBusqueda");
  var cuerpo = tabla.querySelector("tbody");
  var entradaTabla = "";

  if (texto == null || texto == "") {
    var libros = rinconLector.mostrarCatálogoLibrosDisponibles();
    libros.forEach(function (libro) {
      entradaTabla += generarLinea(libro);
    });
  } else {
    var librosMostrar = [];

    var _libros = rinconLector.buscarLibroPorTitulo(texto);

    _libros.forEach(function (libro) {
      if (!librosMostrar.includes(libro)) {
        librosMostrar.push(libro);
      }
    });

    _libros = rinconLector.buscarLibroPorGenero(texto);

    _libros.forEach(function (libro) {
      if (!librosMostrar.includes(libro)) {
        librosMostrar.push(libro);
      }
    });

    _libros = rinconLector.buscarLibroPorNombreAutor(texto);

    _libros.forEach(function (libro) {
      if (!librosMostrar.includes(libro)) {
        librosMostrar.push(libro);
      }
    });

    librosMostrar.forEach(function (libro) {
      entradaTabla += generarLinea(libro);
    });
  }

  cuerpo.innerHTML = entradaTabla;
  var botones = cuerpo.querySelectorAll("input");
  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      cargarModal(boton.id);
    });
  });
}

function cargarModal(isbn) {
  var libroPulsado = rinconLector.buscarLibroPorIsbn(isbn);
  var modal = document.getElementById("modalLibros");
  var autor = libroPulsado.autor;
  var texto = "\n        <h5>Isbn: ".concat(libroPulsado.isbn, "</h5>\n        <p class=\"ps-5\">Genero: ").concat(libroPulsado.genero, "</p>\n        <p class=\"ps-5\">Autor: ").concat(autor[0].nombreCompleto, "</p>\n        <p class=\"ps-5\">Precio: ").concat(libroPulsado.precio, " \u20AC</p>\n    ");

  if (libroPulsado instanceof Ebook) {
    texto += "\n            <p class=\"ps-5\">Tama\xF1o de archivo: ".concat(libroPulsado.tamanoArchivo, " kb</p>\n            <p class=\"ps-5\">Formato: ").concat(libroPulsado.formato, "</p>\n            ");
  } else if (libroPulsado instanceof LibroPapel) {
    texto += "\n            <p class=\"ps-5\">Peso: ".concat(libroPulsado.peso, " gr</p>\n            <p class=\"ps-5\">Dimensiones: ").concat(libroPulsado.dimensiones, " cm</p>\n            <p class=\"ps-5\">Stock: ").concat(libroPulsado.stock, " unidades</p>\n            ");
  }

  modal.querySelector("#titulo").innerHTML = libroPulsado.titulo;
  modal.querySelector("#cuerpo").innerHTML = texto;
}

function generarLinea(libro) {
  var entradaTabla = "";

  if (libro != null) {
    var tipoLibro = "";
    var _stock = 1;
    var autores = "";

    for (var i = 0; i < libro.autor.length; i++) {
      autores += "".concat(libro.autor[i].nombreCompleto);
      if (i != libro.autor.length - 1) autores += ", ";
    }

    if (libro instanceof Ebook) {
      tipoLibro = "Ebook";
    } else if (libro instanceof LibroPapel) {
      tipoLibro = "Libro en Papel";
      _stock = libro.stock;
    }

    entradaTabla += "\n        <tr>\n            <td>".concat(libro.isbn, "</td>\n            <td>").concat(libro.titulo, "</td>\n            <td>").concat(autores, "</td>\n            <td>").concat(libro.genero, "</td>\n            <td>").concat(libro.precio, " \u20AC</td>\n            <td>").concat(tipoLibro, "</td>\n            <td>").concat(_stock, "</td>\n            <td>\n                <input type=\"button\" value=\"Ver detalles\" id=\"").concat(libro.isbn, "\" data-bs-toggle=\"modal\" data-bs-target=\"#modalLibros\"/>\n            </td>\n        </tr>");
  }

  return entradaTabla;
}

function cargarClientes() {
  var tabla = document.getElementById("resultadosBusquedaClientes");
  var cuerpo = tabla.querySelector("tbody");
  var entradaTabla = "";
  var clientes = rinconLector.clientes.clientes.slice().reverse();
  clientes.forEach(function (cliente) {
    entradaTabla += generarLineaCliente(cliente);
  });
  cuerpo.innerHTML = entradaTabla;
  var botones = cuerpo.querySelectorAll("input");
  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      cargarModalCliente(boton.id);
    });
  });
}

function cargarModalCliente(dni) {
  var clientePulsado = rinconLector.clientes.buscarClientePorDNI(dni); //console.log(clientePulsado);

  var modal = document.getElementById("modalClientes");
  var card = "";
  clientePulsado.listaPedidos.forEach(function (pedido) {
    var librosTexto = "";
    pedido.librosPedido.forEach(function (unidades, libro) {
      librosTexto += "<p class=\"ps-5\"> - ".concat(libro.titulo, " (ISBN: ").concat(libro.isbn, "): ").concat(unidades, " unidades</p>");
    });
    card += "\n            <div class=\"card\" style=\"width: 18rem; margin: 10px;\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Pedido: ".concat(pedido.id, "</h5>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">Fecha: ").concat(pedido.fecha.toLocaleDateString(), "</h6>\n                    <p class=\"card-text\">Libros pedidos: </p>\n                    ").concat(librosTexto, "\n                    <p class=\"card-text\">Precio total con IVA: ").concat(pedido.precioTotalConEnvioConIVA, " \u20AC</p>    \n                </div>\n            </div>\n        ");
  });
  modal.innerHTML = card;
}

function generarLineaCliente(cliente) {
  var entradaTabla = "";

  if (cliente != null) {
    entradaTabla = "\n            <tr>\n                <td class=\"text-center\">".concat(cliente.dni, "</td>\n                <td class=\"text-center\">").concat(cliente.nombreCompleto, "</td>\n                <td class=\"text-center\">").concat(cliente.direccion, "</td>\n                <td class=\"text-center\">\n                    <input type=\"button\" value=\"Ver pedidos\" id=\"").concat(cliente.dni, "\"/>   \n                </td>\n            </tr>\n        ");
  }

  return entradaTabla;
}

function validarDatos(dni, nombreCompleto, direccion) {
  var dniInput = document.querySelector("#dni");
  var nombreInput = document.querySelector("#nombre");
  var direccionInput = document.querySelector("#direccion");
  var contadorErrores = 0;

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
  var tipoLibro = document.querySelector("#tipo").value;
  var camposExtra = document.querySelector("#camposExtra");
  camposExtra.innerHTML = "";

  if (tipoLibro === "Ebook") {
    var _tamanoArchivo = document.createElement("div");

    _tamanoArchivo.id = "tamanoArchivoDiv";

    var _formato = document.createElement("div");

    _formato.id = "formatoDiv";
    _tamanoArchivo.innerHTML = "\n                    <label for=\"tamanoArchivo\" class=\"form-label\">Tama\xF1o de archivo (kb): </label>\n                    <input type=\"text\" name=\"tamanoArchivo\" id=\"tamanoArchivo\" placeholder=\"Introduce el tama\xF1o del archivo en kb\" required class=\"form-control\"/>\n                    <div class=\"invalid-feedback\">El tama\xF1o del archivo debe ser un n\xFAmero positivo mayor que 0.</div>\n                    ";
    _formato.innerHTML = "\n                    <label for=\"formato\" class=\"form-label\">Formato: </label>\n                    <select name=\"formato\" id=\"formato\" required class=\"form-select\">\n                        <option value=\"\" disabled selected>Selecciona un formato</option>\n                        <option value=\"pdf\">PDF</option>\n                        <option value=\"epub\">EPUB</option>\n                        <option value=\"mobi\">MOBI</option>\n                    </select>\n                    <div class=\"invalid-feedback\">Debes seleccionar un formato v\xE1lido.</div>\n                ";
    camposExtra.appendChild(_tamanoArchivo);
    camposExtra.appendChild(_formato);
    var br = document.createElement("br");
    camposExtra.appendChild(br);
  } else if (tipoLibro === "LibroPapel") {
    var peso = document.createElement("div");
    peso.id = "pesoDiv";

    var _dimensiones = document.createElement("div");

    _dimensiones.id = "dimensionesDiv";

    var _stock2 = document.createElement("div");

    _stock2.id = "stockDiv";
    peso.innerHTML = "\n                    <label for=\"peso\" class=\"form-label\">Peso (gr): </label>\n                    <input type=\"number\" name=\"peso\" id=\"peso\" placeholder=\"Introduce el peso en gramos\" required class=\"form-control\"/>\n                    <div class=\"invalid-feedback\">El peso debe ser un n\xFAmero positivo mayor que 0.</div>\n                    ";
    _dimensiones.innerHTML = "\n                    <label for=\"dimensiones\" class=\"form-label\">Dimensiones (cm): </label>\n                    <input type=\"text\" name=\"dimensiones\" id=\"dimensiones\" placeholder=\"Introduce las dimensiones (LxAxH)\" required class=\"form-control\"/>      \n                    <div class=\"invalid-feedback\">Las dimensiones deben tener el formato correcto (ejemplo: 20x15x3).</div>\n                    ";
    _stock2.innerHTML = "\n                    <label for=\"stock\" class=\"form-label\">Stock (unidades): </label>\n                    <input type=\"number\" name=\"stock\" id=\"stock\" placeholder=\"Introduce el stock en unidades\" required class=\"form-control\"/>      \n                    <div class=\"invalid-feedback\">El stock debe ser un n\xFAmero positivo mayor que 0.</div>\n                    ";
    camposExtra.appendChild(peso);
    camposExtra.appendChild(_dimensiones);
    camposExtra.appendChild(_stock2);

    var _br = document.createElement("br");

    camposExtra.appendChild(_br);
  }
}

function cargarAutoresEnSelect(arrayAutores) {
  var selectAutor = document.querySelector("#autor");
  arrayAutores.forEach(function (autor) {
    var option = document.createElement("option");
    option.id = autor.id;
    option.value = autor.nombreCompleto;
    option.text = autor.nombreCompleto;
    selectAutor.appendChild(option);
  });
}

function validarDatosLibro() {
  var isbnInput = document.querySelector("#isbn");
  var tituloInput = document.querySelector("#titulo");
  var autorInput = document.querySelector("#autor");
  var generoInput = document.querySelector("#genero");
  var precioInput = document.querySelector("#precio");
  var tipoLibroInput = document.querySelector("#tipo").value;
  var pesoConvertido = null;
  var contadorErrores = 0;

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
    var _tamanoArchivo2 = document.querySelector("#tamanoArchivo").value;
    var _formato2 = document.querySelector("#formato").value;

    if (!Util.validarTamanoArchivo(_tamanoArchivo2)) {
      document.querySelector("#tamanoArchivo").classList.add('is-invalid');
      contadorErrores++;
    } else {
      document.querySelector("#tamanoArchivo").classList.remove('is-invalid');
    }

    if (!Util.validarFormato(_formato2, Ebook.FORMATOS)) {
      document.querySelector("#formato").classList.add('is-invalid');
      contadorErrores++;
    } else {
      document.querySelector("#formato").classList.remove('is-invalid');
    }
  } else if (tipoLibroInput === "LibroPapel") {
    var peso = document.querySelector("#peso").value;
    var _dimensiones2 = document.querySelector("#dimensiones").value;
    var _stock3 = document.querySelector("#stock").value;

    if (!Util.validarPeso(peso)) {
      document.querySelector("#peso").classList.add('is-invalid');
      contadorErrores++;
    } else {
      pesoConvertido = Util.validarYConvertirReal(peso);
      document.querySelector("#peso").classList.remove('is-invalid');
    }

    if (!Util.validarDimensiones(_dimensiones2)) {
      document.querySelector("#dimensiones").classList.add('is-invalid');
      contadorErrores++;
    } else {
      document.querySelector("#dimensiones").classList.remove('is-invalid');
    }

    if (!Util.validarStock(_stock3)) {
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
    var autorEncontrado = rinconLector.autores.buscarAutoresPorNombre(autorInput.value);

    if (tipoLibroInput === "Ebook") {
      rinconLector.crearEbook(isbnInput.value, tituloInput.value, autorEncontrado, generoInput.value, parseFloat(precioInput.value), tamanoArchivo.value, formato.value);
    } else if (tipoLibroInput === "LibroPapel") {
      rinconLector.crearLibroPapel(isbnInput.value, tituloInput.value, autorEncontrado, generoInput.value, parseFloat(precioInput.value), pesoConvertido, dimensiones.value, stock.value);
    }
  }

  console.log(rinconLector.libros);
}

function validarBusquedaCliente() {
  var dniInput = document.querySelector("#buscador");
  var resultadosBusqueda = document.querySelector("#resultadoBusqueda");
  resultadosBusqueda.innerHTML = "";
  var contadorErrores = 0;

  if (!Util.validarDni(dniInput.value)) {
    dniInput.classList.add('is-invalid');
    contadorErrores++;
  } else {
    dniInput.classList.remove('is-invalid');
  }

  if (contadorErrores == 0) {
    buscarCliente();
  }
}

function buscarCliente() {
  var dniBuscar = document.querySelector("#buscador").value;
  var resultadosBusqueda = document.querySelector("#resultadoBusqueda");
  var itemLibro = document.getElementById("btnLibro");
  resultadosBusqueda.innerHTML = "";
  var clienteEncontrado = rinconLector.clientes.buscarClientePorDNI(dniBuscar);

  if (clienteEncontrado != null) {
    pedidoActual = new Pedido(clienteEncontrado);
    rinconLector.pedidos.insertarPedido([pedidoActual]);
    resultadosBusqueda.innerHTML = "\n                    <p>\n                        Cliente encontrado: ".concat(clienteEncontrado.nombreCompleto, "\n                        <input type=\"button\" id=\"deseleccionarCliente\" value=\"Deseleccionar\">\n                        <input type=\"hidden\" id=\"idPedidoActual\" value=\"").concat(pedidoActual.id, "\">\n                    </p>\n                ");
    document.getElementById('collapseLibro').classList.add('show');
    document.getElementById("btnCancelarPedido").disabled = false;
    itemLibro.disabled = false;
    var botonDeseleccionar = document.querySelector("#deseleccionarCliente");
    botonDeseleccionar.addEventListener("click", function () {
      deseleccionarCliente();
    });
  } else {
    resultadosBusqueda.innerHTML = "\n                    <p>No se ha encontrado ning\xFAn cliente con ese DNI.</p>\n                ";
  }
}

function deseleccionarCliente() {
  var pedidoBorrar = document.querySelector("#idPedidoActual").value;
  var pedidoObjeto = rinconLector.pedidos.buscarPedidoPorId(pedidoBorrar);
  rinconLector.pedidos.borrarPedidos([pedidoObjeto]);
  var resultadosBusqueda = document.querySelector("#resultadoBusqueda");
  resultadosBusqueda.innerHTML = "";
  var itemLibro = document.getElementById("btnLibro");
  itemLibro.disabled = true;
  document.getElementById('collapseLibro').classList.remove('show');
  var dniInput = document.querySelector("#buscador");
  dniInput.value = "";
}

function validarBusquedaLibro() {
  var isbnInput = document.querySelector("#buscadorLibro");
  var resultadosBusqueda = document.querySelector("#resultadoBusquedaLibro");
  resultadosBusqueda.innerHTML = "";
  var contadorErrores = 0;

  if (!Util.validarEntero(isbnInput.value)) {
    isbnInput.classList.add('is-invalid');
    contadorErrores++;
  } else {
    isbnInput.classList.remove('is-invalid');
  }

  if (contadorErrores == 0) {
    buscarLibro();
  }
}

function buscarLibro() {
  var isbnBuscar = document.querySelector("#buscadorLibro").value;
  var resultadosBusqueda = document.querySelector("#resultadoBusquedaLibro");
  var libroEncontrado = rinconLector.buscarLibroPorIsbn(isbnBuscar);

  if (libroEncontrado != null) {
    resultadosBusqueda.innerHTML = "\n            <p>\n                Libro encontrado: ".concat(libroEncontrado.titulo, " \n                <br>\n                ISBN: ").concat(libroEncontrado.isbn, " \n                <br>\n                Precio sin IVA: ").concat(libroEncontrado.precio, " \u20AC\n                <br>\n                <input type=\"number\" id=\"unidadesLibro\" min=\"1\" value=\"1\" class=\"form-control w-25 d-inline-block\"/>\n                <input type=\"button\" id=\"agregarLibro\" value=\"Agregar al pedido\" class=\"btn btn-primary\"/>\n            </p>\n        ");
    var botonAgregar = document.querySelector("#agregarLibro");
    botonAgregar.addEventListener("click", function () {
      var unidades = parseInt(document.querySelector("#unidadesLibro").value);
      agregarLibroAlPedido(libroEncontrado, unidades);
      cargarTipoEnvios();
      document.querySelector("#tipoEnvio").disabled = false;
      document.getElementById('collapseEnvio').classList.add('show');
    });
  } else {
    resultadosBusqueda.innerHTML = "\n            <p>No se ha encontrado ning\xFAn libro con ese ISBN.</p>\n        ";
  }
}

function cargarTipoEnvios() {
  var selectEnvio = document.querySelector("#tipoEnvio");
  selectEnvio.innerHTML = '';
  var defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "Selecciona un tipo de envío";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectEnvio.appendChild(defaultOption);
  var tiposEnvios = rinconLector.tiposEnvios.tiposEnvios; //console.log(tiposEnvios);

  var idPedidoActual = parseInt(document.querySelector("#idPedidoActual").value);
  var pedidoActual = rinconLector.pedidos.buscarPedidoPorId(idPedidoActual);
  var allEbook = true;
  pedidoActual.librosPedido.forEach(function (unidades, libro) {
    if (!(libro instanceof Ebook)) {
      allEbook = false;
    }
  });
  var tiposFiltrados = tiposEnvios;

  if (allEbook) {
    tiposFiltrados = tiposEnvios.filter(function (tipo) {
      return tipo.precioPorEnvio == 0;
    });
  } else {
    tiposFiltrados = tiposEnvios.filter(function (tipo) {
      return tipo.precioPorEnvio > 0;
    });
  }

  tiposFiltrados.forEach(function (tipoEnvio) {
    var option = document.createElement("option");
    option.id = tipoEnvio.nombre;
    option.value = tipoEnvio.nombre;
    option.text = "".concat(tipoEnvio.nombre, " (").concat(tipoEnvio.precioPorEnvio, " \u20AC)");
    selectEnvio.appendChild(option);
  });
  selectEnvio.addEventListener("change", function () {
    var idPedidoActual = parseInt(document.querySelector("#idPedidoActual").value);
    var pedidoActual = rinconLector.pedidos.buscarPedidoPorId(idPedidoActual);
    var tipoEnvioSeleccionado = rinconLector.tiposEnvios.buscarTiposPorNombre(selectEnvio.value);
    pedidoActual.establecerTipoEnvio(tipoEnvioSeleccionado);
    document.getElementById("btnPagarPedido").disabled = false;
    actualizarDetallesPedido();
  });
}

function actualizarDetallesPedido() {
  var detallesPedido = document.querySelector("#detallesPedido");
  var idPedidoActual = parseInt(document.querySelector("#idPedidoActual").value);
  var pedidoActual = rinconLector.pedidos.buscarPedidoPorId(idPedidoActual);
  var librosTexto = "";
  pedidoActual.librosPedido.forEach(function (unidades, libro) {
    librosTexto += "<p class=\"ps-5\"> - ".concat(libro.titulo, " (ISBN: ").concat(libro.isbn, "): ").concat(unidades, " unidades</p>");
  });
  var tipoEnvioTexto = pedidoActual.tipoEnvioPedido ? pedidoActual.tipoEnvioPedido.nombre : "No seleccionado";
  pedidoActual.calcularTotal();
  var precioTotal = pedidoActual.precioTotalConEnvioConIVA;
  librosTexto += "<p class=\"ps-5\">Tipo de env\xEDo: ".concat(tipoEnvioTexto, "</p>");
  librosTexto += "<p class=\"ps-5\">Precio total con IVA: ".concat(precioTotal, " \u20AC</p>");
  detallesPedido.innerHTML = "\n        <h5>Detalles del pedido:</h5>\n        <p class=\"mb-1\">Libros pedidos: </p>\n        ".concat(librosTexto, "\n    ");
}

function agregarLibroAlPedido(libro, unidades) {
  var idPedidoActual = parseInt(document.querySelector("#idPedidoActual").value);
  var pedidoActual = rinconLector.pedidos.buscarPedidoPorId(idPedidoActual);
  pedidoActual.insertarLibro(libro, unidades);
  actualizarDetallesPedido();
}

function validarPedido() {
  var idPedidoActual = parseInt(document.querySelector("#idPedidoActual").value);
  var pedidoActual = rinconLector.pedidos.buscarPedidoPorId(idPedidoActual);
  var errores = 0;

  if (pedidoActual.librosPedido.size === 0) {
    errores++;
  }

  if (pedidoActual.hayLibrosFisicos() && pedidoActual.tipoEnvioPedido == null) {
    errores++;
  }

  if (pedidoActual.hayEbooks() && pedidoActual.tipoEnvioPedido.precioPorEnvio !== 0) {
    errores++;
  }

  if (errores === 0) {
    console.log("Pedido válido");
    borrarTodo();
  }
}

function borrarTodo() {
  var selectEnvio = document.querySelector("#tipoEnvio");
  selectEnvio.innerHTML = '';
  var detallesPedido = document.querySelector("#detallesPedido");
  detallesPedido.innerHTML = '';
  document.getElementById('collapseEnvio').classList.remove('show');
  Pedido.ultimoIdAsignado--;
  deseleccionarCliente();
}