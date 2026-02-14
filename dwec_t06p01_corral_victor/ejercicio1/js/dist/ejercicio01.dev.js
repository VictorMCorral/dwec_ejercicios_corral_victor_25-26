"use strict";

console.log("T06 - Ejercicio 01");
var datos = [];
var casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
var favoritos = null;
document.addEventListener("DOMContentLoaded", function _callee2() {
  var buscador, formulario, btnAceptar, btnRechazar, botonesCookies;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          buscador = document.getElementById("buscador");
          _context2.next = 3;
          return regeneratorRuntime.awrap(cargarDatos('https://hp-api.onrender.com/api/characters/'));

        case 3:
          datos = _context2.sent;
          cargarFavoritos();
          buscador.addEventListener("input", function (event) {
            var textoBuscar = document.querySelector("#buscador").value;
            cargarTabla(textoBuscar);
          });
          formulario = document.getElementById("formBuscador");
          formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            event.stopPropagation();
            var textoBuscar = document.querySelector("#buscador").value;

            if (textoBuscar != "") {
              document.getElementById('buscador').classList.remove('is-invalid');
              cargarTabla(textoBuscar);
              formulario.classList.add("was-validated");
            } else {
              document.getElementById('buscador').classList.add('is-invalid');
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
          btnAceptar = document.querySelector("#btnAceptarCookies");
          btnRechazar = document.querySelector("#btnRechazarCookies");
          botonesCookies = [btnAceptar, btnRechazar];
          botonesCookies.forEach(function (boton) {
            boton.addEventListener("click", function (event) {
              cookiesAceptar(event.target.textContent);
            });
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function cargarDatos(url) {
  var response;
  return regeneratorRuntime.async(function cargarDatos$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          response = _context3.sent;

          if (response.ok) {
            _context3.next = 6;
            break;
          }

          throw new Error("Error HTTP: ".concat(response.status));

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          return _context3.abrupt("return", _context3.sent);

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error('Error al obtener los datos:', _context3.t0);
          return _context3.abrupt("return", []);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
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

  if (filtrado.length > 0) {
    filtrado.forEach(function (personaje) {
      fila = generarFila(personaje);
    });
  } else {
    fila = generarFila();
  }

  cuerpo.appendChild(fila);
}

function generarFila(datos) {
  var fila = document.createElement("tr");
  ;

  if (datos) {
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
    boton.addEventListener("change", function (event) {
      if (event.target.checked) {
        agregarFavorito(event.target.id);
      } else {
        eliminarFavorito(event.target.id);
      }
    });
    boton.id = datos.name;
    boton.type = "checkbox";
    var encontrado = false;
    favoritos.forEach(function (personaje) {
      if (personaje.name === datos.name) {
        encontrado = true;
      }
    });
    boton.checked = encontrado;
    favorito.appendChild(boton);
    fila.appendChild(favorito);
  } else {
    var columna = document.createElement("td");
    columna.colSpan = "7";
    columna.textContent = "No existen datos";
    fila.appendChild(columna);
  }

  return fila;
}

function generarCard(datos) {
  var card = "";

  if (datos) {
    card = "\n            <div class=\"col\">\n                <div class=\"card\">\n                    <img src=\"".concat(datos.image || '../img/logo.png', "\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(datos.name, "</h5>\n                        <p class=\"card-text\">Casa: ").concat(datos.house, "</p>\n                        <p class=\"card-text\">Patronus: ").concat(datos.patronus, "</p>\n                        <p class=\"card-text\">Especie: ").concat(datos.species, "</p>\n                        <p class=\"card-text\">A\xF1o de nacimiento: ").concat(datos.yearOfBirth || 'Sin informacion', "</p>\n                    </div>\n                </div>\n            </div>\n        ");
  } else {
    card = "\n        <div class=\"col\">\n            <div class=\"card\">\n                <img src=\"../img/logo.png\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Sin Datos</h5>\n                        <p class=\"card-text\">No hay datos</p>\n                    </div>\n                </div>\n            </div>\n    ";
  }

  return card;
}

function cargarPjCasas() {
  var personajesAleatorios, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, contenedor;

  return regeneratorRuntime.async(function cargarPjCasas$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          personajesAleatorios = "";
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context5.prev = 4;

          _loop = function _loop() {
            var casa, data, aleatorios;
            return regeneratorRuntime.async(function _loop$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    casa = _step.value;
                    _context4.next = 3;
                    return regeneratorRuntime.awrap(cargarDatos("https://hp-api.onrender.com/api/characters/house/".concat(casa)));

                  case 3:
                    data = _context4.sent;
                    aleatorios = generarAleatorio(0, data.length - 1);
                    aleatorios.forEach(function (personaje) {
                      personajesAleatorios += generarCard(data[personaje]);
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          };

          _iterator = casas[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context5.next = 13;
            break;
          }

          _context5.next = 10;
          return regeneratorRuntime.awrap(_loop());

        case 10:
          _iteratorNormalCompletion = true;
          _context5.next = 7;
          break;

        case 13:
          _context5.next = 19;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context5.t0;

        case 19:
          _context5.prev = 19;
          _context5.prev = 20;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 22:
          _context5.prev = 22;

          if (!_didIteratorError) {
            _context5.next = 25;
            break;
          }

          throw _iteratorError;

        case 25:
          return _context5.finish(22);

        case 26:
          return _context5.finish(19);

        case 27:
          contenedor = document.getElementById("contenedor");
          contenedor.innerHTML = personajesAleatorios;

        case 29:
        case "end":
          return _context5.stop();
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

function agregarFavorito(name) {
  console.log("Agregar Favorito");
  var favorito = datos.find(function (personaje) {
    return personaje.name === name;
  });

  if (favorito) {
    favoritos.push(favorito);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    cargarFavoritos();
  }
}

function eliminarFavorito(name) {
  console.log("Eliminar favorito");
  var indice = favoritos.findIndex(function (personaje) {
    return personaje.name === name;
  });

  if (indice !== -1) {
    favoritos.splice(indice, 1);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    cargarFavoritos();
  }
}

function cargarFavoritos() {
  var favoritosList = document.getElementById("favoritosGroup");
  favoritosList.innerHTML = "";
  favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // let favoritosTexto = "";

  favoritos.forEach(function (personaje) {
    //favoritosTexto += generarCard(personaje);
    favoritosList.appendChild(generarEnlaceFavorito(personaje));
  }); //let favoritosContenedor = document.getElementById("favoritos");
  //favoritosContenedor.innerHTML = favoritosTexto;
  // console.log("Cargado favoritos");
  // console.log(favoritos);
}

function generarEnlaceFavorito(datos) {
  var enlace = document.createElement("a");
  enlace.className = "list-group-item list-group-item-action flex-column align-items-start";
  var div = document.createElement("div");
  div.className = "d-flex w-100 justify-content-between";
  var nombre = document.createElement("h5");
  nombre.textContent = datos.name;
  div.appendChild(nombre);
  var casa = document.createElement("small");
  casa.textContent = datos.house;
  div.appendChild(casa);
  enlace.appendChild(div);
  var descripcion = document.createElement("p");
  descripcion.textContent = "Casa: ".concat(datos.house || "Sin informacion", ", Patronus: ").concat(datos.patronus || "Sin informacion", ", Especie: ").concat(datos.species || "Sin informacion", ", A\xF1o de nacimiento: ").concat(datos.yearOfBirth || "Sin informacion");
  enlace.appendChild(descripcion);
  return enlace;
}