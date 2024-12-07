const equipos = [
    {
        nombre: "KIOSCO J.",
        ciudad: "Saladas",
        img: "images/equipos/kioscojG.png",
        pg: 2,
        pp: 0,
        pf: 70 + 94,
        pc: 54 + 80,
        ft: 23 + 20,
    },
    {
        nombre: "LA LIGA",
        ciudad: "Saladas",
        img: "images/equipos/laligaG.png",
        pg: 1,
        pp: 1,
        pf: 63 + 80,
        pc: 55 + 94,
        ft: 15 + 13,
    },
    {
        nombre: "GOYIN",
        ciudad: "Saladas",
        img: "images/equipos/goyinG.png",
        pg: 2,
        pp: 0,
        pf: 81 + 81,
        pc: 72 + 62,
        ft: 12 + 11,
    },
    {
        nombre: "ABU CASTOR",
        ciudad: "Saladas",
        img: "images/equipos/abucastorG.png",
        pg: 0,
        pp: 2,
        pf: 55 + 62,
        pc: 63 + 81,
        ft: 14 + 10,
    },
    {
        nombre: "EL BUNKER",
        ciudad: "Bella Vista",
        img: "images/equipos/elbunkerG.png",
        pg: 1,
        pp: 1,
        pf: 72 + 74,
        pc: 81 + 67,
        ft: 12 + 15,
    },
    {
        nombre: "4M DIST.",
        ciudad: "Saladas",
        img: "images/equipos/4mdistG.png",
        pg: 0,
        pp: 2,
        pf: 54 + 67,
        pc: 70 + 74,
        ft: 14 + 14,
    },
].map(equipo => ({
    ...equipo,
    pj: equipo.pg + equipo.pp,      // Calcula partidos jugados
    pts: equipo.pg * 2 + equipo.pp, // Calcula puntos
    dif: equipo.pf - equipo.pc,     // Calcula diferencia
}));


equipos.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts; // Primero, por puntos
    if (b.dif !== a.dif) return b.dif - a.dif; // Luego, por diferencia de puntos
    return a.ft - b.ft; // Finalmente, por faltas totales
});

const tableBody = document.querySelector("#tablePos table");

equipos.forEach((equipo, index) => {
    const row = document.createElement("tr");
    // Alternar colores directamente con valores hexadecimales
    row.style.backgroundColor = index % 2 === 0 ? "#ffffff" : "#f0f0f0";
    row.innerHTML = `
        <td>${String(index + 1).padStart(2, "0")}</td>
        <td>
            <figure><img src="${equipo.img}" alt="${equipo.nombre}"></figure>
            <div class="player-stats-text">
                <h6>${equipo.nombre}</h6>
                <span>${equipo.ciudad}</span>
            </div>
        </td>
        <td>${equipo.pts}</td>
        <td>${equipo.pj}</td>
        <td>${equipo.pg}</td>
        <td>${equipo.pp}</td>
        <td>${equipo.pf}</td>
        <td>${equipo.pc}</td>
        <td>${equipo.dif > 0 ? `+${equipo.dif}` : equipo.dif}</td>
        <td>${equipo.ft}</td>
    `;
    tableBody.appendChild(row);
});
