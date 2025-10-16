console.log("T03p3 - Ejercicio 11");
/*
Crear un script que almacene el nombre de dos jugadores en dos variables y dos 
arrays de 5 elementos con los valores de "piedra, papel, tijera, lagarto, spock". 
Estos cinco datos se almacenan en un Set. Primero el script debe preguntar el 
nombre del jugador 1 y sus 5 jugadas, luego hará lo mismo con el jugador 2.

Suponemos que los nombres de los jugadores son únicos y son nickname de una 
aplicación de juegos. Usando esos nombres como Keys, creado un Map que almacene 
para cada jugador sus jugadas.

Al pedir el nombre de cada jugador, se comprobará previamente que está en el Map. 
En caso contrario, se le vuelve a pedir un nombre de jugador. Después, también se 
comprobará que el jugador siempre indique una jugada de forma correcta. 
En caso contrario, se le vuelve a pedir. El usuario podrá introducir las jugadas 
usando un número de menú o escribiendo directamente el texto de la jugada (tanto en mayúscula como minúscula):

piedra
papel
tijera
lagarto
spock

Después el script, debe comparar los valores de las listas uno a uno y determinará el ganador de cada tirada. 

Al finalizar las 5 rondas, mostrará quién ganó  y los puntos finales. Si hay empate también se contemplará.

Reglas:
- Tijeras cortan papel
- Papel cubre piedra
- Piedra aplasta lagarto
- Lagarto envenena Spock
- Spock destruye tijeras
- Tijeras decapitan lagarto
- Lagarto come papel
- Papel desaprueba Spock
- Spock vaporiza piedra
- Piedra aplasta tijeras

Ampliación: Juego contra la máquina. 
El script al pedir el nombre del segundo jugador nos permitirá también jugar contra la máquina. 
En ese caso, las 5 jugadas de la máquina se generarán de forma aleatoria.
*/

const jugadasPermitidas = new Set(["piedra", "papel", "tijera", "lagarto", "spock"]);
const jugadoresMap = new Map();

jugadoresMap.set("maquina", jugadasRandom());

let jugador1 = prompt("Introduce tu nombre: ").toLowerCase();
jugadoresMap.set(jugador1, jugadas());
console.log(jugador1 + " ha realizado las siguientes jugadas: " + jugadoresMap.get(jugador1));



let jugador2 = nombre();
if(!jugador2 == "maquina"){
    jugadoresMap.set(jugador2, jugadas());
    console.log(jugador2 + " ha realizado las siguientes jugadas: " + jugadoresMap.get(jugador2));
} else {
    console.log(jugador2 + " ha realizado las siguientes jugadas: " + jugadoresMap.get("maquina"));
}


let ganador = comprobarJugadas(jugadoresMap);


function jugadasRandom() {
    const jugadasJugador = [];
    for (let i = 0; i < 5; i++) {
        let jugada = Math.floor((Math.random() * 5 )+ 1);
        switch (jugada) {
            case 1:
                jugada = "piedra";
                break;
            case 2:
                jugada = "papel";
                break;
            case 3:
                jugada = "tijera";
                break;
            case 4:
                jugada = "lagarto";
                break;
            case 5:
                jugada = "spock";
                break;
        }
        jugadasJugador.push(jugada);
    }
    return jugadasJugador;
}


function comprobarJugadas(jugadoresMap) {
    const iterator = jugadoresMap.keys();

    let jugador1 = iterator.next().value;
    let jugadas1 = jugadoresMap.get(jugador1);

    let jugador2 = iterator.next().value;
    let jugadas2 = jugadoresMap.get(jugador2);

    let ganadores = [];
    for (let i = 0; i < jugadoresMap.get(jugador1).length; i++) {
        let ganador = comprobarVictoria(jugadas1[i], jugadas2[i]);
        ganadores.push(ganador);
    }
    console.log(ganadores);

    let j1Ganadas = ganadores.filter(function (a) { return a == 1 });

    let j2Ganadas = ganadores.filter(function (a) { return a == 2 });


    if (j1Ganadas > j2Ganadas) {
        console.log("Ha ganado " + jugador1);
    } else if (j2Ganadas > j1Ganadas) {
        console.log("Ha ganado " + jugador2);
    } else {
        console.log("Ha quedado en empate");
    }

}

function comprobarVictoria(jugada1, jugada2) {
    let ganador = null;
    switch (jugada1) {
        case "piedra":
            switch (jugada2) {
                case "piedra":
                    ganador = 0;
                    break;
                case "papel":
                    ganador = 2;
                    break;
                case "tijera":
                    ganador = 1;
                    break;
                case "lagarto":
                    ganador = 1;
                    break;
                case "spock":
                    ganador = 2;
                    break;
            }
            break;
        case "papel":
            switch (jugada2) {
                case "piedra":
                    ganador = 1;
                    break;
                case "papel":
                    ganador = 0;
                    break;
                case "tijera":
                    ganador = 2;
                    break;
                case "lagarto":
                    ganador = 2;
                    break;
                case "spock":
                    ganador = 1;
                    break;
            }
            break;
        case "tijera":
            switch (jugada2) {
                case "piedra":
                    ganador = 2;
                    break;
                case "papel":
                    ganador = 1;
                    break;
                case "tijera":
                    ganador = 0;
                    break;
                case "lagarto":
                    ganador = 1;
                    break;
                case "spock":
                    ganador = 2;
                    break;
            }
            break;

        case "lagarto":
            switch (jugada2) {
                case "piedra":
                    ganador = 2;
                    break;
                case "papel":
                    ganador = 1;
                    break;
                case "tijera":
                    ganador = 2;
                    break;
                case "lagarto":
                    ganador = 0;
                    break;
                case "spock":
                    ganador = 1;
                    break;
            }
            break;

        case "spock":
            switch (jugada2) {
                case "piedra":
                    ganador = 1;
                    break;
                case "papel":
                    ganador = 2;
                    break;
                case "tijera":
                    ganador = 1;
                    break;
                case "lagarto":
                    ganador = 2;
                    break;
                case "spock":
                    ganador = 0;
                    break;
            }
    }
    return ganador
}


function nombre() {
    let esNombreValido = false;
    let jugador = "";
    do {
        jugador = prompt("Introduce tu nombre, escribe maquina si quieres contra la maquina: ").toLowerCase();

        if (jugador == "maquina") {
            esNombreValido = true;
        } else {
            esNombreValido = !jugadoresMap.has(jugador);
        }

        if (!esNombreValido) {
            console.log("No has introducido un nombre de jugador valido");
        }

    } while (!esNombreValido);

    return jugador;
}


function jugadas() {
    const jugadasJugador = [];
    let esJugadaValida = false;
    let jugadaComprobar = "";

    for (let i = 0; i < 5; i++) {
        do {
            jugadaComprobar = prompt("Introduce una jugada entre piedra, papel, tijera, lagarto o spock :").toLowerCase();
            esJugadaValida = jugadasPermitidas.has(jugadaComprobar);;
            if (!esJugadaValida) {
                switch (jugadaComprobar) {
                    case "1":
                        jugadaComprobar = "piedra";
                        break;
                    case "2":
                        jugadaComprobar = "papel";
                        break;
                    case "3":
                        jugadaComprobar = "tijera";
                        break;
                    case "4":
                        jugadaComprobar = "lagarto";
                        break;
                    case "5":
                        jugadaComprobar = "spock";
                        break;
                    default:
                        console.log("No es un formato valido ");
                        break;
                }
            }

            esJugadaValida = jugadasPermitidas.has(jugadaComprobar);
            if (esJugadaValida) {
                jugadasJugador.push(jugadaComprobar);
                console.log(jugadaComprobar);
            }

        } while (!esJugadaValida);
    }
    return jugadasJugador;
}


