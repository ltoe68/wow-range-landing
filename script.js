/*
  WOW RANGE – script.js
  Render schede vino con selettore negozio per link di voto.
*/

const STORES = [
  { key: "Malta",      label: "Via Malta" },
  { key: "Sestri",     label: "Via Sestri" },
  { key: "Cantore",    label: "Via Cantore" },
  { key: "Trento",     label: "Via Trento" },
  { key: "DeFerrari",  label: "De Ferrari" }
];

const BASE = "https://docs.google.com/forms/d/e/1FAIpQLSeNw26jrAeYxjnzXlNWiWep3HK7PjzMqFc0AU1rVdUYh2SO2Q/viewform?usp=pp_url";

function makeLink(store, sku) {
  return `${BASE}&entry.53754432=${store}&entry.1131258260=${sku}`;
}

const wines = [
  { cantina: "Dosio",              nome: "Langhe Nebbiolo DOC",                      sku: "2101146" },
  { cantina: "Dosio",              nome: "Roero Arneis DOC",                          sku: "2101147" },
  { cantina: "La Torre",           nome: "Chardonnay Piemonte DOC Barrique",          sku: "2101145" },
  { cantina: "Fattoria dei Barbi", nome: "Ciliegiolo IGT (Senza solfiti aggiunti)",   sku: "2109206" },
  { cantina: "Casino Nitti",       nome: "Negroamaro Rosato IGT",                     sku: "2116060" },
  { cantina: "Belisario",          nome: "Marche Rosato IGT",                         sku: "2111032" },
  { cantina: "Belisario",          nome: "Spumante Tara Brut di Verdicchio",          sku: "6601589" },
  { cantina: "Brugnano",           nome: "Frappato Rosé IGT",                         sku: "2119027" },
  { cantina: "Brugnano",           nome: "Viognier Inzolia IGT",                      sku: "2119083" }
];

function createWineCard(wine) {
  const storeButtons = STORES.map(s =>
    `<a class="store-btn" href="${makeLink(s.key, wine.sku)}" target="_blank" rel="noopener noreferrer">${s.label}</a>`
  ).join("");

  return `
    <article class="wine-card">
      <div class="wine-card__top"><strong>${wine.nome}</strong></div>
      <p class="wine-meta">Cantina: <strong>${wine.cantina}</strong></p>
      <span class="badge badge--in-gara">In gara</span>
      <button class="btn btn--gold" onclick="toggleStorePicker(this)">🗳 Vota questo vino</button>
      <div class="store-picker" style="display:none;">
        <p>Scegli il tuo negozio:</p>
        <div class="store-buttons">${storeButtons}</div>
      </div>
    </article>
  `;
}

function toggleStorePicker(btn) {
  const picker = btn.nextElementSibling;
  const isOpen = picker.style.display === "block";
  document.querySelectorAll(".store-picker").forEach(p => p.style.display = "none");
  document.querySelectorAll(".btn--gold").forEach(b => b.classList.remove("active"));
  if (!isOpen) {
    picker.style.display = "block";
    btn.classList.add("active");
    picker.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

document.addEventListener("click", function(e) {
  if (!e.target.closest(".wine-card")) {
    document.querySelectorAll(".store-picker").forEach(p => p.style.display = "none");
    document.querySelectorAll(".btn--gold").forEach(b => b.classList.remove("active"));
  }
});

function renderViniInGara() {
  const container = document.getElementById("viniInGara");
  if (container) container.innerHTML = wines.map(createWineCard).join("");
}

function setMainCtaLink() {
  const cta = document.getElementById("ctaFormLink");
  if (cta) cta.href = makeLink("Malta", wines[0].sku);
}

renderViniInGara();
setMainCtaLink();
