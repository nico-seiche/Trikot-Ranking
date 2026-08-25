# Trikot-Ranking

Ein kleines Browser-Spiel: Dir werden immer zwei Bundesliga-Auswärtstrikots
der Saison 2026/27 gegenübergestellt, du wählst dein Lieblingstrikot – am
Ende bekommst du eine vollständige Rangliste aller 18 Vereine.

## Starten

Kein Build-Schritt nötig, reines HTML/CSS/JS. Am einfachsten mit einem
lokalen Webserver öffnen (wegen der Bildanfragen an Wikimedia):

```bash
npx http-server . -p 8080
# oder
python3 -m http.server 8080
```

Danach `http://localhost:8080` im Browser öffnen. Du kannst `index.html`
auch direkt per Doppelklick öffnen, das funktioniert in den meisten
Browsern ebenfalls.

## Funktionsweise

- Die 18 Bundesliga-Vereine der Saison 2026/27 stehen in `data.js`.
- `app.js` sortiert die Trikots per **binärer Insertion Sort**: Jedes neue
  Trikot wird per Duell an die richtige Stelle in der bereits sortierten
  Liste einsortiert. Das ergibt eine exakte Rangliste in ca. `n·log₂(n)`
  statt `n·(n-1)/2` Duellen (bei 18 Trikots ca. 50–65 statt 153 Duelle).
- Jedes Spiel startet mit einer neu gemischten Reihenfolge, damit sich das
  Spiel bei jedem Durchlauf anders anfühlt.

## Bildquelle

Die Trikot-Grafiken werden aus den einzelnen Kit-Template-Teilen (Ärmel,
Rumpf, Hose, Socken) der [Wikimedia-Commons-Kategorie „2026–27 Bundesliga
kits“](https://commons.wikimedia.org/wiki/2026%E2%80%9327_Bundesliga_kits)
zusammengesetzt und per CSS überlagert. Diese Grafiken sind zur freien
Weiterverwendung auf Commons gehostet.

Dies ist ein inoffizielles Fan-Projekt ohne Verbindung zur DFL oder den
beteiligten Vereinen.
