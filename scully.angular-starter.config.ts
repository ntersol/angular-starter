import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-starter',
  distFolder: './dist/browser', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/users/:userId': {
      type: 'json',
      userId: {
        url: 'http://localhost:1864/assets/mock-data/users.json',
        property: 'id',
      },
    },
  },
};
