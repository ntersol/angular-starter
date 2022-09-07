import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { fromEvent, tap, of } from 'rxjs';
import { StorageService } from './base-storage.service';

// type token = LocalStorageModel['token'];
// type user = LocalStorageModel['user'];
/**
 * An abstraction layer for local storage that is SSR compatible and supports Observables
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageService {
  /** Listen to the storage event and update local storage when localstorage is updated in other tabs  */
  public storageEvent$ = this.isBrowser && this.window ? fromEvent(this.window, 'storage').pipe(tap(() => this.update())) : of();

  constructor(@Inject(DOCUMENT) private _doc: Document) {
    super();
  }

  /**
   * Get DOM window
   * @returns
   */
  get window(): Window | null {
    return this.isBrowser ? window : this._doc.defaultView;
  }
}
