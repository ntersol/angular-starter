import { httpGetJson, ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import './scully/plugins/plugins';
import { Models } from './src/app/shared/models';

// Used to map user results from a web api to a string array
const usersToRoutes = (users: Models.User[]) => users.map(u => `/users/${u.id}`);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'angular-starter',
  distFolder: './dist/browser', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    /** Skip Example */
    '/route': {
      type: 'skip',
    },
    /** Provide api data for route params */
    /**
    '/users/:userId': {
      type: 'json',
      userId: {
        url: 'https://jsonplaceholder.typicode.com/users',
        // url: 'http://localhost:1864/assets/mock-data/users.json',
        property: 'id',
      },
    },
     */
  },

  /** Static list of extra routes */
  // extraRoutes: ['/users/1', '/users/2', '/users/7'],

  /** Dynamic list of extra routes from a web api. Useful for only updating changed routes */
  extraRoutes: httpGetJson('http://localhost:4200/assets/mock-data/users-less.json').then((r: any) => usersToRoutes(r)),
};
