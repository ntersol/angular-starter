import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SiteModule } from '$site';
import { UsersRouting } from './users-routing.module';

@NgModule({
  imports: [CommonModule, SiteModule, UsersRouting],
  declarations: [UsersComponent],
})
export class UsersModule {}
