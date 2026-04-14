function obtenerAvisos() {
  const datos = localStorage.getItem('avisos_generales');
  return datos ? JSON.parse(datos) : [];
}

function guardarListaAvisos(lista) {
  localStorage.setItem('avisos_generales', JSON.stringify(lista));
}

function guardarAviso() {
  const rol = localStorage.getItem('rol');

  if (rol !== 'profesor' && rol !== 'admin') {
    alert('Solo el administrador puede publicar avisos');
    return;
  }

  const tituloInput = document.getElementById('tituloAviso');
  const textoInput = document.getElementById('textoAviso');

  if (!tituloInput || !textoInput) return;

  const titulo = tituloInput.value.trim();
  const texto = textoInput.value.trim();

  if (!titulo || !texto) {
    alert('Debes escribir un título y un contenido para el aviso');
    return;
  }

  const aviso = {
    id: Date.now(),
    titulo,
    texto,
    fecha: new Date().toLocaleString()
  };

  const avisos = obtenerAvisos();
  avisos.unshift(aviso);
  guardarListaAvisos(avisos);

  tituloInput.value = '';
  textoInput.value = '';

  renderAvisos();
  alert('Aviso publicado correctamente');
}

function eliminarAviso(id) {
  const rol = localStorage.getItem('rol');

  if (rol !== 'profesor' && rol !== 'admin') {
    alert('Solo el administrador puede eliminar avisos');
    return;
  }

  const avisos = obtenerAvisos().filter(aviso => aviso.id !== id);
  guardarListaAvisos(avisos);
  renderAvisos();
}

function renderAvisos() {
  const contenedor = document.getElementById('listaAvisos');
  if (!contenedor) return;

  const avisos = obtenerAvisos();
  const rol = localStorage.getItem('rol');

  if (avisos.length === 0) {
    contenedor.innerHTML = '<p style="color:#94a3b8;">Todavía no hay avisos publicados.</p>';
    return;
  }

  contenedor.innerHTML = avisos.map(aviso => `
    <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px; margin-bottom:15px;">
      <h4 style="margin-top:0; color:white;">${aviso.titulo}</h4>
      <p style="color:#cbd5e1; line-height:1.6;">${aviso.texto}</p>
      <p style="color:#94a3b8; font-size:14px;">${aviso.fecha}</p>
      ${
        (rol === 'profesor' || rol === 'admin')
          ? `<button class="btn btn-alt" onclick="eliminarAviso(${aviso.id})">Eliminar</button>`
          : ''
      }
    </div>
  `).join('');
}