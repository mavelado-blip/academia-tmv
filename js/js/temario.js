const temas = [
  {
    numero: 1,
    titulo: "Técnicas, procesos y procedimientos de mecanizado manual: limado, serrado, roscado, metrología y medios",
    resumen: `
      <h4>Resumen para memorizar</h4>
      <p>El mecanizado manual es un proceso de arranque de viruta realizado con herramientas accionadas por el operario. Incluye trazado, limado, serrado, roscado y metrología. Es esencial en automoción para ajustar, reparar y verificar piezas.</p>
      <ul>
        <li>El trazado marca zonas a mecanizar.</li>
        <li>El limado ajusta dimensiones y acabado.</li>
        <li>El serrado corta y separa material.</li>
        <li>El roscado crea uniones desmontables.</li>
        <li>La metrología asegura precisión.</li>
      </ul>
    `,
    contenido: `
      <h4>Contenido completo</h4>
      <p>El mecanizado manual es un proceso de conformado de materiales por arranque de viruta, realizado mediante herramientas manejadas directamente por el operario.</p>

      <h4>1. Técnica del trazado</h4>
      <p>Consiste en marcar sobre la pieza las zonas que deben mecanizarse. Se emplean mármol, reglas, escuadras, puntas de trazar, granetes y compases.</p>

      <h4>2. Técnica del taladrado</h4>
      <p>Permite realizar agujeros mediante brocas. Es importante marcar previamente con granete y adaptar la velocidad al material.</p>

      <h4>3. Limado</h4>
      <p>Se utiliza para ajustar dimensiones y mejorar el acabado. Se realiza con limas y tornillo de banco.</p>

      <h4>4. Serrado</h4>
      <p>Permite cortar y separar material usando una sierra manual. Es importante la correcta colocación de la hoja y el ritmo de trabajo.</p>

      <h4>5. Roscado</h4>
      <p>Sirve para realizar roscas interiores y exteriores. Se usan machos, terrajas y manerales.</p>

      <h4>6. Metrología</h4>
      <p>Es la ciencia de la medición. Se utilizan reglas, calibres, micrómetros, comparadores, galgas y otros instrumentos de control.</p>

      <h4>Conclusión</h4>
      <p>El mecanizado manual es una base fundamental en el mantenimiento de vehículos por su utilidad en ajuste, reparación y verificación.</p>
    `,
    esquema: `
      <h4>Esquema</h4>
      <ul>
        <li><strong>Introducción</strong>: arranque de viruta manual</li>
        <li><strong>Trazado</strong>: marcado previo</li>
        <li><strong>Taladrado</strong>: realización de agujeros</li>
        <li><strong>Limado</strong>: ajuste y acabado</li>
        <li><strong>Serrado</strong>: corte y separación</li>
        <li><strong>Roscado</strong>: uniones desmontables</li>
        <li><strong>Metrología</strong>: medición y verificación</li>
      </ul>
    `,
    test: `
      <h4>Preguntas tipo test</h4>

      <p><strong>1. El mecanizado manual se caracteriza por:</strong></p>
      <ul>
        <li>a) Uso de maquinaria CNC</li>
        <li>b) Procesos automáticos</li>
        <li><strong>c) Herramientas accionadas por el operario ✅</strong></li>
        <li>d) Solo medición</li>
      </ul>

      <p><strong>2. ¿Para qué sirve el trazado?</strong></p>
      <ul>
        <li>a) Medir piezas</li>
        <li><strong>b) Marcar zonas a mecanizar ✅</strong></li>
        <li>c) Unir piezas</li>
        <li>d) Pulir</li>
      </ul>

      <p><strong>3. ¿Qué herramienta se usa para el limado?</strong></p>
      <ul>
        <li>a) Sierra</li>
        <li><strong>b) Lima ✅</strong></li>
        <li>c) Terraja</li>
        <li>d) Broca</li>
      </ul>
    `
  },

  { numero: 2, titulo: "Sustitución de elementos amovibles de los vehículos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 3, titulo: "Materiales plásticos y compuestos en vehículos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 4, titulo: "Reparación de materiales plásticos y compuestos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 5, titulo: "Diagnóstico de deformaciones en chapa", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 6, titulo: "Conformado de elementos de chapa", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 7, titulo: "Materiales metálicos en vehículos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 8, titulo: "Carrocerías y bastidores", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 9, titulo: "Trazado de cortes en carrocería", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 10, titulo: "Sustitución de elementos fijos de carrocería", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 11, titulo: "Soldadura eléctrica arco manual MIG/MAG TIG", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 12, titulo: "Procesos de soldeo con arco", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 13, titulo: "Soldadura oxiacetilénica", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 14, titulo: "Soldadura por puntos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 15, titulo: "Protecciones anticorrosivas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 16, titulo: "Productos de preparación de superficies", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 17, titulo: "Procesos de preparación de superficies", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 18, titulo: "Pinturas y barnices", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 19, titulo: "Colorimetría y mezclas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 20, titulo: "Pintado de vehículos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 21, titulo: "Defectos de pintado", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 22, titulo: "Personalización del vehículo", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 23, titulo: "Valoración de procesos en carrocería", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 24, titulo: "Motores Otto y Diesel", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 25, titulo: "Motores Wankel", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 26, titulo: "Reparación de motores", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 27, titulo: "Refrigeración y lubricación", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 28, titulo: "Sistemas de encendido", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 29, titulo: "Mantenimiento encendido", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 30, titulo: "Carburación", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 31, titulo: "Inyección gasolina", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 32, titulo: "Reparación inyección gasolina", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 33, titulo: "Alimentación Diesel mecánica", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 34, titulo: "Alimentación Diesel electrónica", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 35, titulo: "Reparación Diesel", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 36, titulo: "Pruebas en banco motor", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 37, titulo: "Sobrealimentación y anticontaminación", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 38, titulo: "Diagnóstico de motores", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 39, titulo: "Combustibles y lubricantes", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 40, titulo: "Hidráulica y neumática", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 41, titulo: "Embragues fricción", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 42, titulo: "Convertidores de par", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 43, titulo: "Cajas manuales", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 44, titulo: "Cajas automáticas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 45, titulo: "Averías en transmisiones", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 46, titulo: "Mecanismos de transmisión", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 47, titulo: "Transmisión a ruedas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 48, titulo: "Ruedas y neumáticos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 49, titulo: "Frenos hidráulicos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 50, titulo: "Frenos neumáticos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 51, titulo: "Frenos eléctricos e hidrodinámicos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 52, titulo: "ABS", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 53, titulo: "Averías en frenos", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 54, titulo: "Suspensiones convencionales", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 55, titulo: "Suspensiones neumáticas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 56, titulo: "Suspensiones pilotadas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 57, titulo: "Averías suspensión", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 58, titulo: "Dirección convencional", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 59, titulo: "Dirección asistida", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 60, titulo: "Averías dirección", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 61, titulo: "Climatización", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 62, titulo: "Sistemas confort y seguridad", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 63, titulo: "Equipos sonido y alarmas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 64, titulo: "Averías confort", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 65, titulo: "Seguridad activa y pasiva", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 66, titulo: "Mecanizado con máquinas", resumen: "", contenido: "", esquema: "", test: "" },
  { numero: 67, titulo: "Circuitos electrotécnicos", resumen: "", contenido: "", esquema: "", test: "" }
];

function renderTemario() {
  const list = document.getElementById('temarioList');
  if (!list) return;

  list.innerHTML = '';

  temas.forEach((tema, index) => {
    const btn = document.createElement('button');
    btn.className = 'tema-btn' + (index === 0 ? ' active' : '');
    btn.textContent = `${tema.numero}. ${tema.titulo}`;

    btn.onclick = function () {
      document.querySelectorAll('.tema-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.getElementById('temaTitulo').textContent = `${tema.numero}. ${tema.titulo}`;

      if (typeof temaActual !== 'undefined') {
        temaActual = tema.numero;
      }

      document.getElementById('temaResumen').innerHTML = tema.resumen || '<p>Sin resumen</p>';
      document.getElementById('temaContenido').innerHTML = tema.contenido || '<p>Sin contenido</p>';
      document.getElementById('temaEsquema').innerHTML = tema.esquema || '<p>Sin esquema</p>';
      document.getElementById('temaTest').innerHTML = tema.test || '<p>Sin test</p>';

      mostrarPestana('resumen');
    };

    list.appendChild(btn);
  });

  document.getElementById('temaTitulo').textContent = `${temas[0].numero}. ${temas[0].titulo}`;

  if (typeof temaActual !== 'undefined') {
    temaActual = temas[0].numero;
  }

  document.getElementById('temaResumen').innerHTML = temas[0].resumen || '<p>Sin resumen</p>';
  document.getElementById('temaContenido').innerHTML = temas[0].contenido || '<p>Sin contenido</p>';
  document.getElementById('temaEsquema').innerHTML = temas[0].esquema || '<p>Sin esquema</p>';
  document.getElementById('temaTest').innerHTML = temas[0].test || '<p>Sin test</p>';

  mostrarPestana('resumen');
}

function mostrarPestana(nombre) {
  document.getElementById('temaResumen').style.display = 'none';
  document.getElementById('temaContenido').style.display = 'none';
  document.getElementById('temaEsquema').style.display = 'none';
  document.getElementById('temaTest').style.display = 'none';

  if (nombre === 'resumen') document.getElementById('temaResumen').style.display = 'block';
  if (nombre === 'contenido') document.getElementById('temaContenido').style.display = 'block';
  if (nombre === 'esquema') document.getElementById('temaEsquema').style.display = 'block';
  if (nombre === 'test') document.getElementById('temaTest').style.display = 'block';
}