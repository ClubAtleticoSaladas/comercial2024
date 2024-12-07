const equipos = [
    {
        nombre: "KIOSCO J.",
        ciudad: "Saladas",
        img: "images/equipos/kioscojG.png",
        pj: 2,
        pg: 2,
        pp: 0,
        pf: 164,
        pc: 134,
        ft: 43,
    },
    {
        nombre: "LA LIGA",
        ciudad: "Saladas",
        img: "images/equipos/laligaG.png",
        pj: 2,
        pg: 1,
        pp: 1,
        pf: 143,
        pc: 149,
        ft: 28,
    },
    {
        nombre: "GOYIN",
        ciudad: "Saladas",
        img: "images/equipos/goyinG.png",
        pj: 2,
        pg: 2,
        pp: 0,
        pf: 162,
        pc: 134,
        ft: 23,
    },
    {
        nombre: "ABU CASTOR",
        ciudad: "Saladas",
        img: "images/equipos/abucastorG.png",
        pj: 2,
        pg: 0,
        pp: 2,
        pf: 117,
        pc: 144,
        ft: 24,
    },
    {
        nombre: "EL BUNKER",
        ciudad: "Bella Vista",
        img: "images/equipos/elbunkerG.png",
        pj: 2,
        pg: 1,
        pp: 1,
        pf: 139,
        pc: 148,
        ft: 24,
    },
    {
        nombre: "4M DIST.",
        ciudad: "Saladas",
        img: "images/equipos/4mdistG.png",
        pj: 2,
        pg: 0,
        pp: 2,
        pf: 121,
        pc: 144,
        ft: 28,
    },
].map(equipo => ({
    ...equipo,
    pts: equipo.pg * 2 + equipo.pp, // Calcula puntos
    dif: equipo.pf - equipo.pc,    // Calcula diferencia
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
