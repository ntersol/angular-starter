import { Injectable } from '@angular/core';
import { StorageService } from './base-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends StorageService {
  constructor() {
    super(false);
  }
}
