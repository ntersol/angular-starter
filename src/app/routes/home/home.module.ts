import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '$shared';
// Routing
import { routing } from './home.routes';

// Components
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [HomeComponent],
  providers: [],
  exports: [],
})
export class HomeModule {}
