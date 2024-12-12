import { jugadores } from './variables.js'


// Función para ordenar jugadores
function ordenarJugadores(jugadores) {
  return jugadores
    .filter(jugador => jugador.pts > 0) // Excluir jugadores sin puntos
    .sort((a, b) => {
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

  // Mostrar solo jugadores con puntos
  const jugadoresConPuntos = ordenarJugadores(jugadores);

  // Crear filas para los primeros 10 jugadores
  jugadoresConPuntos.slice(0, 10).forEach((jugador, index) => {
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

  // Verificar si hay jugadores adicionales para colapsar
  if (jugadoresConPuntos.length > 10) {
    const filaExtra = document.createElement("tr");
    filaExtra.id = "verMasFila";
    filaExtra.innerHTML = `
      <td colspan="5" style="text-align: center;">
        <button id="verMasBtn" class="btn btn-primary">Ver más</button>
      </td>
    `;
    tabla.appendChild(filaExtra);

    document.getElementById("verMasBtn").addEventListener("click", () => {
      // Ocultar el botón
      filaExtra.style.display = "none";

      // Mostrar el resto de los jugadores
      jugadoresConPuntos.slice(10).forEach((jugador, index) => {
        const fila = document.createElement("tr");

        // Alternar colores de fila
        if ((index + 10) % 2 === 0) fila.style.backgroundColor = "#ffffff";

        fila.innerHTML = `
          <td>${index + 11}</td> <!-- Ajustar índice para continuar la numeración -->
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
    });
  }
}


// Ejecutar orden y cargar tabla al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const jugadoresOrdenados = ordenarJugadores(jugadores);
  cargarTabla(jugadoresOrdenados);
});
