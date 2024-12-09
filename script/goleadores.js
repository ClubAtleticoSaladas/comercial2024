const jugadores = [
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
