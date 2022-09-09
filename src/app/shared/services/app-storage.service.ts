import { Injectable } from '@angular/core';
import { Models } from '../models';
import { StorageService } from './storage/base-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppStorageService {
  public token$ = this.storage.getItem$('token', { useSession: true });

  public set token(token: string | null) {
    this.storage.setItem('token', token, true);
  }
  public get token() {
    return this.storage.getItem('token', { useSession: true });
  }

  public user$ = this.storage.getItem$<Models.User>('user', { isJson: true });
  public get user() {
    return this.storage.getItem('user', { isJson: true });
  }
  public set user(user: Models.User | null) {
    this.storage.setItem('user', user);
  }
  /***/
  constructor(public storage: StorageService) {}
}
