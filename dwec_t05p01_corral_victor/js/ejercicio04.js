console.log("T05 - Ejercicio 04");

document.addEventListener("DOMContentLoaded", () => {   
    document.getElementById("agregar").addEventListener("click", crearElemento);
    document.getElementById("borrar").addEventListener("click", borrarElemento);
    document.getElementById("ordenar").addEventListener("click", ordenarAlfabeticamente);
})

function crearElemento(){
    let contenido = document.querySelector("#alimento").value;
    let lista = document.querySelector("#listado");
    let elementoNuevo = document.createElement("li");
    elementoNuevo.innerText = contenido;
    lista.appendChild(elementoNuevo);
    
    document.getElementById("ordenar").classList.remove("d-none");
    document.getElementById("ordenar").classList.add("d-block");

}

function borrarElemento(){
    let contenido = document.querySelector("#alimento").value;
    let lista = document.querySelector("#listado");
    let elementos = lista.querySelectorAll("li");
    let elementoBorrar = null;
    for(let i = 0; i<elementos.length; i++){
        let contenidoLi = elementos[i].innerText;
        if(contenidoLi === contenido){
            elementoBorrar = elementos[i];
        }
    }
    lista.removeChild(elementoBorrar);
    elementos = lista.querySelectorAll("li");

    if(elementos.length == 0){
        document.getElementById("ordenar").classList.add("d-none");
        document.getElementById("ordenar").classList.remove("d-block");
    }
}

function ordenarAlfabeticamente(){
    let lista = document.querySelector("#listado");
    let elementos = lista.querySelectorAll("li");
    let arrayElementos = [...elementos];

    arrayElementos.sort((a,b) =>{
        if (a.innerText.toLowerCase()> b.innerText.toLowerCase()) return 1;
        if (a.innerText.toLowerCase()< b.innerText.toLowerCase()) return -1;
    });
    
    lista.innerHTML = "";

    arrayElementos.forEach(li => {
        lista.appendChild(li);
    });
}

