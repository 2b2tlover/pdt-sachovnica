"use strict";
const velkost = 8;
let vysledok = "";
for (let riadok = 0; riadok < velkost; riadok++) {
    let text = "";
    for (let stlpec = 0; stlpec < velkost; stlpec++) {
        if ((riadok + stlpec) % 2 === 0) {
            text = text + "■ ";
        }
        else {
            text = text + "□ ";
        }
    }
    vysledok = vysledok + text + "\n";
}
const sachovnica = document.getElementById("sachovnica");
if (sachovnica !== null) {
    sachovnica.textContent = vysledok;
}
