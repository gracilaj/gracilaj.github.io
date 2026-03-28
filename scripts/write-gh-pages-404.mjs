import { writeFileSync } from 'node:fs'

/**
 * User GitHub Pages site at domain root (e.g. gracilaj.github.io).
 * Turns /experience/foo into /#/experience/foo for HashRouter.
 */
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Redirecting...</title>
  <script>
    (function () {
      var p = window.location.pathname || '/';
      if (p === '/' || p === '') return;
      var inner = p.replace(/^\\/+/,'').replace(/\\/$/, '');
      window.location.replace(
        window.location.origin + '/#/' + inner + window.location.search
      );
    })();
  </script>
</head>
<body></body>
</html>
`

writeFileSync('dist/404.html', html, 'utf8')
