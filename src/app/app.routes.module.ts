import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { LayoutMainComponent } from './components/masterpage';
import { NoContentComponent } from './routes/no-content/no-content.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UrlTree, DefaultUrlSerializer } from '@angular/router';

/**
 * Preserves the trailing slash in routing urls
 * This improves SEO and also solves a lot of problems with SSR.
 * @link
 * See https://github.com/angular/angular/issues/16051
 * @example
 * http://localhost:4200/users > http://localhost:4200/users/
 *
 */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    return this._withTrailingSlash(super.serialize(tree));
  }

  private _withTrailingSlash(url: string): string {
    const splitOn = url.indexOf('?') > -1 ? '?' : '#';
    const pathArr = url.split(splitOn);

    if (!pathArr[0].endsWith('/')) {
      let fileName: string = url.substring(url.lastIndexOf('/') + 1);
      if (fileName.indexOf('.') === -1) {
        pathArr[0] += '/';
      }
    }
    return pathArr.join(splitOn);
  }
}

export const ROUTES: Routes = [
  // Routes without masterpage or that do not need to be authenticated need to go first

  /**
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule),
    data: { title: 'Please Log In' },
  },
   */

  // Example route param
  // {
  //  path: 'loan/:LNKey',
  //  component: HomeComponent,
  //  data: { title: 'Dashboard'},
  //  canActivate: [AuthGuard],
  // },

  // Routes that use masterpage go here
  // canActivate with AuthGuard determines if this is an authenticated only route
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./routes/users/users.module').then(m => m.UsersModule),
        data: { title: 'Users' },
      },
      // Homepage non-lazy load implementation
      // {
      //  path: '',
      //  component: HomeComponent,
      //  data: { title: 'Dashboard' },
      //  canActivate: [AuthGuard]
      // },

      // Example for lazy loaded module with route params
      // { path: 'users/:empowerGuid', loadChildren: './routes/users/users.module#UsersModule', canActivate: [AuthGuard] },
      // { path: 'users', loadChildren: './routes/users/users.module#UsersModule', canActivate: [AuthGuard] },

      // Empty path string for homepage ('') needs to be LAST otherwise it catches all other routes
      {
        path: 'users',
        loadChildren: () => import('./routes/users/users.module').then(m => m.UsersModule),
      },

      {
        path: 'route',
        pathMatch: 'full',
        loadChildren: () => import('./routes/_route/route.module').then(m => m.RouteModule),
      },

      // Empty path string for homepage ('') needs to be LAST otherwise it catches all other routes
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),
        // canActivate: [AuthGuard],
      },

      {
        path: '**',
        component: NoContentComponent,
        data: { title: 'Page Not Found' },
        // canActivate: [AuthGuard],
      },
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      useHash: false,
      preloadingStrategy: environment.settings.preloadRoutes ? PreloadAllModules : NoPreloading,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRouterModule {}
