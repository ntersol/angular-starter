import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AppStorageService } from '$shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private storage: AppStorageService) {}

  ngOnInit() {
    // this.localStorage.getItem$('user', { isJson: true }).subscribe(x => console.warn(x));
    const token = this.storage.token;
    const user = this.storage.user;

    this.storage.token = 'test';
    this.storage.user = { name: 'test', id: 1234, username: 'test2' };

    this.storage.user$.subscribe(x => console.log(x));
    // const name = user?.name;
  }

  ngOnDestroy() {}
}
