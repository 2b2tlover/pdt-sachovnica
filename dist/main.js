"use strict";
const sachovnica = document.getElementById("sachovnica");
const velkost = 8;
if (sachovnica !== null) {
    for (let riadok = 0; riadok < velkost; riadok++) {
        for (let stlpec = 0; stlpec < velkost; stlpec++) {
            const policko = document.createElement("div");
            policko.classList.add("policko");
            sachovnica.appendChild(policko);
        }
    }
}
