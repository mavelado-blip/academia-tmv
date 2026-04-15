function openSolicitudAcceso() {
  const modal = document.getElementById('solicitudModal');
  if (modal) modal.style.display = 'flex';
}

function closeSolicitudAcceso() {
  const modal = document.getElementById('solicitudModal');
  if (modal) modal.style.display = 'none';
}

function openContactoPublico() {
  const modal = document.getElementById('contactoModal');
  if (modal) modal.style.display = 'flex';
}

function closeContactoPublico() {
  const modal = document.getElementById('contactoModal');
  if (modal) modal.style.display = 'none';
}

function obtenerSolicitudesAcceso() {
  const datos = localStorage.getItem('solicitudes_acceso');
  return datos ? JSON.parse(datos) : [];
}

function guardarListaSolicitudes(lista) {
  localStorage.setItem('solicitudes_acceso', JSON.stringify(lista));
}

function obtenerMensajesContacto() {
  const datos = localStorage.getItem('mensajes_contacto');
  return datos ? JSON.parse(datos) : [];
}

function guardarListaMensajesContacto(lista) {
  localStorage.setItem('mensajes_contacto', JSON.stringify(lista));
}

function guardarSolicitudAcceso() {
  const nombre = document.getElementById('solNombre')?.value.trim() || '';
  const apellidos = document.getElementById('solApellidos')?.value.trim() || '';
  const correo = document.getElementById('solCorreo')?.value.trim() || '';
  const telefono = document.getElementById('solTelefono')?.value.trim() || '';
  const especialidad = document.getElementById('solEspecialidad')?.value.trim() || '';
  const comunidad = document.getElementById('solComunidad')?.value.trim() || '';
  const necesidades = document.getElementById('solNecesidades')?.value.trim() || '';
  const observaciones = document.getElementById('solObservaciones')?.value.trim() || '';

  const interes = [];
  if (document.getElementById('chkOposicion')?.checked) interes.push('Preparación oposición');
  if (document.getElementById('chkAula')?.checked) interes.push('Ayuda en el aula');
  if (document.getElementById('chkMaster')?.checked) interes.push('Ayuda en máster / COFPYD');

  if (!nombre || !apellidos || !correo || !especialidad || !comunidad || !necesidades) {
    alert('Debes completar al menos nombre, apellidos, correo, especialidad, comunidad y necesidades.');
    return;
  }

  const solicitud = {
    id: Date.now(),
    nombre,
    apellidos,
    correo,
    telefono,
    especialidad,
    comunidad,
    interes,
    necesidades,
    observaciones,
    fecha: new Date().toLocaleString()
  };

  const solicitudes = obtenerSolicitudesAcceso();
  solicitudes.unshift(solicitud);
  guardarListaSolicitudes(solicitudes);

  document.getElementById('solNombre').value = '';
  document.getElementById('solApellidos').value = '';
  document.getElementById('solCorreo').value = '';
  document.getElementById('solTelefono').value = '';
  document.getElementById('solEspecialidad').value = '';
  document.getElementById('solComunidad').value = '';
  document.getElementById('solNecesidades').value = '';
  document.getElementById('solObservaciones').value = '';

  document.getElementById('chkOposicion').checked = false;
  document.getElementById('chkAula').checked = false;
  document.getElementById('chkMaster').checked = false;

  closeSolicitudAcceso();

  if (typeof renderPanelAdmin === 'function') {
    renderPanelAdmin();
  }

  alert('Solicitud enviada correctamente');
}

function guardarMensajeContacto() {
  const nombre = document.getElementById('contactoNombre')?.value.trim() || '';
  const correo = document.getElementById('contactoCorreo')?.value.trim() || '';
  const asunto = document.getElementById('contactoAsunto')?.value.trim() || '';
  const mensaje = document.getElementById('contactoMensaje')?.value.trim() || '';

  if (!nombre || !correo || !asunto || !mensaje) {
    alert('Debes completar nombre, correo, asunto y mensaje.');
    return;
  }

  const contacto = {
    id: Date.now(),
    nombre,
    correo,
    asunto,
    mensaje,
    fecha: new Date().toLocaleString()
  };

  const mensajes = obtenerMensajesContacto();
  mensajes.unshift(contacto);
  guardarListaMensajesContacto(mensajes);

  document.getElementById('contactoNombre').value = '';
  document.getElementById('contactoCorreo').value = '';
  document.getElementById('contactoAsunto').value = '';
  document.getElementById('contactoMensaje').value = '';

  closeContactoPublico();

  if (typeof renderPanelAdmin === 'function') {
    renderPanelAdmin();
  }

  alert('Mensaje enviado correctamente');
}