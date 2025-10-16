console.log("T03p3 - Ejercicio 10");
/*
Dada la siguiente matriz se desea tener un script que permita saber 
quién es el líder de la clasificación (opción 1 del menú), 
quién lleva más partidos perdidos (opción 2 del menú) y 
quién lleva más partidos ganados (opción 3 del menú). 
Esto se hará a través de un menú que se repite hasta que el usuario pulsa la opción 0. 

La solución se propondrá con tres funciones que reciban la matriz y
devuelva un string con el nombre del equipo en cuestión (solo el nombre).

Matriz de 5x6

Equipo      PTS PJ PG PE PP 
Levante     40  14 13  1  0
Málaga      37  14 12  1  1
Eibar       34  14 11  1  2
Córdoba C.F.27  14  8  3  3

Nota: En este punto la matriz ya está creada y con datos introducidos. 
No hay que pedirselos al usuario de momento. 
La primera fila de la matriz (la fila 0) es la "cabecera" de la matriz e indica qué información almacena cada columna. 
Por tanto la fila 1 es la fila que contiene la información del primer equipo.

Amplia el ejercicio para que incluya las siguientes opciones de menú:
HECHO   1 - Se pueda mostrar por pantalla los datos de la matriz con un formato acorde.
HECHO   2 - Se puedan introducir nuevos datos de nuevos equipos. Al usuario se le pedirá el nombre del equipo, 
            el número de partidos ganados, perdidos y empatados. El resto de aspectos se calcula solo.
HECHO   3 - Se pueda introducir los datos de una jornada. El script pedirá equipo por equipo si en la 
        jornada actual ha ganado, perdido o ganado. El resto de aspectos se calcula solo.
4 - Se pueda ordenar la clasificación (por puntos) en cada actualización de datos. 
    Esto además de ser una opción del menú, será algo asociado a la inserción de nuevos datos.

*/

let matrizEquipos = [
        ["Equipo", "PTS", "PJ", "PG", "PE", "PP"],
        ["Levante", 40, 14, 13, 1, 0],
        ["Málaga", 37, 14, 12, 1, 1],
        ["Eibar", 34, 14, 11, 1, 2],
        ["Cordoba C. F.", 27, 14, 8, 3, 3]
];

let opcion = 0;

do{
    opcion = Number(prompt("Que quieres hacer: \n"
                + "1- Lider de la clasificacion. \n"
                + "2- Quien lleva más partidos perdidos.\n"
                + "3- Quien lleva más partidos ganados. \n"
                + "4- Agregar nuevos datos \n"
                + "5- Mostrar la tabla \n"
                + "6- Agregar jornada \n"
                + "7- Ordenar tabla \n"
                + "0- Salir\n"
    ));

    switch(opcion){
        case 1:
            let lider= comprobarLider(matrizEquipos);
            console.log("El equipo lider es: " + lider);
            break;
        case 2:
            let masPerdidos= comprobarPartidosPerdidos(matrizEquipos);
            console.log("El equipo que lleva mas partidos perdidos es: " + masPerdidos);
            break;
        case 3:
            let masGanados= comprobarPartidosGanados(matrizEquipos);
            console.log("El equipo que lleva mas partidos ganados es: " + masGanados);
            break;
        case 4:
            agregarDatos(matrizEquipos);
            break;
        case 5: 
            mostrarDatos(matrizEquipos);
            break;
        case 6: 
            agregarJornada(matrizEquipos);
            break;
        case 7:
            ordenarTabla(matrizEquipos);
            break;
    }

} while(opcion != 0)

function ordenarTabla(matrizEquipos){
    /*
    Se pueda ordenar la clasificación (por puntos) en cada actualización de datos. 
    Esto además de ser una opción del menú, será algo asociado a la inserción de nuevos datos.
    */
    /*
    let matrizTemp = [];
    matrizTemp.push(matrizEquipos[0]);

    for (let i = 1; i<matrizEquipos.length; i++){
        let lider = comprobarLider(matrizEquipos);
        let index = 0;
        let liderArray = [];
        for (let j = 1; j<matrizEquipos.length; j++){
            if(lider == matrizEquipos[j][0]){
                index = j;
                liderArray = matrizEquipos[j];
            }
        }  
        matrizTemp.push(liderArray);
        matrizEquipos.splice(index);
    }

    matrizEquipos = matrizTemp.slice();
    mostrarDatos(matrizEquipos);
    return matrizEquipos;
    */
    let cabecera = matrizEquipos[0];
    let matrizTemp = matrizEquipos.slice(1);

    matrizTemp.sort(function(a, b){return b[1] - a[1]});
    matrizTemp.unshift(cabecera);
    matrizEquipos = matrizTemp.slice();
    mostrarDatos(matrizEquipos);

}

function agregarJornada(matrizEquipos){
    /*
    Se pueda introducir los datos de una jornada. El script pedirá equipo por equipo si en la 
    jornada actual ha ganado, perdido o ganado. El resto de aspectos se calcula solo.
    ["Equipo", "PTS", "PJ", "PG", "PE", "PP"],
    */
    mostrarDatos(matrizEquipos);

    for (let i = 1; i<matrizEquipos.length; i++){
        let equipo = matrizEquipos[i][0];
        let resultado = prompt("Que ha hecho " + equipo + " en esta jornada ganar, empatar o perder: ");
        if(resultado.toLowerCase() == "ganar"){
            matrizEquipos[i][3] = matrizEquipos[i][3] + 1;
        } else if (resultado.toLowerCase() == "empatar"){
            matrizEquipos[i][4] = matrizEquipos[i][4] + 1;
        } else if (resultado.toLowerCase() == "perder"){
            matrizEquipos[i][5] = matrizEquipos[i][5] + 1;
        } else {
            console.log("No has introducido \"Ganado\", \"Empatado\" o \"Perdido\" ")
        }
    }
    actualizarDatos(matrizEquipos);

}

function actualizarDatos(matrizEquipos){
    for(let i = 1; i<matrizEquipos.length; i++){
        let puntos = (matrizEquipos[i][3] * 3) + matrizEquipos[i][4];
        let partidosJugados = matrizEquipos[i][3] + matrizEquipos[i][4] + matrizEquipos[i][5];
    
        matrizEquipos[i][1] = puntos;
        matrizEquipos[i][2] = partidosJugados;
    }
    mostrarDatos(matrizEquipos);
}

function mostrarDatos(matrizEquipos){
    /*
    Se pueda mostrar por pantalla los datos de la matriz con un formato acorde.
    */
    console.table(matrizEquipos);
}


function agregarDatos(matrizEquipos){
    /*
    2 - Se puedan introducir nuevos datos de nuevos equipos. Al usuario se le pedirá el nombre del equipo, 
    el número de partidos ganados, perdidos y empatados. El resto de aspectos se calcula solo.
    */
    
    let nombre = prompt("Introduce el nombre del equipo: ");
    let puntos = 0;
    let partidosJugados = 0;
    let partidosGanados = Number(prompt("Introduce los partidos ganados: "));
    let partidosEmpatados = Number(prompt("Introduce los partidos empatados: "));
    let partidosPerdidos = Number(prompt("Introduce los partidos perdidos: "));

    partidosJugados = partidosGanados + partidosEmpatados + partidosPerdidos;
    puntos = (partidosGanados * 3) + (partidosEmpatados); 

    matrizEquipos.push([nombre, puntos, partidosJugados, partidosGanados, partidosEmpatados, partidosPerdidos]);
};


function comprobarLider(matrizEquipos){
    let filas = matrizEquipos.length;
    let mayor = [matrizEquipos[1][0], matrizEquipos[1][1]];
    for(let i = 1; i<filas; i++){
        if(mayor[1] < matrizEquipos[i][1]){
            mayor =[matrizEquipos[i][0], matrizEquipos[i][1]];
        }
    }
    return mayor[0].toString();
}


function comprobarPartidosPerdidos(matrizEquipos){
    let filas = matrizEquipos.length;
    let masPerdidos = [matrizEquipos[1][0], matrizEquipos[1][5]];
    for(let i = 1; i<filas; i++){
        if(masPerdidos[1] < matrizEquipos[i][5]){
            masPerdidos =[matrizEquipos[i][0], matrizEquipos[i][5]];
        }
    }
    return masPerdidos[0].toString();
}

function comprobarPartidosGanados(matrizEquipos){
    let filas = matrizEquipos.length;
    let masGanados = [matrizEquipos[1][0], matrizEquipos[1][3]];
    for(let i = 1; i<filas; i++){
        if(masGanados[1] < matrizEquipos[i][3]){
            masGanados =[matrizEquipos[i][0], matrizEquipos[i][3]];
        }
    }
    return masGanados[0].toString();
}
