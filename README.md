# Šachovnica v TypeScripte

Školský projekt PDT: webová šachovnica 8 × 8 generovaná dvoma vnorenými cyklami.

## Spustenie

Hotovú šachovnicu zobrazíš otvorením `index.html` v prehliadači. Preložený `dist/main.js` je súčasťou projektu.

Na úpravy potrebuješ Node.js a npm. V termináli v priečinku projektu spusti:

```bash
npm ci
npx tsc
```

Potom otvor alebo obnov `index.html`. Po každej zmene `src/main.ts` súbor ulož a znovu spusti `npx tsc`. Súbor `dist/main.js` neupravuj ručne.

Automatická kompilácia počas práce:

```bash
npm run watch
```

## Súbory

- `index.html`: základ stránky a jeden kontajner šachovnice.
- `style.css`: mriežka 8 × 8, dve farby a prispôsobenie šírke okna.
- `src/main.ts`: vytváranie 64 polí cez DOM API.
- `dist/main.js`: výsledok kompilácie, ktorý načíta prehliadač.
- `tsconfig.json`: nastavenie kompilátora.
- `.gitignore`: vylučuje `node_modules` z Gitu.

## Ako funguje kód

`getElementById` nájde kontajner. Kontrola `!== null` overí, že existuje. Vonkajší `for` prechádza 8 riadkov a vnútorný `for` 8 stĺpcov. `createElement` vytvorí políčko, `classList.add` mu pridá CSS triedu a `appendChild` ho vloží do kontajnera.

Podmienka `(riadok + stlpec) % 2 === 0` vyberá svetlé políčko pri párnom súčte a tmavé pri nepárnom. Farby sa preto striedajú vodorovne aj zvislo. Pravé dolné políčko je svetlé.

Nevytvárame vlastné funkcie, triedy ani 2D polia. DOM API je doplnené podľa webového zadania.

## Git

História zachytáva skutočné postupné kroky tvorby projektu: základ, generovanie polí a finálne farby s rozložením. Projekt bol pripravený s pomocou Codexu.

```bash
git status
git log --oneline
```

Samostatný lokálny priečinok `git-trening` obsahuje tréningový repozitár s dvoma commitmi.

Repozitár na GitHube je súkromný. Aby ho učiteľ mohol otvoriť, musí dostať prístup medzi spolupracovníkov repozitára.
