import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule, IconsModule } from '$shared';
import { UsersRouting } from './users-routing.module';
import { UserComponent } from './routes/user/user.component';
import { NtsStateManagementModule } from '@ntersol/state-management';
import { NtsFormsModule } from '@ntersol/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule, IconsModule, UsersRouting, NtsStateManagementModule, NtsFormsModule],
  declarations: [UsersComponent, UserComponent],
})
export class UsersModule {}
