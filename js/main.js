// Control de navegación entre secciones del dashboard
function showSection(sectionId, el) {
const sections = [
  'inicioPlataforma',
  'antesPlataforma',
  'temarioPlataforma',
  'practicasPlataforma',
  'programacionPlataforma',
  'legislacionPlataforma',
  'ayudaProfesorado',
  'cofpydPlataforma',
  'interaccionPlataforma',
  'avisosPlataforma',
  'recursosPlataforma'
];

  // Ocultar todas
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) section.classList.add('hidden');
  });

  // Mostrar la seleccionada
  const activa = document.getElementById(sectionId);
  if (activa) activa.classList.remove('hidden');

  // Marcar enlace activo
  document.querySelectorAll('.sidebar a').forEach(link => {
    link.classList.remove('active');
  });

  if (el) el.classList.add('active');
}

// Al cargar la página (opcional para mejoras futuras)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Plataforma TMV cargada correctamente');

  // Si quisieras auto-login en el futuro
  const usuario = localStorage.getItem('usuarioActivo');
  const rol = localStorage.getItem('rol');

  if (usuario && rol) {
    // Mostrar dashboard automáticamente
    const publicWeb = document.getElementById('publicWeb');
    const dashboard = document.getElementById('dashboard');

    if (publicWeb) publicWeb.style.display = 'none';
    if (dashboard) dashboard.style.display = 'block';
    if (typeof renderAvisos === 'function') renderAvisos();
    // Cargar contenido
    if (typeof renderTemario === 'function') renderTemario();
    if (typeof mostrarMensajeBienvenida === 'function') {
  mostrarMensajeBienvenida();
}
    if (typeof configurarVista === 'function') configurarVista(rol);
    if (typeof actualizarProgreso === 'function') actualizarProgreso();
  }
});
function mostrarMensajeBienvenida() {
  const usuario = localStorage.getItem('usuarioActivo') || 'usuario';

  const mensaje = `
    <strong>${usuario}</strong>, esta plataforma te acompaña en el proceso de preparación de la oposición de Transporte y Mantenimiento de Vehículos.

    <br><br>

    Te servirá como guía, pero es importante tener en cuenta que el gran esfuerzo es del opositor.

    <br><br>

    Como se ha explicado previamente, detrás de la plataforma hay profesores (funcionarios de carrera) que te guiarán en la corrección de los distintos apartados: temas, prácticas y programación didáctica.
  `;

  const contenedor = document.getElementById('mensajeBienvenida');

  if (contenedor) {
    contenedor.innerHTML = mensaje;
  }
}
document.addEventListener('DOMContentLoaded', () => {

  console.log('Plataforma cargada');

  const usuario = localStorage.getItem('usuarioActivo');
  const rol = localStorage.getItem('rol');

  if (usuario && rol) {

    // Mostrar dashboard directamente
    const publicWeb = document.getElementById('publicWeb');
    const dashboard = document.getElementById('dashboard');

    if (publicWeb) publicWeb.style.display = 'none';
    if (dashboard) dashboard.style.display = 'block';

    // Cargar contenido
    if (typeof renderTemario === 'function') renderTemario();
    if (typeof configurarVista === 'function') configurarVista(rol);
    if (typeof actualizarProgreso === 'function') actualizarProgreso();
    if (typeof renderConsultas === 'function') renderConsultas();

    // Mensaje bienvenida
    if (typeof mostrarMensajeBienvenida === 'function') {
      mostrarMensajeBienvenida();
    }
  }
});
function mostrarSubpracticas(id) {
  const bloques = ['tipoTestPracticas', 'desarrolloPracticas', 'realesPracticas'];

  bloques.forEach(bloque => {
    const elemento = document.getElementById(bloque);
    if (elemento) {
      elemento.classList.add('hidden');
    }
  });

  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.remove('hidden');
  }
}