import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Since this is in scratch/, we need to go up one level to reach the project root
const ROOT_DIR = path.join(__dirname, '..');
const BUILD_DIR = path.join(ROOT_DIR, 'build');
const PORT = 3333;

const routes = [
  '/de', '/tr', '/en',
  '/de/ueber-uns', '/tr/hakkimizda', '/en/about-us',
  '/de/leistungen', '/tr/hizmetler', '/en/services',
  '/de/leistungen/familienrecht', '/tr/hizmetler/aile-hukuku', '/en/services/family-law',
  '/de/leistungen/vollmacht-apostille', '/tr/hizmetler/vekaletname-ve-apostil', '/en/services/power-of-attorney-apostille',
  '/de/blog', '/tr/blog', '/en/blog',
  '/en/blog/inheritance-turkey-germany-guide',
  '/en/blog/apply-eu-blue-card-turkish-professionals',
  '/en/blog/criminal-proceedings-turkey-arrest-warrant-defense',
  '/en/blog/germany-divorce-recognition-turkey-tanima-tenfiz',
];

async function prerender() {
  console.log('Starting local server for SSG...');
  const server = spawn('npx', ['serve', '-s', 'build', '-p', PORT.toString()], { cwd: ROOT_DIR });
  
  server.stdout.on('data', (data) => console.log(`[server] ${data}`));
  server.stderr.on('data', (data) => console.error(`[server-error] ${data}`));

  await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for server to start

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Prerendering ${url}...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for our custom signal
      try {
        await page.waitForSelector('#prerender-ready', { timeout: 10000 });
      } catch (e) {
        console.warn(`[WARN] Timeout waiting for #prerender-ready on ${route}.`);
      }

      const html = await page.content();
      
      // Handle the root route specially
      const relativePath = route === '/' || route === '' ? 'index.html' : path.join(route, 'index.html');
      const filePath = path.join(BUILD_DIR, relativePath);
      const dirPath = path.dirname(filePath);

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(filePath, html);
      console.log(`[SUCCESS] Saved ${filePath}`);
    } catch (err) {
      console.error(`[ERROR] Failed to prerender ${route}: ${err.message}`);
    }
  }

  console.log('Finished all routes. Closing browser and server...');
  await browser.close();
  server.kill();
  process.exit(0);
}

prerender().catch(err => {
  console.error('Fatal error during prerender:', err);
  process.exit(1);
});
