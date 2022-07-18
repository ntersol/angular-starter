import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
    // If service worker
    if (environment.settings.enableServiceWorker) {
      this.sw.pollforUpdates();
    }
    */
  }
}
