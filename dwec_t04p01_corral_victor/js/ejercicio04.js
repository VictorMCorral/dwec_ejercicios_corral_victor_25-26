console.log("T04 - Ejercicio 03 - Profesores");

function ejercicio4_with() {
    // w.Usa "with" para crear un nuevo array en el que modifiques la edad de Batman sin alterar el array original.

        //https://www.w3schools.com/jsrEF/jsref_array_with.asp
        //The with() method updates a specified array element.
        //The with() method returns a new array.
        //The with() method does not change the original array.
        //Lanza excepcion si no existe el indice
    const personajesOriginal = cargarJsonPersonajes();

        //Gracias a Miguel
    let ind = personajesOriginal.findIndex(personajesOriginal => personajesOriginal.nombre === "Batman");

    const personajeManual = personajesOriginal.with(ind, {
        nombre: personajesOriginal[ind].nombre,
        nombreReal: personajesOriginal[ind].nombreReal,
        profesionReal: personajesOriginal[ind].profesionReal,
        editorial: personajesOriginal[ind].editorial,
        superpoder: personajesOriginal[ind].superpoder,
        debilidad: personajesOriginal[ind].debilidad,
        heroe: personajesOriginal[ind].heroe,
        edad: 45,
        numeroApariciones: personajesOriginal[ind].numeroApariciones,
        equipo: personajesOriginal[ind].equipo,
        nacionalidad: personajesOriginal[ind].nacionalidad,
        especie: personajesOriginal[ind].especie,
        universo: personajesOriginal[ind].universo
    });
    console.log(personajeManual[ind])





        //OPTIMIZACION IA: operador REST
        //REST solo copiaria el primer nivel
    const personajeModIA = personajesOriginal.with(ind, {
        ...personajesOriginal[ind],
        edad: 40
    });

    console.log(personajeModIA[ind]);
}


function ejercicio4_fill() {
    //x.Usa el método "fill" para añadir dos personajes vacíos al final del array de personajes, con valores predeterminados (por ejemplo: 0 o 'pendiente') que luego se podrán modificar.

        //https://www.w3schools.com/jsrEF/jsref_fill.asp
        //The fill() method fills specified elements in an array with a value.
        //The fill() method overwrites the original array.
        //Start and end position can be specified. If not, all elements will be filled.

    const personajesOriginal = cargarJsonPersonajes();

    personajesOriginal.length = (personajesOriginal.length + 2);

    const pers = {
        nombre: "pendiente",
        nombreReal: "pendiente",
        profesionReal: "pendiente",
        editorial: "pendiente",
        superpoder: "pendiente",
        debilidad: "pendiente",
        heroe: "pendiente",
        edad: 0,
        numeroApariciones: 0,
        equipo: "pendiente",
        nacionalidad: "pendiente",
        especie: "pendiente",
        universo: "pendiente"
    }

    personajesOriginal.fill(pers, -2)

    console.log(personajesOriginal[personajesOriginal.length - 1])
    console.log(personajesOriginal[personajesOriginal.length - 2])

        //fill() SI sobreescribe el original. 
}

function ejercicio4_arrayFrom() {
    //y.Usa "Array.from" para crear un nuevo array con dos personajes vacíos independientes, con propiedades iniciales predefinidas.

        //https://www.w3schools.com/jsref/jsref_from.asp
        //The Array.from() method returns an array from any object with a length property.
        //The Array.from() method returns an array from any iterable object.

    const personajesOriginal = cargarJsonPersonajes();

    const personajesFrom = Array.from({ length: 2 }, () => ({
        nombre: "pendiente",
        nombreReal: "pendiente",
        profesionReal: "pendiente",
        editorial: "pendiente",
        superpoder: "pendiente",
        debilidad: "pendiente",
        heroe: "pendiente",
        edad: 0,
        numeroApariciones: 0,
        equipo: "pendiente",
        nacionalidad: "pendiente",
        especie: "pendiente",
        universo: "pendiente"
    })
    )

    console.log(personajesFrom);
}


function cargarJsonPersonajes() {
    let personajes = [
        {
            nombre: "Spider-Man",
            nombreReal: "Peter Parker",
            profesionReal: "Fotógrafo",
            editorial: "Marvel",
            superpoder: "Agilidad sobrehumana, sentido arácnido, fuerza mejorada",
            debilidad: "Familia, responsabilidades",
            heroe: "héroe",
            edad: 28,
            numeroApariciones: 2500,
            equipo: "Los Vengadores",
            nacionalidad: "Estadounidense",
            especie: "Humano",
            universo: "Tierra-616"
        },
        {
            nombre: "Batman",
            nombreReal: "Bruce Wayne",
            profesionReal: "Empresario",
            editorial: "DC",
            superpoder: "Inteligencia superior, combate cuerpo a cuerpo",
            debilidad: "Humanidad, miedo a perder seres queridos",
            heroe: "héroe",
            edad: 35,
            numeroApariciones: 3000,
            equipo: "Liga de la Justicia",
            nacionalidad: "Estadounidense",
            especie: "Humano",
            universo: "Tierra-1"
        },
        {
            nombre: "Iron Man",
            nombreReal: "Tony Stark",
            profesionReal: "Ingeniero, Empresario",
            editorial: "Marvel",
            superpoder: "Armadura tecnológica avanzada, inteligencia superior",
            debilidad: "Alcoholismo, ego",
            heroe: "héroe",
            edad: 40,
            numeroApariciones: 2200,
            equipo: "Los Vengadores",
            nacionalidad: "Estadounidense",
            especie: "Humano",
            universo: "Tierra-616"
        },
        {
            nombre: "Joker",
            nombreReal: "Desconocido",
            profesionReal: "Criminal",
            editorial: "DC",
            superpoder: "Ingenio criminal, inmunidad a toxinas",
            debilidad: "Insanidad",
            heroe: "villano",
            edad: 45,
            numeroApariciones: 1000,
            equipo: "Injusticia",
            nacionalidad: "Desconocido",
            especie: "Humano",
            universo: "Tierra-1"
        },
        {
            nombre: "Wonder Woman",
            nombreReal: "Diana Prince",
            profesionReal: "Embajadora, guerrera",
            editorial: "DC",
            superpoder: "Fuerza sobrehumana, vuelo, habilidades de combate",
            debilidad: "Cuerdas mágicas",
            heroe: "héroe",
            edad: 3000,
            numeroApariciones: 1200,
            equipo: "Liga de la Justicia",
            nacionalidad: "Themyscirana",
            especie: "Amazona",
            universo: "Tierra-1"
        },
        {
            nombre: "Thor",
            nombreReal: "Thor Odinson",
            profesionReal: "Dios del Trueno",
            editorial: "Marvel",
            superpoder: "Control del trueno, vuelo, fuerza sobrehumana",
            debilidad: "Humildad (cuando sin Mjolnir)",
            heroe: "héroe",
            edad: 1500,
            numeroApariciones: 1500,
            equipo: "Los Vengadores",
            nacionalidad: "Asgardiano",
            especie: "Dios",
            universo: "Tierra-616"
        },
        {
            nombre: "Loki",
            nombreReal: "Loki Laufeyson",
            profesionReal: "Dios de las mentiras",
            editorial: "Marvel",
            superpoder: "Ilusionismo, cambio de forma, magia",
            debilidad: "Celos hacia Thor",
            heroe: "antiheroe",
            edad: 1000,
            numeroApariciones: 900,
            equipo: "",
            nacionalidad: "Asgardiano",
            especie: "Gigante de Hielo",
            universo: "Tierra-616"
        },
        {
            nombre: "Flash",
            nombreReal: "Barry Allen",
            profesionReal: "Forense",
            editorial: "DC",
            superpoder: "Súper velocidad, viaje en el tiempo",
            debilidad: "Demasiada velocidad puede destruir el tiempo",
            heroe: "héroe",
            edad: 30,
            numeroApariciones: 1500,
            equipo: "Liga de la Justicia",
            nacionalidad: "Estadounidense",
            especie: "Humano",
            universo: "Tierra-1"
        },
        {
            nombre: "Thanos",
            nombreReal: "Thanos",
            profesionReal: "Tirano galáctico",
            editorial: "Marvel",
            superpoder: "Fuerza inmensa, inteligencia táctica, uso del Guantelete del Infinito",
            debilidad: "Arrogancia, obsesión con la muerte",
            heroe: "villano",
            edad: 1000,
            numeroApariciones: 500,
            equipo: "Orden Negra",
            nacionalidad: "Titán",
            especie: "Eterno-Deviant",
            universo: "Tierra-616"
        },
        {
            nombre: "Superman",
            nombreReal: "Clark Kent (Kal-El)",
            profesionReal: "Periodista",
            editorial: "DC",
            superpoder: "Fuerza sobrehumana, vuelo, visión de rayos X, invulnerabilidad",
            debilidad: "Kryptonita",
            heroe: "héroe",
            edad: 35,
            numeroApariciones: 3000,
            equipo: "Liga de la Justicia",
            nacionalidad: "Kryptoniano",
            especie: "Extraterrestre (Kryptoniano)",
            universo: "Tierra-1"
        }
    ];

    return personajes;
}