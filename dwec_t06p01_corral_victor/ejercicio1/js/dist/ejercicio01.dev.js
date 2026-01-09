"use strict";

console.log("T06 - Ejercicio 01");
var datos = null;
var casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
document.addEventListener("DOMContentLoaded", function () {
  cargarDatos();
  var buscador = document.getElementById("buscador");
  buscador.addEventListener("input", function (event) {
    var textoBuscar = document.querySelector("#buscador").value;
    cargarTabla(textoBuscar);
  });
  var formulario = document.getElementById("formBuscador");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var textoBuscar = document.querySelector("#buscador").value;

    if (textoBuscar != "") {
      cargarTabla(textoBuscar);
    }
  });
  mostrarCookies();
  mostrarLoader();
  geolocalizacionPrieto();
  setTimeout(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(cargarPjCasas());

          case 2:
            ocultarLoader();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }, 2000);
  var btnAceptar = document.querySelector("#btnAceptarCookies");
  var btnRechazar = document.querySelector("#btnRechazarCookies");
  var botonesCookies = [btnAceptar, btnRechazar];
  botonesCookies.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
      cookiesAceptar(event.target.textContent);
    });
  });
});

function cargarDatos() {
  var response;
  return regeneratorRuntime.async(function cargarDatos$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch('https://hp-api.onrender.com/api/characters'));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          datos = _context2.sent;

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function cargarTabla(texto) {
  var tabla = document.getElementById("resultadosBusqueda");
  var headTabla = tabla.querySelector("thead");
  headTabla.innerHTML = "";
  var cabecera = document.createElement("tr");
  var image = document.createElement("th");
  image.textContent = "Imagen";
  cabecera.appendChild(image);
  var name = document.createElement("th");
  name.textContent = "Nombre";
  cabecera.appendChild(name);
  var house = document.createElement("th");
  house.textContent = "Casa";
  cabecera.appendChild(house);
  var patronus = document.createElement("th");
  patronus.textContent = "Patronus";
  cabecera.appendChild(patronus);
  var species = document.createElement("th");
  species.textContent = "Especie";
  cabecera.appendChild(species);
  var yearOfBirth = document.createElement("th");
  yearOfBirth.textContent = "Año de nacimiento";
  cabecera.appendChild(yearOfBirth);
  var favorito = document.createElement("th");
  favorito.textContent = "Favorito";
  cabecera.appendChild(favorito);
  headTabla.appendChild(cabecera);
  var cuerpo = tabla.querySelector("tbody");
  cuerpo.innerHTML = "";
  var filtrado = datos.filter(function (personaje) {
    return personaje.name.toLowerCase().includes(texto);
  });
  filtrado.forEach(function (personaje) {
    fila = generarFila(personaje);
    cuerpo.appendChild(fila);
  });
}

function generarFila(datos) {
  var fila = document.createElement("tr");
  var image = document.createElement("td");
  image.innerHTML = "<img src=".concat(datos.image || "../img/logo.png", " alt=\"\" class=\"logo-header me-2\">");
  image.className = "logo-header";
  fila.appendChild(image);
  var name = document.createElement("td");
  name.textContent = datos.name;
  fila.appendChild(name);
  var house = document.createElement("td");
  house.textContent = datos.house;
  fila.appendChild(house);
  var patronus = document.createElement("td");
  patronus.textContent = datos.patronus;
  fila.appendChild(patronus);
  var species = document.createElement("td");
  species.textContent = datos.species;
  fila.appendChild(species);
  var yearOfBirth = document.createElement("td");
  yearOfBirth.textContent = datos.yearOfBirth;
  fila.appendChild(yearOfBirth);
  var favorito = document.createElement("td");
  var boton = document.createElement("input");
  boton.addEventListener("change", agregarFavorito);
  boton.type = "checkbox";
  boton.value = false;
  favorito.appendChild(boton);
  fila.appendChild(favorito);
  return fila;
}

function generarCard(datos) {
  var card = "\n        <div class=\"col\">\n            <div class=\"card\">\n                <img src=\"".concat(datos.image || '../img/logo.png', "\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(datos.name, "</h5>\n                    <p class=\"card-text\">Casa: ").concat(datos.house, "</p>\n                    <p class=\"card-text\">Patronus: ").concat(datos.patronus, "</p>\n                    <p class=\"card-text\">Especie: ").concat(datos.species, "</p>\n                    <p class=\"card-text\">A\xF1o de nacimiento: ").concat(datos.yearOfBirth || 'Sin informacion', "</p>\n                </div>\n            </div>\n        </div>\n");
  return card;
}

function cargarPjCasas() {
  var personajesAleatorios, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, contenedor;

  return regeneratorRuntime.async(function cargarPjCasas$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          personajesAleatorios = "";
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context4.prev = 4;

          _loop = function _loop() {
            var casa, response, data, aleatorios;
            return regeneratorRuntime.async(function _loop$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    casa = _step.value;
                    _context3.next = 3;
                    return regeneratorRuntime.awrap(fetch("https://hp-api.onrender.com/api/characters/house/".concat(casa)));

                  case 3:
                    response = _context3.sent;
                    _context3.next = 6;
                    return regeneratorRuntime.awrap(response.json());

                  case 6:
                    data = _context3.sent;
                    aleatorios = generarAleatorio(0, data.length - 1);
                    aleatorios.forEach(function (personaje) {
                      personajesAleatorios += generarCard(data[personaje]);
                    });

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          };

          _iterator = casas[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context4.next = 13;
            break;
          }

          _context4.next = 10;
          return regeneratorRuntime.awrap(_loop());

        case 10:
          _iteratorNormalCompletion = true;
          _context4.next = 7;
          break;

        case 13:
          _context4.next = 19;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context4.t0;

        case 19:
          _context4.prev = 19;
          _context4.prev = 20;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 22:
          _context4.prev = 22;

          if (!_didIteratorError) {
            _context4.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context4.finish(22);

        case 26:
          return _context4.finish(19);

        case 27:
          contenedor = document.getElementById("contenedor");
          contenedor.innerHTML = personajesAleatorios;

        case 29:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[4, 15, 19, 27], [20,, 22, 26]]);
}

function generarAleatorio(min, max) {
  var n1 = Math.floor(Math.random() * (max - min + 1)) + min;
  var n2 = Math.floor(Math.random() * (max - min + 1)) + min;
  return [n1, n2];
}

function mostrarLoader() {
  var loader = document.getElementById("loader");
  loader.style.display = "block"; // mostrar gif
}

function ocultarLoader() {
  var loader = document.getElementById("loader");
  loader.style.display = "none"; // ocultar gif
}

function mostrarCookies() {
  var estadoCookie = sessionStorage.getItem("EstadoCookies");
  console.log(estadoCookie);
  var cookiesDiv = document.querySelector("#avisoCookies");

  if (estadoCookie == "Aceptar" || estadoCookie == "Rechazar") {
    cookiesDiv.style.display = "none";
  } else {
    cookiesDiv.style.display = "block";
  }
}

function cookiesAceptar(objetivo) {
  sessionStorage.setItem("EstadoCookies", objetivo);
  var cookiesDiv = document.querySelector("#avisoCookies");
  cookiesDiv.style.display = "none";
}

function geolocalizacionPrieto() {
  // Inicializar el mapa con una vista predeterminada
  var map = L.map('map').setView([51.505, -0.09], 13); // Capa de OpenStreetMap (¡sin espacios en la URL!)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map); // Función para manejar la posición obtenida

  function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude; // Mover la vista del mapa a la ubicación del usuario

    map.setView([lat, lng], 15); // Añadir un marcador en la ubicación del usuario

    L.marker([lat, lng]).addTo(map).bindPopup('Tu ubicación').openPopup();
  } // Solicitar la geolocalización al navegador


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, function (error) {
      console.error("Error al obtener la geolocalización:", error);
      alert("No se pudo obtener tu ubicación.");
    });
  } else {
    alert("Tu navegador no soporta la geolocalización.");
  }
}

function agregarFavorito() {
  //TODO
  console.log("funciona");
}

function eliminarFavorito() {//TODO
}