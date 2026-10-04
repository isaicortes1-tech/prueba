/* Motor del sitio: menú, pie de página y páginas generadas desde catalogo.js.
   No necesitas editar este archivo para cambiar contenido ni precios. */
(function () {
  const $ = id => document.getElementById(id);
  const q = new URLSearchParams(location.search);
  const byCat = c => ITEMS.filter(i => i.cat === c);
  const href = i => `producto.html?id=${i.id}`;
  const money = p => p == null || p === "" ? "Precio próximamente" : typeof p === "number" ? "$" + p.toLocaleString("es-MX") + " MXN" : p;
  const card = (l, t, d, h) => `<a class="cd" href="${h}"><small>${l}</small><b>${t}</b><p>${d}</p><i>Ver</i></a>`;
  const list = a => `<ul class="ticks">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const P = document.body.dataset.page;

  /* ---------- Menú (se construye desde el catálogo) ---------- */
  const MENU = [
    { t: "Tienda", h: "tienda.html", s: [
      ...Object.entries(CATS).map(([k, c]) => ({ t: c.t, h: `categoria.html?c=${k}`, s: byCat(k).map(i => ({ t: i.t, h: href(i) })) })),
      { t: "Plantillas", h: "plantillas.html" } ] },
    ...Object.entries(TEMAS).map(([k, v]) => ({ t: v.m, h: `tema.html?t=${k}` })),
    { t: "Plantillas", h: "plantillas.html" },
    { t: "Libros", h: "libros.html" },
    { t: "Conócenos", h: "index.html#nosotros", s: [
      { t: "Quiénes somos", h: "index.html#nosotros" },
      { t: "Qué puedes aprender", h: "index.html#aprende" },
      { t: "Nuestra historia", h: "index.html#historia" } ] }
  ];
  const ul = (items, l) => `<ul class="m${l}">${items.map(m =>
    `<li${m.s ? ' class="has"' : ""}><a href="${m.h}">${m.t}</a>` +
    (m.s ? `<button class="tg" type="button" aria-label="Abrir ${m.t}" aria-expanded="false">›</button>${ul(m.s, l + 1)}` : "") + `</li>`).join("")}</ul>`;

  if ($("site-nav")) $("site-nav").innerHTML =
    `<header class="gnav"><div class="gnav-in"><a class="brand" href="index.html"><img src="${SITE.logo}" alt="" onerror="this.remove()">${SITE.nombre}</a>` +
    `<button class="burger" type="button" aria-label="Menú" aria-expanded="false"><span></span><span></span></button>` +
    `<nav aria-label="Principal">${ul(MENU, 0)}</nav></div></header>`;

  document.addEventListener("click", e => {
    const t = e.target.closest(".tg");
    if (t) { const o = t.parentElement.classList.toggle("open"); t.setAttribute("aria-expanded", o); return; }
    const b = e.target.closest(".burger");
    if (b) { const o = b.closest(".gnav").classList.toggle("open"); b.setAttribute("aria-expanded", o); }
  });

  /* ---------- Favicon en todas las páginas ---------- */
  if (!document.querySelector('link[rel="icon"]')) {
    const l = document.createElement("link"); l.rel = "icon"; l.href = SITE.logo; document.head.appendChild(l);
  }

  /* ---------- Pie de página ---------- */
  if ($("site-footer")) $("site-footer").innerHTML =
    `<footer class="foot"><div class="cols">` +
    `<div><h4>Tienda</h4>${Object.entries(CATS).map(([k, c]) => `<a href="categoria.html?c=${k}">${c.t}</a>`).join("")}<a href="plantillas.html">Plantillas</a></div>` +
    `<div><h4>Temas</h4>${Object.entries(TEMAS).map(([k, v]) => `<a href="tema.html?t=${k}">${v.m}</a>`).join("")}<a href="libros.html">Libros</a></div>` +
    `<div><h4>Conócenos</h4><a href="index.html#nosotros">Quiénes somos</a><a href="index.html#aprende">Qué puedes aprender</a><a href="index.html#historia">Nuestra historia</a></div></div>` +
    `<p>Material educativo propio. No somos un organismo de certificación ni sustituimos las normas, manuales o requisitos oficiales de cada cliente.</p></footer>`;

  /* ---------- Botón de compra ---------- */
  function cta(i) {
    if (i.e) return `<a class="btn" href="${i.e}" target="_blank" rel="noopener">Comprar</a>`;
    const c = SITE.contacto, txt = i.cat === "empresas" ? "Solicitar cotización" : "Solicitar informes";
    if (c.email) return `<a class="btn" href="mailto:${c.email}?subject=${encodeURIComponent("Informes: " + i.t)}">${txt}</a>`;
    if (c.whatsapp) return `<a class="btn" href="https://wa.me/${c.whatsapp}?text=${encodeURIComponent("Hola, quiero informes de: " + i.t)}" target="_blank" rel="noopener">${txt}</a>`;
    return `<span class="btn off">Próximamente</span>`;
  }

  /* ---------- Portada: productos y accesos ---------- */
  if (P === "home") {
    if ($("pills")) $("pills").innerHTML = Object.entries(TEMAS).map(([k, v]) => `<a href="tema.html?t=${k}">${v.m}</a>`).join("") + `<a href="plantillas.html">Plantillas</a>`;
    if ($("products")) $("products").innerHTML = Object.entries(CATS).map(([k, c]) =>
      `<div class="pc${k === "cursos" ? " wide" : ""}"><h3>${c.t}</h3><p>${c.d}</p><div class="chp">${byCat(k).map(i => `<a href="${href(i)}">${i.t}</a>`).join("")}</div><a class="more" href="categoria.html?c=${k}">Ver ${c.t.toLowerCase()} ›</a></div>`).join("") +
      `<div class="pc"><h3>Plantillas</h3><p>Formatos de aplicación directa en tu trabajo.</p><a class="more" href="plantillas.html" style="margin-top:0">Ver plantillas ›</a></div>`;
  }

  /* ---------- Tienda ---------- */
  if (P === "tienda") $("cats").innerHTML = Object.entries(CATS).map(([k, c]) =>
    card(`${byCat(k).length} ${byCat(k).length === 1 ? "opción" : "opciones"}`, c.t, c.d, `categoria.html?c=${k}`)).join("") +
    card("Formatos listos", "Plantillas", "Plantillas de aplicación directa en tu trabajo.", "plantillas.html");

  /* ---------- Categoría ---------- */
  if (P === "categoria") {
    const k = q.get("c"), c = CATS[k];
    if (!c) { $("hero").innerHTML = `<h1>No encontramos esa categoría.</h1><p class="links"><a href="tienda.html">Volver a la tienda</a></p>`; }
    else {
      document.title = `${c.t} · ${SITE.nombre}`;
      $("hero").innerHTML = `<p class="eyebrow"><a href="tienda.html">Tienda</a></p><h1>${c.t}.</h1><p class="tag">${c.d}</p>`;
      $("body").innerHTML = `<section class="blk"><div class="in wide"><div class="grid">${byCat(k).map(i => card(money(i.p), i.t, i.r, href(i))).join("")}</div></div></section>`;
    }
  }

  /* ---------- Producto (curso, paquete, membresía, empresas) ---------- */
  if (P === "producto") {
    const i = ITEMS.find(x => x.id === q.get("id"));
    if (!i) { $("hero").innerHTML = `<h1>No encontramos ese producto.</h1><p class="links"><a href="tienda.html">Volver a la tienda</a></p>`; }
    else {
      document.title = `${i.t} · ${SITE.nombre}`;
      $("hero").innerHTML = `<p class="eyebrow"><a href="categoria.html?c=${i.cat}">${CATS[i.cat].t}</a></p><h1>${i.t}</h1><p class="tag">${i.r}</p><div class="buy"><div class="price">${money(i.p)}</div>${cta(i)}</div>`;
      const co = i.c || COMO;
      $("body").innerHTML =
        `<section class="blk"><div class="in"><h2>Introducción</h2><p>${i.i}</p></div></section>` +
        (i.a.length ? `<section class="blk alt"><div class="in"><h2>Qué vas a aprender</h2>${list(i.a)}</div></section>` : "") +
        `<section class="blk"><div class="in wide"><h2>Cómo lo vas a aprender</h2><div class="grid">${co.map(x => `<div class="cd st"><b>${x[0]}</b><p>${x[1]}</p></div>`).join("")}</div></div></section>` +
        (i.s.length ? `<section class="blk alt"><div class="in"><h2>Qué serás capaz de hacer</h2>${list(i.s)}</div></section>` : "") +
        (i.incluye ? `<section class="blk"><div class="in"><h2>Qué incluye</h2>${i.incluye.length ? list(i.incluye) : '<div class="note">El contenido de este producto está en preparación.</div>'}</div></section>` : "") +
        `<section class="blk alt"><div class="in end"><h2>${i.cat === "empresas" ? "Hablemos de tu equipo." : "Empieza hoy."}</h2><div class="buy"><div class="price">${money(i.p)}</div>${cta(i)}</div><p><a href="tienda.html">Ver toda la tienda ›</a></p></div></section>`;
    }
  }

  /* ---------- Plantillas y libros ---------- */
  if (P === "lista") {
    const L = document.body.dataset.lista === "libros" ? LIBROS : PLANTILLAS, que = document.body.dataset.lista === "libros" ? "libros" : "plantillas";
    $("body").innerHTML = `<section class="blk"><div class="in wide">${L.length
      ? `<div class="grid">${L.map(x => `<div class="cd"><small>${money(x[2])}</small><b>${x[0]}</b><p>${x[1]}</p>${x[3] ? `<a href="${x[3]}" target="_blank" rel="noopener" style="margin-top:14px">Obtener ›</a>` : ""}</div>`).join("")}</div>`
      : `<div class="note" style="text-align:center">Estamos preparando los primeros ${que}. Vuelve pronto.</div>`}</div></section>`;
  }

  /* ---------- Temas (CSR, IATF, VDA 6.3, Metodologías, Lean) ---------- */
  if (P === "tema") {
    const k = q.get("t"), T = TEMAS[k];
    if (!T) { $("hero").innerHTML = `<h1>No encontramos ese tema.</h1><p class="links"><a href="index.html">Volver al inicio</a></p>`; }
    else {
      document.title = `${T.t} · ${SITE.nombre}`;
      $("hero").innerHTML = `<h1>${T.t}.</h1><p class="tag">${T.tag}</p><nav class="links"><a href="#intro">Introducción</a><a href="#aplicar">Cómo aplicarlo</a><a href="#casos">Qué te espera</a></nav>`;
      const rel = (T.rel || []).map(id => ITEMS.find(x => x.id === id)).filter(Boolean);
      const tile = (t, d) => `<div class="cd st"><b>${t}</b><p>${d}</p></div>`;
      $("body").innerHTML =
        `<section class="blk" id="intro"><div class="in"><h2>Introducción</h2>${T.intro.map(x => x.startsWith("# ") ? `<h3>${x.slice(2)}</h3>` : `<p>${x}</p>`).join("")}</div></section>` +
        `<section class="blk alt" id="aplicar"><div class="in"><h2>Cómo aplicarlo</h2><ol class="steps">${T.pasos.map(x => `<li><div>${x}</div></li>`).join("")}</ol><div class="note"><span class="tagv">Verificar</span>${T.nota}</div></div></section>` +
        `<section class="blk" id="casos"><div class="in wide"><h2>Qué te espera en el curso</h2><p>Así se vive el curso completo. Los casos son ilustrativos, construidos con situaciones típicas de la industria; no corresponden a clientes ni empresas reales.</p><div class="grid">` +
        tile("Casos interactivos", T.caso) +
        tile("Cuestionarios", "Después de cada tema respondes preguntas y ves de inmediato por qué cada opción es correcta o no.") +
        tile("Videos", "Lecciones cortas con ejemplos de planta: primero ves cómo se aplica y luego lo practicas.") +
        tile("Videojuego educativo", T.juego) +
        tile("Examen final", "Al terminar, un examen integra todo el curso y te muestra qué conviene repasar.") +
        `</div></div></section>` +
        `<section class="blk alt"><div class="in"><h2>Prueba una muestra</h2><div class="lab"><div id="mu"></div></div></div></section>` +
        (T.extra === "tools" ? `<section class="blk"><div class="in wide"><h2>Muestra gratuita: módulos interactivos</h2><p>Practica con estos módulos y la calculadora OEE, sin costo.</p><div class="grid">${TOOLS.map(x => card(x[0], x[1], x[2], x[3])).join("")}</div></div></section>` : "") +
        (rel.length ? `<section class="blk${T.extra === "tools" ? " alt" : ""}"><div class="in wide"><h2>Cursos relacionados</h2><div class="grid">${rel.map(i => card(money(i.p), i.t, i.r, href(i))).join("")}</div></div></section>` : "") +
        `<section class="blk${rel.length && T.extra !== "tools" ? " alt" : ""}"><div class="in end"><h2>Lleva este tema a tu trabajo.</h2><p><a class="btn" href="tienda.html">Ver la tienda</a></p></div></section>`;
      if (typeof quiz === "function") quiz("mu", T.muestra);
    }
  }
})();
