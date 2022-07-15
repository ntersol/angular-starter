import { Component } from '@angular/core';
import { isBrowser } from '$shared';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
})
export class LayoutMainComponent {
  public isBrowser = isBrowser;

  constructor() {}
}
