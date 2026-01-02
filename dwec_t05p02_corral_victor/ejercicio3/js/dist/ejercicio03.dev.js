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
    var stock = 1;
    var autores = "";

    for (var i = 0; i < libro.autor.length; i++) {
      autores += "".concat(libro.autor[i].nombreCompleto);
      if (i != libro.autor.length - 1) autores += ", ";
    }

    if (libro instanceof Ebook) {
      tipoLibro = "Ebook";
    } else if (libro instanceof LibroPapel) {
      tipoLibro = "Libro en Papel";
      stock = libro.stock;
    }

    entradaTabla += "\n        <tr>\n            <td>".concat(libro.isbn, "</td>\n            <td>").concat(libro.titulo, "</td>\n            <td>").concat(autores, "</td>\n            <td>").concat(libro.genero, "</td>\n            <td>").concat(libro.precio, " \u20AC</td>\n            <td>").concat(tipoLibro, "</td>\n            <td>").concat(stock, "</td>\n            <td>\n                <input type=\"button\" value=\"Ver detalles\" id=\"").concat(libro.isbn, "\" data-bs-toggle=\"modal\" data-bs-target=\"#modalLibros\"/>\n            </td>\n        </tr>");
  }

  return entradaTabla;
}

function cargarClientes() {
  var texto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  //TODO cargar clientes
  var tabla = document.getElementById("resultadosBusquedaClientes");
  var cuerpo = tabla.querySelector("tbody");
  var entradaTabla = "";
  var clientes = rinconLector.clientes.clientes;
  clientes.forEach(function (cliente) {
    entradaTabla += generarLineaCliente(cliente);
  });
  cuerpo.innerHTML = entradaTabla;
  var botones = cuerpo.querySelectorAll("input");
  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      cargarModal(boton.id);
    });
  });
}

function generarLineaCliente(cliente) {
  var entradaTabla = "";

  if (cliente != null) {
    entradaTabla = "\n            <tr>\n                <td class=\"text-center\">".concat(cliente.dni, "</td>\n                <td class=\"text-center\">").concat(cliente.nombreCompleto, "</td>\n                <td class=\"text-center\">").concat(cliente.direccion, "</td>\n                <td class=\"text-center\">\n                    <input type=\"button\" value=\"Ver pedidos\" id=\"").concat(cliente.dni, "\"/>   \n                </td>\n            </tr>\n        ");
  }

  return entradaTabla;
}