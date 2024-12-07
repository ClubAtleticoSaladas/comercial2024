const equipos = [
    {
        nombre: "KIOSCO J.",
        ciudad: "Saladas",
        img: "images/equipos/kioscojG.png",
        pts: 4,
        pj: 2,
        pg: 2,
        pp: 0,
        pf: 164,
        pc: 134,
        dif: 30,
        ft: 43,
    },
    {
        nombre: "LA LIGA",
        ciudad: "Saladas",
        img: "images/equipos/laligaG.png",
        pts: 3,
        pj: 2,
        pg: 1,
        pp: 1,
        pf: 143,
        pc: 149,
        dif: -6,
        ft: 28,
    },
    {
        nombre: "GOYIN",
        ciudad: "Saladas",
        img: "images/equipos/goyinG.png",
        pts: 2,
        pj: 1,
        pg: 1,
        pp: 0,
        pf: 81,
        pc: 72,
        dif: 9,
        ft: 12,
    },
    {
        nombre: "ABU CASTOR",
        ciudad: "Saladas",
        img: "images/equipos/abucastorG.png",
        pts: 1,
        pj: 1,
        pg: 0,
        pp: 1,
        pf: 55,
        pc: 63,
        dif: -8,
        ft: 14,
    },
    {
        nombre: "EL BUNKER",
        ciudad: "Bella Vista",
        img: "images/equipos/elbunkerG.png",
        pts: 1,
        pj: 1,
        pg: 0,
        pp: 1,
        pf: 72,
        pc: 81,
        dif: -9,
        ft: 12,
    },
    {
        nombre: "4M DIST.",
        ciudad: "Saladas",
        img: "images/equipos/4mdistG.png",
        pts: 1,
        pj: 1,
        pg: 0,
        pp: 1,
        pf: 54,
        pc: 70,
        dif: -16,
        ft: 14,
    },
];

equipos.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts; // Primero, por puntos
    if (b.dif !== a.dif) return b.dif - a.dif; // Luego, por diferencia de puntos
    return a.ft - b.ft; // Finalmente, por faltas totales
});

const tableBody = document.querySelector("#tablePos table");

equipos.forEach((equipo, index) => {
    const row = document.createElement("tr");
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
