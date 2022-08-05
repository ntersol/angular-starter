import { Injectable } from '@angular/core';
import { StorageService } from './base-storage.service';

/**
 * An abstraction layer for local storage that is SSR compatible and supports Observables
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageService {
  constructor() {
    super(true);
  }
}
