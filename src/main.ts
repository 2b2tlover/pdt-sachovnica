// Nájdeme kontajner pripravený v index.html.
const sachovnica = document.getElementById("sachovnica");
const velkost: number = 8;

// Kontrola, že HTML kontajner existuje.
if (sachovnica !== null) {
  // Vonkajší cyklus prechádza riadky, vnútorný stĺpce.
  for (let riadok: number = 0; riadok < velkost; riadok++) {
    for (let stlpec: number = 0; stlpec < velkost; stlpec++) {
      const policko = document.createElement("div");
      policko.classList.add("policko");

      // Párny a nepárny súčet strieda farby v oboch smeroch.
      if ((riadok + stlpec) % 2 === 0) {
        policko.classList.add("svetle");
      } else {
        policko.classList.add("tmave");
      }

      sachovnica.appendChild(policko);
    }
  }
}
