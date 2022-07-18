import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '$shared';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { LoginComponent } from './login.component';
import { routing } from './login.routes';
import { MasterPageModule } from '$components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, CardModule, MessageModule, routing, MasterPageModule],
  declarations: [LoginComponent],
  providers: [],
  exports: [],
})
export class LoginModule {}
