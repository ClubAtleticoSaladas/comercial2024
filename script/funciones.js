// 1- Actualizar Contenido de Noticias Slider
const text1 = 'En la jornada 3, Goyin sigue demostrando mejor juego en el Torneo Comercial, gana a Abu Castor por 19 puntos';
const text2 = 'El Bunker de Bella Vista se repone en su segundo enfrentamiento y vence a 4M Dist. 74 a 67';

// 2- Cargar resultados de Fixture Slider
const arrayFixture = [
  ['j1p1', 'Viernes, 29/11 - 21:00',  'KIOSCO J.', 70, '04 Guillermo Godoy (25)', '4M DIST.', 54, '08 José Martín Borda (11)'],
  ['j1p2', 'Viernes, 29/11 - 22:30',  'LA LIGA', 63, '01 Mariano Y. Romero (17)', 'ABU CASTOR', 55, '06 Néstor Altamirano (15)'],

  ['j2p1', 'Miércoles, 04/12 - 21:00',  'KIOSCO J.', 94, '05 Cristian Rausch (26)', 'LA LIGA', 80, ''],
  ['j2p2', 'Miércoles, 04/12 - 22:30', 'EL BUNKER', 72, '', 'GOYIN', 81, ''],

  ['j3p1', 'Viernes, 06/12 - 21:00',  'ABU CASTOR', 62, '', 'GOYIN', 81, ''],
  ['j3p2', 'Viernes, 06/12 - 22:30',  '4M DIST.', 67, '', 'EL BUNKER', 74, ''],

  ['j4p1', 'Miércoles, 11/12 - 21:00',  'KIOSCO J.', '--', '', 'ABU CASTOR', '--', ''],
  ['j4p2', 'Miércoles, 11/12 - 22:30',  '4M DIST.', '--', '', 'LA LIGA', '--', ''],

  ['j5p1', 'Viernes, 13/12 - 21:00',  'LA LIGA.', '--', '', 'EL BUNKER', '--', ''],
  ['j5p2', 'Viernes, 13/12 - 22:30',  'KIOSCO J.', '--', '', 'GOYIN', '--', ''],

  ['j6p1', 'Domingo, 15/12 - 20:00', 'ABU CASTOR', '--', '', 'EL BUNKER', '--', ''],
  ['j6p2', 'Domingo, 15/12 - 21:30',  '4M DIST.', '--', '', 'GOYIN', '--', ''],

  ['j7p1', 'Miércoles, 18/12 - 21:00',  'LA LIGA', '--', '', 'GOYIN', '--', ''],
  ['j7p2', 'Miércoles, 18/12 - 22:30',  'KIOSCO J.', '--', '', 'EL BUNKER', '--', ''],

  ['j8p1', 'Viernes, 20/12 - 21:00',  '4M DIST.', '--', '', 'ABU CASTOR', '--', ''],
  // ['j8p2', 'Viernes, 20/12 - 22:30',  'Equipo1', '--', '', 'Equipo2', '--', ''],

  ['s1p1', 'Domingo, 22/12 - 20:00',  '2° PUESTO', '--', '', '3° PUESTO', '--', ''],
  ['s1p2', 'Domingo, 22/12 - 21:30',  '1° PUESTO', '--', '', '4° PUESTO', '--', ''],

  ['s2p1', 'A definir, --/-- - --:--',  '1° PUESTO', '--', '', '4° PUESTO', '--', ''],
  ['s2p2', 'A definir, --/-- - --:--', '2° PUESTO', '--', '', '3° PUESTO', '--', ''],

  // ['d1p1', 'A definir, --/-- - --:--',  'Equipo 1', '--', '', 'Equipo 2', '--', ''],
  // ['d1p2', 'A definir, --/-- - --:--',  'Equipo 3', '--', '', 'Equipo 4', '--', ''],

  ['f1p1', 'A definir, --/-- - --:--', '1° FINALISTA', '--', '', '2° FINALISTA', '--', '']
];

// 3- Cargar las Noticias de Resultados de Último Partido
const datosPartido1 = {
  titulo: "Jornada 3 - Partido 1",
  fecha: "Viernes, 06/12 - 21:00",
  equipos: [
    {
      nombre: "Abu Castor",
      imagen: "abucastor",
      jugador: "07 Omar F. Staffolani (18)"
    },
    {
      nombre: "Goyin",
      imagen: "goyin",
      jugador: "08 Ivan Bolaño (13)"
    }
  ],
  marcador: { local: 62, visitante: 81 }
};
const datosPartido2 = {
  titulo: "Jornada 3 - Partido 1",
  fecha: datosPartido1.fecha,
  equipos: [
    {
      nombre: "4M Dist.",
      imagen: "4mdist",
      jugador: "07 Gonzalo Spikerman (19)"
    },
    {
      nombre: "El Bunker",
      imagen: "elbunker",
      jugador: "15 Lucas M. Hanke (21)"
    }
  ],
  marcador: { local: 67, visitante: 74 }
};


// Llama a la función con los datos de entrada
window.onload = function () {
  cambiarTextoEImagenes(datosPartido1, 'resultado1');
  cambiarTextoEImagenes(datosPartido2, 'resultado2');
};

function cambiarTextoEImagenes(datosPartido, idDiv) {
  // Selecciona el div usando el ID 'resultado1'
  const matchResultDiv = document.getElementById(idDiv);

  // Cambia el título y la fecha
  matchResultDiv.querySelector('.sportsmagazine-match-title h4').innerText = datosPartido.titulo;
  matchResultDiv.querySelector('.sportsmagazine-match-title span').innerText = datosPartido.fecha;

  // Cambia los nombres, jugadores y las imágenes de los equipos
  const equipos = matchResultDiv.querySelectorAll('ul li h4 a');
  const jugadores = matchResultDiv.querySelectorAll('ul li span');
  const imagenes = matchResultDiv.querySelectorAll('ul li img');

  if (equipos.length >= 2 && jugadores.length >= 2 && imagenes.length >= 2) {
    // Equipo 1
    equipos[0].innerText = datosPartido.equipos[0].nombre;
    jugadores[0].innerText = datosPartido.equipos[0].jugador;
    const nombreEquipo1 = datosPartido.equipos[0].imagen.replace(/\s+/g, "_");
    imagenes[0].src = "images/equipos/" + nombreEquipo1 + ".png";
    imagenes[0].alt = `Logo de ${datosPartido.equipos[0].nombre}`;

    // Equipo 2
    equipos[1].innerText = datosPartido.equipos[1].nombre;
    jugadores[1].innerText = datosPartido.equipos[1].jugador;
    const nombreEquipo2 = datosPartido.equipos[1].imagen.replace(/\s+/g, "_");
    imagenes[1].src = "images/equipos/" + nombreEquipo2 + ".png";
    imagenes[1].alt = `Logo de ${datosPartido.equipos[1].nombre}`;
  } else {
    console.error("No se encontraron suficientes elementos para equipos, jugadores o imágenes.");
  }

  const marcadorLocal = datosPartido.marcador.local;
  const marcadorVisitante = datosPartido.marcador.visitante;
  
  let marcadorHTML;
  
  // Comparar los marcadores y asignar la clase al mayor
  if (marcadorLocal > marcadorVisitante) {
    marcadorHTML = `<strong class="sportsmagazine-color">${marcadorLocal}</strong> <small>:</small> ${marcadorVisitante}`;
  } else if (marcadorVisitante > marcadorLocal) {
    marcadorHTML = `${marcadorLocal} <small>:</small> <strong class="sportsmagazine-color">${marcadorVisitante}</strong>`;
  } else {
    // Si los marcadores son iguales, se podría aplicar algún estilo opcional o mantener sin resaltar.
    marcadorHTML = `${marcadorLocal} <small>:</small> ${marcadorVisitante}`;
  }
  
  // Asignar el HTML al elemento correspondiente
  matchResultDiv.querySelector('.sportsmagazine-match-score p').innerHTML = marcadorHTML;
  
  };

// Función para modificar el contenido
document.addEventListener("DOMContentLoaded", function () {
  actualizarContenido('fecha-1', 'text-1', text1);
  actualizarContenido('fecha-2', 'text-2', text2);
});

// Actualización de jornada
document.addEventListener('DOMContentLoaded', () => {
  arrayFixture.forEach(fixture => {
    const [jornadaId, nuevaFecha, equipo1, puntos1, jugador1, equipo2, puntos2, jugador2] = fixture;
    actualizarFixture(jornadaId, nuevaFecha, equipo1, puntos1, jugador1, equipo2, puntos2, jugador2);
  });
});

function actualizarContenido(idFecha, idTexto, nuevoTexto) {
  // Obtener la fecha actual
  const fecha = new Date();

  // Opciones de formato para día, mes y año
  const opciones = { day: '2-digit', month: 'long', year: 'numeric' };

  // Formatear la fecha en español
  const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

  // Actualizar la fecha
  const elementoFecha = document.getElementById(idFecha);
  if (elementoFecha) {
    elementoFecha.innerHTML = `${fechaFormateada} / C.A.S.`;
  } else {
    console.warn(`Elemento con ID '${idFecha}' no encontrado`);
  }

  // Actualizar el texto del título
  const elementoTexto = document.getElementById(idTexto);
  if (elementoTexto) {
    elementoTexto.innerHTML = nuevoTexto;
  } else {
    console.warn(`Elemento con ID '${idTexto}' no encontrado`);
  }
};


function actualizarFixture(jornadaId, nuevaFecha, equipo1, puntos1, jugador1, equipo2, puntos2, jugador2) {
  const jornada = document.getElementById(jornadaId);
  if (!jornada) return console.warn(`Jornada "${jornadaId}" no encontrada`);

  const timeElement = jornada.querySelector('time');
  if (timeElement) {
    timeElement.innerText = nuevaFecha;
  }

  const equipos = jornada.querySelectorAll('.sportsmagazine-bgcolor li');
  if (equipos.length === 2) {
    equipos[0].innerHTML = `${equipo1} <span>${puntos1}</span>`;
    equipos[1].innerHTML = `${equipo2} <span>${puntos2}</span>`;
  }
};

function ordenarJugadores(jugadores) {
  return jugadores.sort((a, b) => {
    if (b.pts !== a.pts) {
      return b.pts - a.pts; // Ordenar por puntos descendente
    } else {
      return a.faltas - b.faltas; // Ordenar por faltas ascendente
    }
  });
}

