let temaActual = 1;

// Devuelve una clave única para guardar el progreso de cada usuario
function obtenerClaveProgreso() {
  const usuario = localStorage.getItem('usuarioActivo') || 'anonimo';
  return 'progreso_' + usuario;
}

// Devuelve array con los temas completados del usuario actual
function obtenerTemasCompletados() {
  const datos = localStorage.getItem(obtenerClaveProgreso());
  return datos ? JSON.parse(datos) : [];
}

// Guarda el array de temas completados
function guardarTemasCompletados(lista) {
  localStorage.setItem(obtenerClaveProgreso(), JSON.stringify(lista));
}

// Marca el tema actual como estudiado
function marcarTemaEstudiado() {
  const rol = localStorage.getItem('rol');

  if (rol !== 'alumno') {
    alert('Solo los alumnos pueden marcar progreso');
    return;
  }

  let completados = obtenerTemasCompletados();

  if (!completados.includes(temaActual)) {
    completados.push(temaActual);
    completados.sort((a, b) => a - b);
    guardarTemasCompletados(completados);
    actualizarProgreso();
    actualizarMarcasTemario();
    alert('Tema marcado como estudiado');
  } else {
    alert('Este tema ya estaba marcado');
  }
}

// Quita el tema actual de los completados
function desmarcarTemaEstudiado() {
  const rol = localStorage.getItem('rol');

  if (rol !== 'alumno') {
    alert('Solo los alumnos pueden modificar progreso');
    return;
  }

  let completados = obtenerTemasCompletados();

  if (completados.includes(temaActual)) {
    completados = completados.filter(t => t !== temaActual);
    guardarTemasCompletados(completados);
    actualizarProgreso();
    actualizarMarcasTemario();
    alert('Tema desmarcado');
  } else {
    alert('Este tema no estaba marcado');
  }
}

// Actualiza barra y textos de progreso
function actualizarProgreso() {
  const rol = localStorage.getItem('rol');
  const panelProgreso = document.getElementById('panelProgresoAlumno');

  if (!panelProgreso) return;

  if (rol !== 'alumno') {
    panelProgreso.style.display = 'none';
    return;
  }

  panelProgreso.style.display = 'block';

  const completados = obtenerTemasCompletados();
  const total = typeof temas !== 'undefined' ? temas.length : 67;
  const porcentaje = total > 0 ? Math.round((completados.length / total) * 100) : 0;

  const texto = document.getElementById('textoProgreso');
  const barra = document.getElementById('barraProgreso');
  const porcentajeTexto = document.getElementById('porcentajeProgreso');

  if (texto) {
    texto.textContent = `Has completado ${completados.length} de ${total} temas`;
  }

  if (barra) {
    barra.style.width = porcentaje + '%';
  }

  if (porcentajeTexto) {
    porcentajeTexto.textContent = `${porcentaje}% completado`;
  }
}

// Pone una marca visual a los temas completados en la lista del temario
function actualizarMarcasTemario() {
  const rol = localStorage.getItem('rol');
  if (rol !== 'alumno') return;

  const completados = obtenerTemasCompletados();
  const botones = document.querySelectorAll('.tema-btn');

  botones.forEach((btn, index) => {
    const numeroTema = index + 1;

    if (completados.includes(numeroTema)) {
      if (!btn.textContent.includes('✅')) {
        btn.textContent = `✅ ${numeroTema}. ${temas[index].titulo}`;
      }
    } else {
      btn.textContent = `${numeroTema}. ${temas[index].titulo}`;
    }
  });
}

// Comprueba si el tema actual está completado
function temaActualEstaCompletado() {
  const completados = obtenerTemasCompletados();
  return completados.includes(temaActual);
}

// Actualiza texto/botones del tema actual
function actualizarEstadoTemaActual() {
  const rol = localStorage.getItem('rol');
  const estado = document.getElementById('estadoTemaActual');
  const btnMarcar = document.getElementById('btnMarcarTema');
  const btnDesmarcar = document.getElementById('btnDesmarcarTema');

  if (!estado || !btnMarcar || !btnDesmarcar) return;

  if (rol !== 'alumno') {
    estado.style.display = 'none';
    btnMarcar.style.display = 'none';
    btnDesmarcar.style.display = 'none';
    return;
  }

  estado.style.display = 'block';
  btnMarcar.style.display = 'inline-block';
  btnDesmarcar.style.display = 'inline-block';

  if (temaActualEstaCompletado()) {
    estado.innerHTML = 'Estado del tema: <strong style="color:#22c55e;">Completado ✅</strong>';
  } else {
    estado.innerHTML = 'Estado del tema: <strong style="color:#f59e0b;">Pendiente</strong>';
  }
}