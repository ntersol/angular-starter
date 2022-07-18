import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule, IconsModule } from '$shared';
import { TempComponent } from './temp.component';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    // Shared
    SharedModule,
    IconsModule,
  ],
  providers: [],
  declarations: [TempComponent],
  exports: [TempComponent],
})
export class TempModule {}
