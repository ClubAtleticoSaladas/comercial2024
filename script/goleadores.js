const jugadores = [
  // Kiosco J.
  { nombre: "Guillermo Godoy", equipo: "Kiosco J.", pts: 35, faltas: 6 },
  { nombre: "Cristian Rausch", equipo: "Kiosco J.", pts: 26, faltas: 1 },
  { nombre: "Lautaro Fitz", equipo: "Kiosco J.", pts: 26, faltas: 7 },
  { nombre: "Hector Stanco", equipo: "Kiosco J.", pts: 23, faltas: 7 },
  //La Liga
  { nombre: "Juan Cruz Barberan", equipo: "La Liga", pts: 19, faltas: 2 },
  { nombre: "Julian Arturo Romero", equipo: "La Liga", pts: 29, faltas: 5 },
  //Goyin
  { nombre: "Ivan Bolaño", equipo: "Goyin", pts: 37, faltas: 2 },
  { nombre: "Maximiliano Redruello", equipo: "La Liga", pts: 24, faltas: 1 },
  //El Bunker
  { nombre: "Lucas Matias Hanke", equipo: "El Bunker", pts: 45, faltas: 5 },
  { nombre: "Francisco Albarellos", equipo: "El Bunker", pts: 31, faltas: 6 },
  // 4M Dist.
  { nombre: "Juan M. Montanar", equipo: "4M Dist.", pts: 26, faltas: 4 },
  { nombre: "Gonzalo Spikerman", equipo: "4M Dist.", pts: 26, faltas: 5 },
  //Abu Castor
  { nombre: "Omar F. Staffolani", equipo: "Abu Castor", pts: 30, faltas: 3 }
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

// Función para cargar la tabla
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
      <td>${jugador.equipo}</td>
      <td>${jugador.pts}</td>
      <td>${jugador.faltas}</td>
    `;
    tabla.appendChild(fila);
  });
}

// Ejecutar orden y cargar tabla al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const jugadoresOrdenados = ordenarJugadores(jugadores);
  cargarTabla(jugadoresOrdenados);
});
