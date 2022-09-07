import { Injectable } from '@angular/core';
import { Models } from '../models';
import { LocalStorageService } from './storage';

@Injectable({
  providedIn: 'root',
})
export class AppStorageService {
  public token$ = this.localStorage.getItem$('token');

  public set token(token: string | null) {
    this.localStorage.setItem('token', token);
  }
  public get token() {
    return this.localStorage.getItem('token');
  }

  public user$ = this.localStorage.getItem$<Models.User>('user', { isJson: true });
  public get user() {
    return this.localStorage.getItem('user', true);
  }
  public set user(user: Models.User | null) {
    this.localStorage.setItem('user', user);
  }
  /***/
  constructor(public localStorage: LocalStorageService) {}
}
