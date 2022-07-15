import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageModule } from './masterpage.module';

const routes: Routes = [];

export const routing: ModuleWithProviders<MasterPageModule> = RouterModule.forChild(routes);
