// 1- Cargar resultados de Fixture Slider
export const partidos = [
    { id: "j1p1", jornada: 1, partido: 1, fase: "regular", fecha: "2024-11-29 21:00", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 70, faltas1: 23, goleador1: "04 Guillermo Godoy (25)", equipo2: "4M Dist.", ciudad2: "Saladas", marcador2: 54, faltas2: 14, goleador2: "08 José Martín Borda (11)" },
    { id: "j1p2", jornada: 1, partido: 2, fase: "regular", fecha: "2024-11-29 22:30", equipo1: "La Liga", ciudad1: "Saladas", marcador1: 63, faltas1: 15, goleador1: "01 Mariano Y. Romero (17)", equipo2: "Abu Castor", ciudad2: "Saladas", marcador2: 55, faltas2: 14, goleador2: "06 Néstor Altamirano (15)" },
    { id: "j2p1", jornada: 2, partido: 1, fase: "regular", fecha: "2024-12-04 21:00", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 94, faltas1: 20, goleador1: "05 Cristian Rausch (26)", equipo2: "La Liga", ciudad2: "Saladas", marcador2: 80, faltas2: 13, goleador2: "14 Maximiliano E. Redruello (24)" },
    { id: "j2p2", jornada: 2, partido: 2, fase: "regular", fecha: "2024-12-04 22:30", equipo1: "El Bunker", ciudad1: "Bella Vista", marcador1: 72, faltas1: 12, goleador1: "17 Francisco Albarellos (31)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 81, faltas2: 12, goleador2: "08 Ivan Bolaño (24)" },
    { id: "j3p1", jornada: 3, partido: 1, fase: "regular", fecha: "2024-12-06 21:00", equipo1: "Abu Castor", ciudad1: "Saladas", marcador1: 62, faltas1: 10, goleador1: "07 Omar F. Staffolani (18)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 81, faltas2: 11, goleador2: "08 Ivan Bolaño (13)" },
    { id: "j3p2", jornada: 3, partido: 2, fase: "regular", fecha: "2024-12-06 22:30", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: 67, faltas1: 15, goleador1: "07 Gonzalo Spikerman (19)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: 74, faltas2: 15, goleador2: "15 Lucas M. Hanke (21)" },
    { id: "j4p1", jornada: 4, partido: 1, fase: "regular", fecha: "2024-12-11 21:00", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 92, faltas1: 11, goleador1: "05 Cristian Rausch (44)", equipo2: "Abu Castor", ciudad2: "Saladas", marcador2: 84, faltas2: 20, goleador2: "13 Mauricio Lago (22)" },
    { id: "j4p2", jornada: 4, partido: 2, fase: "regular", fecha: "2024-12-11 22:30", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: 91, faltas1: 20, goleador1: "07 Gonzalo Spikerman (20)", equipo2: "La Liga", ciudad2: "Saladas", marcador2: 66, faltas2: 17, goleador2: "14 Maximiliano E. Redruello (22)" },
    { id: "j5p1", jornada: 5, partido: 1, fase: "regular", fecha: "2024-12-13 21:00", equipo1: "La Liga", ciudad1: "Saladas", marcador1: 75, faltas1: 13, goleador1: "12 Hugo O. Benitez (21)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: 61, faltas2: 18, goleador2: "15 Lucas M. Hanke (18)" },
    // { id: "j5p2", jornada: 5, partido: 2, fase: "regular", fecha: "2024-12-20 22:30", equipo1: "Equipo 1", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Equipo 2", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j6p1", jornada: 6, partido: 1, fase: "regular", fecha: "2024-12-15 20:30", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 83, faltas1: 12, goleador1: "08 Nahuel Melian (21)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: 64, faltas2: 15, goleador2: "15 Lucas M. Hanke (31)" },
    { id: "j6p2", jornada: 6, partido: 2, fase: "regular", fecha: "2024-12-15 22:00", equipo1: "La Liga", ciudad1: "Saladas", marcador1: 95, faltas1: 13, goleador1: "13 Hugo O. Benitez (29)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 73, faltas2: 13, goleador2: "09 Mauro Veron (20)" },
    { id: "j7p1", jornada: 7, partido: 1, fase: "regular", fecha: "2024-12-18 21:00", equipo1: "Abu Castor", ciudad1: "Saladas", marcador1: 59, faltas1: 10, goleador1: "10 Nestor Altamirano (13)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: 69, faltas2: 9, goleador2: "10 Francisco Albarellos (21)" },
    { id: "j7p2", jornada: 7, partido: 2, fase: "regular", fecha: "2024-12-18 22:30", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: 87, faltas1: 15, goleador1: "00 Leandro J. Fernadez (24)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 100, faltas2: 17, goleador2: "06 Mauro Veron (21)" },
    { id: "j8p1", jornada: 8, partido: 1, fase: "regular", fecha: "2024-12-20 21:00", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: 80, faltas1: 11, goleador1: "30 Ramiro Andyc Diez (27)", equipo2: "Abu Castor", ciudad2: "Saladas", marcador2: 58, faltas2: 17, goleador2: "11 Néstor Altamirano (17)" },
    { id: "j8p2", jornada: 8, partido: 2, fase: "regular", fecha: "2024-12-20 22:30", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 115, faltas1: 15, goleador1: "10 Cristian Rausch (44)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 92, faltas2: 14, goleador2: "08 Ivan Bolaño (33)" },
    { id: "j9p1", jornada: 9, partido: 1, fase: "semifinal 1", fecha: "2024-12-22 20:30", equipo1: "La Liga", ciudad1: "Saladas", marcador1: 106, faltas1: 26, goleador1: "20 Agustín N. Niveyro (44)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 84, faltas2: 19, goleador2: "08 Ivan Bolaño (25)" },
    { id: "j9p2", jornada: 9, partido: 2, fase: "semifinal 1", fecha: "2024-12-22 22:00", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 70, faltas1: 19, goleador1: "11 Luciano Romero (27)", equipo2: "4M Dist.", ciudad2: "Saladas", marcador2: 85, faltas2: 23, goleador2: "30 Ramiro Andyc Olivera (23)" },

    { id: "j10p1", jornada: 10, partido: 1, fase: "semifinal 2", fecha: "2024-12-27 21:00", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Kiosco J.", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j10p2", jornada: 10, partido: 2, fase: "semifinal 2", fecha: "2024-12-27 22:30", equipo1: "La Liga", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    //  { id: "j11p1", jornada: 11, partido: 1, fase: "desempate 1", fecha: "A definir, --/-- - --:--", equipo1: "Equipo 1", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Equipo 2", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    //{ id: "j11p2", jornada: 11, partido: 2, fase: "desempate 2", fecha: "A definir, --/-- - --:--", equipo1: "Equipo 3", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Equipo 4", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j12p1", jornada: 12, partido: 1, fase: "final", fecha: "A definir, --/-- - --:--", equipo1: "Finalista 1", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Finalista 2", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" }
    // , { id: "j12p2", jornada: 12, partido: 2, fase: "final", fecha: "A definir, --/-- - --:--", equipo1: "Finalista 2", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador2 (--)", equipo2: "Finalista 1", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador1 (--)" }
];


export const jugadores = [ { nombre: 'Cristian Rausch', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 131, faltas:7 } , { nombre: 'Ivan Bolaño', equipo: 'Goyin', ciudad: 'Saladas', pts: 115, faltas:8 } , { nombre: 'Lucas Matias Hanke', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 98, faltas:11 } , { nombre: 'Hugo Orlando Benitez', equipo: 'La Liga', ciudad: 'Saladas', pts: 94, faltas:15 } , { nombre: 'Gonzalo Spikerman', equipo: '4M Dist.', ciudad: 'Saladas', pts: 87, faltas:12 } , { nombre: 'Ramiro Andyc Diez', equipo: '4M Dist.', ciudad: 'Saladas', pts: 82, faltas:7 } , { nombre: 'Mauro Veron', equipo: 'Goyin', ciudad: 'Saladas', pts: 79, faltas:16 } , { nombre: 'Luciano Romero', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 75, faltas:14 } , { nombre: 'Nestor Altamirano', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 69, faltas:1 } , { nombre: 'Francisco Albarellos', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 69, faltas:11 } , { nombre: 'Maximiliano E. Redruello', equipo: 'La Liga', ciudad: 'Saladas', pts: 68, faltas:6 } , { nombre: 'Axel Vallejos', equipo: 'Goyin', ciudad: 'Saladas', pts: 66, faltas:7 } , { nombre: 'Hector Stanco', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 66, faltas:16 } , { nombre: 'Omar Federico Staffolani', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 61, faltas:12 } , { nombre: 'Mauricio Jose Centurion', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 58, faltas:8 } , { nombre: 'Sergio Ariel Blanco', equipo: 'La Liga', ciudad: 'Saladas', pts: 57, faltas:4 } , { nombre: 'Juan Marcelo Montanar', equipo: '4M Dist.', ciudad: 'Saladas', pts: 56, faltas:10 } , { nombre: 'Alan Jorge C. Sandoval', equipo: 'Goyin', ciudad: 'Saladas', pts: 51, faltas:5 } , { nombre: 'Leandro Jeremias Fernadez', equipo: '4M Dist.', ciudad: 'Saladas', pts: 51, faltas:10 } , { nombre: 'Julian Arturo Romero', equipo: 'La Liga', ciudad: 'Saladas', pts: 50, faltas:13 } , { nombre: 'Agustin Nicolas Niveyro', equipo: 'La Liga', ciudad: 'Saladas', pts: 45, faltas:6 } , { nombre: 'Mariano Yamandu Romero', equipo: 'La Liga', ciudad: 'Saladas', pts: 44, faltas:4 } , { nombre: 'Alejandro Brito', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 44, faltas:6 } , { nombre: 'Enzo Borget', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 43, faltas:5 } , { nombre: 'Matias Nuñez', equipo: 'Goyin', ciudad: 'Saladas', pts: 43, faltas:10 } , { nombre: 'Maximiliano Sand', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 36, faltas:5 } , { nombre: 'Matias Nicolas Samaniego', equipo: '4M Dist.', ciudad: 'Saladas', pts: 35, faltas:5 } , { nombre: 'Guillermo Godoy', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 35, faltas:6 } , { nombre: 'Mauricio Lago', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 35, faltas:7 } , { nombre: 'Nahuel Melian', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 34, faltas:4 } , { nombre: 'Diego Lomonaco', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 33, faltas:2 } , { nombre: 'Saturnino Perez', equipo: 'Goyin', ciudad: 'Saladas', pts: 33, faltas:7 } , { nombre: 'Jose Martin Borda', equipo: '4M Dist.', ciudad: 'Saladas', pts: 33, faltas:9 } , { nombre: 'Martin Benitez Arbo', equipo: 'Goyin', ciudad: 'Saladas', pts: 30, faltas:5 } , { nombre: 'Mauricio N. Rolon Axson', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 30, faltas:20 } , { nombre: 'Juan Cruz A. Barberan', equipo: 'La Liga', ciudad: 'Saladas', pts: 27, faltas:8 } , { nombre: 'Lautaro Fitz', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 26, faltas:7 } , { nombre: 'Bautista Fernandez', equipo: '4M Dist.', ciudad: 'Saladas', pts: 26, faltas:10 } , { nombre: 'Oscar Rodrigo A. Souto', equipo: '4M Dist.', ciudad: 'Saladas', pts: 26, faltas:11 } , { nombre: 'Luis Osiris Ledesma Franco', equipo: '4M Dist.', ciudad: 'Saladas', pts: 25, faltas:7 } , { nombre: 'Ramon Jose Pujol', equipo: 'La Liga', ciudad: 'Saladas', pts: 25, faltas:7 } , { nombre: 'Facundo Raul Alterats', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 25, faltas:7 } , { nombre: 'Nicolas Encinas', equipo: 'Goyin', ciudad: 'Saladas', pts: 25, faltas:11 } , { nombre: 'Javier F. Romero Gomez', equipo: 'La Liga', ciudad: 'Saladas', pts: 23, faltas:5 } , { nombre: 'Nicolas Sandoval', equipo: 'Goyin', ciudad: 'Saladas', pts: 19, faltas:3 } , { nombre: 'Sebastian Eduardo Vera', equipo: 'Goyin', ciudad: 'Saladas', pts: 18, faltas:5 } , { nombre: 'Mariano Castañeda', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 17, faltas:3 } , { nombre: 'Valentin Aguirre', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 17, faltas:6 } , { nombre: 'Martin Fernadez', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 15, faltas:2 } , { nombre: 'Matias Gonzalez', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 15, faltas:2 } , { nombre: 'Nestor Bolotner', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 15, faltas:3 } , { nombre: 'Thiago Joaquin Insaurralde', equipo: '4M Dist.', ciudad: 'Saladas', pts: 15, faltas:4 } , { nombre: 'Gonzalo Niz', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 14, faltas:5 } , { nombre: 'Brian Mariano Brito', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 13, faltas:4 } , { nombre: 'Santiago G. de Jesus Martinez', equipo: 'La Liga', ciudad: 'Saladas', pts: 13, faltas:4 } , { nombre: 'Juan Alberto Romero', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 13, faltas:8 } , { nombre: 'Julio Santiago Romero', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 13, faltas:8 } , { nombre: 'Ariel Gomez', equipo: 'Goyin', ciudad: 'Saladas', pts: 12, faltas:0 } , { nombre: 'Zeus Leonel Rodriguez', equipo: 'Goyin', ciudad: 'Saladas', pts: 12, faltas:0 } , { nombre: 'Santiago Pnharanda', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 12, faltas:1 } , { nombre: 'Santiago Gaston Yaya', equipo: 'La Liga', ciudad: 'Saladas', pts: 12, faltas:2 } , { nombre: 'Ariel Silva', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 12, faltas:8 } , { nombre: 'Benjamin Montanar Insaurralde', equipo: '4M Dist.', ciudad: 'Saladas', pts: 11, faltas:4 } , { nombre: 'Hernan Leonel Aguirre', equipo: '4M Dist.', ciudad: 'Saladas', pts: 11, faltas:5 } , { nombre: 'Javier Luque', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 10, faltas:4 } , { nombre: 'Jose Nassem Miguel Cura', equipo: 'La Liga', ciudad: 'Saladas', pts: 9, faltas:2 } , { nombre: 'Santiago Valega', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 9, faltas:2 } , { nombre: 'Fernando Saul Correa ', equipo: 'La Liga', ciudad: 'Saladas', pts: 9, faltas:4 } , { nombre: 'Bautista Witte', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 8, faltas:2 } , { nombre: 'Fernando Andres Roman', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 8, faltas:7 } , { nombre: 'Jose Maria Pisarello', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 7, faltas:5 } , { nombre: 'Rodolfo Ivan Olivera', equipo: '4M Dist.', ciudad: 'Saladas', pts: 6, faltas:3 } , { nombre: 'Juan Cruz Yanguas', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 5, faltas:0 } , { nombre: 'Jonas Zannino', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 5, faltas:4 } , { nombre: 'Mario Benitez Arbo', equipo: 'Goyin', ciudad: 'Saladas', pts: 5, faltas:5 } , { nombre: 'Pablo A. Gonzalez Pujol', equipo: 'La Liga', ciudad: 'Saladas', pts: 4, faltas:4 } , { nombre: 'Patricio Lamas', equipo: 'La Liga', ciudad: 'Saladas', pts: 3, faltas:1 } , { nombre: 'Francisco Faccioli', equipo: 'Goyin', ciudad: 'Saladas', pts: 3, faltas:4 } , { nombre: 'Lautaro Galloso', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 3, faltas:6 } , { nombre: 'Augusto Karlen', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 3, faltas:8 } , { nombre: 'Carlos Francisco Almiron', equipo: 'La Liga', ciudad: 'Saladas', pts: 2, faltas:6 } , { nombre: 'Alex Meza', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Federico Billordo', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Juan Cruz Vazquez', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Nestor Alegre', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Equipo Técnico', equipo: 'Kiosco J.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Gabriel Pinat Ojeda', equipo: '4M Dist.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Hugo Oscar Barrios', equipo: '4M Dist.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Luis Horacio Yaya', equipo: '4M Dist.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Mateo Fernandez', equipo: '4M Dist.', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Equipo Técnico', equipo: 'La Liga', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Juan Pablo Staffolani', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Nicolas Juan Jose Lacava', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Sebastian Cena Alvarez', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Equipo Técnico', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Joaquin Bertran', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 0, faltas:0 } , { nombre: 'Juan Cruz Alderete', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 0, faltas:0 } , { nombre: 'Santiago Mansutti', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 0, faltas:0 } , { nombre: 'Equipo Técnico', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 0, faltas:0 } , { nombre: 'Equipo Técnico', equipo: 'Goyin', ciudad: 'Saladas', pts: 0, faltas:0 } , { nombre: 'Equipo Técnico', equipo: '4M Dist.', ciudad: 'Saladas', pts: 0, faltas:1 } , { nombre: 'Enzo Ledesma', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 0, faltas:1 } , { nombre: 'Joaquin Perez', equipo: 'Abu Castor', ciudad: 'Saladas', pts: 0, faltas:1 } , { nombre: 'Bautista Falcon Serial', equipo: 'El Bunker', ciudad: 'Bella Vista', pts: 0, faltas:1 } , { nombre: 'Kevin Axel Barberan', equipo: 'La Liga', ciudad: 'Saladas', pts: 0, faltas:2 } , { nombre: 'Pedro Facundo Niveyro', equipo: 'La Liga', ciudad: 'Saladas', pts: 0, faltas:2 } ];


// Obtener los últimos dos partidos válidos
const ultimosDosPartidos = partidos.filter(partido => partido.marcador1 !== "--" && partido.marcador2 !== "--").slice(-2);


// Encontrar el ganador y perdedor de cada partido
const resultados = ultimosDosPartidos.map(partido => {
    const { equipo1, marcador1, equipo2, marcador2 } = partido;
    if (marcador1 > marcador2) {
        return {
            ganador: { equipo: equipo1, marcador: marcador1 },
            perdedor: { equipo: equipo2, marcador: marcador2 }
        };
    } else {
        return {
            ganador: { equipo: equipo2, marcador: marcador2 },
            perdedor: { equipo: equipo1, marcador: marcador1 }
        };
    }
});


// Texto nuevo que quieres agregar
const nuevoTexto1 = "En la jornada " + ultimosDosPartidos[0].jornada + " de la fase " + ultimosDosPartidos[0].fase + ", " + resultados[0].ganador.equipo +
    " gana a " + resultados[0].perdedor.equipo + " por " + Math.abs(resultados[0].ganador.marcador - resultados[0].perdedor.marcador) + " puntos de diferencia.";

const nuevoTexto2 = "¡En la fase " + ultimosDosPartidos[1].fase + " del segundo partido en el Torneo Comercial, " +
    resultados[1].ganador.equipo + " vence a " + resultados[1].perdedor.equipo + " por " + resultados[1].ganador.marcador + " a " + resultados[1].perdedor.marcador + "!";

export const nuevoTextos = [nuevoTexto1, nuevoTexto2];

