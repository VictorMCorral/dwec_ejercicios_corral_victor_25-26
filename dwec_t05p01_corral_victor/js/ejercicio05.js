console.log("T05 - Ejercicio 05");

document.addEventListener("DOMContentLoaded", () => {   
    let lector = document.querySelector("#teclado");
    lector.addEventListener("keydown", (e)=> {
        imprimirTecla("keydown", e.key, e.code, e.keyCode, e.altKey, e.ctrlKey, e.shiftKey);
    })
    lector.addEventListener("keyup", (e)=> {
        imprimirTecla("keyup", e.key, e.code, e.keyCode, e.altKey, e.ctrlKey, e.shiftKey);
    })
})

function imprimirTecla(evento, tecla, code, keycode, alt, ctrl, shift){
    //He filtrado para que no aparezcan los modificadores
    if(tecla !== "Control" && tecla !== "Shift" && tecla !=="Alt" ){
        let imprimir = document.querySelector("#imprimir");
        let contenido = imprimir.innerHTML;
        let texto = "<li>";

        texto += evento + " " + tecla + " " + code + " " + keycode
        if(alt){
            texto += " Alt pulsado";
        }
        if(ctrl){
            texto += " Ctrl pulsado";
        }
        if(shift){
            texto += " Shift pulsado";
        }
        texto += "</li>";
        imprimir.innerHTML = "";
        imprimir.innerHTML += texto + contenido;
        borrarUltimosHijos(imprimir);
}

    function borrarUltimosHijos(contenedor){
        let cantidad = contenedor.querySelectorAll("li").length;

        if(cantidad == 21){
            let ultimuHijo = contenedor.lastChild;
            contenedor.removeChild(ultimuHijo);
        } 
    }
}
