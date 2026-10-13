import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execSync } from 'node:child_process';
import * as esbuild from 'esbuild';

const ROOT_DIR = process.cwd();

// a) Minify src/app.js with esbuild (--minify --legal-comments=none --target=es2020)
console.log('Building and minifying src/app.js...');
const jsBuild = await esbuild.build({
  entryPoints: [path.join(ROOT_DIR, 'src/app.js')],
  minify: true,
  legalComments: 'none',
  target: 'es2020',
  write: false,
});
const minifiedJs = jsBuild.outputFiles[0].text;
const jsHash = crypto.createHash('sha256').update(minifiedJs).digest('hex').slice(0, 8);
const jsFileName = `app-${jsHash}.js`;

// b) Build CSS with Tailwind
console.log('Compiling CSS with Tailwind...');
const tempCssPath = path.join(ROOT_DIR, 'styles.temp.css');
execSync(`npx tailwindcss -i src/styles.css -o "${tempCssPath}" --minify`, {
  cwd: ROOT_DIR,
  stdio: 'pipe',
});
const minifiedCss = fs.readFileSync(tempCssPath, 'utf8');
if (fs.existsSync(tempCssPath)) {
  fs.unlinkSync(tempCssPath);
}
const cssHash = crypto.createHash('sha256').update(minifiedCss).digest('hex').slice(0, 8);
const cssFileName = `styles-${cssHash}.css`;

// c) Save to assets/ and d) delete older assets/app-*.js and assets/styles-*.css
const assetsDir = path.join(ROOT_DIR, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const existingAssets = fs.readdirSync(assetsDir);
for (const file of existingAssets) {
  if (
    (file.startsWith('app-') && file.endsWith('.js') && file !== jsFileName) ||
    (file.startsWith('styles-') && file.endsWith('.css') && file !== cssFileName)
  ) {
    fs.unlinkSync(path.join(assetsDir, file));
    console.log(`Deleted older asset: ${file}`);
  }
}

fs.writeFileSync(path.join(assetsDir, jsFileName), minifiedJs, 'utf8');
fs.writeFileSync(path.join(assetsDir, cssFileName), minifiedCss, 'utf8');
console.log(`Saved: assets/${jsFileName}`);
console.log(`Saved: assets/${cssFileName}`);

// e) Update <script src> and <link href> in ALL 6 HTML pages
const htmlFiles = [
  'index.html',
  'rooms/index.html',
  'dining/index.html',
  'bar/index.html',
  'banquets/index.html',
  'gallery/index.html',
];

for (const relPath of htmlFiles) {
  const filePath = path.join(ROOT_DIR, relPath);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Tailwind CDN script with compiled stylesheet if still present
  if (content.includes('https://cdn.tailwindcss.com')) {
    content = content.replace(
      /<script\s+src="https:\/\/cdn\.tailwindcss\.com"><\/script>/g,
      `<link rel="stylesheet" href="/assets/${cssFileName}" />`
    );
  }

  // Remove inline tailwind.config block if still present
  content = content.replace(
    /<script>\s*tailwind\.config\s*=\s*\{[\s\S]*?\}\s*;\s*<\/script>\s*/g,
    ''
  );

  // Update existing styles link tag
  content = content.replace(
    /\/assets\/styles-[0-9a-f]{8}\.css/g,
    `/assets/${cssFileName}`
  );

  // Update existing app script tag (or previous index bundle)
  content = content.replace(
    /\/assets\/(?:app-[0-9a-f]{8}|index-[A-Za-z0-9_-]+)\.js/g,
    `/assets/${jsFileName}`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated HTML: ${relPath}`);
}

console.log('Build complete!');
