import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import './scully/plugins/plugins';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-starter',
  distFolder: './dist/browser', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '': {
      type: 'skip',
    },
    '/route': {
      type: 'skip',
    },
    '/users/:userId': {
      type: 'json',
      userId: {
        url: 'https://jsonplaceholder.typicode.com/users',
        // url: 'http://localhost:1864/assets/mock-data/users.json',
        property: 'id',
      },
    },
  },
};
