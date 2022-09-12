import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '$env';
import { titleAppendSlug } from '$shared';

export const ROUTES: Routes = [
  // Routes without masterpage or that do not need to be authenticated need to go first

  {
    path: 'users',
    loadChildren: () => import('./routes/users/users.module').then(m => m.UsersModule),
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule),
    title: titleAppendSlug('Please Log In'),
  },
  {
    path: '**',
    loadChildren: () => import('./routes/no-content/no-content.module').then(m => m.NoContentModule),
    title: titleAppendSlug('Page Not Found'),
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
