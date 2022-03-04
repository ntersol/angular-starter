import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ntsApiStoreCreator } from '@ntersol/state-management';
import { Models } from '../../shared/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit, OnDestroy {
  private store = ntsApiStoreCreator(this.http, { apiUrlBase: '//jsonplaceholder.typicode.com' });
  public users = this.store<Models.User>({ apiUrl: '/users', uniqueId: 'id' });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users.state$.subscribe(console.log);
  }

  ngOnDestroy() {}
}
