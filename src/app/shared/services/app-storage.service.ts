import { Injectable } from '@angular/core';
import { LocalStorageService } from './storage';

interface LocalStorage {
  token: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppStorageService {
  public token$ = this.localStorage.getItem$('');
  public set token(token: string | null) {
    this.localStorage.setItem('token', token);
  }
  public get token() {
    return this.localStorage.getItem('token');
  }

  constructor(private localStorage: LocalStorageService<LocalStorage>) {}
}
