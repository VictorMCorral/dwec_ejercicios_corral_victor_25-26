console.log("T05 - Ejercicio 02");

document.addEventListener("DOMContentLoaded", () => {
    crearContenido();

    let noticia = document.querySelector("p");
    let leerMas = document.querySelector("button");
    let ocultar = document.querySelector("#ocultar");


    leerMas.addEventListener("click", ()=> {
        cambiarVisibilidad(noticia, leerMas, ocultar);
    });
    ocultar.addEventListener("click", ()=> {
        cambiarVisibilidad(noticia, leerMas, ocultar);
    });
    
})


function cambiarVisibilidad(...args){

    // Segunda idea mas rapida y funcional
    args.forEach(element => {
        element.classList.toggle("d-none");
        element.classList.toggle("d-block");
    });


    // Primera idea
    // noticia.classList.toggle("d-block");
    // noticia.classList.toggle("d-none");

    // leerMas.classList.toggle("d-block");
    // leerMas.classList.toggle("d-none");
    
    // ocultar.classList.toggle("d-none");
    // ocultar.classList.toggle("d-block");

}

function crearContenido(){
    let principal = document.querySelector("main");

    let leerMas = document.createElement("button");
    let ocultar = document.createElement("a");

    leerMas.innerText = "Leer Mas";
    leerMas.className = "d-block";
    principal.appendChild(leerMas);


    ocultar.innerText = "Ocultar";
    ocultar.id = "ocultar";
    ocultar.className = "d-none";
    ocultar.href = "#";
    principal.appendChild(ocultar);
    
}
