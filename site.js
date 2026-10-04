/* =====================================================
   CONFIGURACIÓN DEL SITIO: edita solo este bloque
   ===================================================== */

const SITE = { nombre: "Lean Interactivo" };

/* MENÚ SUPERIOR. Para agregar una opción, añade una línea:
   { t: "Texto del menú", h: "archivo.html" }                    */
const MENU = [
  { t: "Toolings", h: "toolings.html" },
  { t: "Menu 1",   h: "menu-1.html" },
  { t: "Menu 2",   h: "menu-2.html" },
  { t: "Menu 3",   h: "menu-3.html" },
  { t: "Menu 4",   h: "menu-4.html" }
];

/* TOOLINGS. Cada grupo aparece como sección en toolings.html.
   Cada herramienta: [etiqueta, título, descripción, archivo]
   Para agregar una, añade otra línea dentro de "items".          */
const TOOLS = [
  { grupo: "Módulos Yellow Belt", items: [
    ["Módulo 1", "Mapa y DMAIC", "Lean y Six Sigma, DMAIC, PDCA, A3, roles, selección de proyectos y costos de no calidad.", "yellow-01-mapa-dmaic-v1.html"],
    ["Módulo 2", "Define", "Voz del cliente, SIPOC, enunciado del problema, indicadores y objetivos SMART.", "yellow-02-define-v1.html"],
    ["Módulo 3", "Ver el proceso", "Gemba, gestión visual (Fish Market), VSM, Swimlane y diagrama de espagueti.", "yellow-03-ver-proceso-v1.html"],
    ["Módulo 4", "Medir", "Tipos de datos, estadística básica, gráfica de corrida, variación y nivel sigma.", "yellow-04-medir-v1.html"],
    ["Módulo 5", "Desperdicios y estándar", "7+1 desperdicios, 5S, takt time, balanceo de línea y trabajo estándar.", "yellow-05-desperdicios-estandar-v1.html"],
    ["Módulo 6", "Analizar", "Pareto, Ishikawa, cinco porqués y AMEF con un caso completo.", "yellow-06-analizar-v1.html"],
    ["Módulo 7", "Flujo jalado", "Empujar vs. jalar, Kanban, Supermarket y Heijunka.", "yellow-07-flujo-jalado-v1.html"],
    ["Módulo 8", "Calidad en la fuente", "Poka Yoke, Jidoka y Andon, SMED, TPM y kaizen.", "yellow-08-calidad-fuente-v1.html"],
    ["Módulo 9", "Controlar", "Plan de acción con Gantt, plan de control, semáforo, gestión diaria y Lean digital.", "yellow-09-controlar-v1.html"]
  ]},
  { grupo: "Calculadoras", items: [
    ["Calculadora", "OEE", "Disponibilidad, rendimiento y calidad: descubre dónde pierdes tiempo.", "calculadora-oee.html"]
  ]}
];

/* =====================================================
   A partir de aquí no necesitas editar nada
   ===================================================== */
(function () {
  const $ = id => document.getElementById(id);
  const here = location.pathname.split("/").pop() || "index.html";

  // Barra de navegación
  if ($("site-nav")) {
    $("site-nav").innerHTML =
      `<header class="gnav"><div class="gnav-in"><a class="brand" href="index.html">${SITE.nombre}</a>` +
      `<nav aria-label="Principal">${MENU.map(m =>
        `<a href="${m.h}"${m.h === here ? ' aria-current="page"' : ""}>${m.t}</a>`).join("")}</nav></div></header>`;
  }

  // Pie de página
  if ($("site-footer")) {
    const mods = TOOLS[0] ? TOOLS[0].items : [];
    $("site-footer").innerHTML =
      `<footer class="foot"><div class="cols">` +
      `<div><h4>Secciones</h4>${MENU.map(m => `<a href="${m.h}">${m.t}</a>`).join("")}</div>` +
      `<div><h4>${TOOLS[0] ? TOOLS[0].grupo : "Toolings"}</h4>${mods.map(i => `<a href="${i[3]}">${i[1]}</a>`).join("")}</div>` +
      `</div><p>Material educativo propio, sin relación con ninguna certificadora. Este sitio no emite certificaciones.</p></footer>`;
  }

  // Toolings: tarjetas por grupo
  if ($("tools")) {
    $("tools").innerHTML = TOOLS.map(g =>
      `<h2>${g.grupo}</h2><div class="grid">${g.items.map(i =>
        `<a class="cd" href="${i[3]}"><small>${i[0]}</small><b>${i[1]}</b><p>${i[2]}</p><i>Abrir</i></a>`).join("")}</div>`).join("");
  }

  // Portada: círculos con los módulos y galería de secciones
  if ($("dots") && TOOLS[0]) {
    $("dots").innerHTML = TOOLS[0].items.map((i, n) =>
      `<a href="${i[3]}" title="${i[1]}" aria-label="${i[0]}: ${i[1]}">${n + 1}</a>`).join("");
  }
  if ($("gal")) {
    $("gal").innerHTML = MENU.filter(m => m.h !== "toolings.html").map(m =>
      `<a href="${m.h}"><b>${m.t}</b><span>Sección lista para tu contenido</span></a>`).join("");
  }
})();
