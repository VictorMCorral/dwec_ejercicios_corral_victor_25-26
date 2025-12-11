console.log("T05 - Ejercicio 08");

document.addEventListener("DOMContentLoaded", () => {
    let inputs = document.querySelectorAll("input");

    inputs.forEach(element => {
        if (element.type == "button") {
            element.addEventListener("click", (e) => {
                lanzarBoton(e.target);
            })
        }
    });
})


function lanzarBoton(elemento) {
    switch (elemento.id) {
        case "crearCookie":
            crearCookie();
            break;
        case "leerCookie":
            leerCookie();
            break;
        case "borrarCookie":

            break;
        case "guardarUrl":

            break;
        case "irAUrl":

            break;
        case "recargarPagina":

            break;
        default:
            break;
    }
}

function crearCookie() {
    let nombre = document.getElementById("nombreCookie").value;
    let valor = document.getElementById("valorCookie").value;
    let expira = document.getElementById("expiraCookie").value;
    let dateExpira = new Date(expira).toUTCString();


    document.cookie = `${nombre}=${valor}; expires=${dateExpira}; path=/`
}

function leerCookie() {
    //TODO seguir por aqui
    let areaResultados = document.getElementById("areaResultados");
    let nuevaCookie = document.createElement("li");

    nuevaCookie.classList.add("list-group-item");
    nuevaCookie.innerHTML = getCookie();

    areaResultados.appendChild(nuevaCookie);

}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}