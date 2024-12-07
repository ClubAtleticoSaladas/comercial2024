const fixtures = [
    //Jornada #1
    {
        jornada: "Jornada # 1",
        dateTime: "2024-11-29 21:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Kiosco J.", location: "Saladas", logo: "images/equipos/kioscojG.png" },
            score: "70 - 54",
            team2: { name: "4M Dist.", location: "Saladas", logo: "images/equipos/4mdistG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Jornada # 1",
        dateTime: "2024-11-29 22:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "La Liga", location: "Saladas", logo: "images/equipos/laligaG.png" },
            score: "63 - 55",
            team2: { name: "Abu Castor", location: "Saladas", logo: "images/equipos/abucastorG.png" }
        },
        partido: "Partido 2",
        libres: "El Bunker y Goyin"
    },
    //Jornada #2
    {
        jornada: "Jornada # 2",
        dateTime: "2024-12-04 21:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Kiosco J.", location: "Saladas", logo: "images/equipos/kioscojG.png" },
            score: "94 - 80",
            team2: { name: "La Liga", location: "Saladas", logo: "images/equipos/laligaG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Jornada # 2",
        dateTime: "2024-12-04 22:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "El Bunker", location: "Bella Vista", logo: "images/equipos/elbunkerG.png" },
            score: "72 - 81",
            team2: { name: "Goyin", location: "Saladas", logo: "images/equipos/goyinG.png" }
        },
        partido: "Partido 2",
        libres: "4M Dist. y Abu Castor"
    },
    //Jornada #3
    {
        jornada: "Jornada # 3",
        dateTime: "2024-12-06 21:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Abu Castor", location: "Saladas", logo: "images/equipos/abucastorG.png" },
            score: "62 - 81",
            team2: { name: "Goyin", location: "Saladas", logo: "images/equipos/goyinG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Jornada # 3",
        dateTime: "2024-12-06 22:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "4M Dist.", location: "Saladas", logo: "images/equipos/4mdistG.png" },
            score: "67 - 74",
            team2: { name: "El Bunker", location: "Bella Vista", logo: "images/equipos/elbunkerG.png" }
        },
        partido: "Partido 2",
        libres: "Kiosco J. y La Liga"
    },
    //Jornada #4
    {
        jornada: "Jornada # 4",
        dateTime: "2024-12-11 21:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Kiosco J.", location: "Saladas", logo: "images/equipos/kioscojG.png" },
            score: "-- - --",
            team2: { name: "Abu Castor", location: "Saladas", logo: "images/equipos/abucastorG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Jornada # 4",
        dateTime: "2024-12-11 22:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "4M Dist.", location: "Saladas", logo: "images/equipos/4mdistG.png" },
            score: "-- - --",
            team2: { name: "La Liga", location: "Saladas", logo: "images/equipos/laligaG.png" }
        },
        partido: "Partido 2",
        libres: "El Bunker y Goyin"
    },
    //Jornada #5
    {
        jornada: "Jornada # 5",
        dateTime: "2024-12-13 21:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "La Liga", location: "Saladas", logo: "images/equipos/laligaG.png" },
            score: "-- - --",
            team2: { name: "El Bunker", location: "Bella Vista", logo: "images/equipos/elbunkerG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Jornada # 5",
        dateTime: "2024-12-13 22:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Kiosco J.", location: "Saladas", logo: "images/equipos/kioscojG.png" },
            score: "-- - --",
            team2: { name: "Goyin", location: "Saladas", logo: "images/equipos/goyinG.png" }
        },
        partido: "Partido 2",
        libres: "4M Dist. y Abu Castor"
    },
    //Jornada #6
    {
        jornada: "Jornada # 6",
        dateTime: "2024-12-15 20:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Abu Castor", location: "Saladas", logo: "images/equipos/abucastorG.png" },
            score: "-- - --",
            team2: { name: "El Bunker", location: "Bella Vista", logo: "images/equipos/elbunkerG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Jornada # 6",
        dateTime: "2024-12-15 21:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "4M Dist.", location: "Saladas", logo: "images/equipos/4mdistG.png" },
            score: "-- - --",
            team2: { name: "Goyin", location: "Saladas", logo: "images/equipos/goyinG.png" }
        },
        partido: "Partido 2",
        libres: "Kiosco J. y La Liga"
    },
    //Jornada #7
    {
        jornada: "Jornada # 7",
        dateTime: "2024-12-18 21:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "La Liga", location: "Saladas", logo: "images/equipos/laligaG.png" },
            score: "-- - --",
            team2: { name: "Goyin", location: "Saladas", logo: "images/equipos/goyinG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Jornada # 7",
        dateTime: "2024-12-18 22:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Kiosco J.", location: "Saladas", logo: "images/equipos/kioscojG.png" },
            score: "-- - --",
            team2: { name: "El Bunker", location: "Bella Vista", logo: "images/equipos/elbunkerG.png" }
        },
        partido: "Partido 2",
        libres: "4M Dist. y Abu Castor"
    },
    //Jornada #8
    {
        jornada: "Jornada # 8",
        dateTime: "2024-12-20 21:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "4M Dist.", location: "Saladas", logo: "images/equipos/4mdistG.png" },
            score: "-- - --",
            team2: { name: "Abu Castor", location: "Saladas", logo: "images/equipos/abucastorG.png" }
        },
        partido: "Único Partido",
        libres: "Kiosco J., La Liga, El Bunker y Goyin"
    },
    // {
    //     jornada: "Jornada # 8",
    //     dateTime: "2024-12-20 22:30",
    //     estadio: "Juan G. Noya",
    //     match: {
    //         team1: { name: "Equipo 1", location: "Saladas", logo: "images/equipos/equipo1.png" },
    //         score: "-- - --",
    //         team2: { name: "Equipo 2", location: "Saladas", logo: "images/equipos/equipo2G.png" }
    //     },
    //     partido: "Partido 2",
    //     libres: "Equipo 3 y Equipo 4"
    // },
    //Desempate #9
    {
        jornada: "Desempate # 9",
        dateTime: "A definir, --/-- - ---- @--:--",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Equipo 1", location: "Ciudad", logo: "images/equipos/asG.png" },
            score: "-- - --",
            team2: { name: "Equipo 2", location: "Ciudad", logo: "images/equipos/asG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Desempate # 9",
        dateTime: "A definir, --/-- - ---- @--:--",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "Equipo 3", location: "Ciudad", logo: "images/equipos/asG.png" },
            score: "-- - --",
            team2: { name: "Equipo 4", location: "Ciudad", logo: "images/equipos/asG.png" }
        },
        partido: "Partido 2",
        libres: "Si existen equipos empatados en puntos y otros criterios, se definirá su posición mediante un partido directo entre ellos. Sin embargo, si las posiciones ya están definidas, este partido de desempate no será necesario."
    },
    //Jornada #Semi 1
    {
        jornada: "Semifinal # 1",
        dateTime: "2024-12-22 20:00",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "2° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" },
            score: "-- - --",
            team2: { name: "3° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Semifinal # 1",
        dateTime: "2024-12-22 21:30",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "1° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" },
            score: "-- - --",
            team2: { name: "4° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" }
        },
        partido: "Partido 2",
        libres: "No hay"
    },
    //Jornada #Semi 2
    {
        jornada: "Semifinal # 2",
        dateTime: "A definir, --/-- - ---- @--:--",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "1° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" },
            score: "-- - --",
            team2: { name: "4° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" }
        },
        partido: "Partido 1"
    },
    {
        jornada: "Semifinal # 2",
        dateTime: "A definir, --/-- - ---- @--:--",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "2° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" },
            score: "-- - --",
            team2: { name: "3° Puesto", location: "Ciudad", logo: "images/equipos/asG.png" }
        },
        partido: "Partido 2",
        libres: "No hay"
    },
    //Jornada #Final
    {
        jornada: "Final #",
        dateTime: "A definir, --/-- - ---- @--:--",
        estadio: "Juan G. Noya",
        match: {
            team1: { name: "1° Finalista", location: "Ciudad", logo: "images/equipos/asG.png" },
            score: "-- - --",
            team2: { name: "2° Finalista", location: "Ciudad", logo: "images/equipos/asG.png" }
        },
        partido: "Único Partido"
    }
];

function loadFixtures(fixtures) {
    const fixtureList = document.getElementById("fixturelist").querySelector("ul");
    fixtureList.innerHTML = ""; // Limpiar contenido existente

    // Función para capitalizar la primera letra
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fixtures.forEach(fixture => {
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

