console.log("T05 - Ejercicio 03");

document.addEventListener("DOMContentLoaded", () => {
    let imagen = document.querySelector("img");
    const eventos = ["click", "dblclick", "mousedown", "mousemove", "mouseover", "mouseout", "mouseup"];

    eventos.forEach(evento => {
        imagen.addEventListener(evento, (e)=> {
            console.log(e.type + " => " + e.target + " => " + e.clientX)
        })
    });

})



