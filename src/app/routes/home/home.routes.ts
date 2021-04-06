import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: ':sectionUrl/:routeUrl',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: ':sectionUrl',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
