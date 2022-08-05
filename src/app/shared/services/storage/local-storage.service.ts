import { Injectable } from '@angular/core';
import { StorageService } from './base-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageService {
  constructor() {
    super(true);
  }
}