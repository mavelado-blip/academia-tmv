// Control de navegación entre secciones del dashboard
function showSection(sectionId, el) {
  const sections = [
    'inicioPlataforma',
    'antesPlataforma',
    'temarioPlataforma',
    'supuestosPlataforma',
    'programacionPlataforma',
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

    // Cargar contenido
    if (typeof renderTemario === 'function') renderTemario();
    if (typeof configurarVista === 'function') configurarVista(rol);
    if (typeof actualizarProgreso === 'function') actualizarProgreso();
  }
});