import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { LocalStorageService } from '$shared';

interface Temp {
  Hello: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.localStorage.getItem$<Temp>('temp', { isJson: true }).subscribe(x => console.warn(x));

    // this.localStorage.setItem('temp', { Hello: 'World' });
    this.localStorage.setItem('temp', { Hello: 'World 2' });

    this.localStorage.setItem('temp', { Hello: 'World 3' });
  }

  ngOnDestroy() {}
}
