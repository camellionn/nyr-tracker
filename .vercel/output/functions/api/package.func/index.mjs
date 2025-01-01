import { createRequire as VPV_createRequire } from 'node:module';
import { fileURLToPath as VPV_fileURLToPath } from 'node:url';
import { dirname as VPV_dirname } from 'node:path';
const require = VPV_createRequire(import.meta.url);
const __filename = VPV_fileURLToPath(import.meta.url);
const __dirname = VPV_dirname(__filename);

// api/package.json
var name = 'backend';
var version = '1.0.0';
var main = 'index.js';
var scripts = {
  test: 'echo "Error: no test specified" && exit 1',
  start: 'node dist/server.js',
  dev: 'ts-node ./server.ts',
  build: 'tsc',
};
var keywords = [];
var author = '';
var license = 'ISC';
var description = '';
var dependencies = {
  '@types/cors': '^2.8.17',
  '@types/express': '^5.0.0',
  '@types/mongoose': '^5.11.96',
  'body-parser': '^1.20.3',
  cors: '^2.8.5',
  dotenv: '^16.4.7',
  express: '^4.21.2',
  mongodb: '^6.12.0',
  mongoose: '^8.9.2',
  'node-cron': '^3.0.3',
  nodemailer: '^6.9.16',
};
var devDependencies = {
  '@types/node': '^22.10.2',
  'ts-node': '^10.9.2',
  typescript: '^5.7.2',
};
var package_default = {
  name,
  version,
  main,
  scripts,
  keywords,
  author,
  license,
  description,
  dependencies,
  devDependencies,
};
export {
  author,
  package_default as default,
  dependencies,
  description,
  devDependencies,
  keywords,
  license,
  main,
  name,
  scripts,
  version,
};
