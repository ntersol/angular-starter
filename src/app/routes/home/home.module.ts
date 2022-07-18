import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '$shared';
// Routing
import { routing } from './home.routes';

// Route State Management
import { RouteUiService } from './shared/stores/ui/route-ui.service';
import { RouteApiService } from './shared/stores/api/route-api.service';

// Components
import { HomeComponent } from './home.component';
import { TempModule } from '../../components/temp/temp.module';

@NgModule({
  imports: [CommonModule, SharedModule, routing, TempModule],
  declarations: [HomeComponent],
  providers: [RouteUiService, RouteApiService],
  exports: [],
})
export class HomeModule {}
