const velkost: number = 8;
let vysledok: string = "";

for (let riadok: number = 0; riadok < velkost; riadok++) {
  let text: string = "";

  for (let stlpec: number = 0; stlpec < velkost; stlpec++) {
    if ((riadok + stlpec) % 2 === 0) {
      text = text + "■ ";
    } else {
      text = text + "□ ";
    }
  }

  vysledok = vysledok + text + "\n";
}

const sachovnica = document.getElementById("sachovnica");
if (sachovnica !== null) {
  sachovnica.textContent = vysledok;
}
