/* Utilidades de aprendizaje compartidas por las páginas de producto */
const $ = id => document.getElementById(id);

/* Clasificar: cada elemento se asigna a una categoría con un selector */
function cls(id, items, opts, extra, cb) {
  const sel = [], box = $(id);
  box.innerHTML = items.map((c, i) =>
    `<div class="card" id="${id}${i}"><span>${c[0]}</span><select data-i="${i}" aria-label="Clasificar: ${c[0]}"><option value="">Elegir…</option>` +
    opts.map((k, j) => `<option value="${j}">${k}</option>`).join("") +
    `</select><small id="${id}m${i}"></small></div>`).join("");
  box.addEventListener("change", e => {
    const i = e.target.dataset.i; if (i === undefined) return;
    sel[i] = e.target.value; $(id + i).className = "card"; $(id + "m" + i).textContent = "";
    if (cb) cb(sel);
  });
  $(id + "btn").onclick = () => {
    let ok = 0;
    items.forEach((c, i) => {
      const el = $(id + i), m = $(id + "m" + i);
      if (sel[i] === undefined || sel[i] === "") { el.className = "card"; m.textContent = "Falta clasificar."; return; }
      if (+sel[i] === c[1]) { ok++; el.className = "card ok"; m.textContent = ""; }
      else { el.className = "card no"; m.textContent = "Sugerido: " + opts[c[1]] + ". " + extra; }
    });
    $(id + "res").textContent = `Aciertos: ${ok} de ${items.length}.`;
  };
}

/* Casos para decidir: pregunta, opciones, índice correcto, explicación */
function quiz(id, items) {
  let sc = 0, ans = 0; const box = $(id);
  box.innerHTML = items.map((q, i) =>
    `<div class="q"><b>${q[0]}</b>` +
    q[1].map((o, j) => `<button class="opt" type="button" data-q="${i}" data-j="${j}">${o}</button>`).join("") +
    `<div class="ex" id="${id}x${i}"></div></div>`).join("") + `<p class="fb" id="${id}res" aria-live="polite"></p>`;
  box.addEventListener("click", e => {
    const b = e.target.closest("[data-q]"); if (!b) return;
    const i = b.dataset.q, j = +b.dataset.j, q = items[i];
    box.querySelectorAll(`[data-q="${i}"]`).forEach(x => { x.disabled = true; });
    const ok = j === q[2]; if (ok) sc++; ans++;
    b.classList.add(ok ? "ok" : "no");
    if (!ok) box.querySelector(`[data-q="${i}"][data-j="${q[2]}"]`).classList.add("ok");
    $(id + "x" + i).textContent = (ok ? "Correcto. " : "No exactamente. ") + q[3];
    if (ans === items.length) $(id + "res").textContent = `Resultado: ${sc} de ${items.length}.`;
  });
}
