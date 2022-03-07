import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ApiService } from '../../shared/stores/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit, OnDestroy {
  public users = this.api.users;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
