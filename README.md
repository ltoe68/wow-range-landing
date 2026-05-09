# WOW RANGE Landing

**Landing page informativa collegata ai QR nei negozi Squillari.**

URL pubblico: https://ltoe68.github.io/wow-range-landing/

---

## Struttura file

```
wow-range-landing/
├── index.html          # Pagina principale
├── styles.css          # Stili (dark mode + schede crema)
├── script.js           # Logica vini + link form Google
├── assets/
│   ├── banner.png          # Banner intestazione
│   ├── sistema.png         # Immagine "Il Sistema"
│   └── come-funziona.png   # Immagine come funziona
└── README.md
```

---

## Come modificare

### Aggiungere / modificare un vino
Apri `script.js` e modifica l'array `wines`:
```js
{ cantina: "Nome Cantina", nome: "Nome Vino DOC", sku: "CODICE_SKU" }
```
Il codice SKU deve corrispondere all'entry nel Google Form (`entry.1131258260`).

### Aggiungere una filiale
Apri `script.js` e aggiungi alla lista `STORES`:
```js
{ key: "NomeFiliale", label: "Via NomeVia" }
```
Il `key` deve corrispondere al valore `entry.53754432` nel Google Form.

### Modificare testi e indirizzi
Apri `index.html` e modifica direttamente il testo nelle sezioni HTML.

### Modificare colori
Apri `styles.css` e modifica le variabili in `:root { ... }`.

---

## Google Form
Il form di voto è ospitato su Google Forms.
Ogni bottone "Vota questo vino" genera automaticamente un link che pre-compila:
- Il negozio scelto
- Il codice SKU del vino

---

*WOW RANGE by Enoteca Squillari — Genova*
