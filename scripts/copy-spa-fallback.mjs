import { copyFileSync } from 'node:fs'
/**
 * GitHub Pages: unknown paths (e.g. /experience/foo) must serve the SPA shell.
 * Duplicate index.html as 404.html so the React app loads and BrowserRouter can match.
 */
copyFileSync('dist/index.html', 'dist/404.html')
