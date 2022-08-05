import { Injectable } from '@angular/core';
import { StorageService } from './base-storage.service';

/**
 * An abstraction layer for session storage that is SSR compatible and supports Observables
 */
@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends StorageService {
  constructor() {
    super(false);
  }
}
