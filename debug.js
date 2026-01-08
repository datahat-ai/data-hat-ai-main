import { pathToFileURL } from 'node:url';
import path from 'node:path';
const p = path.resolve('dist/server/entry-server.js');
console.log('Importing:', p);
try {
  await import(pathToFileURL(p));
  console.log('Success');
} catch (e) {
  console.error('Failed:');
  console.error(e);
}
