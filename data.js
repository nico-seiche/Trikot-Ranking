// Bundesliga 2026/27 – Auswärtstrikots
//
// Die Bilder in kits/*.png sind aus den einzelnen Kit-Template-Teilen
// (Ärmel, Rumpf, Hose, Socken) der Wikimedia-Commons-Kategorie
// "2026–27 Bundesliga kits" zusammengesetzt und liegen lokal im Projekt,
// damit die Seite nicht bei jedem Duell 10 einzelne Bilder live von
// Wikimedia laden muss (das war zu langsam und führte zu unvollständig
// geladenen, falsch aussehenden Trikots).

const TEAMS = [
  { id: "bayern", name: "FC Bayern München", short: "Bayern", color: "#dc052d", image: "kits/bayern.png" },
  { id: "dortmund", name: "Borussia Dortmund", short: "BVB", color: "#fde100", image: "kits/dortmund.png" },
  { id: "leipzig", name: "RB Leipzig", short: "RB Leipzig", color: "#dd0741", image: "kits/leipzig.png" },
  { id: "stuttgart", name: "VfB Stuttgart", short: "Stuttgart", color: "#e32219", image: "kits/stuttgart.png" },
  { id: "hoffenheim", name: "TSG 1899 Hoffenheim", short: "Hoffenheim", color: "#1c63b7", image: "kits/hoffenheim.png" },
  { id: "leverkusen", name: "Bayer 04 Leverkusen", short: "Leverkusen", color: "#e32221", image: "kits/leverkusen.png" },
  { id: "freiburg", name: "SC Freiburg", short: "Freiburg", color: "#000000", image: "kits/freiburg.png" },
  { id: "frankfurt", name: "Eintracht Frankfurt", short: "Frankfurt", color: "#e1000f", image: "kits/frankfurt.png" },
  { id: "augsburg", name: "FC Augsburg", short: "Augsburg", color: "#ba3733", image: "kits/augsburg.png" },
  { id: "mainz", name: "1. FSV Mainz 05", short: "Mainz 05", color: "#c3141e", image: "kits/mainz.png" },
  { id: "unionberlin", name: "1. FC Union Berlin", short: "Union Berlin", color: "#eb1923", image: "kits/unionberlin.png" },
  { id: "gladbach", name: "Borussia Mönchengladbach", short: "Gladbach", color: "#000000", image: "kits/gladbach.png" },
  { id: "hsv", name: "Hamburger SV", short: "HSV", color: "#00285e", image: "kits/hsv.png" },
  { id: "koeln", name: "1. FC Köln", short: "Köln", color: "#ed1c24", image: "kits/koeln.png" },
  { id: "werder", name: "SV Werder Bremen", short: "Werder Bremen", color: "#1d9053", image: "kits/werder.png" },
  { id: "schalke", name: "FC Schalke 04", short: "Schalke 04", color: "#004b9b", image: "kits/schalke.png" },
  { id: "elversberg", name: "SV Elversberg", short: "Elversberg", color: "#003c78", image: "kits/elversberg.png" },
  { id: "paderborn", name: "SC Paderborn 07", short: "Paderborn 07", color: "#0a3c8c", image: "kits/paderborn.png" },
];
