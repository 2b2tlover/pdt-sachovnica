const sachovnica = document.getElementById("sachovnica");
const velkost: number = 8;

if (sachovnica !== null) {
  for (let riadok: number = 0; riadok < velkost; riadok++) {
    for (let stlpec: number = 0; stlpec < velkost; stlpec++) {
      const policko = document.createElement("div");
      policko.classList.add("policko");
      sachovnica.appendChild(policko);
    }
  }
}
