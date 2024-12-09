import { partidos } from './variables.js';

const buscarPartidoPorId = (id) => {
  const partidoEncontrado = partidos.find(partido => partido.id === id);
  return partidoEncontrado;
};
// Jornada actuallizadad id

/// Filtrar los partidos con marcadores válidos
const partidosValidos = partidos.filter(partido => partido.marcador1 !== "--" && partido.marcador2 !== "--");

// Obtener el último y el penúltimo partido válido
const ultimoPartido = partidosValidos.at(-1); // Último partido válido
const penultimoPartido = partidosValidos.at(-2); // Penúltimo partido válido

// Encontrar el índice del último partido válido en el arreglo original
const indiceUltimo = partidos.findIndex(partido => partido.id === ultimoPartido.id);

// Obtener los dos partidos posteriores al último partido válido
const primerPartidoPosterior = partidos[indiceUltimo + 1] || null; // Si existe, lo toma; si no, devuelve null
const segundoPartidoPosterior = partidos[indiceUltimo + 2] || null; // Si existe, lo toma; si no, devuelve null

const idJornadaPart1 = penultimoPartido.id;
const idJornadaPart2 = ultimoPartido.id;

// Actualiza Contenido de Noticias Slider (partido del día)
function actualizarNoticias(id) {
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const mes = meses[fechaActual.getMonth()];

  const partidoEncontrado = buscarPartidoPorId(id);

  let equipoGana = partidoEncontrado.equipo1;
  let ptsGanador = partidoEncontrado.marcador1;
  let equipoPierde = partidoEncontrado.equipo2;
  let ptsPerdedor = partidoEncontrado.marcador2;
  const difPartido = partidoEncontrado.marcador1 - partidoEncontrado.marcador2;
  if (difPartido < 0) {
    equipoGana = partidoEncontrado.equipo2;
    equipoPierde = partidoEncontrado.equipo1;
    ptsGanador = partidoEncontrado.marcador2;
    ptsPerdedor = partidoEncontrado.marcador1;
  };
  if (partidoEncontrado.partido == 1) {
    // Texto nuevo que quieres agregar
    const nuevoTexto1 = "En la jornada " + partidoEncontrado.jornada + " de la fase " + partidoEncontrado.fase + ", " + equipoGana +
      " gana a " + equipoPierde + " por " + Math.abs(difPartido) + " puntos de diferencia.";
    // Actualizar el primer slider
    document.getElementById("fecha-1").textContent = `${mes} ${anio} >> C.A.S.`;
    document.getElementById("text-1").textContent = nuevoTexto1;
  } else if (partidoEncontrado.partido == 2) {
    const nuevoTexto2 = "¡ En la fase " + partidoEncontrado.fase + " del partido " + partidoEncontrado.partido + " en el Torneo Comercial, " +
      equipoGana + " vence a " + equipoPierde + " por " + ptsGanador + " a " + ptsPerdedor + "!";
    // Actualizar el segundo slider
    document.getElementById("fecha-2").textContent = `${mes} ${anio} >> C.A.S.`;
    document.getElementById("text-2").textContent = nuevoTexto2;
  };
};
actualizarNoticias(idJornadaPart1);
actualizarNoticias(idJornadaPart2);

// Fixture Slider
// Contenedor donde se añadirán los elementos
const container = document.getElementById("juegos-container");

// Recorrer los partidos y crear los elementos HTML
partidos.forEach(partido => {
  // Crear capa contenedora
  const layer = document.createElement("div");
  layer.classList.add("sportsmagazine-fixture-slider-layer");
  layer.id = partido.id;

  // Crear elemento de tiempo
  const time = document.createElement("time");
  const fechaFormateada = obtenerFecha(partido.fecha);
  time.textContent = fechaFormateada;

  // Crear lista para los equipos
  const ul = document.createElement("ul");
  ul.classList.add("sportsmagazine-bgcolor");

  // Crear elementos de equipos
  const liEquipo1 = document.createElement("li");
  liEquipo1.classList.add("first-child");
  liEquipo1.innerHTML = `${partido.equipo1}<span>${partido.marcador1 !== "--" ? partido.marcador1 : "--"}</span>`;

  const liEquipo2 = document.createElement("li");
  liEquipo2.innerHTML = `${partido.equipo2}<span>${partido.marcador2 !== "--" ? partido.marcador2 : "--"}</span>`;

  // Añadir los elementos al DOM
  ul.appendChild(liEquipo1);
  ul.appendChild(liEquipo2);
  layer.appendChild(time);
  layer.appendChild(ul);
  container.appendChild(layer);
});

// Función para determinar cómo mostrar la fecha
function obtenerFecha(fecha) {
  if (typeof fecha === "string") {
    if (!isNaN(Date.parse(fecha))) {
      // Si es un string ISO válido, formatearlo
      return formatearFecha(new Date(fecha));
    } else {
      // Si no es un string ISO, devolver el string tal cual
      return fecha;
    }
  } else {
    // Si no es ni string ni válido, devolver un texto por defecto
    return "Fecha no válida";
  }
}

// Función para formatear la fecha al estilo "Viernes, 28/05 - 20:00"
function formatearFecha(fecha) {
  const opcionesFecha = { weekday: 'long', day: '2-digit', month: '2-digit' };
  const opcionesHora = { hour: '2-digit', minute: '2-digit', hour12: false };

  // Obtener las partes formateadas
  let fechaFormateada = new Intl.DateTimeFormat('es-ES', opcionesFecha).format(fecha);
  const horaFormateada = new Intl.DateTimeFormat('es-ES', opcionesHora).format(fecha);

  // Capitalizar la primera letra del día
  fechaFormateada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);

  // Combinar fecha y hora
  return `${fechaFormateada} - ${horaFormateada}`;
};

const p1 = penultimoPartido;
const p2 = ultimoPartido;
// 3- Cargar las Noticias de Resultados de Último Partido
const datosPartido1 = {
  titulo: "Jornada " + p1.jornada + " - Partido" + p1.partido,
  fecha: formatearFecha(new Date(p1.fecha)),
  equipos: [
    {
      nombre: p1.equipo1,
      imagen: p1.equipo1.replace(/\s+/g, '').replace(/\./g, '').toLowerCase(),
      jugador: p1.goleador1
    },
    {
      nombre: p1.equipo2,
      imagen: p1.equipo2.replace(/\s+/g, '').replace(/\./g, '').toLowerCase(),
      jugador: p1.goleador2
    }
  ],
  marcador: { local: p1.marcador1, visitante: p1.marcador2 }
};
const datosPartido2 = {
  titulo: "Jornada " + p2.jornada + " - Partido" + p2.partido,
  fecha: formatearFecha(new Date(p2.fecha)),
  equipos: [
    {
      nombre: p2.equipo1,
      imagen: p2.equipo1.replace(/\s+/g, '').replace(/\./g, '').toLowerCase(),
      jugador: p2.goleador1
    },
    {
      nombre: p2.equipo2,
      imagen: p2.equipo2.replace(/\s+/g, '').replace(/\./g, '').toLowerCase(),
      jugador: p2.goleador2
    }
  ],
  marcador: { local: p2.marcador1, visitante: p2.marcador2 }
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

const partidosValidos2 = partidos.filter(
  p => p.fase === 'regular' && p.marcador1 !== '--' && p.marcador2 !== '--'
);

const estadisticas = {};

partidosValidos2.forEach(partido => {
  const { equipo1, marcador1, faltas1, equipo2, marcador2, faltas2 } = partido;

  // Función para generar el nombre de la imagen
  const generarImagen = equipo =>
    `images/equipos/${equipo.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}G.png`;

  // Inicializar equipos si no están en las estadísticas
  if (!estadisticas[equipo1]) {
    estadisticas[equipo1] = {
      ciudad: partido.ciudad1, // Tomar ciudad del equipo1
      imagen: generarImagen(equipo1), // Generar imagen
      jugados: 0,
      ganados: 0,
      perdidos: 0,
      puntos: 0,
      aFavor: 0,
      enContra: 0,
      faltas: 0
    };
  }
  if (!estadisticas[equipo2]) {
    estadisticas[equipo2] = {
      ciudad: partido.ciudad2, // Tomar ciudad del equipo2
      imagen: generarImagen(equipo2), // Generar imagen
      jugados: 0,
      ganados: 0,
      perdidos: 0,
      puntos: 0,
      aFavor: 0,
      enContra: 0,
      faltas: 0
    };
  }

  // Actualizar partidos jugados
  estadisticas[equipo1].jugados++;
  estadisticas[equipo2].jugados++;

  // Actualizar marcadores y faltas
  estadisticas[equipo1].aFavor += marcador1;
  estadisticas[equipo1].enContra += marcador2;
  estadisticas[equipo1].faltas += faltas1 ? parseInt(faltas1) : 0;

  estadisticas[equipo2].aFavor += marcador2;
  estadisticas[equipo2].enContra += marcador1;
  estadisticas[equipo2].faltas += faltas2 ? parseInt(faltas2) : 0;

  // Determinar ganadores y perdedores
  if (marcador1 > marcador2) {
    estadisticas[equipo1].ganados++;
    estadisticas[equipo2].perdidos++;
  } else if (marcador1 < marcador2) {
    estadisticas[equipo1].perdidos++;
    estadisticas[equipo2].ganados++;
  }
});

// Calcular puntos y diferencia de marcadores
Object.keys(estadisticas).forEach(equipo => {
  const stats = estadisticas[equipo];
  stats.puntos = stats.ganados * 2 + stats.perdidos;
  stats.diferencia = stats.aFavor - stats.enContra;
});

// Clasificación por puntos, diferencia de marcadores y menor cantidad de faltas
const clasificacion = Object.entries(estadisticas)
  .map(([equipo, stats]) => ({ equipo, ...stats }))
  .sort((a, b) =>
    b.puntos - a.puntos || // Primero por puntos
    b.diferencia - a.diferencia || // Luego por diferencia de marcadores
    a.faltas - b.faltas // Finalmente por menor cantidad de faltas
  );

function renderClasificacion(clasificacion) {
  const widget = document.querySelector(".widget_team_ranking");

  // Vaciar contenido existente
  widget.innerHTML = `
    <div class="sportsmagazine-fancy-title">
      <h2>Clasificaciones de equipos</h2>
    </div>
    <div class="ranking-title-table">
      <ul class="ranking-title-row">
        <li>Posiciones</li>
        <li>PTS</li>
        <li>PJ</li>
        <li>PG</li>
      </ul>
    </div>
  `;

  // Generar filas dinámicas
  clasificacion.forEach((equipo, index) => {
    const rankingContent = document.createElement("div");
    rankingContent.className = "ranking-content-table";
    rankingContent.innerHTML = `
      <ul class="ranking-content-row">
        <li>${index + 1}</li>
        <li>
          <img src="${equipo.imagen}" alt="">
          <div class="ranking-logo">
            <span>${equipo.equipo}</span>
            <small>${equipo.ciudad}</small>
          </div>
        </li>
        <li>${equipo.puntos.toString().padStart(2, "0")}</li>
        <li>${equipo.jugados.toString().padStart(2, "0")}</li>
        <li>${equipo.ganados.toString().padStart(2, "0")}</li>
      </ul>
    `;
    widget.appendChild(rankingContent);
  });
}

// Renderizar al cargar la página
document.addEventListener("DOMContentLoaded", () => renderClasificacion(clasificacion));

const pprox1 = primerPartidoPosterior;
const pprox2 = segundoPartidoPosterior;
// Datos de los próximos partidos
const proximosPartidos = [
  {
    jornada: "Jornada " + pprox1.jornada + " - Partido " + pprox1.partido,
    dia: formatearFecha(new Date(pprox1.fecha)),
    hora: extraeHora(pprox1.fecha),
    estadio: "Estadio: “Juan G. Noya”",
    equipo1: { nombre: pprox1.equipo1, ciudad: pprox1.ciudad1, imagen: `images/equipos/${pprox1.equipo1.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}G.png` },
    equipo2: { nombre: pprox1.equipo2, ciudad: pprox1.ciudad2, imagen: `images/equipos/${pprox1.equipo2.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}G.png` },
  },
  {
    jornada: "Jornada " + pprox2.jornada + " - Partido " + pprox2.partido,
    dia: formatearFecha(new Date(pprox2.fecha)),
    hora: extraeHora(pprox2.fecha),
    estadio: "Estadio: “Juan G. Noya”",
    equipo1: { nombre: pprox2.equipo1, ciudad: pprox2.ciudad1, imagen: `images/equipos/${pprox2.equipo1.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}G.png` },
    equipo2: { nombre: pprox2.equipo2, ciudad: pprox2.ciudad2, imagen: `images/equipos/${pprox2.equipo2.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}G.png` },
  }
];

// Función para actualizar el HTML
function actualizarProximosPartidos(partidos) {
  const widget = document.querySelector(".widget_next_match"); // Selecciona el widget
  widget.innerHTML = ""; // Limpia el contenido existente

  partidos.forEach(partido => {
    // Crear la estructura de HTML para cada partido
    const partidoHtml = `
      <div class="widget_next_match_title">
         <div class="sportsmagazine-fancy-title">
          <h2>Próximo partido</h2>
        </div>
        <h5>${partido.jornada}</h5>
        <span>${partido.dia} <strong>*</strong></span>
      </div>
      <ul>
        <li>
          <img src="${partido.equipo1.imagen}" alt="" width="100" height="100" 
               style="object-fit: cover !important; display: block;">
          <h6><a href="#">${partido.equipo1.nombre}</a></h6>
          <small>${partido.equipo1.ciudad}</small>
        </li>
        <li>
          <div class="widget_next_match_option">
            <h6>${partido.hora}</h6>
            <small>${partido.estadio}</small>
          </div>
        </li>
        <li>
          <img src="${partido.equipo2.imagen}" alt="" width="100" height="100" 
               style="object-fit: cover !important; display: block;">
          <h6><a href="#">${partido.equipo2.nombre}</a></h6>
          <small>${partido.equipo2.ciudad}</small>
        </li>
      </ul>
    `;
    // Agregar al widget
    widget.innerHTML += partidoHtml;
  });

  // Agregar la nota final
  widget.innerHTML += `
    <div class="widget_next_match_title">
      <span style="display: block; text-align: justify;">
        <strong>*</strong> Todos los días y horarios de los partidos de cada jornada están sujetos a modificaciones por cuestiones climáticas y otras circunstancias imprevistas.
      </span>
    </div>
  `;
}

function extraeHora(date) {
  const fecha = date;
  const fechaObj = new Date(fecha.replace(" ", "T")); // Convertir la cadena a un objeto Date
  const hora = fechaObj.toTimeString().slice(0, 5); // Extraer HH:mm
  return hora;
};

// Llamar a la función para actualizar
actualizarProximosPartidos(proximosPartidos);
