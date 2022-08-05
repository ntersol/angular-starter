import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { LocalStorageService } from '$shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.localStorage.clear();
    this.localStorage.setItem('Hello', 'World');
    const temp1 = this.localStorage.getItem('Hello');
    console.log(temp1);
    //
    this.localStorage.setItem('temp', { Hello: 'World' });
    const temp = this.localStorage.getItem<{ Hello: string }>('temp', true);

    console.log(temp);
  }

  ngOnDestroy() {}
}
