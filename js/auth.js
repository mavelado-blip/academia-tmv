function openLogin() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeLogin() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function login() {
  const userInput = document.getElementById('user');
  const passInput = document.getElementById('pass');

  if (!userInput || !passInput) {
    alert('No se encontraron los campos de acceso');
    return;
  }

  const user = userInput.value.trim();
  const pass = passInput.value.trim();

  let rol = '';

  if (user === 'admin' && pass === '1234') {
    rol = 'profesor';
  } else if ((user === 'JD' || user === 'LR') && pass === '1111') {
    rol = 'alumno';
  } else {
    alert('Usuario o contraseña incorrectos');
    return;
  }

  localStorage.setItem('usuarioActivo', user);
  localStorage.setItem('rol', rol);

  const publicWeb = document.getElementById('publicWeb');
  const dashboard = document.getElementById('dashboard');
  const loginModal = document.getElementById('loginModal');

  if (publicWeb) publicWeb.style.display = 'none';
  if (dashboard) dashboard.style.display = 'block';
  if (loginModal) loginModal.style.display = 'none';

  if (typeof renderTemario === 'function') {
    renderTemario();
  if (typeof mostrarMensajeBienvenida === 'function') {
  mostrarMensajeBienvenida();
}
  }

  if (typeof configurarVista === 'function') {
    configurarVista(rol);
  }

  if (typeof actualizarProgreso === 'function') {
    actualizarProgreso();
  }
}

function logout() {
  const dashboard = document.getElementById('dashboard');
  const publicWeb = document.getElementById('publicWeb');
  const loginModal = document.getElementById('loginModal');

  if (dashboard) dashboard.style.display = 'none';
  if (publicWeb) publicWeb.style.display = 'block';
  if (loginModal) loginModal.style.display = 'none';

  localStorage.removeItem('usuarioActivo');
  localStorage.removeItem('rol');

  const userInput = document.getElementById('user');
  const passInput = document.getElementById('pass');

  if (userInput) userInput.value = '';
  if (passInput) passInput.value = '';
}

function configurarVista(rol) {
  const panelProgreso = document.getElementById('panelProgresoAlumno');

  if (panelProgreso) {
    panelProgreso.style.display = rol === 'alumno' ? 'block' : 'none';
  }

  const linkProgramacion = document.querySelector("a[onclick*='programacionPlataforma']");
  const linkRecursos = document.querySelector("a[onclick*='recursosPlataforma']");
  const linkSupuestos = document.querySelector("a[onclick*='supuestosPlataforma']");
  const linkTemario = document.querySelector("a[onclick*='temarioPlataforma']");
  const linkAntes = document.querySelector("a[onclick*='antesPlataforma']");

  if (rol === 'alumno') {
    if (linkProgramacion) linkProgramacion.style.display = 'none';
    if (linkRecursos) linkRecursos.style.display = 'none';
    if (linkSupuestos) linkSupuestos.style.display = 'block';
    if (linkTemario) linkTemario.style.display = 'block';
    if (linkAntes) linkAntes.style.display = 'block';
  }

  if (rol === 'profesor') {
    if (linkProgramacion) linkProgramacion.style.display = 'block';
    if (linkRecursos) linkRecursos.style.display = 'block';
    if (linkSupuestos) linkSupuestos.style.display = 'block';
    if (linkTemario) linkTemario.style.display = 'block';
    if (linkAntes) linkAntes.style.display = 'block';
  }
}