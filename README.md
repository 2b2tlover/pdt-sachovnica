# Šachovnica

Jednoduchá šachovnica 8 × 8 zo znakov ■ a □. Stránka obsahuje iba textovú šachovnicu, bez CSS.

Otvor `index.html` v prehliadači.

Po úprave `src/main.ts` spusti:

```bash
npm ci
npx tsc
```

Potom obnov stránku. Dva cykly `for`, podmienka `if / else` a operátor `%` vytvoria riadky šachovnice. `textContent` vloží výsledný text na stránku.
