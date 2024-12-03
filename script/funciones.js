const equipos = ['ABU CASTOR','EL BUNKER','GOYIN','KIOSCO JOSEFINA', 'LA LIGA','4M DISTRIBUCIONES'];
const text1 = 'Victoria del equipo Kiosco Josefina 70 - 54 a 4M Distribuciones en la 1° Fecha del Torneo Comercial';
const text2 = 'La Liga vence a Abu Castor por 63 a 55 en la primera fecha del Torneo Comercial';


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

// Llamar a la función para modificar el contenido dinámicamente
document.addEventListener("DOMContentLoaded", function() {
  actualizarContenido('fecha-1', 'text-1', text1);
  actualizarContenido('fecha-2', 'text-2', text2);
});
