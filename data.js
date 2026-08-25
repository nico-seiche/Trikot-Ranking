// Bundesliga 2026/27 – Auswärtstrikots
// Bild-Assets: Wikimedia Commons ("2026–27 Bundesliga kits" Kategorie),
// zusammengesetzt aus den einzelnen Kit-Template-Teilen (Ärmel, Rumpf, Hose, Socken).

const COMMONS_BASE = "https://commons.wikimedia.org/wiki/Special:FilePath/";

function kit(code, opts = {}) {
  const {
    shorts = `Kit_shorts_${code}.png`,
    socks = `Kit_socks_${code}l.png`,
  } = opts;
  return {
    leftArm: `${COMMONS_BASE}Kit_left_arm_${code}.png`,
    body: `${COMMONS_BASE}Kit_body_${code}.png`,
    rightArm: `${COMMONS_BASE}Kit_right_arm_${code}.png`,
    shorts: `${COMMONS_BASE}${shorts}`,
    socks: `${COMMONS_BASE}${socks}`,
  };
}

const TEAMS = [
  {
    id: "bayern",
    name: "FC Bayern München",
    short: "Bayern",
    color: "#dc052d",
    kit: kit("bayern2627a"),
  },
  {
    id: "dortmund",
    name: "Borussia Dortmund",
    short: "BVB",
    color: "#fde100",
    kit: kit("bvb2627a"),
  },
  {
    id: "leipzig",
    name: "RB Leipzig",
    short: "RB Leipzig",
    color: "#dd0741",
    kit: kit("rbl2627a"),
  },
  {
    id: "stuttgart",
    name: "VfB Stuttgart",
    short: "Stuttgart",
    color: "#e32219",
    kit: kit("stuttgart2627a"),
  },
  {
    id: "hoffenheim",
    name: "TSG 1899 Hoffenheim",
    short: "Hoffenheim",
    color: "#1c63b7",
    kit: kit("hoffenheim2627a"),
  },
  {
    id: "leverkusen",
    name: "Bayer 04 Leverkusen",
    short: "Leverkusen",
    color: "#e32221",
    kit: kit("bayer2627a", {
      shorts: "Kit_shorts.png",
      socks: "Kit_socks_classicfootball.png",
    }),
  },
  {
    id: "freiburg",
    name: "SC Freiburg",
    short: "Freiburg",
    color: "#000000",
    kit: kit("freiburg2627a", {
      shorts: "Kit_shorts.png",
      socks: "Kit_socks_nikestrike1wr.png",
    }),
  },
  {
    id: "frankfurt",
    name: "Eintracht Frankfurt",
    short: "Frankfurt",
    color: "#e1000f",
    kit: kit("frankfurt2627a", {
      shorts: "Kit_shorts_arg26A.png",
      socks: "Kit_socks_adidasblackl.png",
    }),
  },
  {
    id: "augsburg",
    name: "FC Augsburg",
    short: "Augsburg",
    color: "#ba3733",
    kit: kit("augsburg2627a", {
      shorts: "Kit_shorts.png",
      socks: "Kit_socks_augsburg2627al.png",
    }),
  },
  {
    id: "mainz",
    name: "1. FSV Mainz 05",
    short: "Mainz 05",
    color: "#c3141e",
    kit: kit("mainz2627a", { socks: "Kit_socks_redtopl.png" }),
  },
  {
    id: "unionberlin",
    name: "1. FC Union Berlin",
    short: "Union Berlin",
    color: "#eb1923",
    kit: kit("unionberlin2627a"),
  },
  {
    id: "gladbach",
    name: "Borussia Mönchengladbach",
    short: "Gladbach",
    color: "#000000",
    kit: kit("gladbach2627a", { socks: "Kit_socks_classicfootball.png" }),
  },
  {
    id: "hsv",
    name: "Hamburger SV",
    short: "HSV",
    color: "#00285e",
    kit: kit("hsv2627a", {
      shorts: "Kit_shorts_arg26A.png",
      socks: "Kit_socks_hsv2526a.png",
    }),
  },
  {
    id: "koeln",
    name: "1. FC Köln",
    short: "Köln",
    color: "#ed1c24",
    kit: kit("koeln2627a", { socks: "Kit_socks_adidaswhitel.png" }),
  },
  {
    id: "werder",
    name: "SV Werder Bremen",
    short: "Werder Bremen",
    color: "#1d9053",
    kit: kit("werder2627a"),
  },
  {
    id: "schalke",
    name: "FC Schalke 04",
    short: "Schalke 04",
    color: "#004b9b",
    kit: kit("schalke2627a", { socks: "Kit_socks_adidasonwhitel.png" }),
  },
  {
    id: "elversberg",
    name: "SV Elversberg",
    short: "Elversberg",
    color: "#003c78",
    kit: kit("elversberg2627a", {
      shorts: "Kit_shorts.png",
      socks: "Kit_socks_classicfootball.png",
    }),
  },
  {
    id: "paderborn",
    name: "SC Paderborn 07",
    short: "Paderborn 07",
    color: "#0a3c8c",
    kit: kit("paderborn2627a", { socks: "Kit_socks_classicfootball.png" }),
  },
];
