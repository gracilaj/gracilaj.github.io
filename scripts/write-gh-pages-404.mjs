import { writeFileSync } from 'node:fs'

/** Must match vite.config.js GITHUB_REPO */
const REPO = 'portfolio'

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Redirecting...</title>
  <script>
    (function () {
      var base = '/${REPO}';
      var p = window.location.pathname;
      if (!p.startsWith(base)) return;
      var rest = p.slice(base.length);
      if (!rest || rest === '/') rest = '/';
      else if (!rest.startsWith('/')) rest = '/' + rest;
      var hash = '#' + (rest === '/' ? '/' : rest);
      window.location.replace(
        window.location.origin + base + '/' + hash + window.location.search
      );
    })();
  </script>
</head>
<body></body>
</html>
`

writeFileSync('dist/404.html', html, 'utf8')
