import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '~',
    loadChildren: () => import('./temp/temp.module').then(m => m.TempModule),
  },
  {
    path: '~',
    loadChildren: () => import('../shared/icons/icons.module').then(m => m.IconsModule),
  },
];

export const ComponentsLazyLoad = RouterModule.forChild(routes);
