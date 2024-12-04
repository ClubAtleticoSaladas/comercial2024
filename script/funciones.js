// 1- Actualizar Contenido de noticias
const text1 = 'Victoria del equipo Kiosco Josefina 70 - 54 a 4M Distribuciones en la 1° Fecha del Torneo Comercial';
const text2 = 'La Liga vence a Abu Castor por 63 a 55 en la primera fecha del Torneo Comercial';

// 2- Cargar Fixture y resultados
const arrayFixture = [
  ['j1p1', 'Viernes, 29/11 - 21:00', '2024-11-29T21:00', 'KIOSCO J.', 70, '04 Guillermo Godoy (25)', '4M DIST.', 54, '08 José Martín Borda (11)'],
  ['j1p2', 'Viernes, 29/11 - 22:30', '2024-11-29T22:30', 'LA LIGA', 63, '01 Mariano Y. Romero (17)', 'ABU CASTOR', 55, '06 Néstor Altamirano (15)'],
  ['j2p1', 'Miércoles, 04/12 - 21:00', '2024-12-04T21:00', 'KIOSCO J.', '--', '', 'LA LIGA', '--', ''],
  ['j2p2', 'Miércoles, 04/12 - 22:30', '2024-12-04T22:30', 'EL BUNKER', '--', '', 'GOYIN', '--', ''],
  ['j3p1', 'Viernes, 06/12 - 21:00', '2024-12-06T21:00', 'ABU CASTOR', '--', '', 'GOYIN', '--', ''],
  ['j3p2', 'Viernes, 06/12 - 22:30', '2024-12-06T22:30', '4M DIST.', '--', '', 'EL BUNKER', '--', ''],
  ['j4p1', 'Domingo, 08/12 - 20:00', '2024-12-08T20:00', 'KIOSCO J.', '--', '', 'ABU CASTOR', '--', ''],
  ['j4p2', 'Domingo, 08/12 - 21:30', '2024-12-08T21:30', '4M DIST.', '--', '', 'LA LIGA', '--', '']

];



// Función para modificar el contenido
document.addEventListener("DOMContentLoaded", function () {
  actualizarContenido('fecha-1', 'text-1', text1);
  actualizarContenido('fecha-2', 'text-2', text2);
});

// Actualización de jornada
document.addEventListener('DOMContentLoaded', () => {
  arrayFixture.forEach(fixture => {
    const [jornadaId, nuevaFecha, nuevoDatetime, equipo1, puntos1, jugador1, equipo2, puntos2, jugador2] = fixture;
    actualizarFixture(jornadaId, nuevaFecha, nuevoDatetime, equipo1, puntos1, jugador1, equipo2, puntos2, jugador2);
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


function actualizarFixture(jornadaId, nuevaFecha, nuevoDatetime, equipo1, puntos1, jugador1, equipo2, puntos2, jugador2) {
  const jornada = document.getElementById(jornadaId);
  if (!jornada) return console.warn(`Jornada "${jornadaId}" no encontrada`);

  const timeElement = jornada.querySelector('time');
  if (timeElement) {
    timeElement.innerText = nuevaFecha;
    timeElement.setAttribute('datetime', nuevoDatetime);
  }

  const equipos = jornada.querySelectorAll('.sportsmagazine-bgcolor li');
  if (equipos.length === 2) {
    equipos[0].innerHTML = `${equipo1} <span>${puntos1}</span>`;
    equipos[1].innerHTML = `${equipo2} <span>${puntos2}</span>`;
  }
}