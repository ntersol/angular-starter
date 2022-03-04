import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersModule } from './users.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { title: 'Users' },
  },
];

export const UsersRouting: ModuleWithProviders<UsersModule> = RouterModule.forChild(routes);
