function obtenerUsuariosDemo() {
  return [
    { username: 'admin', rol: 'admin' },
    { username: 'JD', rol: 'alumno' },
    { username: 'LR', rol: 'alumno' }
  ];
}

function contarConsultasTotales() {
  let total = 0;
  const usuarios = obtenerUsuariosDemo();

  usuarios.forEach(usuario => {
    if (usuario.rol === 'alumno') {
      const clave = 'consultas_' + usuario.username;
      const datos = localStorage.getItem(clave);
      const consultas = datos ? JSON.parse(datos) : [];
      total += consultas.length;
    }
  });

  return total;
}

function contarAvisosTotales() {
  const datos = localStorage.getItem('avisos_generales');
  const avisos = datos ? JSON.parse(datos) : [];
  return avisos.length;
}

function responderConsulta(usuario, id) {
  const rol = localStorage.getItem('rol');

  if (rol !== 'admin') {
    alert('Solo el administrador puede responder consultas.');
    return;
  }

  const textarea = document.getElementById(`respuesta_${usuario}_${id}`);
  if (!textarea) return;

  const texto = textarea.value.trim();

  if (!texto) {
    alert('Debes escribir una respuesta.');
    return;
  }

  const clave = 'consultas_' + usuario;
  const datos = localStorage.getItem(clave);
  let consultas = datos ? JSON.parse(datos) : [];

  consultas = consultas.map(c => {
    if (c.id === id) {
      return {
        ...c,
        respuesta: texto,
        fechaRespuesta: new Date().toLocaleString()
      };
    }
    return c;
  });

  localStorage.setItem(clave, JSON.stringify(consultas));

  renderPanelAdmin();
  alert('Respuesta guardada correctamente');
}

function renderPanelAdmin() {
  const rol = localStorage.getItem('rol');

  const resumenUsuarios = document.getElementById('resumenUsuarios');
  const resumenConsultas = document.getElementById('resumenConsultas');
  const resumenAvisos = document.getElementById('resumenAvisos');
  const listaUsuarios = document.getElementById('listaUsuariosAdmin');
  const listaConsultas = document.getElementById('listaConsultasAdmin');
  const listaSolicitudes = document.getElementById('listaSolicitudesAdmin');
  const listaContactos = document.getElementById('listaContactosAdmin');

  if (!resumenUsuarios || !resumenConsultas || !resumenAvisos || !listaUsuarios || !listaConsultas) {
  return;
}
  

  if (rol !== 'admin') {
    resumenUsuarios.textContent = 'Acceso restringido';
    resumenConsultas.textContent = 'Acceso restringido';
    resumenAvisos.textContent = 'Acceso restringido';
    listaUsuarios.innerHTML = '<p style="color:#cbd5e1;">Solo el administrador puede ver este apartado.</p>';
    listaConsultas.innerHTML = '<p style="color:#cbd5e1;">Solo el administrador puede ver este apartado.</p>';
    return;
  }

  const usuarios = obtenerUsuariosDemo();
  const totalConsultas = contarConsultasTotales();
  const totalAvisos = contarAvisosTotales();

  resumenUsuarios.textContent = `${usuarios.length} usuarios cargados`;
  resumenConsultas.textContent = `${totalConsultas} consultas registradas`;
  resumenAvisos.textContent = `${totalAvisos} avisos publicados`;

  listaUsuarios.innerHTML = usuarios.map(user => `
    <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px; margin-bottom:12px;">
      <h4 style="margin-top:0;">${user.username}</h4>
      <p style="color:#cbd5e1; margin-bottom:0;">Rol: ${user.rol}</p>
    </div>
  `).join('');

  let html = '';

  usuarios.forEach(usuario => {
    if (usuario.rol !== 'alumno') return;

    const clave = 'consultas_' + usuario.username;
    const datos = localStorage.getItem(clave);
    const consultas = datos ? JSON.parse(datos) : [];

    consultas.forEach(c => {
      html += `
        <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px; margin-bottom:15px;">
          <h4 style="margin-top:0;">${c.titulo}</h4>
          <p style="color:#cbd5e1; line-height:1.6;">${c.texto}</p>
          <p style="color:#94a3b8; font-size:14px;">Usuario: ${usuario.username} · ${c.fecha}</p>

          ${
            c.respuesta
              ? `
                <div style="margin-top:15px; padding:12px; background:#172554; border-radius:8px; border:1px solid #3b82f6;">
                  <h5 style="margin-top:0; color:#93c5fd;">Respuesta guardada</h5>
                  <p style="color:white; line-height:1.6;">${c.respuesta}</p>
                  <p style="color:#bfdbfe; font-size:13px; margin-bottom:0;">${c.fechaRespuesta}</p>
                </div>
              `
              : ''
          }

          <div style="margin-top:15px;">
            <textarea
              id="respuesta_${usuario.username}_${c.id}"
              rows="4"
              placeholder="Escribe aquí la respuesta..."
              style="width:100%; padding:12px; border-radius:8px; border:1px solid #334155; background:#111827; color:white;"
            >${c.respuesta || ''}</textarea>

            <div style="margin-top:10px;">
              <button class="btn btn-main" onclick="responderConsulta('${usuario.username}', ${c.id})">
                Guardar respuesta
              </button>
            </div>
          </div>
        </div>
      `;
    });
  });

  listaConsultas.innerHTML = html || '<p style="color:#94a3b8;">Todavía no hay consultas registradas.</p>';
    const solicitudes = obtenerSolicitudesAccesoAdmin();
  const contactos = obtenerMensajesContactoAdmin();

  if (listaSolicitudes) {
    listaSolicitudes.innerHTML = solicitudes.length
      ? solicitudes.map(s => `
        <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px; margin-bottom:15px;">
          <h4 style="margin-top:0;">${s.nombre} ${s.apellidos}</h4>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Correo:</strong> ${s.correo}</p>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Teléfono:</strong> ${s.telefono || 'No indicado'}</p>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Especialidad:</strong> ${s.especialidad}</p>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Comunidad:</strong> ${s.comunidad}</p>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Interés:</strong> ${s.interes.length ? s.interes.join(', ') : 'No indicado'}</p>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Necesidades:</strong> ${s.necesidades}</p>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Observaciones:</strong> ${s.observaciones || 'Sin observaciones'}</p>
          <p style="color:#94a3b8; font-size:14px; margin-bottom:0;">${s.fecha}</p>
        </div>
      `).join('')
      : '<p style="color:#94a3b8;">Todavía no hay solicitudes registradas.</p>';
  }

  if (listaContactos) {
    listaContactos.innerHTML = contactos.length
      ? contactos.map(c => `
        <div style="background:#0f172a; border:1px solid #1e293b; border-radius:10px; padding:15px; margin-bottom:15px;">
          <h4 style="margin-top:0;">${c.asunto}</h4>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Nombre:</strong> ${c.nombre}</p>
          <p style="color:#cbd5e1; line-height:1.7; margin:6px 0;"><strong>Correo:</strong> ${c.correo}</p>
          <p style="color:#cbd5e1; line-height:1.7;">${c.mensaje}</p>
          <p style="color:#94a3b8; font-size:14px; margin-bottom:0;">${c.fecha}</p>
        </div>
      `).join('')
      : '<p style="color:#94a3b8;">Todavía no hay mensajes registrados.</p>';
  }
}
function obtenerSolicitudesAccesoAdmin() {
  const datos = localStorage.getItem('solicitudes_acceso');
  return datos ? JSON.parse(datos) : [];
}

function obtenerMensajesContactoAdmin() {
  const datos = localStorage.getItem('mensajes_contacto');
  return datos ? JSON.parse(datos) : [];
}