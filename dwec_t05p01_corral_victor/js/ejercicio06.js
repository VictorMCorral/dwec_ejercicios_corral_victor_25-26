console.log("T05 - Ejercicio 06");

document.addEventListener("DOMContentLoaded", () => {   
    let pes = document.querySelectorAll("p");
    
    pes.forEach(element => {
        element.addEventListener("click", (e)=> {
            if(e.target.tagName == "P") {
                todoMayus(e)
            }
        });
        
        element.addEventListener("dblclick", (e) =>{
            if(e.target.tagName == "P") {
                todoMinus(e)
            }
        });
        
        element.addEventListener("mouseenter", (e) =>{
            if(e.target.tagName == "P") {
                parrafoSelected(e)
            }
        });
        // element.addEventListener("mouseleave", (e) =>{
        //     if(e.target.tagName == "P") {
        //     parrafoSelected(e)
        //     }
        // });

    
    });
    
})

function todoMayus(e){
    e.target.innerHTML = e.target.innerHTML.toUpperCase();
} 

function todoMinus(e){
    e.target.innerHTML = e.target.innerHTML.toLowerCase();
} 

function parrafoSelected(e){
    e.target.classList.toggle("lead");
    e.target.classList.toggle("p-2");
    e.target.classList.toggle("border");
    e.target.classList.toggle("rounded");
    e.target.classList.toggle("bg-light");
    setTimeout(() => {
        e.target.classList.toggle("lead");
        e.target.classList.toggle("p-2");
        e.target.classList.toggle("border");
        e.target.classList.toggle("rounded");
        e.target.classList.toggle("bg-light");

    }, 500);
}