import { mkdir, writeFile } from 'node:fs/promises';

// Only GitHub Pages runs this script. Cloudflare builds the portfolio with Vite.
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Dionysis Giannaropoulos — Redirecting</title>
<link rel="canonical" href="https://dionysisg.com/">
<script>location.replace('https://dionysisg.com/' + location.search + location.hash);</script>
<noscript><meta http-equiv="refresh" content="0;url=https://dionysisg.com/"></noscript>
</head><body><p>My website has moved to <a href="https://dionysisg.com/">dionysisg.com</a>.</p></body></html>`;
await mkdir('dist-github-redirect', { recursive: true });
await Promise.all(['index.html', '404.html'].map(name => writeFile(`dist-github-redirect/${name}`, html)));
await writeFile('dist-github-redirect/.nojekyll', '');
