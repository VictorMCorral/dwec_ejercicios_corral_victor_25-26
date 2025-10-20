/*
Crea un script que permita agregar listas de tareas (por hacer y hechas) y agruparlas en categorías. 
El programa debe hacer lo siguiente solo usando arrays. No se pueden usar objetos definidos por el usuario.

El script trabaja con un array "Categorías" que a su vez es un array de Tareas las cuales a su vez son 
un array de dos elementos [nombreTarea, estado].

                tarea = [nombreTarea, estado];
                Tareas = [tarea, tarea, tarea, ...]
                Categorias = [Tareas, Tareas, Tareas, ...]

El script hace lo siguiente.
1- Determina si hay categorías de tareas.
    1- Si no hay categorías, se empieza pidiendo el nombre de una categoría.
    2- Después de crear la primera categoría, se puede preguntar si desea ingresar la primera tarea en la 
    categoría seleccionada (aquí el comportamiento será idéntico a la opción 4 del menú 3) o si se quiere 
    crear una nueva categoría (aquí el comportamiento será idéntico a la opción 2 del menú 1.


2- Si hay categorías, se pueden listar las categorías o se puede crear otra categoría nueva. 
Para ello se muestra el siguiente menú:


Menú 1
======
1. Listar categorías
2. Añadir nueva Categoría 
    (está opción se repetirá hasta que el usuario indique que no quiere añadir más categorías).
3. Borrar categoría 
    (solo se podrá borrar una categoría si todas sus tareas está a done o si no tiene tareas asociadas  
    y siempre se debe pedir confirmación antes de borrar).
4. Salir.

3- Si se listan las categorías, se puede seleccionar una o volver atrás al Menú 1.

Menú 2
======
1. Compra
2. Regalos
3. Maleta
4. Atrás

4- Si se elige una categoría, se muestra el menú 3 y esa categoría queda seleccionada. 
Para la categoría seleccionada se permite añadir nuevas tareas o seleccionar una tarea para hacer el 'done'.

Menú 3. Categoría Regalos
======
1. Libro (toDo)
2. Disco (done)
3. Zapatillas (done)
4. Añadir nueva tarea 
    (está opción se repetirá hasta que el usuario indique que no quiere añadir más tareas).
5. Borrar tarea 
    (se puede borrar cualquier tarea independientemente del estado y siempre se debe pedir confirmación antes de borrar).
6. Atrás


5- Si hay una categoría seleccionada y se quiere ingresar una nueva tarea:
    1- Se puede crear una tarea sabiendo que las tareas tienen dos estados: toDo y done. 
    Por defecto, al crearse están en 'toDo'.
    2- Después se puede preguntar si se desea ingresar otra tarea en la categoría seleccionada.


6- Si hay una categoría seleccionada y se ha listado las tareas, se puede seleccionar una o varias tareas 
a la vez y pasarlas a 'done'.

Ampliación 1: 
    Pila deshacer 'done' con los últimos 5 pasos de historial. 
    El script nos permite deshacer los último pasos a 'done' y devolverlos a 'toDo'. 
    Un solo paso puede deshacer el cambio a 'done' de una o varias tareas, si estas se procesaron a la vez. 
    Añade una nueva opción al menú 3. 

Menú 3. Categoría Regalos
======
1. Libro (toDo)
2. Disco (done)
3. Zapatillas (done)
4. Añadir nueva tarea 
    (está opción se repetirá hasta que el usuario indique que no quiere añadir más tareas).
5. Borrar tarea 
    (se puede borrar cualquier tarea independientemente del estado y siempre se debe pedir confirmación antes de borrar).
6. Atrás
7. Deshacer últimos `done`realizados

Ampliación 2 (la más complicada): Una tarea puede estar asignada a más de una categoría. 
Esto se hace ampliando con un menú 4 con estas opciones:

Menú 4. Tareas seleccionadas: Libro, Zapatillas
======
1. Pasar a 'done'
2. Asignar otras categorías.  
    (como en este punto se tiene varias tareas seleccionadas hay que comprobar que una tarea 
    no se asigne a una categoría que ya tenga asiganda).
3. Atrás
*/




console.log("T03p3 - Ejercicio 12");
let categorias = [
    ["Categoria 1", ["Tarea 1", "toDo"], ["Tarea 2", "toDo"], ["Tarea 3", "toDo"], ["Tarea 4", "toDo"]],
    ["Categoria 2", ["Tarea 3", "done"], ["Tarea 4", "toDo"], ["Tarea 5", "toDo"], ["Tarea 6", "toDo"]]
];

const deshacer = [];

if (categorias.length == 0) {
    agregarCategoria(categoriasVacio, "categoria");
    primerMenu(categoriasVacio);
} else {
    primerMenu(categorias);
}

function primerMenu(categorias) {
    let opcion = 0;
    let menu1 = "Menú 1 \n" +
        "====== \n" +
        "1. Listar categorías\n" +
        "2. Añadir nueva Categoría\n" +
        "3. Borrar categoría\n" +
        "4. Salir."
    opcion = Number(prompt(menu1));

    switch (opcion) {
        case 1:
            segundoMenu(categorias);
            break;
        case 2:
            do {
                agregarCategoria(categorias, "categoria");
            } while (confirm("¿Quieres agregar más categorias?"))
            primerMenu(categorias);

            break;
        case 3:
            borrarCategoria(categorias);
            break;
        case 4:
            alert("Saliendo del programa...")
            break;
        default:
            console.log("Has elegido una opcion no valida para el Menu 1");
            primerMenu(categorias);
            break;
    }
}

function segundoMenu(categorias) {
    let texto = "Menú 2\n" +
        "======\n";

    texto = listarCategorias(categorias, texto, "categorias");

    if (categorias.length != 0) {
        let opcion = Number(prompt(texto));

        if (opcion > 0 && opcion <= (categorias.length + 1)) {
            opcion = opcion - 1;
            categoriaSelect = categorias[opcion];

            if (opcion != categorias.length) {
                tercerMenu(categoriaSelect, categorias);
            } else if (opcion == categorias.length) {
                primerMenu(categorias);
            } else {
                console.log("no es una opcion valida")
            }

        } else {
            console.log("No es una opcion valida, volviendo al menu anterior... ")
            primerMenu(categorias);
        }

    } else {
        alert("No hay categorias para listar");
    }

}

function tercerMenu(categoriaSelect, categorias) {
    let texto = "Menú 3. " + categoriaSelect[0] + "\n" +
        "====== \n";

    texto = listarCategorias(categoriaSelect, texto, "tareas");

    let numTareas = (categoriaSelect.length - 1);
    let opcion_agregar = numTareas + 1;
    let opcion_borrar = numTareas + 2;
    let opcion_atras = numTareas + 3;
    let opcion_deshacer = numTareas + 4

    //["Categoria 1", ["Tarea 1", "done"], ["Tarea 2", "toDo"]

    const opcion = prompt(texto).split(",");

    if (opcion[0].trim() != "") {

        if (opcion.length != 0) {
            const primeraOpcion = Number(opcion[0]);
            if (primeraOpcion > 0 && primeraOpcion <= numTareas) {
                let accion = [categoriaSelect, opcion];
                let tareasSeleccionadas = []
                for (let i = 0; i < opcion.length; i++) {
                    tareasSeleccionadas.push(categoriaSelect[opcion[i][0]]);
                    //marcarDone(categoriaSelect[opcion[i]]);
                }

                cuartoMenu(categoriaSelect, categorias, tareasSeleccionadas);
                if (primeraOpcion != opcion_deshacer) {

                    if (deshacer.length == 5) {
                        deshacer.pop();
                    }
                    deshacer.unshift(accion);
                }
                tercerMenu(categoriaSelect, categorias, deshacer);
            }


            switch (primeraOpcion) {
                case opcion_agregar:
                    //Añadir
                    do {
                        agregarCategoria(categoriaSelect, "tarea");
                    } while (confirm("¿Quieres agregar más tareas?"));
                    tercerMenu(categoriaSelect, categorias);
                    break;
                case opcion_borrar:
                    //Borrar
                    borrarTarea(categoriaSelect, "tarea");
                    tercerMenu(categoriaSelect, categorias);
                    break;
                case opcion_atras:
                    //Atras
                    segundoMenu(categorias);
                    break;
                case opcion_deshacer:
                    //Deshacer (ampliacion 1)
                    deshacerDone(categoriaSelect, deshacer);
                    tercerMenu(categoriaSelect, categorias, []);
                    break;
            }
        } else {
            console.log("No hay tareas, volviendo al menu anterior...")
            segundoMenu(categorias);
        }
    } else {
        console.log("Has dejado la opcion en blanco, volviendo al menu anterior...");
        segundoMenu(categorias);
    }

}

function cuartoMenu(categoriaSelect, categorias, tareas) {
    let tareasNombres = [];
    for (let i = 0; i < tareas.length; i++) {
        tareasNombres.push(tareas[i][0]);
    }

    let texto = "Menú 4. Tareas seleccionadas " + tareasNombres + "\n" +
        "====== \n";
    texto += "1. Pasar a 'done'\n" +
        "2. Asignar otras categorías\n" +
        "3. Atrás";
    let opcion = Number(prompt(texto));

    switch (opcion) {
        case 1:
            //Pasar a done
            for (let i = 0; i < tareas.length; i++) {
                marcarDone(tareas[i]);
            }
            break;
        case 2:
            //Asignar a otras categorias
            asignarOtraCategoria(categorias, tareas);
            break;
        case 3:
            //atras
            tercerMenu(categoriaSelect, categorias);
            break;
        default:
            console.log("No es una opcion valida, pasando al menu anterior...");
            tercerMenu(categoriaSelect, categorias);
            break;
    }

}


function asignarOtraCategoria(categorias, tarea) {

    // let categorias = [
    //     ["Categoria 1", ["Tarea 1", "toDo"], ["Tarea 2", "toDo"], ["Tarea 3", "toDo"], ["Tarea 4", "toDo"]],
    //     ["Categoria 2", ["Tarea 3", "done"], ["Tarea 4", "toDo"], ["Tarea 5", "toDo"], ["Tarea 6", "toDo"]]
    // ];
    for (let i = 0; i < tarea.length; i++) {
        for (let j = 0; j < categorias.length; j++) {
            let encontrada = comprobarTareaEnCategoria(categorias[j], tarea[i]);
            if (encontrada) {
                console.log("La tarea '" + tarea[i] + "' SÍ está en la categoría: " + categorias[j][0]);
            } else {
                console.log("La tarea '" + tarea[i] + "' NO está en la categoría: " + categorias[j][0]);
            }
        }
    }


}


function comprobarTareaEnCategoria(categoria, tarea) {
    let encontrada = false;
    for (let i = 1; i < categoria.length; i++) {
        encontrada = tarea[0] == categoria[i][0];
        console.log(tarea + "==" + categoria[i])
    }
    return encontrada;
}

function borrarTarea(categoriaSelect) {
    //["Categoria 1", ["Tarea 1", "done"], ["Tarea 2", "toDo"]
    let opcion = prompt("Introduce la tarea a borrar ");
    let indexBorrar = 0;
    let encontrado = false;

    for (let i = 1; i < categoriaSelect.length; i++) {
        if (categoriaSelect[i][0] == opcion) {
            indexBorrar = i;
            encontrado = true;
        }
    }


    if (indexBorrar > 0) {
        let confirmacion = confirm(`¿Estás seguro de que deseas eliminar la categoría "${categoriaSelect[indexBorrar][0]}"?`);
        if (confirmacion) {
            categoriaSelect.splice(indexBorrar, 1);
            console.log(`"${categoriaSelect[indexBorrar][0]}" eliminada correctamente`)
        } else {
            console.log("Eliminación cancelada por el usuario.");

        }

    } else {
        console.log("No se puede borrar la categoría: no existe");
    }
}

function listarCategorias(categoria, texto, opcion) {
    let comienzo;
    let final = "";
    let contador = 1;

    if (opcion == "tareas") {
        comienzo = 1;
        final += (categoria.length) + ". Añadir nueva tarea\n" +
            (categoria.length + 1) + ". Borrar tarea\n" +
            (categoria.length + 2) + ". Atrás\n" +
            (categoria.length + 3) + ". Deshacer últimos 'done' realizados.\n";

    } else if (opcion == "categorias") {
        comienzo = 0;
        final += (categoria.length + 1) + ". Atras";
    } else if (opcion == "borrado") {
        comienzo = 0;
    }


    for (let i = comienzo; i < categoria.length; i++) {
        texto += contador + ". " + categoria[i][0];
        if (opcion == "tareas") {
            texto += " (" + categoria[i][1] + ")";
        }
        texto += "\n";
        contador++;
    }

    texto += final;

    return texto;
}

function agregarCategoria(categoria, texto) {
    let elementoNuevo = [];
    let nombreElemento = prompt("Introduce el nombre de la " + texto + ": ");
    if (nombreElemento != null) {
        if (nombreElemento.trim() == "") {
            console.log("El nombre del elemento esta vacio")
        } else {
            elementoNuevo[0] = nombreElemento;
            if (texto == "tarea") {
                elementoNuevo[1] = "toDo";
            }
            categoria.push(elementoNuevo);
        }
    } else {
        console.log("Se cancelo por el usuario, volviendo al menu anterior...")
    }




}

function borrarCategoria(categoria) {
    let texto = "";
    texto += listarCategorias(categoria, texto, "borrado");
    texto += "Introduce la categoria que quieras eliminar: ";
    let categoriaBorrar = Number(prompt(texto));


    if (categoriaBorrar === null || categoriaBorrar <= 0 || categoriaBorrar > categoria.length) {
        console.log("Operación cancelada.");
    } else {
        console.log("Categoría a borrar:", categoria[categoriaBorrar - 1][0]);

        categoriaBorrar = categoria[categoriaBorrar - 1][0];

        let indiceBorrar = -1;
        let borrable = false;
        let encontrado = false;

        for (let i = 0; i < categoria.length; i++) {
            if (categoria[i][0] === categoriaBorrar) {
                console.log("Categoría encontrada:", categoria[i][0]);

                if (categoria[i].length === 1) {
                    borrable = true;
                } else {
                    borrable = true;
                    for (let j = 1; j < categoria[i].length; j++) {
                        if (categoria[i][j][1] !== "done") {
                            borrable = false;
                        }
                    }
                }

                if (borrable) {
                    console.log("Índice a borrar:", i);
                    indiceBorrar = i;
                }
                break;
            }
        }


        if (indiceBorrar !== -1 && borrable) {

            let confirmacion = confirm(`¿Estás seguro de que deseas eliminar la categoría "${categoriaBorrar}"?`);
            if (confirmacion) {
                categoria.splice(indiceBorrar, 1);
                console.log("Categoría eliminada correctamente.");

            } else {
                console.log("Eliminación cancelada por el usuario.");
            }
        } else {
            console.log("No se puede borrar la categoría: no existe o tiene tareas pendientes.");
        }

    }

    primerMenu(categoria);
}


function marcarDone(tarea) {
    if (tarea[1] == "done") {
        alert("La tarea ya esta completa");
    } else if (tarea[1] == "toDo") {
        tarea[1] = "done"
        console.log(tarea[0] + " esta marcada como done");
    } else {
        console.log("No es done o toDo");
    }
}


function deshacerDone(categoriaSelect) {

    if (deshacer.length != 0) {
        //[["Categoria 1", ["Tarea 1", "done"], ["Tarea 2", "toDo"], [1,2]]
        let indicesARevertir = deshacer[0][1]; // [1]
        let categoriaDeshacer = deshacer[0][0];

        for (let i = 0; i < indicesARevertir.length; i++) {
            let pos = indicesARevertir[i]; // posición de la tarea dentro de categoriaSelect
            categoriaDeshacer[pos][1] = "toDo";
            console.log(categoriaDeshacer[0] + " " + categoriaDeshacer[pos][0] + " cambiada a toDo");
        }

        deshacer.shift();
    } else {
        console.log("No hay acciones anteriores");
    }

}

function hacerYGuardar() { }