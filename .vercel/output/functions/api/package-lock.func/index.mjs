import { createRequire as VPV_createRequire } from 'node:module';
import { fileURLToPath as VPV_fileURLToPath } from 'node:url';
import { dirname as VPV_dirname } from 'node:path';
const require = VPV_createRequire(import.meta.url);
const __filename = VPV_fileURLToPath(import.meta.url);
const __dirname = VPV_dirname(__filename);

// api/package-lock.json
var name = 'backend';
var version = '1.0.0';
var lockfileVersion = 3;
var requires = true;
var packages = {
  '': {
    name: 'backend',
    version: '1.0.0',
    license: 'ISC',
    dependencies: {
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
    },
    devDependencies: {
      '@types/node': '^22.10.2',
      'ts-node': '^10.9.2',
      typescript: '^5.7.2',
    },
  },
  'node_modules/@cspotcode/source-map-support': {
    version: '0.8.1',
    resolved:
      'https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz',
    integrity:
      'sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==',
    dev: true,
    license: 'MIT',
    dependencies: {
      '@jridgewell/trace-mapping': '0.3.9',
    },
    engines: {
      node: '>=12',
    },
  },
  'node_modules/@jridgewell/resolve-uri': {
    version: '3.1.2',
    resolved:
      'https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz',
    integrity:
      'sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==',
    dev: true,
    license: 'MIT',
    engines: {
      node: '>=6.0.0',
    },
  },
  'node_modules/@jridgewell/sourcemap-codec': {
    version: '1.5.0',
    resolved:
      'https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz',
    integrity:
      'sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/@jridgewell/trace-mapping': {
    version: '0.3.9',
    resolved:
      'https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz',
    integrity:
      'sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==',
    dev: true,
    license: 'MIT',
    dependencies: {
      '@jridgewell/resolve-uri': '^3.0.3',
      '@jridgewell/sourcemap-codec': '^1.4.10',
    },
  },
  'node_modules/@mongodb-js/saslprep': {
    version: '1.1.9',
    resolved:
      'https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.1.9.tgz',
    integrity:
      'sha512-tVkljjeEaAhCqTzajSdgbQ6gE6f3oneVwa3iXR6csiEwXXOFsiC6Uh9iAjAhXPtqa/XMDHWjjeNH/77m/Yq2dw==',
    license: 'MIT',
    dependencies: {
      'sparse-bitfield': '^3.0.3',
    },
  },
  'node_modules/@tsconfig/node10': {
    version: '1.0.11',
    resolved: 'https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz',
    integrity:
      'sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/@tsconfig/node12': {
    version: '1.0.11',
    resolved: 'https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz',
    integrity:
      'sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/@tsconfig/node14': {
    version: '1.0.3',
    resolved: 'https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz',
    integrity:
      'sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/@tsconfig/node16': {
    version: '1.0.4',
    resolved: 'https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz',
    integrity:
      'sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/@types/body-parser': {
    version: '1.19.5',
    resolved:
      'https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.5.tgz',
    integrity:
      'sha512-fB3Zu92ucau0iQ0JMCFQE7b/dv8Ot07NI3KaZIkIUNXq82k4eBAqUaneXfleGY9JWskeS9y+u0nXMyspcuQrCg==',
    license: 'MIT',
    dependencies: {
      '@types/connect': '*',
      '@types/node': '*',
    },
  },
  'node_modules/@types/connect': {
    version: '3.4.38',
    resolved: 'https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz',
    integrity:
      'sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==',
    license: 'MIT',
    dependencies: {
      '@types/node': '*',
    },
  },
  'node_modules/@types/cors': {
    version: '2.8.17',
    resolved: 'https://registry.npmjs.org/@types/cors/-/cors-2.8.17.tgz',
    integrity:
      'sha512-8CGDvrBj1zgo2qE+oS3pOCyYNqCPryMWY2bGfwA0dcfopWGgxs+78df0Rs3rc9THP4JkOhLsAa+15VdpAqkcUA==',
    license: 'MIT',
    dependencies: {
      '@types/node': '*',
    },
  },
  'node_modules/@types/express': {
    version: '5.0.0',
    resolved: 'https://registry.npmjs.org/@types/express/-/express-5.0.0.tgz',
    integrity:
      'sha512-DvZriSMehGHL1ZNLzi6MidnsDhUZM/x2pRdDIKdwbUNqqwHxMlRdkxtn6/EPKyqKpHqTl/4nRZsRNLpZxZRpPQ==',
    license: 'MIT',
    dependencies: {
      '@types/body-parser': '*',
      '@types/express-serve-static-core': '^5.0.0',
      '@types/qs': '*',
      '@types/serve-static': '*',
    },
  },
  'node_modules/@types/express-serve-static-core': {
    version: '5.0.2',
    resolved:
      'https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.0.2.tgz',
    integrity:
      'sha512-vluaspfvWEtE4vcSDlKRNer52DvOGrB2xv6diXy6UKyKW0lqZiWHGNApSyxOv+8DE5Z27IzVvE7hNkxg7EXIcg==',
    license: 'MIT',
    dependencies: {
      '@types/node': '*',
      '@types/qs': '*',
      '@types/range-parser': '*',
      '@types/send': '*',
    },
  },
  'node_modules/@types/http-errors': {
    version: '2.0.4',
    resolved:
      'https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.4.tgz',
    integrity:
      'sha512-D0CFMMtydbJAegzOyHjtiKPLlvnm3iTZyZRSZoLq2mRhDdmLfIWOCYPfQJ4cu2erKghU++QvjcUjp/5h7hESpA==',
    license: 'MIT',
  },
  'node_modules/@types/mime': {
    version: '1.3.5',
    resolved: 'https://registry.npmjs.org/@types/mime/-/mime-1.3.5.tgz',
    integrity:
      'sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w==',
    license: 'MIT',
  },
  'node_modules/@types/mongoose': {
    version: '5.11.96',
    resolved:
      'https://registry.npmjs.org/@types/mongoose/-/mongoose-5.11.96.tgz',
    integrity:
      'sha512-keiY22ljJtXyM7osgScmZOHV6eL5VFUD5tQumlu+hjS++HND5nM8jNEdj5CSWfKIJpVwQfPuwQ2SfBqUnCAVRw==',
    license: 'MIT',
    dependencies: {
      mongoose: '*',
    },
  },
  'node_modules/@types/node': {
    version: '22.10.2',
    resolved: 'https://registry.npmjs.org/@types/node/-/node-22.10.2.tgz',
    integrity:
      'sha512-Xxr6BBRCAOQixvonOye19wnzyDiUtTeqldOOmj3CkeblonbccA12PFwlufvRdrpjXxqnmUaeiU5EOA+7s5diUQ==',
    license: 'MIT',
    dependencies: {
      'undici-types': '~6.20.0',
    },
  },
  'node_modules/@types/qs': {
    version: '6.9.17',
    resolved: 'https://registry.npmjs.org/@types/qs/-/qs-6.9.17.tgz',
    integrity:
      'sha512-rX4/bPcfmvxHDv0XjfJELTTr+iB+tn032nPILqHm5wbthUUUuVtNGGqzhya9XUxjTP8Fpr0qYgSZZKxGY++svQ==',
    license: 'MIT',
  },
  'node_modules/@types/range-parser': {
    version: '1.2.7',
    resolved:
      'https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz',
    integrity:
      'sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==',
    license: 'MIT',
  },
  'node_modules/@types/send': {
    version: '0.17.4',
    resolved: 'https://registry.npmjs.org/@types/send/-/send-0.17.4.tgz',
    integrity:
      'sha512-x2EM6TJOybec7c52BX0ZspPodMsQUd5L6PRwOunVyVUhXiBSKf3AezDL8Dgvgt5o0UfKNfuA0eMLr2wLT4AiBA==',
    license: 'MIT',
    dependencies: {
      '@types/mime': '^1',
      '@types/node': '*',
    },
  },
  'node_modules/@types/serve-static': {
    version: '1.15.7',
    resolved:
      'https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.7.tgz',
    integrity:
      'sha512-W8Ym+h8nhuRwaKPaDw34QUkwsGi6Rc4yYqvKFo5rm2FUEhCFbzVWrxXUxuKK8TASjWsysJY0nsmNCGhCOIsrOw==',
    license: 'MIT',
    dependencies: {
      '@types/http-errors': '*',
      '@types/node': '*',
      '@types/send': '*',
    },
  },
  'node_modules/@types/webidl-conversions': {
    version: '7.0.3',
    resolved:
      'https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz',
    integrity:
      'sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA==',
    license: 'MIT',
  },
  'node_modules/@types/whatwg-url': {
    version: '11.0.5',
    resolved:
      'https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-11.0.5.tgz',
    integrity:
      'sha512-coYR071JRaHa+xoEvvYqvnIHaVqaYrLPbsufM9BF63HkwI5Lgmy2QR8Q5K/lYDYo5AK82wOvSOS0UsLTpTG7uQ==',
    license: 'MIT',
    dependencies: {
      '@types/webidl-conversions': '*',
    },
  },
  'node_modules/accepts': {
    version: '1.3.8',
    resolved: 'https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz',
    integrity:
      'sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==',
    license: 'MIT',
    dependencies: {
      'mime-types': '~2.1.34',
      negotiator: '0.6.3',
    },
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/acorn': {
    version: '8.14.0',
    resolved: 'https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz',
    integrity:
      'sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==',
    dev: true,
    license: 'MIT',
    bin: {
      acorn: 'bin/acorn',
    },
    engines: {
      node: '>=0.4.0',
    },
  },
  'node_modules/acorn-walk': {
    version: '8.3.4',
    resolved: 'https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz',
    integrity:
      'sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==',
    dev: true,
    license: 'MIT',
    dependencies: {
      acorn: '^8.11.0',
    },
    engines: {
      node: '>=0.4.0',
    },
  },
  'node_modules/arg': {
    version: '4.1.3',
    resolved: 'https://registry.npmjs.org/arg/-/arg-4.1.3.tgz',
    integrity:
      'sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/array-flatten': {
    version: '1.1.1',
    resolved:
      'https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz',
    integrity:
      'sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==',
    license: 'MIT',
  },
  'node_modules/body-parser': {
    version: '1.20.3',
    resolved: 'https://registry.npmjs.org/body-parser/-/body-parser-1.20.3.tgz',
    integrity:
      'sha512-7rAxByjUMqQ3/bHJy7D6OGXvx/MMc4IqBn/X0fcM1QUcAItpZrBEYhWGem+tzXH90c+G01ypMcYJBO9Y30203g==',
    license: 'MIT',
    dependencies: {
      bytes: '3.1.2',
      'content-type': '~1.0.5',
      debug: '2.6.9',
      depd: '2.0.0',
      destroy: '1.2.0',
      'http-errors': '2.0.0',
      'iconv-lite': '0.4.24',
      'on-finished': '2.4.1',
      qs: '6.13.0',
      'raw-body': '2.5.2',
      'type-is': '~1.6.18',
      unpipe: '1.0.0',
    },
    engines: {
      node: '>= 0.8',
      npm: '1.2.8000 || >= 1.4.16',
    },
  },
  'node_modules/bson': {
    version: '6.10.1',
    resolved: 'https://registry.npmjs.org/bson/-/bson-6.10.1.tgz',
    integrity:
      'sha512-P92xmHDQjSKPLHqFxefqMxASNq/aWJMEZugpCjf+AF/pgcUpMMQCg7t7+ewko0/u8AapvF3luf/FoehddEK+sA==',
    license: 'Apache-2.0',
    engines: {
      node: '>=16.20.1',
    },
  },
  'node_modules/bytes': {
    version: '3.1.2',
    resolved: 'https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz',
    integrity:
      'sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/call-bind-apply-helpers': {
    version: '1.0.1',
    resolved:
      'https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.1.tgz',
    integrity:
      'sha512-BhYE+WDaywFg2TBWYNXAE+8B1ATnThNBqXHP5nQu0jWJdVvY2hvkpyB3qOmtmDePiS5/BDQ8wASEWGMWRG148g==',
    license: 'MIT',
    dependencies: {
      'es-errors': '^1.3.0',
      'function-bind': '^1.1.2',
    },
    engines: {
      node: '>= 0.4',
    },
  },
  'node_modules/call-bound': {
    version: '1.0.3',
    resolved: 'https://registry.npmjs.org/call-bound/-/call-bound-1.0.3.tgz',
    integrity:
      'sha512-YTd+6wGlNlPxSuri7Y6X8tY2dmm12UMH66RpKMhiX6rsk5wXXnYgbUcOt8kiS31/AjfoTOvCsE+w8nZQLQnzHA==',
    license: 'MIT',
    dependencies: {
      'call-bind-apply-helpers': '^1.0.1',
      'get-intrinsic': '^1.2.6',
    },
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/content-disposition': {
    version: '0.5.4',
    resolved:
      'https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz',
    integrity:
      'sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==',
    license: 'MIT',
    dependencies: {
      'safe-buffer': '5.2.1',
    },
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/content-type': {
    version: '1.0.5',
    resolved:
      'https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz',
    integrity:
      'sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/cookie': {
    version: '0.7.1',
    resolved: 'https://registry.npmjs.org/cookie/-/cookie-0.7.1.tgz',
    integrity:
      'sha512-6DnInpx7SJ2AK3+CTUE/ZM0vWTUboZCegxhC2xiIydHR9jNuTAASBrfEpHhiGOZw/nX51bHt6YQl8jsGo4y/0w==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/cookie-signature': {
    version: '1.0.6',
    resolved:
      'https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz',
    integrity:
      'sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==',
    license: 'MIT',
  },
  'node_modules/cors': {
    version: '2.8.5',
    resolved: 'https://registry.npmjs.org/cors/-/cors-2.8.5.tgz',
    integrity:
      'sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==',
    license: 'MIT',
    dependencies: {
      'object-assign': '^4',
      vary: '^1',
    },
    engines: {
      node: '>= 0.10',
    },
  },
  'node_modules/create-require': {
    version: '1.1.1',
    resolved:
      'https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz',
    integrity:
      'sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/debug': {
    version: '2.6.9',
    resolved: 'https://registry.npmjs.org/debug/-/debug-2.6.9.tgz',
    integrity:
      'sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==',
    license: 'MIT',
    dependencies: {
      ms: '2.0.0',
    },
  },
  'node_modules/depd': {
    version: '2.0.0',
    resolved: 'https://registry.npmjs.org/depd/-/depd-2.0.0.tgz',
    integrity:
      'sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/destroy': {
    version: '1.2.0',
    resolved: 'https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz',
    integrity:
      'sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
      npm: '1.2.8000 || >= 1.4.16',
    },
  },
  'node_modules/diff': {
    version: '4.0.2',
    resolved: 'https://registry.npmjs.org/diff/-/diff-4.0.2.tgz',
    integrity:
      'sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==',
    dev: true,
    license: 'BSD-3-Clause',
    engines: {
      node: '>=0.3.1',
    },
  },
  'node_modules/dotenv': {
    version: '16.4.7',
    resolved: 'https://registry.npmjs.org/dotenv/-/dotenv-16.4.7.tgz',
    integrity:
      'sha512-47qPchRCykZC03FhkYAhrvwU4xDBFIj1QPqaarj6mdM/hgUzfPHcpkHJOn3mJAufFeeAxAzeGsr5X0M4k6fLZQ==',
    license: 'BSD-2-Clause',
    engines: {
      node: '>=12',
    },
    funding: {
      url: 'https://dotenvx.com',
    },
  },
  'node_modules/dunder-proto': {
    version: '1.0.1',
    resolved:
      'https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz',
    integrity:
      'sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==',
    license: 'MIT',
    dependencies: {
      'call-bind-apply-helpers': '^1.0.1',
      'es-errors': '^1.3.0',
      gopd: '^1.2.0',
    },
    engines: {
      node: '>= 0.4',
    },
  },
  'node_modules/ee-first': {
    version: '1.1.1',
    resolved: 'https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz',
    integrity:
      'sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==',
    license: 'MIT',
  },
  'node_modules/encodeurl': {
    version: '2.0.0',
    resolved: 'https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz',
    integrity:
      'sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/es-define-property': {
    version: '1.0.1',
    resolved:
      'https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz',
    integrity:
      'sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==',
    license: 'MIT',
    engines: {
      node: '>= 0.4',
    },
  },
  'node_modules/es-errors': {
    version: '1.3.0',
    resolved: 'https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz',
    integrity:
      'sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==',
    license: 'MIT',
    engines: {
      node: '>= 0.4',
    },
  },
  'node_modules/es-object-atoms': {
    version: '1.0.0',
    resolved:
      'https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.0.0.tgz',
    integrity:
      'sha512-MZ4iQ6JwHOBQjahnjwaC1ZtIBH+2ohjamzAO3oaHcXYup7qxjF2fixyH+Q71voWHeOkI2q/TnJao/KfXYIZWbw==',
    license: 'MIT',
    dependencies: {
      'es-errors': '^1.3.0',
    },
    engines: {
      node: '>= 0.4',
    },
  },
  'node_modules/escape-html': {
    version: '1.0.3',
    resolved: 'https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz',
    integrity:
      'sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==',
    license: 'MIT',
  },
  'node_modules/etag': {
    version: '1.8.1',
    resolved: 'https://registry.npmjs.org/etag/-/etag-1.8.1.tgz',
    integrity:
      'sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/express': {
    version: '4.21.2',
    resolved: 'https://registry.npmjs.org/express/-/express-4.21.2.tgz',
    integrity:
      'sha512-28HqgMZAmih1Czt9ny7qr6ek2qddF4FclbMzwhCREB6OFfH+rXAnuNCwo1/wFvrtbgsQDb4kSbX9de9lFbrXnA==',
    license: 'MIT',
    dependencies: {
      accepts: '~1.3.8',
      'array-flatten': '1.1.1',
      'body-parser': '1.20.3',
      'content-disposition': '0.5.4',
      'content-type': '~1.0.4',
      cookie: '0.7.1',
      'cookie-signature': '1.0.6',
      debug: '2.6.9',
      depd: '2.0.0',
      encodeurl: '~2.0.0',
      'escape-html': '~1.0.3',
      etag: '~1.8.1',
      finalhandler: '1.3.1',
      fresh: '0.5.2',
      'http-errors': '2.0.0',
      'merge-descriptors': '1.0.3',
      methods: '~1.1.2',
      'on-finished': '2.4.1',
      parseurl: '~1.3.3',
      'path-to-regexp': '0.1.12',
      'proxy-addr': '~2.0.7',
      qs: '6.13.0',
      'range-parser': '~1.2.1',
      'safe-buffer': '5.2.1',
      send: '0.19.0',
      'serve-static': '1.16.2',
      setprototypeof: '1.2.0',
      statuses: '2.0.1',
      'type-is': '~1.6.18',
      'utils-merge': '1.0.1',
      vary: '~1.1.2',
    },
    engines: {
      node: '>= 0.10.0',
    },
    funding: {
      type: 'opencollective',
      url: 'https://opencollective.com/express',
    },
  },
  'node_modules/finalhandler': {
    version: '1.3.1',
    resolved:
      'https://registry.npmjs.org/finalhandler/-/finalhandler-1.3.1.tgz',
    integrity:
      'sha512-6BN9trH7bp3qvnrRyzsBz+g3lZxTNZTbVO2EV1CS0WIcDbawYVdYvGflME/9QP0h0pYlCDBCTjYa9nZzMDpyxQ==',
    license: 'MIT',
    dependencies: {
      debug: '2.6.9',
      encodeurl: '~2.0.0',
      'escape-html': '~1.0.3',
      'on-finished': '2.4.1',
      parseurl: '~1.3.3',
      statuses: '2.0.1',
      unpipe: '~1.0.0',
    },
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/forwarded': {
    version: '0.2.0',
    resolved: 'https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz',
    integrity:
      'sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/fresh': {
    version: '0.5.2',
    resolved: 'https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz',
    integrity:
      'sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/function-bind': {
    version: '1.1.2',
    resolved:
      'https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz',
    integrity:
      'sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==',
    license: 'MIT',
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/get-intrinsic': {
    version: '1.2.6',
    resolved:
      'https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.6.tgz',
    integrity:
      'sha512-qxsEs+9A+u85HhllWJJFicJfPDhRmjzoYdl64aMWW9yRIJmSyxdn8IEkuIM530/7T+lv0TIHd8L6Q/ra0tEoeA==',
    license: 'MIT',
    dependencies: {
      'call-bind-apply-helpers': '^1.0.1',
      'dunder-proto': '^1.0.0',
      'es-define-property': '^1.0.1',
      'es-errors': '^1.3.0',
      'es-object-atoms': '^1.0.0',
      'function-bind': '^1.1.2',
      gopd: '^1.2.0',
      'has-symbols': '^1.1.0',
      hasown: '^2.0.2',
      'math-intrinsics': '^1.0.0',
    },
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/gopd': {
    version: '1.2.0',
    resolved: 'https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz',
    integrity:
      'sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==',
    license: 'MIT',
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/has-symbols': {
    version: '1.1.0',
    resolved: 'https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz',
    integrity:
      'sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==',
    license: 'MIT',
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/hasown': {
    version: '2.0.2',
    resolved: 'https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz',
    integrity:
      'sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==',
    license: 'MIT',
    dependencies: {
      'function-bind': '^1.1.2',
    },
    engines: {
      node: '>= 0.4',
    },
  },
  'node_modules/http-errors': {
    version: '2.0.0',
    resolved: 'https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz',
    integrity:
      'sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==',
    license: 'MIT',
    dependencies: {
      depd: '2.0.0',
      inherits: '2.0.4',
      setprototypeof: '1.2.0',
      statuses: '2.0.1',
      toidentifier: '1.0.1',
    },
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/iconv-lite': {
    version: '0.4.24',
    resolved: 'https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz',
    integrity:
      'sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==',
    license: 'MIT',
    dependencies: {
      'safer-buffer': '>= 2.1.2 < 3',
    },
    engines: {
      node: '>=0.10.0',
    },
  },
  'node_modules/inherits': {
    version: '2.0.4',
    resolved: 'https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz',
    integrity:
      'sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==',
    license: 'ISC',
  },
  'node_modules/ipaddr.js': {
    version: '1.9.1',
    resolved: 'https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz',
    integrity:
      'sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==',
    license: 'MIT',
    engines: {
      node: '>= 0.10',
    },
  },
  'node_modules/kareem': {
    version: '2.6.3',
    resolved: 'https://registry.npmjs.org/kareem/-/kareem-2.6.3.tgz',
    integrity:
      'sha512-C3iHfuGUXK2u8/ipq9LfjFfXFxAZMQJJq7vLS45r3D9Y2xQ/m4S8zaR4zMLFWh9AsNPXmcFfUDhTEO8UIC/V6Q==',
    license: 'Apache-2.0',
    engines: {
      node: '>=12.0.0',
    },
  },
  'node_modules/make-error': {
    version: '1.3.6',
    resolved: 'https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz',
    integrity:
      'sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==',
    dev: true,
    license: 'ISC',
  },
  'node_modules/math-intrinsics': {
    version: '1.1.0',
    resolved:
      'https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz',
    integrity:
      'sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==',
    license: 'MIT',
    engines: {
      node: '>= 0.4',
    },
  },
  'node_modules/media-typer': {
    version: '0.3.0',
    resolved: 'https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz',
    integrity:
      'sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/memory-pager': {
    version: '1.5.0',
    resolved:
      'https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz',
    integrity:
      'sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==',
    license: 'MIT',
  },
  'node_modules/merge-descriptors': {
    version: '1.0.3',
    resolved:
      'https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.3.tgz',
    integrity:
      'sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==',
    license: 'MIT',
    funding: {
      url: 'https://github.com/sponsors/sindresorhus',
    },
  },
  'node_modules/methods': {
    version: '1.1.2',
    resolved: 'https://registry.npmjs.org/methods/-/methods-1.1.2.tgz',
    integrity:
      'sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/mime': {
    version: '1.6.0',
    resolved: 'https://registry.npmjs.org/mime/-/mime-1.6.0.tgz',
    integrity:
      'sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==',
    license: 'MIT',
    bin: {
      mime: 'cli.js',
    },
    engines: {
      node: '>=4',
    },
  },
  'node_modules/mime-db': {
    version: '1.52.0',
    resolved: 'https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz',
    integrity:
      'sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/mime-types': {
    version: '2.1.35',
    resolved: 'https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz',
    integrity:
      'sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==',
    license: 'MIT',
    dependencies: {
      'mime-db': '1.52.0',
    },
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/mongodb': {
    version: '6.12.0',
    resolved: 'https://registry.npmjs.org/mongodb/-/mongodb-6.12.0.tgz',
    integrity:
      'sha512-RM7AHlvYfS7jv7+BXund/kR64DryVI+cHbVAy9P61fnb1RcWZqOW1/Wj2YhqMCx+MuYhqTRGv7AwHBzmsCKBfA==',
    license: 'Apache-2.0',
    dependencies: {
      '@mongodb-js/saslprep': '^1.1.9',
      bson: '^6.10.1',
      'mongodb-connection-string-url': '^3.0.0',
    },
    engines: {
      node: '>=16.20.1',
    },
    peerDependencies: {
      '@aws-sdk/credential-providers': '^3.188.0',
      '@mongodb-js/zstd': '^1.1.0 || ^2.0.0',
      'gcp-metadata': '^5.2.0',
      kerberos: '^2.0.1',
      'mongodb-client-encryption': '>=6.0.0 <7',
      snappy: '^7.2.2',
      socks: '^2.7.1',
    },
    peerDependenciesMeta: {
      '@aws-sdk/credential-providers': {
        optional: true,
      },
      '@mongodb-js/zstd': {
        optional: true,
      },
      'gcp-metadata': {
        optional: true,
      },
      kerberos: {
        optional: true,
      },
      'mongodb-client-encryption': {
        optional: true,
      },
      snappy: {
        optional: true,
      },
      socks: {
        optional: true,
      },
    },
  },
  'node_modules/mongodb-connection-string-url': {
    version: '3.0.1',
    resolved:
      'https://registry.npmjs.org/mongodb-connection-string-url/-/mongodb-connection-string-url-3.0.1.tgz',
    integrity:
      'sha512-XqMGwRX0Lgn05TDB4PyG2h2kKO/FfWJyCzYQbIhXUxz7ETt0I/FqHjUeqj37irJ+Dl1ZtU82uYyj14u2XsZKfg==',
    license: 'Apache-2.0',
    dependencies: {
      '@types/whatwg-url': '^11.0.2',
      'whatwg-url': '^13.0.0',
    },
  },
  'node_modules/mongoose': {
    version: '8.9.2',
    resolved: 'https://registry.npmjs.org/mongoose/-/mongoose-8.9.2.tgz',
    integrity:
      'sha512-mLWynmZS1v8HTeMxyLhskQncS1SkrjW1eLNuFDYGQMQ/5QrFrxTLNwWXeCRZeKT2lXyaxW8bnJC9AKPT9jYMkw==',
    license: 'MIT',
    dependencies: {
      bson: '^6.10.1',
      kareem: '2.6.3',
      mongodb: '~6.12.0',
      mpath: '0.9.0',
      mquery: '5.0.0',
      ms: '2.1.3',
      sift: '17.1.3',
    },
    engines: {
      node: '>=16.20.1',
    },
    funding: {
      type: 'opencollective',
      url: 'https://opencollective.com/mongoose',
    },
  },
  'node_modules/mongoose/node_modules/ms': {
    version: '2.1.3',
    resolved: 'https://registry.npmjs.org/ms/-/ms-2.1.3.tgz',
    integrity:
      'sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==',
    license: 'MIT',
  },
  'node_modules/mpath': {
    version: '0.9.0',
    resolved: 'https://registry.npmjs.org/mpath/-/mpath-0.9.0.tgz',
    integrity:
      'sha512-ikJRQTk8hw5DEoFVxHG1Gn9T/xcjtdnOKIU1JTmGjZZlg9LST2mBLmcX3/ICIbgJydT2GOc15RnNy5mHmzfSew==',
    license: 'MIT',
    engines: {
      node: '>=4.0.0',
    },
  },
  'node_modules/mquery': {
    version: '5.0.0',
    resolved: 'https://registry.npmjs.org/mquery/-/mquery-5.0.0.tgz',
    integrity:
      'sha512-iQMncpmEK8R8ncT8HJGsGc9Dsp8xcgYMVSbs5jgnm1lFHTZqMJTUWTDx1LBO8+mK3tPNZWFLBghQEIOULSTHZg==',
    license: 'MIT',
    dependencies: {
      debug: '4.x',
    },
    engines: {
      node: '>=14.0.0',
    },
  },
  'node_modules/mquery/node_modules/debug': {
    version: '4.4.0',
    resolved: 'https://registry.npmjs.org/debug/-/debug-4.4.0.tgz',
    integrity:
      'sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==',
    license: 'MIT',
    dependencies: {
      ms: '^2.1.3',
    },
    engines: {
      node: '>=6.0',
    },
    peerDependenciesMeta: {
      'supports-color': {
        optional: true,
      },
    },
  },
  'node_modules/mquery/node_modules/ms': {
    version: '2.1.3',
    resolved: 'https://registry.npmjs.org/ms/-/ms-2.1.3.tgz',
    integrity:
      'sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==',
    license: 'MIT',
  },
  'node_modules/ms': {
    version: '2.0.0',
    resolved: 'https://registry.npmjs.org/ms/-/ms-2.0.0.tgz',
    integrity:
      'sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==',
    license: 'MIT',
  },
  'node_modules/negotiator': {
    version: '0.6.3',
    resolved: 'https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz',
    integrity:
      'sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/node-cron': {
    version: '3.0.3',
    resolved: 'https://registry.npmjs.org/node-cron/-/node-cron-3.0.3.tgz',
    integrity:
      'sha512-dOal67//nohNgYWb+nWmg5dkFdIwDm8EpeGYMekPMrngV3637lqnX0lbUcCtgibHTz6SEz7DAIjKvKDFYCnO1A==',
    license: 'ISC',
    dependencies: {
      uuid: '8.3.2',
    },
    engines: {
      node: '>=6.0.0',
    },
  },
  'node_modules/nodemailer': {
    version: '6.9.16',
    resolved: 'https://registry.npmjs.org/nodemailer/-/nodemailer-6.9.16.tgz',
    integrity:
      'sha512-psAuZdTIRN08HKVd/E8ObdV6NO7NTBY3KsC30F7M4H1OnmLCUNaS56FpYxyb26zWLSyYF9Ozch9KYHhHegsiOQ==',
    license: 'MIT-0',
    engines: {
      node: '>=6.0.0',
    },
  },
  'node_modules/object-assign': {
    version: '4.1.1',
    resolved:
      'https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz',
    integrity:
      'sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==',
    license: 'MIT',
    engines: {
      node: '>=0.10.0',
    },
  },
  'node_modules/object-inspect': {
    version: '1.13.3',
    resolved:
      'https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.3.tgz',
    integrity:
      'sha512-kDCGIbxkDSXE3euJZZXzc6to7fCrKHNI/hSRQnRuQ+BWjFNzZwiFF8fj/6o2t2G9/jTj8PSIYTfCLelLZEeRpA==',
    license: 'MIT',
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/on-finished': {
    version: '2.4.1',
    resolved: 'https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz',
    integrity:
      'sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==',
    license: 'MIT',
    dependencies: {
      'ee-first': '1.1.1',
    },
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/parseurl': {
    version: '1.3.3',
    resolved: 'https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz',
    integrity:
      'sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/path-to-regexp': {
    version: '0.1.12',
    resolved:
      'https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.12.tgz',
    integrity:
      'sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ==',
    license: 'MIT',
  },
  'node_modules/proxy-addr': {
    version: '2.0.7',
    resolved: 'https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz',
    integrity:
      'sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==',
    license: 'MIT',
    dependencies: {
      forwarded: '0.2.0',
      'ipaddr.js': '1.9.1',
    },
    engines: {
      node: '>= 0.10',
    },
  },
  'node_modules/punycode': {
    version: '2.3.1',
    resolved: 'https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz',
    integrity:
      'sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==',
    license: 'MIT',
    engines: {
      node: '>=6',
    },
  },
  'node_modules/qs': {
    version: '6.13.0',
    resolved: 'https://registry.npmjs.org/qs/-/qs-6.13.0.tgz',
    integrity:
      'sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==',
    license: 'BSD-3-Clause',
    dependencies: {
      'side-channel': '^1.0.6',
    },
    engines: {
      node: '>=0.6',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/range-parser': {
    version: '1.2.1',
    resolved:
      'https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz',
    integrity:
      'sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==',
    license: 'MIT',
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/raw-body': {
    version: '2.5.2',
    resolved: 'https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz',
    integrity:
      'sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==',
    license: 'MIT',
    dependencies: {
      bytes: '3.1.2',
      'http-errors': '2.0.0',
      'iconv-lite': '0.4.24',
      unpipe: '1.0.0',
    },
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/safe-buffer': {
    version: '5.2.1',
    resolved: 'https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz',
    integrity:
      'sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==',
    funding: [
      {
        type: 'github',
        url: 'https://github.com/sponsors/feross',
      },
      {
        type: 'patreon',
        url: 'https://www.patreon.com/feross',
      },
      {
        type: 'consulting',
        url: 'https://feross.org/support',
      },
    ],
    license: 'MIT',
  },
  'node_modules/safer-buffer': {
    version: '2.1.2',
    resolved:
      'https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz',
    integrity:
      'sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==',
    license: 'MIT',
  },
  'node_modules/send': {
    version: '0.19.0',
    resolved: 'https://registry.npmjs.org/send/-/send-0.19.0.tgz',
    integrity:
      'sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==',
    license: 'MIT',
    dependencies: {
      debug: '2.6.9',
      depd: '2.0.0',
      destroy: '1.2.0',
      encodeurl: '~1.0.2',
      'escape-html': '~1.0.3',
      etag: '~1.8.1',
      fresh: '0.5.2',
      'http-errors': '2.0.0',
      mime: '1.6.0',
      ms: '2.1.3',
      'on-finished': '2.4.1',
      'range-parser': '~1.2.1',
      statuses: '2.0.1',
    },
    engines: {
      node: '>= 0.8.0',
    },
  },
  'node_modules/send/node_modules/encodeurl': {
    version: '1.0.2',
    resolved: 'https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz',
    integrity:
      'sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/send/node_modules/ms': {
    version: '2.1.3',
    resolved: 'https://registry.npmjs.org/ms/-/ms-2.1.3.tgz',
    integrity:
      'sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==',
    license: 'MIT',
  },
  'node_modules/serve-static': {
    version: '1.16.2',
    resolved:
      'https://registry.npmjs.org/serve-static/-/serve-static-1.16.2.tgz',
    integrity:
      'sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==',
    license: 'MIT',
    dependencies: {
      encodeurl: '~2.0.0',
      'escape-html': '~1.0.3',
      parseurl: '~1.3.3',
      send: '0.19.0',
    },
    engines: {
      node: '>= 0.8.0',
    },
  },
  'node_modules/setprototypeof': {
    version: '1.2.0',
    resolved:
      'https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz',
    integrity:
      'sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==',
    license: 'ISC',
  },
  'node_modules/side-channel': {
    version: '1.1.0',
    resolved:
      'https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz',
    integrity:
      'sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==',
    license: 'MIT',
    dependencies: {
      'es-errors': '^1.3.0',
      'object-inspect': '^1.13.3',
      'side-channel-list': '^1.0.0',
      'side-channel-map': '^1.0.1',
      'side-channel-weakmap': '^1.0.2',
    },
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/side-channel-list': {
    version: '1.0.0',
    resolved:
      'https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz',
    integrity:
      'sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==',
    license: 'MIT',
    dependencies: {
      'es-errors': '^1.3.0',
      'object-inspect': '^1.13.3',
    },
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/side-channel-map': {
    version: '1.0.1',
    resolved:
      'https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz',
    integrity:
      'sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==',
    license: 'MIT',
    dependencies: {
      'call-bound': '^1.0.2',
      'es-errors': '^1.3.0',
      'get-intrinsic': '^1.2.5',
      'object-inspect': '^1.13.3',
    },
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/side-channel-weakmap': {
    version: '1.0.2',
    resolved:
      'https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz',
    integrity:
      'sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==',
    license: 'MIT',
    dependencies: {
      'call-bound': '^1.0.2',
      'es-errors': '^1.3.0',
      'get-intrinsic': '^1.2.5',
      'object-inspect': '^1.13.3',
      'side-channel-map': '^1.0.1',
    },
    engines: {
      node: '>= 0.4',
    },
    funding: {
      url: 'https://github.com/sponsors/ljharb',
    },
  },
  'node_modules/sift': {
    version: '17.1.3',
    resolved: 'https://registry.npmjs.org/sift/-/sift-17.1.3.tgz',
    integrity:
      'sha512-Rtlj66/b0ICeFzYTuNvX/EF1igRbbnGSvEyT79McoZa/DeGhMyC5pWKOEsZKnpkqtSeovd5FL/bjHWC3CIIvCQ==',
    license: 'MIT',
  },
  'node_modules/sparse-bitfield': {
    version: '3.0.3',
    resolved:
      'https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz',
    integrity:
      'sha512-kvzhi7vqKTfkh0PZU+2D2PIllw2ymqJKujUcyPMd9Y75Nv4nPbGJZXNhxsgdQab2BmlDct1YnfQCguEvHr7VsQ==',
    license: 'MIT',
    dependencies: {
      'memory-pager': '^1.0.2',
    },
  },
  'node_modules/statuses': {
    version: '2.0.1',
    resolved: 'https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz',
    integrity:
      'sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/toidentifier': {
    version: '1.0.1',
    resolved:
      'https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz',
    integrity:
      'sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==',
    license: 'MIT',
    engines: {
      node: '>=0.6',
    },
  },
  'node_modules/tr46': {
    version: '4.1.1',
    resolved: 'https://registry.npmjs.org/tr46/-/tr46-4.1.1.tgz',
    integrity:
      'sha512-2lv/66T7e5yNyhAAC4NaKe5nVavzuGJQVVtRYLyQ2OI8tsJ61PMLlelehb0wi2Hx6+hT/OJUWZcw8MjlSRnxvw==',
    license: 'MIT',
    dependencies: {
      punycode: '^2.3.0',
    },
    engines: {
      node: '>=14',
    },
  },
  'node_modules/ts-node': {
    version: '10.9.2',
    resolved: 'https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz',
    integrity:
      'sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==',
    dev: true,
    license: 'MIT',
    dependencies: {
      '@cspotcode/source-map-support': '^0.8.0',
      '@tsconfig/node10': '^1.0.7',
      '@tsconfig/node12': '^1.0.7',
      '@tsconfig/node14': '^1.0.0',
      '@tsconfig/node16': '^1.0.2',
      acorn: '^8.4.1',
      'acorn-walk': '^8.1.1',
      arg: '^4.1.0',
      'create-require': '^1.1.0',
      diff: '^4.0.1',
      'make-error': '^1.1.1',
      'v8-compile-cache-lib': '^3.0.1',
      yn: '3.1.1',
    },
    bin: {
      'ts-node': 'dist/bin.js',
      'ts-node-cwd': 'dist/bin-cwd.js',
      'ts-node-esm': 'dist/bin-esm.js',
      'ts-node-script': 'dist/bin-script.js',
      'ts-node-transpile-only': 'dist/bin-transpile.js',
      'ts-script': 'dist/bin-script-deprecated.js',
    },
    peerDependencies: {
      '@swc/core': '>=1.2.50',
      '@swc/wasm': '>=1.2.50',
      '@types/node': '*',
      typescript: '>=2.7',
    },
    peerDependenciesMeta: {
      '@swc/core': {
        optional: true,
      },
      '@swc/wasm': {
        optional: true,
      },
    },
  },
  'node_modules/type-is': {
    version: '1.6.18',
    resolved: 'https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz',
    integrity:
      'sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==',
    license: 'MIT',
    dependencies: {
      'media-typer': '0.3.0',
      'mime-types': '~2.1.24',
    },
    engines: {
      node: '>= 0.6',
    },
  },
  'node_modules/typescript': {
    version: '5.7.2',
    resolved: 'https://registry.npmjs.org/typescript/-/typescript-5.7.2.tgz',
    integrity:
      'sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==',
    dev: true,
    license: 'Apache-2.0',
    bin: {
      tsc: 'bin/tsc',
      tsserver: 'bin/tsserver',
    },
    engines: {
      node: '>=14.17',
    },
  },
  'node_modules/undici-types': {
    version: '6.20.0',
    resolved:
      'https://registry.npmjs.org/undici-types/-/undici-types-6.20.0.tgz',
    integrity:
      'sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg==',
    license: 'MIT',
  },
  'node_modules/unpipe': {
    version: '1.0.0',
    resolved: 'https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz',
    integrity:
      'sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/utils-merge': {
    version: '1.0.1',
    resolved: 'https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz',
    integrity:
      'sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==',
    license: 'MIT',
    engines: {
      node: '>= 0.4.0',
    },
  },
  'node_modules/uuid': {
    version: '8.3.2',
    resolved: 'https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz',
    integrity:
      'sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==',
    license: 'MIT',
    bin: {
      uuid: 'dist/bin/uuid',
    },
  },
  'node_modules/v8-compile-cache-lib': {
    version: '3.0.1',
    resolved:
      'https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz',
    integrity:
      'sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==',
    dev: true,
    license: 'MIT',
  },
  'node_modules/vary': {
    version: '1.1.2',
    resolved: 'https://registry.npmjs.org/vary/-/vary-1.1.2.tgz',
    integrity:
      'sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==',
    license: 'MIT',
    engines: {
      node: '>= 0.8',
    },
  },
  'node_modules/webidl-conversions': {
    version: '7.0.0',
    resolved:
      'https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz',
    integrity:
      'sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==',
    license: 'BSD-2-Clause',
    engines: {
      node: '>=12',
    },
  },
  'node_modules/whatwg-url': {
    version: '13.0.0',
    resolved: 'https://registry.npmjs.org/whatwg-url/-/whatwg-url-13.0.0.tgz',
    integrity:
      'sha512-9WWbymnqj57+XEuqADHrCJ2eSXzn8WXIW/YSGaZtb2WKAInQ6CHfaUUcTyyver0p8BDg5StLQq8h1vtZuwmOig==',
    license: 'MIT',
    dependencies: {
      tr46: '^4.1.1',
      'webidl-conversions': '^7.0.0',
    },
    engines: {
      node: '>=16',
    },
  },
  'node_modules/yn': {
    version: '3.1.1',
    resolved: 'https://registry.npmjs.org/yn/-/yn-3.1.1.tgz',
    integrity:
      'sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==',
    dev: true,
    license: 'MIT',
    engines: {
      node: '>=6',
    },
  },
};
var package_lock_default = {
  name,
  version,
  lockfileVersion,
  requires,
  packages,
};
export {
  package_lock_default as default,
  lockfileVersion,
  name,
  packages,
  requires,
  version,
};