console.log("T05 - Ejercicio 01");

document.addEventListener("DOMContentLoaded", () => {

    crearContenido();
    let botones = document.querySelectorAll("button");
    console.log(botones);

    botones[0].addEventListener("click", () => {
        cambiarColor("bg-danger")
    });
    botones[1].addEventListener("click", () => {
        cambiarColor("bg-primary")
    });
    botones[2].addEventListener("click", () => {
        cambiarColor("bg-success")
    });
    
})

function cambiarColor(clase){
    let principal = document.querySelector("main");
    let claseTotal = "container my-4 " + clase;
    principal.className =claseTotal;
}

function crearContenido(){
    let botonRojo = document.createElement("button");
    botonRojo.innerText = "Cambiar a Rojo";
    let botonAzul = document.createElement("button");
    botonAzul.innerText = "Cambiar a Azul";
    let botonVerde = document.createElement("button");
    botonVerde.innerText = "Cambiar a Verde";

    let principal = document.querySelector("main");
    
    principal.appendChild(botonRojo);
    principal.appendChild(botonAzul);
    principal.appendChild(botonVerde);
}
