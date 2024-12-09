import { jugadores } from './variables.js'

// Función para ordenar jugadores
function ordenarJugadores(jugadores) {
  return jugadores.sort((a, b) => {
    if (b.pts !== a.pts) {
      return b.pts - a.pts; // Orden descendente por puntos
    } else {
      return a.faltas - b.faltas; // Orden ascendente por faltas
    }
  });
}



function cargarTabla(jugadores) {
  const tabla = document.getElementById("tableGol");

  // Limpiar filas excepto el encabezado
  tabla.querySelectorAll("tr:not(:first-child)").forEach(tr => tr.remove());

  // Limitar a los primeros 10 jugadores
  jugadores.slice(0, 10).forEach((jugador, index) => {
    const fila = document.createElement("tr");

    // Alternar colores de fila
    if (index % 2 === 0) fila.style.backgroundColor = "#ffffff";

    fila.innerHTML = `
      <td>${index + 1}</td> <!-- Posición asignada automáticamente -->
      <td><span>${jugador.nombre}</span></td>
      <td>
        <figure>
          <img src="images/equipos/${jugador.equipo.toLowerCase().replace(/\s/g, "").replace(/\./g, "")}G.png" alt="${jugador.equipo}" style="width: 50px; height: auto;">
        </figure>
        <div class="player-stats-text">
          <h6>${jugador.equipo}</h6>
          <span>${jugador.ciudad}</span>
        </div>
      </td>
      <td>${jugador.pts}</td>
      <td>${jugador.faltas}</td>
    `;
    tabla.appendChild(fila);
  });
};


// Ejecutar orden y cargar tabla al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const jugadoresOrdenados = ordenarJugadores(jugadores);
  cargarTabla(jugadoresOrdenados);
});
