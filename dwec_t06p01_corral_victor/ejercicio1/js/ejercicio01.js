console.log("T06 - Ejercicio 01");

let datos = null;
let casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
document.addEventListener("DOMContentLoaded", () => {
    cargarDatos();

    let buscador = document.getElementById("buscador");

    buscador.addEventListener("input", (event) => {
        let textoBuscar = document.querySelector("#buscador").value;
        cargarTabla(textoBuscar);
    })

    let formulario = document.getElementById("formBuscador");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();
        let textoBuscar = document.querySelector("#buscador").value;
        if (textoBuscar != "") {
            cargarTabla(textoBuscar);
        }
    })

    mostrarCookies();

    mostrarLoader();

    geolocalizacionPrieto()

    setTimeout(async () => {
        await cargarPjCasas();
        ocultarLoader();
    }, 2000);

    let btnAceptar = document.querySelector("#btnAceptarCookies");
    let btnRechazar = document.querySelector("#btnRechazarCookies");
    const botonesCookies = [btnAceptar, btnRechazar];
    botonesCookies.forEach(boton => {
        boton.addEventListener("click", (event) => {
            cookiesAceptar(event.target.textContent)
        });
    });

});

async function cargarDatos() {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    datos = await response.json();

}

function cargarTabla(texto) {
    let tabla = document.getElementById("resultadosBusqueda");
    let headTabla = tabla.querySelector("thead");
    headTabla.innerHTML = "";

    let cabecera = document.createElement("tr");
    let image = document.createElement("th");
    image.textContent = "Imagen"
    cabecera.appendChild(image);

    let name = document.createElement("th");
    name.textContent = "Nombre"
    cabecera.appendChild(name);

    let house = document.createElement("th");
    house.textContent = "Casa"
    cabecera.appendChild(house);

    let patronus = document.createElement("th");
    patronus.textContent = "Patronus"
    cabecera.appendChild(patronus);

    let species = document.createElement("th");
    species.textContent = "Especie"
    cabecera.appendChild(species);

    let yearOfBirth = document.createElement("th");
    yearOfBirth.textContent = "Año de nacimiento"
    cabecera.appendChild(yearOfBirth);

    let favorito = document.createElement("th");
    favorito.textContent = "Favorito"
    cabecera.appendChild(favorito);
    headTabla.appendChild(cabecera);

    let cuerpo = tabla.querySelector("tbody");
    cuerpo.innerHTML = "";
    let filtrado = datos.filter(personaje => personaje.name.toLowerCase().includes(texto));
    filtrado.forEach(personaje => {
        fila = generarFila(personaje);
        cuerpo.appendChild(fila);
    });

}


function generarFila(datos) {
    let fila = document.createElement("tr");

    let image = document.createElement("td");
    image.innerHTML = `<img src=${datos.image || "../img/logo.png"} alt="" class="logo-header me-2">`
    image.className = "logo-header"
    fila.appendChild(image);

    let name = document.createElement("td");
    name.textContent = datos.name
    fila.appendChild(name);

    let house = document.createElement("td");
    house.textContent = datos.house
    fila.appendChild(house);

    let patronus = document.createElement("td");
    patronus.textContent = datos.patronus
    fila.appendChild(patronus);

    let species = document.createElement("td");
    species.textContent = datos.species
    fila.appendChild(species);

    let yearOfBirth = document.createElement("td");
    yearOfBirth.textContent = datos.yearOfBirth
    fila.appendChild(yearOfBirth);

    let favorito = document.createElement("td");
    let boton = document.createElement("input");
    boton.addEventListener("change", agregarFavorito);
    boton.type = "checkbox"
    boton.value = false;
    favorito.appendChild(boton);
    fila.appendChild(favorito);

    return fila;
}

function generarCard(datos) {
    let card = `
        <div class="col">
            <div class="card">
                <img src="${datos.image || '../img/logo.png'}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${datos.name}</h5>
                    <p class="card-text">Casa: ${datos.house}</p>
                    <p class="card-text">Patronus: ${datos.patronus}</p>
                    <p class="card-text">Especie: ${datos.species}</p>
                    <p class="card-text">Año de nacimiento: ${datos.yearOfBirth || 'Sin informacion'}</p>
                </div>
            </div>
        </div>
`
    return card
}

async function cargarPjCasas() {
    let personajesAleatorios = "";

    for (const casa of casas) {
        const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${casa}`);
        const data = await response.json();
        let aleatorios = generarAleatorio(0, data.length - 1);
        aleatorios.forEach(personaje => {
            personajesAleatorios += generarCard(data[personaje]);
        });
    }

    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = personajesAleatorios;
}

function generarAleatorio(min, max) {
    let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let n2 = Math.floor(Math.random() * (max - min + 1)) + min;
    return [n1, n2];
}

function mostrarLoader() {
    const loader = document.getElementById("loader");
    loader.style.display = "block"; // mostrar gif
}

function ocultarLoader() {
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // ocultar gif
}

function mostrarCookies() {
    let estadoCookie = sessionStorage.getItem("EstadoCookies")
    console.log(estadoCookie);
    let cookiesDiv = document.querySelector("#avisoCookies");

    if (estadoCookie == "Aceptar" || estadoCookie == "Rechazar") {
        cookiesDiv.style.display = "none";
    } else {
        cookiesDiv.style.display = "block";
    }
}

function cookiesAceptar(objetivo) {
    sessionStorage.setItem("EstadoCookies", objetivo);
    let cookiesDiv = document.querySelector("#avisoCookies");
    cookiesDiv.style.display = "none";
}

function geolocalizacionPrieto() {
    // Inicializar el mapa con una vista predeterminada
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Capa de OpenStreetMap (¡sin espacios en la URL!)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Función para manejar la posición obtenida
    function showPosition(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        // Mover la vista del mapa a la ubicación del usuario
        map.setView([lat, lng], 15);

        // Añadir un marcador en la ubicación del usuario
        L.marker([lat, lng]).addTo(map)
            .bindPopup('Tu ubicación')
            .openPopup();
    }

    // Solicitar la geolocalización al navegador
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, function(error) {
            console.error("Error al obtener la geolocalización:", error);
            alert("No se pudo obtener tu ubicación.");
        });
    } else {
        alert("Tu navegador no soporta la geolocalización.");
    }
}

function agregarFavorito() {
    //TODO
    console.log("funciona")
}

function eliminarFavorito() {
    //TODO
}