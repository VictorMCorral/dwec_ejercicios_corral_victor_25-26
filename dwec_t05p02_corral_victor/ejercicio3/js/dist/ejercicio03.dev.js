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
  console.log(libroPulsado);
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
    var autorSeleccionado = [];
    var autorEncontrado = rinconLector.autores.buscarAutoresPorNombre(autorInput.value);
    console.log(autorEncontrado);
    autorSeleccionado.push(autorEncontrado);

    if (tipoLibroInput === "Ebook") {
      rinconLector.crearEbook(isbnInput.value, tituloInput.value, autorSeleccionado, generoInput.value, parseFloat(precioInput.value), tamanoArchivo.value, formato.value);
    } else if (tipoLibroInput === "LibroPapel") {
      rinconLector.crearLibroPapel(isbnInput.value, tituloInput.value, autorSeleccionado, generoInput.value, parseFloat(precioInput.value), pesoConvertido, dimensiones.value, stock.value);
    }
  }

  console.log(rinconLector.libros);
}