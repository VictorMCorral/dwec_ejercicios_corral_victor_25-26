console.log("T05 - Ejercicio 07");

const datosFP = {
    "DAW": {
        "Programación": [
            "RA1: Analizar requisitos",
            "RA2: Implementar funcionalidad"
        ],
        "Bases de Datos": [
            "RA1: Diseñar estructuras",
            "RA2: Gestionar BBDD"
        ]
    },
    "ASIR": {
        "ISO": [
            "RA1: Instalar SO",
            "RA2: Configurar servicios básicos"
        ],
        "ASO": [
            "RA1: Gestionar usuarios",
            "RA2: Automatizar tareas"
        ]
    },
    "SMR": {
        "Montaje y Mantenimiento": [
            "RA1: Montar equipos",
            "RA2: Encontrar averías"
        ],
        "Redes Locales": [
            "RA1: Configurar dispositivos de red",
            "RA2: Comprobar conectividad"
        ]
    }
};


document.addEventListener("DOMContentLoaded", () => {
    let selects = document.querySelectorAll("select");

    selects.forEach(element => {
        element.addEventListener("change", (e) => {
            comprobarSelect(e);
        })

    });

})



function comprobarSelect(e) {
    let elemento = e.target;
    rellenarSelect(elemento);
}

function rellenarSelectManual(elemento) {
    if (elemento.id == "ciclo") {
        let elementoActivar = document.getElementById("modulos");
        elementoActivar.disabled = false;

        let opcions = `
            <option value="0" selected disabled>-- Elige una opcion --</option>
            <option value="Programacion">Programacion</option>
            <option value="Servidor">Servidor</option>
            <option value="Base de datos">Base de datos</option>
            `
        elementoActivar.innerHTML = opcions;
        let elementoDes = document.getElementById("RAS");
        elementoDes.disabled = true;
        let opcionDef = `<option value="0" selected disabled>-- Elige una opcion --</option>`
        elementoDes.innerHTML = opcionDef;
    }

    if (elemento.id == "modulos") {
        let elementoActivar = document.getElementById("RAS");
        elementoActivar.disabled = false;

        let opcions = `
            <option value="0" selected disabled>-- Elige una opcion --</option>
            <option value="RA 1">RA 1</option>
            <option value="RA 2">RA 2</option>
            <option value="RA 3">RA 3</option>
            `
        elementoActivar.innerHTML = opcions;
    }
}


function rellenarSelect(elemento){
    let opcionDef = "<option value='0' selected disabled>-- Elige una opcion --</option>";
    if(elemento.id == "ciclo"){
        let elementoActivar = document.getElementById("modulos");
        elementoActivar.disabled = false;

        let cicloSeleccionado = elemento.value;
        let modulos = datosFP[cicloSeleccionado];
        let opciones = "";

        for(modul in modulos){
            opciones += `<option value="${modul}">${modul}</option>`
        }

        elementoActivar.innerHTML = opcionDef + opciones; 

        let elementoDes = document.getElementById("RAS");
        elementoDes.innerHTML = opcionDef;
        elementoDes.disabled = true;

        let imprimir = document.getElementById("seleccion");
        imprimir.innerHTML = "";
    }

    if(elemento.id == "modulos"){
        let elementoActivar = document.getElementById("RAS");
        elementoActivar.disabled = false;

        let cicloSeleccionado = document.getElementById("ciclo").value;
        let moduloSeleccionado = elemento.value;

        let ras = datosFP[cicloSeleccionado][moduloSeleccionado]

        let opciones = "";

        ras.forEach(ra => {
            opciones += `<option value="${ra}">${ra}</option>`
        });

        elementoActivar.innerHTML = opcionDef + opciones;
        let imprimir = document.getElementById("seleccion");
        imprimir.innerHTML = "";
    }

    if(elemento.id == "RAS"){
        let imprimir = document.getElementById("seleccion");
        let seleccionFinal = "";
        let selects = document.querySelectorAll("select");

        selects.forEach(element => {
            seleccionFinal += `${element.value}`
            if(element.id != "RAS"){
                seleccionFinal += "->"
            }
        });

        imprimir.innerHTML = seleccionFinal;
    }
}