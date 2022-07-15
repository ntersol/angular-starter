import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '$shared';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { LoginComponent } from './login.component';
import { routing } from './login.routes';
import { MasterPageModule } from '$components';

@NgModule({
  imports: [CommonModule, SharedModule, CardModule, MessageModule, routing, MasterPageModule],
  declarations: [LoginComponent],
  providers: [],
  exports: [],
})
export class LoginModule {}
