# Nexus — Local dev instructions


## Quick start
1. Place the files in a folder (index.html, styles.css, app.js, manifest.json, sw.js).
2. For local testing run a static server (recommended):
- `python -m http.server 8000` (then open http://localhost:8000)
- or use `npx serve .` or any local static server.


## OAuth / Auth notes
- For production you should integrate either **Firebase Auth** (recommended for multi-provider OAuth) or implement server-side OAuth flows.
- For Google/Microsoft/Apple: obtain client IDs and configure redirect URIs to `http://localhost:8000` (or your production domain).
- If you want, I can replace the placeholders with a Firebase Auth integration (web SDK) and show the exact setup steps.


## PWA / Local app
- The `manifest.json` + `sw.js` make the site installable on most phones and desktop browsers.
- Add icons under `/icons/` to match sizes in the manifest.


## Next steps I can do forfirebase --versionyou
- Hook up Firebase Auth (Google / Microsoft via SAML / Apple) and show code.
- Create a backend API for posts (Node/Express), or wire up Firebase Firestore.
- Build a React or Svelte frontend and make this a full SPA.# NEXUS
