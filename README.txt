BROTBOX SYNC SETUP

GitHub repository root must contain:
- index.html
- netlify.toml
- package.json
- netlify/functions/brotbox.mjs
- manifest.json, sw.js and icons

Netlify:
1. Set environment variable BROTBOX_PASSWORD (Secret values enabled; Production value is enough).
2. Deploy project.
3. Open the published Netlify URL in Safari. The page should prompt for the shared password.
4. Check status says synchronized. Toggle one shopping/prep checkbox and open the same URL on another device; the state should match.

This package uses Netlify Blobs for shared data. No separate database setup is needed.
