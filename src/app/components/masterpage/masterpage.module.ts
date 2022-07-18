import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule, IconsModule } from '$shared';
import { LogoutModalComponent, FeedbackModalComponent } from '../modals';
import { FooterComponent, HeaderComponent, LayoutMainComponent, NavComponent, LayoutSingleComponent } from './';

import { SidebarModule } from 'primeng/sidebar';
import { ConfirmationService } from 'primeng/api';

// Modals include
const APP_MODALS = [LogoutModalComponent, FeedbackModalComponent];

// Components to include
export const APP_COMPONENTS = [...APP_MODALS, FooterComponent, HeaderComponent, LayoutMainComponent, LayoutSingleComponent, NavComponent];

@NgModule({
  imports: [
    // Angular
    CommonModule,
    // Shared
    SharedModule,
    SidebarModule,
    IconsModule,
  ],
  providers: [ConfirmationService],
  declarations: [APP_COMPONENTS],
  exports: [APP_COMPONENTS],
})
export class MasterPageModule {}
