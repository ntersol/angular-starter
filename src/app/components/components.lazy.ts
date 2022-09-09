import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '~',
    loadChildren: () => import('./masterpage/masterpage.module').then(m => m.MasterPageModule),
  },
  {
    path: '~',
    loadChildren: () => import('@angular/forms').then(m => m.FormsModule),
  },
  {
    path: '~',
    loadChildren: () => import('@angular/forms').then(m => m.ReactiveFormsModule),
  },
  {
    path: '~',
    loadChildren: () => import('primeng/card').then(m => m.CardModule),
  },
  {
    path: '~',
    loadChildren: () => import('primeng/table').then(m => m.TableModule),
  },
  {
    path: '~',
    loadChildren: () => import('primeng/tree').then(m => m.TreeModule),
  },
];

export const ComponentsLazyLoad = RouterModule.forChild(routes);
