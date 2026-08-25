// Bundesliga 2026/27 – Auswärtstrikots
// Bild-Assets: Wikimedia Commons ("2026–27 Bundesliga kits" Kategorie),
// zusammengesetzt aus den einzelnen Kit-Template-Teilen (Ärmel, Rumpf, Hose, Socken).
//
// Wichtig: Es werden die direkten upload.wikimedia.org-CDN-URLs verwendet
// (nicht Special:FilePath) – Special:FilePath läuft über die MediaWiki-App
// und wird bei vielen parallelen Bildanfragen (wie hier: 5 Layer x 2 Karten
// pro Duell) sehr schnell gedrosselt/geblockt. Der CDN-Pfad ist der reine
// Datei-Host, den Wikipedia selbst für eingebettete Bilder nutzt.

const CDN = "https://upload.wikimedia.org/wikipedia/commons";

function kit(parts) {
  return {
    leftArm: `${CDN}/${parts.leftArm}`,
    body: `${CDN}/${parts.body}`,
    rightArm: `${CDN}/${parts.rightArm}`,
    shorts: `${CDN}/${parts.shorts}`,
    socks: `${CDN}/${parts.socks}`,
  };
}

const TEAMS = [
  {
    id: "bayern",
    name: "FC Bayern München",
    short: "Bayern",
    color: "#dc052d",
    kit: kit({
      leftArm: "5/55/Kit_left_arm_bayern2627a.png",
      body: "3/3f/Kit_body_bayern2627a.png",
      rightArm: "c/c9/Kit_right_arm_bayern2627a.png",
      shorts: "8/8b/Kit_shorts_bayern2627a.png",
      socks: "d/d7/Kit_socks_bayern2627al.png",
    }),
  },
  {
    id: "dortmund",
    name: "Borussia Dortmund",
    short: "BVB",
    color: "#fde100",
    kit: kit({
      leftArm: "2/27/Kit_left_arm_bvb2627a.png",
      body: "3/37/Kit_body_bvb2627a.png",
      rightArm: "7/70/Kit_right_arm_bvb2627a.png",
      shorts: "5/55/Kit_shorts_bvb2627a.png",
      socks: "4/43/Kit_socks_bvb2627al.png",
    }),
  },
  {
    id: "leipzig",
    name: "RB Leipzig",
    short: "RB Leipzig",
    color: "#dd0741",
    kit: kit({
      leftArm: "e/e6/Kit_left_arm_rbl2627a.png",
      body: "4/4a/Kit_body_rbl2627a.png",
      rightArm: "b/b4/Kit_right_arm_rbl2627a.png",
      shorts: "a/a2/Kit_shorts_rbl2627a.png",
      socks: "a/a0/Kit_socks_rbl2627al.png",
    }),
  },
  {
    id: "stuttgart",
    name: "VfB Stuttgart",
    short: "Stuttgart",
    color: "#e32219",
    kit: kit({
      leftArm: "a/a2/Kit_left_arm_stuttgart2627a.png",
      body: "8/81/Kit_body_stuttgart2627a.png",
      rightArm: "4/48/Kit_right_arm_stuttgart2627a.png",
      shorts: "2/21/Kit_shorts_stuttgart2627a.png",
      socks: "6/6c/Kit_socks_stuttgart2627al.png",
    }),
  },
  {
    id: "hoffenheim",
    name: "TSG 1899 Hoffenheim",
    short: "Hoffenheim",
    color: "#1c63b7",
    kit: kit({
      leftArm: "2/23/Kit_left_arm_hoffenheim2627a.png",
      body: "e/e5/Kit_body_hoffenheim2627a.png",
      rightArm: "6/62/Kit_right_arm_hoffenheim2627a.png",
      shorts: "8/8c/Kit_shorts_hoffenheim2627a.png",
      socks: "4/41/Kit_socks_hoffenheim2627al.png",
    }),
  },
  {
    id: "leverkusen",
    name: "Bayer 04 Leverkusen",
    short: "Leverkusen",
    color: "#e32221",
    kit: kit({
      leftArm: "1/1d/Kit_left_arm_bayer2627a.png",
      body: "2/20/Kit_body_bayer2627a.png",
      rightArm: "f/f8/Kit_right_arm_bayer2627a.png",
      shorts: "6/6f/Kit_shorts.png",
      socks: "1/13/Kit_socks_classicfootball.png",
    }),
  },
  {
    id: "freiburg",
    name: "SC Freiburg",
    short: "Freiburg",
    color: "#000000",
    kit: kit({
      leftArm: "b/bf/Kit_left_arm_freiburg2627a.png",
      body: "a/ab/Kit_body_freiburg2627a.png",
      rightArm: "5/5c/Kit_right_arm_freiburg2627a.png",
      shorts: "6/6f/Kit_shorts.png",
      socks: "a/a1/Kit_socks_nikestrike1wr.png",
    }),
  },
  {
    id: "frankfurt",
    name: "Eintracht Frankfurt",
    short: "Frankfurt",
    color: "#e1000f",
    kit: kit({
      leftArm: "8/88/Kit_left_arm_frankfurt2627a.png",
      body: "7/7b/Kit_body_frankfurt2627a.png",
      rightArm: "1/18/Kit_right_arm_frankfurt2627a.png",
      shorts: "7/71/Kit_shorts_arg26A.png",
      socks: "c/c3/Kit_socks_adidasblackl.png",
    }),
  },
  {
    id: "augsburg",
    name: "FC Augsburg",
    short: "Augsburg",
    color: "#ba3733",
    kit: kit({
      leftArm: "5/5c/Kit_left_arm_augsburg2627a.png",
      body: "6/6a/Kit_body_augsburg2627a.png",
      rightArm: "c/c4/Kit_right_arm_augsburg2627a.png",
      shorts: "6/6f/Kit_shorts.png",
      socks: "f/fd/Kit_socks_augsburg2627al.png",
    }),
  },
  {
    id: "mainz",
    name: "1. FSV Mainz 05",
    short: "Mainz 05",
    color: "#c3141e",
    kit: kit({
      leftArm: "8/86/Kit_left_arm_mainz2627a.png",
      body: "2/2f/Kit_body_mainz2627a.png",
      rightArm: "3/3b/Kit_right_arm_mainz2627a.png",
      shorts: "7/71/Kit_shorts_mainz2627a.png",
      socks: "9/93/Kit_socks_redtopl.png",
    }),
  },
  {
    id: "unionberlin",
    name: "1. FC Union Berlin",
    short: "Union Berlin",
    color: "#eb1923",
    kit: kit({
      leftArm: "d/d4/Kit_left_arm_unionberlin2627a.png",
      body: "e/ef/Kit_body_unionberlin2627a.png",
      rightArm: "6/62/Kit_right_arm_unionberlin2627a.png",
      shorts: "b/b3/Kit_shorts_unionberlin2627a.png",
      socks: "c/c1/Kit_socks_unionberlin2627al.png",
    }),
  },
  {
    id: "gladbach",
    name: "Borussia Mönchengladbach",
    short: "Gladbach",
    color: "#000000",
    kit: kit({
      leftArm: "b/b6/Kit_left_arm_gladbach2627a.png",
      body: "e/e8/Kit_body_gladbach2627a.png",
      rightArm: "b/be/Kit_right_arm_gladbach2627a.png",
      shorts: "0/00/Kit_shorts_gladbach2627a.png",
      socks: "1/13/Kit_socks_classicfootball.png",
    }),
  },
  {
    id: "hsv",
    name: "Hamburger SV",
    short: "HSV",
    color: "#00285e",
    kit: kit({
      leftArm: "7/73/Kit_left_arm_hsv2627a.png",
      body: "c/c7/Kit_body_hsv2627a.png",
      rightArm: "7/7e/Kit_right_arm_hsv2627a.png",
      shorts: "7/71/Kit_shorts_arg26A.png",
      socks: "f/f6/Kit_socks_hsv2526a.png",
    }),
  },
  {
    id: "koeln",
    name: "1. FC Köln",
    short: "Köln",
    color: "#ed1c24",
    kit: kit({
      leftArm: "b/bc/Kit_left_arm_koeln2627a.png",
      body: "8/83/Kit_body_koeln2627a.png",
      rightArm: "0/08/Kit_right_arm_koeln2627a.png",
      shorts: "3/3d/Kit_shorts_koeln2627a.png",
      socks: "5/59/Kit_socks_adidaswhitel.png",
    }),
  },
  {
    id: "werder",
    name: "SV Werder Bremen",
    short: "Werder Bremen",
    color: "#1d9053",
    kit: kit({
      leftArm: "8/81/Kit_left_arm_werder2627a.png",
      body: "0/08/Kit_body_werder2627a.png",
      rightArm: "b/b6/Kit_right_arm_werder2627a.png",
      shorts: "c/cc/Kit_shorts_werder2627a.png",
      socks: "6/69/Kit_socks_werder2627al.png",
    }),
  },
  {
    id: "schalke",
    name: "FC Schalke 04",
    short: "Schalke 04",
    color: "#004b9b",
    kit: kit({
      leftArm: "d/d2/Kit_left_arm_schalke2627a.png",
      body: "3/3c/Kit_body_schalke2627a.png",
      rightArm: "c/cf/Kit_right_arm_schalke2627a.png",
      shorts: "c/c3/Kit_shorts_schalke2627a.png",
      socks: "a/a6/Kit_socks_adidasonwhitel.png",
    }),
  },
  {
    id: "elversberg",
    name: "SV Elversberg",
    short: "Elversberg",
    color: "#003c78",
    kit: kit({
      leftArm: "c/c7/Kit_left_arm_elversberg2627a.png",
      body: "a/ad/Kit_body_elversberg2627a.png",
      rightArm: "c/c1/Kit_right_arm_elversberg2627a.png",
      shorts: "6/6f/Kit_shorts.png",
      socks: "1/13/Kit_socks_classicfootball.png",
    }),
  },
  {
    id: "paderborn",
    name: "SC Paderborn 07",
    short: "Paderborn 07",
    color: "#0a3c8c",
    kit: kit({
      leftArm: "1/1c/Kit_left_arm_paderborn2627a.png",
      body: "1/13/Kit_body_paderborn2627a.png",
      rightArm: "8/84/Kit_right_arm_paderborn2627a.png",
      shorts: "0/0c/Kit_shorts_paderborn2627a.png",
      socks: "1/13/Kit_socks_classicfootball.png",
    }),
  },
];
