BROTBOX – iPhone-Web-App (PWA)

INHALT
- index.html: die App
- manifest.json: Installations-/App-Metadaten
- sw.js: Offline-Caching-Grundlage
- icon-192.png / icon-512.png: App-Icons

WICHTIG
Für „Zum Home-Bildschirm“ als installierbare Web-App muss diese Website über HTTPS veröffentlicht sein.
Die Dateien sind vorbereitet, aber noch NICHT online gehostet. Eine lokale HTML-Datei reicht für die Installation nicht.

EINFACHER WEG: GitHub Pages
1. Auf github.com einloggen und ein neues Repository anlegen (z. B. „brotbox“).
2. Diese Dateien aus dem ZIP in das Repository hochladen.
3. In Settings > Pages „Deploy from a branch“ wählen, Branch „main“, Ordner „/ (root)“ speichern.
4. Die erzeugte HTTPS-Adresse auf dem iPhone in Safari öffnen.
5. Teilen > Zum Home-Bildschirm > „Als Web-App öffnen“ aktivieren > Hinzufügen.

Die App speichert Häkchen aktuell lokal im jeweiligen Browser/Endgerät. Es gibt noch keine Synchronisierung zwischen Mac und iPhone.
