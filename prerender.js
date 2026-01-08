import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const manifest = JSON.parse(
  fs.readFileSync(toAbsolute('dist/static/.vite/ssr-manifest.json'), 'utf-8'),
);
const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');

// Mock Browser Environment for SSR
const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  length: 0,
  key: () => null,
};

if (!global.localStorage) global.localStorage = localStorageMock;
if (!global.window) global.window = {
  localStorage: localStorageMock,
  matchMedia: () => ({ 
    matches: false, 
    addListener: () => {}, 
    removeListener: () => {},
    addEventListener: () => {}, 
    removeEventListener: () => {},
  }),
  getComputedStyle: () => ({ getPropertyValue: () => '' }),
  addEventListener: () => {},
  removeEventListener: () => {},
};
if (!global.location) global.location = { href: '', origin: 'http://localhost' };

try {
  if (!global.navigator) {
    global.navigator = { userAgent: 'node' };
  }
} catch (e) {
  // navigator might be read-only in Node 22
  console.log('Could not mock navigator:', e.message);
}

// DOM Mock
class MockElement {
  constructor() {
    this.style = {};
    this.children = [];
    this.classList = { add:()=>{}, remove:()=>{}, contains:()=>false };
    this.tagName = 'DIV';
  }
  appendChild(child) { this.children.push(child); return child; }
  removeChild(child) { }
  setAttribute() {}
  getAttribute() { return null; }
  addEventListener() {}
  removeEventListener() {}
  contains() { return false; }
}

if (!global.document) {
  global.document = {
    createElement: () => new MockElement(),
    createTextNode: () => new MockElement(),
    getElementById: () => null,
    getElementsByTagName: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    head: new MockElement(),
    body: new MockElement(),
    cookie: '',
    documentElement: new MockElement(),
  };
}
// Radix UI needs this
global.HTMLElement = MockElement;
global.Element = MockElement;
global.Node = MockElement; 

const require = createRequire(import.meta.url);
const { render } = require(toAbsolute('dist/server/entry-server.cjs'));

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
});

// Helper to extract routes from sitemap.xml
// Since we can't easily import TS files here without ts-node/compilation
// We will grab them from the sitemap.xml which we know is accurate
const sitemap = fs.readFileSync(toAbsolute('public/sitemap.xml'), 'utf-8');
const routes = [];
const regex = /<loc>https:\/\/data-hat\.com(.*?)<\/loc>/g;
let match;
while ((match = regex.exec(sitemap)) !== null) {
  let route = match[1];
  if (route === '') route = '/';
  routes.push(route);
}

// Manually ensure /agents is there if sitemap isn't updated yet (it should be)
if (!routes.includes('/agents')) routes.push('/agents');

// Filter duplicates and process
const uniqueRoutes = [...new Set(routes)].map(r => r ? r.trim() : '').filter(r => r);

console.log(`Prerendering ${uniqueRoutes.length} routes...`);

for (const url of uniqueRoutes) {
  try {
    const { html, helmetContext } = render(url);
    const { helmet } = helmetContext;

    let appHtml = template.replace('<!--app-html-->', html);

    if (helmet) {
      const headTags = [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString()
      ].join('');
      appHtml = appHtml.replace('</head>', `${headTags}</head>`);
    }

    const filePath = `dist/static${url === '/' ? '/index.html' : `${url}/index.html`}`;
    const dir = path.dirname(filePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, appHtml);
    console.log(`Generated: ${filePath}`);
    
  } catch (e) {
    console.error(`Error prerendering ${url}:`, e);
  }
}

console.log('Detailed Prerendering Complete.');
process.exit(0);

