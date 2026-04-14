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
    fecha: new Date().toLocaleString()
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
  if (!contenedor) return;

  const consultas = obtenerConsultas();

  if (consultas.length === 0) {
    contenedor.innerHTML = '<p style="color:#94a3b8;">Todavía no hay consultas guardadas.</p>';
    return;
  }

  contenedor.innerHTML = consultas.map(c => `
    <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px; margin-bottom:12px;">
      <h4 style="margin-top:0; color:white;">${c.titulo}</h4>
      <p style="color:#cbd5e1; line-height:1.6;">${c.texto}</p>
      <p style="color:#94a3b8; font-size:14px; margin-bottom:0;">
        Usuario: ${c.usuario} · ${c.fecha}
      </p>
    </div>
  `).join('');
}