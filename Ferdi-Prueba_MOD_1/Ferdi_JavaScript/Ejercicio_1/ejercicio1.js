

function verPuntos() {
    let nombre = prompt("¿Cuál es tu nombre?");

    let equipoFav = parseInt(prompt("¿Cuál es tu equipo favorito? Selecciona entre estos:\n 1. Barça.\n 2. Español.\n 3. Madrid."));

    let puntos = 100;

    switch (equipoFav) {
        case 1:
            equipoFav = "Barça";
            puntos += 100;
            break;

        case 2:
            equipoFav = "Español";
            puntos += 20;
            break;

        case 3:
            equipoFav = "Madrid";
            puntos -= 100;
            break;

        default:
            break;
    }

    if (puntos < 0) {
        alert("Te has quedado sin puntos");
    } else {
        console.log(nombre + " es del " + equipoFav + " y tiene " + puntos + " puntos deportivos disponibles en su membresía.");
    }
    return puntos;
}

