// 1- Cargar resultados de Fixture Slider
export const partidos = [
    { id: "j1p1", jornada: 1, partido: 1, fase: 'regular', fecha: "2024-11-29 21:00", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 70, faltas1: 23, goleador1: "04 Guillermo Godoy (25)", equipo2: "4M Dist.", ciudad2: "Saladas", marcador2: 54, faltas2: 14, goleador2: "08 José Martín Borda (11)" },
    { id: "j1p2", jornada: 1, partido: 2, fase: 'regular', fecha: "2024-11-29 22:30", equipo1: "La Liga", ciudad1: "Saladas", marcador1: 63, faltas1: 15, goleador1: "01 Mariano Y. Romero (17)", equipo2: "Abu Castor", ciudad2: "Saladas", marcador2: 55, faltas2: 14, goleador2: "06 Néstor Altamirano (15)" },

    { id: "j2p1", jornada: 2, partido: 1, fase: 'regular', fecha: "2024-12-04 21:00", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: 94, faltas1: 20, goleador1: "05 Cristian Rausch (26)", equipo2: "La Liga", ciudad2: "Saladas", marcador2: 80, faltas2: 13, goleador2: "14 Maximiliano E. Redruello (24)" },
    { id: "j2p2", jornada: 2, partido: 2, fase: 'regular', fecha: "2024-12-04 22:30", equipo1: "El Bunker", ciudad1: "Bella Vista", marcador1: 72, faltas1: 12, goleador1: "17 Francisco Albarellos (31)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 81, faltas2: 12, goleador2: "08 Ivan Bolaño (24)" },

    { id: "j3p1", jornada: 3, partido: 1, fase: 'regular', fecha: "2024-12-06 21:00", equipo1: "Abu Castor", ciudad1: "Saladas", marcador1: 62, faltas1: 10, goleador1: "07 Omar F. Staffolani (18)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: 81, faltas2: 11, goleador2: "08 Ivan Bolaño (13)" },
    { id: "j3p2", jornada: 3, partido: 2, fase: 'regular', fecha: "2024-12-06 22:30", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: 67, faltas1: 15, goleador1: "07 Gonzalo Spikerman (19)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: 74, faltas2: 15, goleador2: "15 Lucas M. Hanke (21)" },

    { id: "j4p1", jornada: 4, partido: 1, fase: 'regular', fecha: "2024-12-11 21:00", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Abu Castor", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j4p2", jornada: 4, partido: 2, fase: 'regular', fecha: "2024-12-11 22:30", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "La Liga", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j5p1", jornada: 5, partido: 1, fase: 'regular', fecha: "2024-12-13 21:00", equipo1: "La Liga", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j5p2", jornada: 5, partido: 2, fase: 'regular', fecha: "2024-12-13 22:30", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j6p1", jornada: 6, partido: 1, fase: 'regular', fecha: "2024-12-15 20:00", equipo1: "Abu Castor", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j6p2", jornada: 6, partido: 2, fase: 'regular', fecha: "2024-12-15 21:30", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j7p1", jornada: 7, partido: 1, fase: 'regular', fecha: "2024-12-18 21:00", equipo1: "La Liga", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Goyin", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j7p2", jornada: 7, partido: 2, fase: 'regular', fecha: "2024-12-18 22:30", equipo1: "Kiosco J.", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "El Bunker", ciudad2: "Bella Vista", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j8p1", jornada: 8, partido: 1, fase: 'regular', fecha: "2024-12-20 21:00", equipo1: "4M Dist.", ciudad1: "Saladas", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Abu Castor", ciudad2: "Saladas", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    // { id: "j8p2", jornada: 8, partido: 2, fase: 'regular', fecha: "2024-12-20 22:30", equipo1: "Equipo 1", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Equipo 2", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j9p1", jornada: 9, partido: 1, fase: 'semifinal 1', fecha: "2024-12-22 21:00", equipo1: "2° Puesto", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "3° Puesto", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j9p2", jornada: 9, partido: 2, fase: 'semifinal 1', fecha: "2024-12-22 22:30", equipo1: "1° Puesto", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "4° Puesto", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j10p1", jornada: 10, partido: 1, fase: 'semifinal 2', fecha: "A definir, --/-- - --:--", equipo1: "1° Puesto", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "4° Puesto", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    { id: "j10p2", jornada: 10, partido: 2, fase: 'semifinal 2', fecha: "A definir, --/-- - --:--", equipo1: "2° Puesto", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "3° Puesto", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    //  { id: "j11p1", jornada: 11, partido: 1, fase: 'desempate 1', fecha: "A definir, --/-- - --:--", equipo1: "Equipo 1", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Equipo 2", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },
    //{ id: "j11p2", jornada: 11, partido: 2, fase: 'desempate 2', fecha: "A definir, --/-- - --:--", equipo1: "Equipo 3", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Equipo 4", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" },

    { id: "j12p1", jornada: 12, partido: 1, fase: 'final', fecha: "A definir, --/-- - --:--", equipo1: "Finalista 1", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador1 (--)", equipo2: "Finalista 2", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador2 (--)" }
    // , { id: "j12p2", jornada: 12, partido: 2, fase: 'final', fecha: "A definir, --/-- - --:--", equipo1: "Finalista 2", ciudad1: "-----", marcador1: "--", faltas1: "", goleador1: "-- Jugador2 (--)", equipo2: "Finalista 1", ciudad2: "-----", marcador2: "--", faltas2: "", goleador2: "-- Jugador1 (--)" }
];

export const jugadores = [
    // Kiosco J.
    { nombre: "Cristian Rausch", equipo: "Kiosco J.", ciudad: "Saladas",pts: 26, faltas: 1 },
    { nombre: "Lautaro Fitz", equipo: "Kiosco J.", ciudad: "Saladas",pts: 26, faltas: 7 },
    { nombre: "Guillermo Godoy", equipo: "Kiosco J.", ciudad: "Saladas", pts: 35, faltas: 6 },
    { nombre: "Hector Stanco", equipo: "Kiosco J.",ciudad: "Saladas", pts: 23, faltas: 7 },
    //La Liga
    { nombre: "Juan Cruz Barberan", equipo: "La Liga",ciudad: "Saladas", pts: 19, faltas: 2 },
    { nombre: "Julian Arturo Romero", equipo: "La Liga",ciudad: "Saladas", pts: 29, faltas: 5 },
    //Goyin
    { nombre: "Ivan Bolaño", equipo: "Goyin", ciudad: "Saladas",pts: 37, faltas: 2 },
    { nombre: "Maximiliano Redruello", equipo: "La Liga", ciudad: "Saladas",pts: 24, faltas: 1 },
    //El Bunker
    { nombre: "Lucas Matias Hanke", equipo: "El Bunker",ciudad: "Bella Vista", pts: 45, faltas: 5 },
    { nombre: "Francisco Albarellos", equipo: "El Bunker", ciudad: "Bella Vista",pts: 31, faltas: 6 },
    // 4M Dist.
    { nombre: "Juan M. Montanar", equipo: "4M Dist.", ciudad: "Saladas",pts: 26, faltas: 4 },
    { nombre: "Gonzalo Spikerman", equipo: "4M Dist.", ciudad: "Saladas",pts: 26, faltas: 5 },
    //Abu Castor
    { nombre: "Omar F. Staffolani", equipo: "Abu Castor", ciudad: "Saladas",pts: 30, faltas: 3 }
  ];
