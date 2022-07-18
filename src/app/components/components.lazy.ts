import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '~',
    loadChildren: () => import('./temp/temp.module').then(m => m.TempModule),
  },
  {
    path: '~',
    loadChildren: () => import('../../../node_modules/@angular/forms').then(m => m.FormsModule),
  },
  {
    path: '~',
    loadChildren: () => import('../../../node_modules/@angular/forms').then(m => m.ReactiveFormsModule),
  },
];

export const ComponentsLazyLoad = RouterModule.forChild(routes);
