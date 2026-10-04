/* =====================================================
   CONFIGURACIÓN DEL SITIO: edita solo este bloque
   ===================================================== */

/* Nombre de trabajo del proyecto (cámbialo cuando elijas el definitivo) */
const SITE = { nombre: "Industria Clara" };

/* MENÚ SUPERIOR: { t: "Texto", h: "archivo.html" } */
const MENU = [
  { t: "Nosotros",  h: "index.html#nosotros" },
  { t: "Aprende",   h: "index.html#aprende" },
  { t: "Historia",  h: "index.html#historia" },
  { t: "Productos", h: "index.html#productos" }
];

/* PRODUCTOS: [etiqueta, título, descripción, archivo]
   Para agregar uno, añade una línea y crea su archivo .html */
const PRODUCTS = [
  ["Producto 1", "Customer Specific Requirements", "Cómo entender, ordenar y cumplir lo que exige cada cliente.", "csr.html"],
  ["Producto 2", "IATF 16949", "La norma automotriz: capítulos, herramientas núcleo y cómo prepararte.", "iatf.html"],
  ["Producto 3", "VDA", "Auditorías de proceso y de producto del sector automotriz alemán.", "vda.html"],
  ["Producto 4", "Metodologías", "8D, APQP y cómo elegir el método correcto para cada situación.", "metodologias.html"],
  ["Producto 5", "Herramientas Lean Manufacturing", "9 módulos interactivos y una calculadora OEE.", "toolings.html"]
];

/* HERRAMIENTAS LEAN (se muestran en toolings.html)
   Cada una: [etiqueta, título, descripción, archivo] */
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
  const card = i => `<a class="cd" href="${i[3]}"><small>${i[0]}</small><b>${i[1]}</b><p>${i[2]}</p><i>Abrir</i></a>`;

  if ($("site-nav")) $("site-nav").innerHTML =
    `<header class="gnav"><div class="gnav-in"><a class="brand" href="index.html">${SITE.nombre}</a>` +
    `<nav aria-label="Principal">${MENU.map(m => `<a href="${m.h}">${m.t}</a>`).join("")}</nav></div></header>`;

  if ($("site-footer")) $("site-footer").innerHTML =
    `<footer class="foot"><div class="cols">` +
    `<div><h4>Productos</h4>${PRODUCTS.map(p => `<a href="${p[3]}">${p[1]}</a>`).join("")}</div>` +
    `<div><h4>Secciones</h4>${MENU.map(m => `<a href="${m.h}">${m.t}</a>`).join("")}</div></div>` +
    `<p>Material educativo propio. No somos un organismo de certificación ni sustituimos las normas, manuales o requisitos oficiales de cada cliente.</p></footer>`;

  if ($("products")) $("products").innerHTML = PRODUCTS.map(card).join("");

  if ($("tools")) $("tools").innerHTML = TOOLS.map(g =>
    `<h2>${g.grupo}</h2><div class="grid">${g.items.map(card).join("")}</div>`).join("");
})();
