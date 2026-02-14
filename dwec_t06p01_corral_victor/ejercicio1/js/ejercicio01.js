console.log("T06 - Ejercicio 01");

let datos = [];
let casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
let favoritos = null;

document.addEventListener("DOMContentLoaded", async () => {
    let buscador = document.getElementById("buscador");
    datos = await cargarDatos('https://hp-api.onrender.com/api/characters/');
    cargarFavoritos();
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
            document.getElementById('buscador').classList.remove('is-invalid')
            cargarTabla(textoBuscar);
            formulario.classList.add("was-validated");
        } else {
            document.getElementById('buscador').classList.add('is-invalid')
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

async function cargarDatos(url) {
    // const response = await fetch('https://hp-api.onrender.com/api/characters');
    // datos = await response.json();
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
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
    if (filtrado.length > 0) {
        filtrado.forEach(personaje => {
            fila = generarFila(personaje);
        });
    } else {
        fila = generarFila();
    }
    cuerpo.appendChild(fila);

}


function generarFila(datos) {
    let fila = document.createElement("tr");;
    if (datos) {
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

        boton.addEventListener("change", (event) => {
            if (event.target.checked) {
                agregarFavorito(event.target.id);
            } else {
                eliminarFavorito(event.target.id)
            }
        })

        boton.id = datos.name
        boton.type = "checkbox"
        let encontrado = false;
        favoritos.forEach(personaje => {
            if (personaje.name === datos.name) {
                encontrado = true;
            }
        });
        boton.checked = encontrado;
        favorito.appendChild(boton);
        fila.appendChild(favorito);
    } else {
        let columna = document.createElement("td");
        columna.colSpan = "7";
        columna.textContent = "No existen datos";
        fila.appendChild(columna);
    }


    return fila;
}

function generarCard(datos) {
    let card = "";
    if (datos) {
        card = `
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
    } else {
        card = `
        <div class="col">
            <div class="card">
                <img src="../img/logo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Sin Datos</h5>
                        <p class="card-text">No hay datos</p>
                    </div>
                </div>
            </div>
    `;
    }
    return card
}

async function cargarPjCasas() {
    let personajesAleatorios = "";

    for (const casa of casas) {
        // const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${casa}`);
        // const data = await response.json();
        const data = await cargarDatos(`https://hp-api.onrender.com/api/characters/house/${casa}`)

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
        navigator.geolocation.getCurrentPosition(showPosition, function (error) {
            console.error("Error al obtener la geolocalización:", error);
            alert("No se pudo obtener tu ubicación.");
        });
    } else {
        alert("Tu navegador no soporta la geolocalización.");
    }
}

function agregarFavorito(name) {
    console.log("Agregar Favorito")
    let favorito = datos.find(personaje => personaje.name === name);
    if (favorito) {
        favoritos.push(favorito);
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
        cargarFavoritos();
    }
}

function eliminarFavorito(name) {
    console.log("Eliminar favorito")
    let indice = favoritos.findIndex(personaje => personaje.name === name);
    if (indice !== -1) {
        favoritos.splice(indice, 1);
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
        cargarFavoritos();
    }
}

function cargarFavoritos() {
    let favoritosList = document.getElementById("favoritosGroup")
    favoritosList.innerHTML = "";

    favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    // let favoritosTexto = "";

    favoritos.forEach(personaje => {
        //favoritosTexto += generarCard(personaje);
        favoritosList.appendChild(generarEnlaceFavorito(personaje));
    });

    //let favoritosContenedor = document.getElementById("favoritos");
    //favoritosContenedor.innerHTML = favoritosTexto;

    // console.log("Cargado favoritos");
    // console.log(favoritos);
}

function generarEnlaceFavorito(datos) {
    let enlace = document.createElement("a");
    enlace.className = "list-group-item list-group-item-action flex-column align-items-start"
    let div = document.createElement("div");
    div.className = "d-flex w-100 justify-content-between";
    let nombre = document.createElement("h5");
    nombre.textContent = datos.name;
    div.appendChild(nombre);
    let casa = document.createElement("small");
    casa.textContent = datos.house;
    div.appendChild(casa);
    enlace.appendChild(div);
    let descripcion = document.createElement("p");
    descripcion.textContent = `Casa: ${datos.house || "Sin informacion"}, Patronus: ${datos.patronus || "Sin informacion"}, Especie: ${datos.species || "Sin informacion"}, Año de nacimiento: ${datos.yearOfBirth || "Sin informacion"}`
    enlace.appendChild(descripcion);
    return enlace
}