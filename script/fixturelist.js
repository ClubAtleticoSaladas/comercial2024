import { partidos } from './variables.js';

const logoPath = "images/equipos/"; // Ruta base para los logos
// Función para generar el nombre del logo dinámicamente
const generateLogoName = (teamName) => {
    const defaultTeams = [
        "Equipo 1", "Equipo 2",
        "1° Puesto", "2° Puesto",
        "3° Puesto", "4° Puesto",
        "Finalista 1", "Finalista 2",
        "--"
    ];

    if (defaultTeams.includes(teamName)) return "asG.png";
    return `${teamName.toLowerCase().replace(/\s/g, "").replace(/\./g, "")}G.png`;
};

const fixtures = partidos.map(partido => {
    let jornadaDescription;

    switch (partido.fase) {
        case 'regular':
            jornadaDescription = `Jornada # ${partido.jornada}`;
            break;
        case 'semifinal 1':
            jornadaDescription = `Semifinal # 1`;
            break;
        case 'semifinal 2':
            jornadaDescription = `Semifinal # 2`;
            break;
        case 'desempate 1':
            jornadaDescription = `Desempate # 1`;
            break;
        case 'desempate 2':
            jornadaDescription = `Desempate # 2`;
            break;
        case 'final':
            jornadaDescription = `Final #`;
            break;
        default:
            jornadaDescription = `Fase desconocida`;
            break;
    }

    return {
        jornada: jornadaDescription,
        dateTime: partido.fecha,
        estadio: partido.ciudad1 === partido.ciudad2 ? "Juan G. Noya" : "Juan G. Noya",
        match: {
            team1: {
                name: partido.equipo1,
                location: partido.ciudad1,
                logo: `${logoPath}${generateLogoName(partido.equipo1)}`
            },
            score: `${partido.marcador1} - ${partido.marcador2}`,
            team2: {
                name: partido.equipo2,
                location: partido.ciudad2,
                logo: `${logoPath}${generateLogoName(partido.equipo2)}`
            }
        },
        partido: `Partido ${partido.partido}`,
        indice: partido.jornada
    };
});











// Lista de equipos genéricos a excluir
const equiposGenericos = [
    "Equipo 1", "Equipo 2",
    "1° Puesto", "2° Puesto",
    "3° Puesto", "4° Puesto",
    "Finalista 1", "Finalista 2"
];

const obtenerEquiposLibresFaseRegular = (partidos) => {
    const partidosFaseRegular = partidos.filter(partido => partido.fase === 'regular');

    const todosLosEquipos = Array.from(
        new Set(
            partidosFaseRegular.flatMap(partido => [partido.equipo1, partido.equipo2])
        )
    ).filter(equipo => equipo !== "--" && !equiposGenericos.includes(equipo));

    const jornadas = partidosFaseRegular.reduce((acc, partido) => {
        if (!acc[partido.jornada]) acc[partido.jornada] = [];
        acc[partido.jornada].push(partido);
        return acc;
    }, {});

    const equiposLibresPorJornada = Object.entries(jornadas).map(([jornada, partidosJornada]) => {
        const equiposEnJornada = partidosJornada.flatMap(partido => [partido.equipo1, partido.equipo2]);
        const equiposLibres = todosLosEquipos.filter(equipo => !equiposEnJornada.includes(equipo));
        return {
            jornada: `Jornada # ${jornada}`,
            fecha: new Date(partidosJornada[0].fecha), // Tomar fecha del primer partido
            equiposLibres
        };
    });

    return equiposLibresPorJornada;
};

const generarMensajeLibres = (equiposLibresFaseRegular) => {
    return equiposLibresFaseRegular.map((jornada, index, jornadas) => {
        const siguienteJornada = jornadas[index + 1];

        // Verificar si la jornada actual y la siguiente son consecutivas
        if (
            siguienteJornada &&
            Math.abs(
                (jornada.fecha - siguienteJornada.fecha) / (1000 * 60 * 60 * 24)
            ) <= 1 // Diferencia de un día o menos
        ) {
            return null; // Evitar mensaje aquí, será en la siguiente jornada
        }

        const equiposLibresTexto = jornada.equiposLibres.join(" / ");
        return `>> ${jornada.jornada} - Equipos libres: ${equiposLibresTexto}.`;
    }).filter(mensaje => mensaje !== null); // Eliminar mensajes nulos
};


const equiposLibresFaseRegular = obtenerEquiposLibresFaseRegular(partidos);
const mensajesLibres = generarMensajeLibres(equiposLibresFaseRegular);




function loadFixtures(fixtures) {
    const fixtureList = document.getElementById("fixturelist").querySelector("ul");
    fixtureList.innerHTML = ""; // Limpiar contenido existente

    let lastJornada = null; // Para rastrear la jornada actual

    // Función para capitalizar la primera letra
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fixtures.forEach((fixture) => {
        const rawDate = fixture.dateTime;
        let formattedDateTime;

        // Verificar si rawDate es una fecha válida
        const date = new Date(rawDate);
        if (!isNaN(date)) {
            // Convertir fecha al formato "Miércoles, 04/12"
            let formattedDate = capitalizeFirstLetter(date.toLocaleDateString('es-ES', {
                weekday: 'long',
                day: '2-digit',
                month: '2-digit'
            }));

            // Obtener el año
            const year = date.getFullYear();

            // Convertir hora al formato de 24 horas
            const formattedTime = date.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            // Combinar todo en el formato deseado
            formattedDateTime = `${formattedDate} - ${year} @ ${formattedTime}`;
        } else {
            // Si no es una fecha válida, usar el string tal cual
            formattedDateTime = rawDate;
        }

        // Detectar cambios de jornada
        if (lastJornada && lastJornada !== fixture.jornada) {
            // Agregar separador entre jornadas
            const separator = document.createElement("div");
            separator.className = "jornada-separador";
            separator.innerHTML = `<hr>`;
            fixtureList.appendChild(separator);
        }

        // Actualizar la última jornada
        lastJornada = fixture.jornada;

        // Agregar texto antes de la jornada actual
        if (!fixtureList.querySelector(`[data-jornada="${fixture.jornada}"]`)) {
            const jornadaHeader = document.createElement("div");
            jornadaHeader.className = "jornada-header";
            jornadaHeader.setAttribute("data-jornada", fixture.jornada);
            let indice = fixture.indice - 1;
            let libres = "";
            if (indice < mensajesLibres.length) {
                libres = mensajesLibres[indice];
            }
           
            jornadaHeader.innerHTML = `
                <p><strong>${libres}</strong></p>
                <hr> 
            `;
            fixtureList.appendChild(jornadaHeader);
        }

        // Crear elemento para la jornada actual
        const li = document.createElement("li");
        li.className = "col-md-12";

        li.innerHTML = `
            <div class="sportsmagazine-fixture-wrap">
                <div class="sportsmagazine-teams-match">
                    <div class="sportsmagazine-first-team">
                        <figure><img src="${fixture.match.team1.logo}" alt=""></figure>
                        <div class="sportsmagazine-first-team-info">
                            <h6><a href="#">${fixture.match.team1.name}</a></h6>
                            <span>${fixture.match.team1.location}</span>
                        </div>
                    </div>
                    <div class="sportsmagazine-match-view">
                        <h5>${fixture.jornada}</h5>
                        <span>VS</span>
                        <h4 class="match-score">${fixture.match.score}</h4>
                    </div>
                    <div class="sportsmagazine-second-team">
                        <figure><img src="${fixture.match.team2.logo}" alt=""></figure>
                        <div class="sportsmagazine-second-team-info">
                            <h6><a href="#">${fixture.match.team2.name}</a></h6>
                            <span>${fixture.match.team2.location}</span>
                        </div>
                    </div>
                </div>
                <div class="sportsmagazine-buy-ticket">
                    <div class="sportsmagazine-buy-ticket-text">
                        <h5>Estadio: “${fixture.estadio}”</h5>
                        <time datetime="${rawDate}">${formattedDateTime}</time>
                    </div>
                    <a href="#" class="ticket-buy-btn">${fixture.partido}</a>
                </div>
            </div>
            ${fixture.libres ? `<div><strong>>> ${fixture.jornada} - Equipos libres: ${fixture.libres}.</strong></div>` : ""}
        `;

        fixtureList.appendChild(li);
    });
}

// Llamar a la función
loadFixtures(fixtures);
