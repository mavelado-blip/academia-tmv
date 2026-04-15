function obtenerClaveConsultas() {
  const usuario = localStorage.getItem('usuarioActivo') || 'anonimo';
  return 'consultas_' + usuario;
}

function obtenerConsultas() {
  const datos = localStorage.getItem(obtenerClaveConsultas());
  return datos ? JSON.parse(datos) : [];
}

function guardarConsultas(lista) {
  localStorage.setItem(obtenerClaveConsultas(), JSON.stringify(lista));
}

function guardarConsulta() {
  const rol = localStorage.getItem('rol');

  if (rol !== 'alumno') {
    alert('Solo los alumnos pueden crear consultas desde este apartado.');
    return;
  }

  const tituloInput = document.getElementById('tituloConsulta');
  const textoInput = document.getElementById('textoConsulta');

  if (!tituloInput || !textoInput) return;

  const titulo = tituloInput.value.trim();
  const texto = textoInput.value.trim();

  if (!titulo || !texto) {
    alert('Debes escribir un título y una consulta.');
    return;
  }

  const usuario = localStorage.getItem('usuarioActivo') || 'anonimo';

  const nuevaConsulta = {
    id: Date.now(),
    usuario: usuario,
    titulo: titulo,
    texto: texto,
    fecha: new Date().toLocaleString(),
    respuesta: '',
    fechaRespuesta: ''
  };

  const consultas = obtenerConsultas();
  consultas.unshift(nuevaConsulta);
  guardarConsultas(consultas);

  tituloInput.value = '';
  textoInput.value = '';

  renderConsultas();
  alert('Consulta guardada correctamente');
}

function renderConsultas() {
  const contenedor = document.getElementById('listaConsultas');
  const rol = localStorage.getItem('rol');

  if (!contenedor) return;

  if (rol !== 'alumno') {
    contenedor.innerHTML = `
      <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px;">
        <p style="margin:0; color:#94a3b8;">
          El administrador no gestiona consultas desde Interacción. Debe hacerlo desde el Panel admin.
        </p>
      </div>
    `;
    return;
  }

  const consultas = obtenerConsultas();

  if (consultas.length === 0) {
    contenedor.innerHTML = '<p style="color:#94a3b8;">Todavía no hay consultas guardadas.</p>';
    return;
  }

  contenedor.innerHTML = consultas.map(c => `
    <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px; margin-bottom:12px;">
      <h4 style="margin-top:0; color:white;">${c.titulo}</h4>
      <p style="color:#cbd5e1; line-height:1.6;">${c.texto}</p>
      <p style="color:#94a3b8; font-size:14px;">${c.fecha}</p>

      ${
        c.respuesta
          ? `
            <div style="margin-top:15px; padding:12px; background:#172554; border-radius:8px; border:1px solid #3b82f6;">
              <h5 style="margin-top:0; color:#93c5fd;">Respuesta del profesor</h5>
              <p style="color:white; line-height:1.6;">${c.respuesta}</p>
              <p style="color:#bfdbfe; font-size:13px; margin-bottom:0;">${c.fechaRespuesta}</p>
            </div>
          `
          : `
            <div style="margin-top:15px; padding:12px; background:#1e293b; border-radius:8px;">
              <p style="margin:0; color:#94a3b8;">Todavía no hay respuesta.</p>
            </div>
          `
      }
    </div>
  `).join('');
}