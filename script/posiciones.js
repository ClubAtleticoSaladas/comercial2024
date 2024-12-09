import { partidos } from './variables.js'

const procesarEquipos = (partidos) => {
    const equipos = {};

    partidos.forEach(({ equipo1, ciudad1, marcador1, faltas1, equipo2, ciudad2, marcador2, faltas2 }) => {
        // Filtrar equipos no válidos
        const equiposInvalidos = ["Equipo 1", "Equipo 2", "1° Puesto", "2° Puesto", "3° Puesto", "4° Puesto", "Finalista 1", "Finalista 2"];
        if (equiposInvalidos.includes(equipo1) || equiposInvalidos.includes(equipo2)) return;

        // Generar identificador único para cada equipo
        const generarIdentificador = (equipo) =>
            equipo.toLowerCase().replace(/\s/g, "").replace(/\./g, "");

        // Inicializar equipos si no están
        if (!equipos[equipo1]) {
            equipos[equipo1] = {
                identificador: "images/equipos/"+generarIdentificador(equipo1)+"G.png",
                ciudad: ciudad1,
                partidosJugados: 0,
                ganados: 0,
                perdidos: 0,
                puntos: 0,
                marcadorAFavor: 0,
                marcadorEnContra: 0,
                faltasTotales: 0,
            };
        }
        if (!equipos[equipo2]) {
            equipos[equipo2] = {
                identificador: "images/equipos/"+generarIdentificador(equipo2)+"G.png",
                ciudad: ciudad2,
                partidosJugados: 0,
                ganados: 0,
                perdidos: 0,
                puntos: 0,
                marcadorAFavor: 0,
                marcadorEnContra: 0,
                faltasTotales: 0,
            };
        }

        // Si no hay marcador válido, no procesar el partido
        if (marcador1 === "--" || marcador2 === "--") return;

        // Convertir marcadores y faltas a números
        const marcador1Num = parseInt(marcador1, 10);
        const marcador2Num = parseInt(marcador2, 10);
        const faltas1Num = parseInt(faltas1, 10) || 0;
        const faltas2Num = parseInt(faltas2, 10) || 0;

        // Actualizar datos para equipo1
        equipos[equipo1].partidosJugados++;
        equipos[equipo1].marcadorAFavor += marcador1Num;
        equipos[equipo1].marcadorEnContra += marcador2Num;
        equipos[equipo1].faltasTotales += faltas1Num;
        if (marcador1Num > marcador2Num) {
            equipos[equipo1].ganados++;
            equipos[equipo1].puntos += 2;
        } else {
            equipos[equipo1].perdidos++;
            equipos[equipo1].puntos ++;
        }

        // Actualizar datos para equipo2
        equipos[equipo2].partidosJugados++;
        equipos[equipo2].marcadorAFavor += marcador2Num;
        equipos[equipo2].marcadorEnContra += marcador1Num;
        equipos[equipo2].faltasTotales += faltas2Num;
        if (marcador2Num > marcador1Num) {
            equipos[equipo2].ganados++;
            equipos[equipo2].puntos += 2;
        } else {
            equipos[equipo2].perdidos++;
            equipos[equipo2].puntos ++;
        }
    });

    // Calcular diferencia de marcador
    for (const equipo in equipos) {
        equipos[equipo].diferencia = equipos[equipo].marcadorAFavor - equipos[equipo].marcadorEnContra;
    }

    // Convertir objeto a array
    const resultados = Object.entries(equipos).map(([nombre, datos]) => ({ nombre, ...datos }));

    return resultados;
};

const resultados = procesarEquipos(partidos);


const evaluarPosiciones = (equipos) => {
    return equipos.sort((a, b) => {
        // 1. Mayor cantidad de puntos
        if (b.puntos !== a.puntos) return b.puntos - a.puntos;

        // 2. Menor diferencia de marcadores
        if (b.diferencia !== a.diferencia) return b.diferencia - a.diferencia;

        // 3. Menor cantidad de faltas totales
        if (a.faltasTotales !== b.faltasTotales) return a.faltasTotales - b.faltasTotales;

        // 4. Mayor cantidad de puntos a favor
        if (b.marcadorAFavor !== a.marcadorAFavor) return b.marcadorAFavor - a.marcadorAFavor;

        // 5. Menor cantidad de puntos en contra
        return a.marcadorEnContra - b.marcadorEnContra;
    });
};


// Generar y ordenar los equipos según las posiciones
const posiciones = evaluarPosiciones(resultados);

// Seleccionar el contenedor de la tabla
const tablaBody = document.querySelector("#tablePos tbody");

// Generar las filas de la tabla con colores alternos y estructura personalizada
posiciones.forEach((equipo, index) => {
    const fila = document.createElement("tr");

    // Alternar el color de fondo usando el atributo `style`
    fila.setAttribute(
        "style",
        `background-color: ${index % 2 === 0 ? "#ffffff" : "#f2f2f2"};`
    );

    // Crear estructura de la fila
    fila.innerHTML = `
        <td>${index + 1}</td> <!-- POS -->
        <td>
            <figure>
                <img src="${equipo.identificador}" alt="${equipo.nombre}">
            </figure>
            <div class="player-stats-text">
                <h6>${equipo.nombre}</h6>
                <span>${equipo.ciudad}</span>
            </div>
        </td> <!-- Equipo -->
        <td>${equipo.puntos}</td> <!-- Pts -->
        <td>${equipo.partidosJugados}</td> <!-- PJ -->
        <td>${equipo.ganados}</td> <!-- PG -->
        <td>${equipo.perdidos}</td> <!-- PP -->
        <td>${equipo.marcadorAFavor}</td> <!-- PF -->
        <td>${equipo.marcadorEnContra}</td> <!-- PC -->
        <td>${equipo.diferencia}</td> <!-- DIF -->
        <td>${equipo.faltasTotales}</td> <!-- FT -->
    `;

    // Agregar la fila al tbody de la tabla
    tablaBody.appendChild(fila);
});
