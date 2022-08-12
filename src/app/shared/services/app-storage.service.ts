import { Injectable } from '@angular/core';
import { LocalStorageService } from './storage';

interface LocalStorage {
  token: string;
  user: {
    name: string;
  };
}

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

  public user$ = this.localStorage.getItem$('user', { isJson: true });
  public get user() {
    return this.localStorage.getItem('user', true);
  }

  constructor(private localStorage: LocalStorageService<LocalStorage>) {
    this.user;
  }
}
