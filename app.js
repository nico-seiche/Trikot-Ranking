"use strict";

/**
 * Ranking-Engine: binäre Insertion Sort.
 * Jedes neue Trikot wird per Duell (Trikot vs. Trikot) an die richtige
 * Stelle in der bereits sortierten Liste einsortiert. Das ergibt eine
 * vollständige Rangliste in ca. n*log2(n) statt n*(n-1)/2 Duellen.
 */
function createRanker(items) {
  const order = shuffle(items.map((_, i) => i));
  const sorted = [order[0]];
  let cursor = 1;
  let lo = 0;
  let hi = sorted.length;
  let duelsSoFar = 0;

  function isDone() {
    return cursor >= order.length;
  }

  function currentDuel() {
    if (isDone()) return null;
    const candidate = order[cursor];
    const mid = (lo + hi) >> 1;
    const opponent = sorted[mid];
    return { candidate, opponent, mid };
  }

  // preferCandidate: true wenn das neu einzusortierende Trikot gewinnt
  function choose(preferCandidate) {
    const duel = currentDuel();
    if (!duel) return;
    duelsSoFar += 1;

    if (preferCandidate) {
      hi = duel.mid;
    } else {
      lo = duel.mid + 1;
    }

    if (lo >= hi) {
      sorted.splice(lo, 0, order[cursor]);
      cursor += 1;
      lo = 0;
      hi = sorted.length;
    }
  }

  function progress() {
    const total = estimateTotalDuels(items.length);
    return { done: Math.min(duelsSoFar, total), total };
  }

  return {
    isDone,
    currentDuel,
    choose,
    progress,
    getRanking() {
      return sorted.map((i) => items[i]);
    },
  };
}

function estimateTotalDuels(n) {
  if (n <= 1) return 0;
  let total = 0;
  for (let k = 2; k <= n; k++) total += Math.ceil(Math.log2(k));
  return total;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------------------

const screens = {
  start: document.getElementById("screen-start"),
  duel: document.getElementById("screen-duel"),
  result: document.getElementById("screen-result"),
};

const els = {
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),
  shareBtn: document.getElementById("share-btn"),
  progressFill: document.getElementById("progress-fill"),
  progressLabel: document.getElementById("progress-label"),
  cardA: document.getElementById("card-a"),
  cardB: document.getElementById("card-b"),
  resultList: document.getElementById("result-list"),
  teamCount: document.getElementById("team-count"),
};

let ranker = null;

function showScreen(name) {
  for (const key of Object.keys(screens)) {
    screens[key].classList.toggle("active", key === name);
  }
}

function renderKit(container, team) {
  container.innerHTML = "";
  container.dataset.teamId = team.id;
  container.style.setProperty("--accent", team.color);

  const stage = document.createElement("div");
  stage.className = "kit-stage";

  const img = document.createElement("img");
  img.className = "kit-image";
  img.src = team.image;
  img.alt = team.name;
  img.loading = "eager";
  stage.appendChild(img);

  const label = document.createElement("div");
  label.className = "kit-label";
  label.textContent = team.name;

  container.appendChild(stage);
  container.appendChild(label);
}

function renderDuel() {
  const duel = ranker.currentDuel();
  if (!duel) return;
  const candidateTeam = TEAMS[duel.candidate];
  const opponentTeam = TEAMS[duel.opponent];

  // Seiten zufällig vertauschen, damit nicht immer dieselbe Seite "neu" ist
  const swap = Math.random() < 0.5;
  const left = swap ? opponentTeam : candidateTeam;
  const right = swap ? candidateTeam : opponentTeam;

  renderKit(els.cardA, left);
  renderKit(els.cardB, right);

  const { done, total } = ranker.progress();
  const pct = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 100;
  els.progressFill.style.width = `${pct}%`;
  els.progressLabel.textContent = `Duell ${Math.min(done + 1, total)} von ca. ${total}`;
}

function pick(container) {
  const teamId = container.dataset.teamId;
  const duel = ranker.currentDuel();
  if (!duel) return;
  const candidateTeam = TEAMS[duel.candidate];
  const preferCandidate = teamId === candidateTeam.id;
  ranker.choose(preferCandidate);

  if (ranker.isDone()) {
    showResult();
  } else {
    renderDuel();
  }
}

function showResult() {
  const ranking = ranker.getRanking();
  els.resultList.innerHTML = "";
  ranking.forEach((team, idx) => {
    const li = document.createElement("li");
    li.className = "result-item";
    li.style.setProperty("--accent", team.color);

    const rank = document.createElement("div");
    rank.className = "result-rank";
    rank.textContent = String(idx + 1);

    const thumb = document.createElement("div");
    thumb.className = "result-thumb";
    renderKit(thumb, team);

    const name = document.createElement("div");
    name.className = "result-name";
    name.textContent = team.name;

    li.appendChild(rank);
    li.appendChild(thumb);
    li.appendChild(name);
    els.resultList.appendChild(li);
  });
  showScreen("result");
}

function startGame() {
  ranker = createRanker(TEAMS);
  renderDuel();
  showScreen("duel");
}

function shareResult() {
  const ranking = ranker.getRanking();
  const text = [
    "Mein Bundesliga Auswärtstrikot-Ranking 2026/27:",
    ...ranking.map((t, i) => `${i + 1}. ${t.name}`),
  ].join("\n");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        els.shareBtn.textContent = "In Zwischenablage kopiert!";
        setTimeout(() => {
          els.shareBtn.textContent = "Ranking kopieren";
        }, 2000);
      })
      .catch(() => {
        window.prompt("Ranking kopieren:", text);
      });
  } else {
    window.prompt("Ranking kopieren:", text);
  }
}

els.startBtn.addEventListener("click", startGame);
els.restartBtn.addEventListener("click", startGame);
els.shareBtn.addEventListener("click", shareResult);
els.cardA.addEventListener("click", () => pick(els.cardA));
els.cardB.addEventListener("click", () => pick(els.cardB));

document.addEventListener("keydown", (e) => {
  if (!screens.duel.classList.contains("active")) return;
  if (e.key === "ArrowLeft") pick(els.cardA);
  if (e.key === "ArrowRight") pick(els.cardB);
});

els.teamCount.textContent = String(TEAMS.length);
