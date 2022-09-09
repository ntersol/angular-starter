import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, fromEvent, identity, map, Observable, of, take, tap } from 'rxjs';

namespace Storage {
  export interface Options {
    /** If true, convert the response to JSON from a string */
    isJson?: boolean;
    /** By default localstorage is used for all data, set this to true to use sessionStorage instead */
    useSession?: boolean | undefined | null;
  }
  export interface JSON extends Options {
    isJson: true;
  }
  export interface NoJSON extends Options {
    isJson?: false | undefined;
  }
  // Observable options
  export interface Options$ extends Options {
    /** By default only distinct emissions are allowed through the observable. This allows all updates through */
    disableDistinct?: boolean;
  }
  export interface JSON$ extends Options$ {
    isJson: true;
  }
  export interface NoJSON$ extends Options$ {
    isJson?: false | undefined;
  }
}

@Injectable({
  providedIn: 'root',
})
export class StorageService<keys> {
  /** Is currently node  */
  private isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

  /** Is currently a browser */
  private isBrowser = !this.isNode;

  /** Abstraction for storage to add support for SSR. Doesn't need to do anything other than catch methods and props */
  private _storage = {
    setItem: (_prop: string, _value: string) => {},
    getItem: (_prop: string): string | null => null,
    removeItem: (_prop: string) => {},
    clear: () => {},
    key: (_index: number): string | null => null,
    length: 0,
  };

  /** Listen to the storage event and update local storage when localstorage is updated in other tabs  */
  public storageEvent$ = this.isBrowser && this.window ? fromEvent(this.window, 'storage').pipe(tap(() => this.update())) : of();

  /**
   * A Record of the storage object to keep track of changes for the observable
   * Note that while data is present in this object, the getItem$ observable pulls from storage NOT from this object
   * This ensures a single source of truth for storage data
   */
  private storage$ = new BehaviorSubject(this.getStorage());

  constructor(@Inject(DOCUMENT) private _doc: Document) {}

  /**
   * Returns the current value associated with the given key as an observable, or null if the given key does not exist.
   * @param key
   * @param options
   */
  public getItem$(key: keys, options?: Storage.NoJSON$): Observable<string | null>;
  public getItem$<t>(key: keys, options: Storage.JSON$): Observable<t | null>;
  public getItem$(key: keys, options?: Storage.Options$) {
    return this.storage$.pipe(
      map(() => this.getItem(key, options)), // Get data from storage NOT from the observable object
      options?.disableDistinct ? identity : distinctUntilChanged(), // Allow non distinct emissions
    );
  }

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist.
   * @param key
   * @param options
   */
  public getItem<t>(key: keys, options: Storage.JSON): t | null;
  public getItem(key: keys, options?: Storage.NoJSON): string | null;
  public getItem(key: keys, options?: Storage.Options): string | null;
  public getItem(key: keys, options?: Storage.Options) {
    const val = this.storage(options?.useSession).getItem(String(key));
    if (val && options?.isJson) {
      return JSON.parse(val);
    }

    return val;
  }

  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.

    Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

    Dispatches a storage event on Window objects holding an equivalent Storage object.
   * @param key
   * @param value
   */
  public setItem<t>(key: keys, value: t | null | undefined, useSession?: boolean) {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    this.storage(useSession).setItem(String(key), val);
    this.storage$.pipe(take(1)).subscribe(s => this.storage$.next({ ...s, [String(key)]: val }));
  }

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.

     Dispatches a storage event on Window objects holding an equivalent Storage object.
   * @param key
   */
  public removeItem(key: keys, useSession?: boolean) {
    this.storage(useSession).removeItem(String(key));
    this.storage$.pipe(take(1)).subscribe(s => {
      let storage = { ...s };
      delete storage[String(key)];
      this.storage$.next(storage);
    });
  }

  /**
   * Removes all key/value pairs, if there are any.

     Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  public clear(useSession?: boolean) {
    this.storage(useSession).clear();
    this.storage$.next({});
  }

  /**
   * Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.
   * @param index
   * @returns
   */
  public key(index: number, useSession?: boolean): string | null {
    return this.storage(useSession).key(index);
  }

  /**
   * Returns the number of key/value pairs.
   * @returns
   */
  public length(useSession?: boolean) {
    return this.storage(useSession)?.length;
  }

  /**
   * Refresh all values in the observable from the storage object
   */
  public update() {
    this.storage$.next(this.getStorage());
  }

  /**
   * Convert the storage class into a Record for the observable
   * @returns
   */
  private getStorage(useSession?: boolean) {
    return Object.keys(this.storage(useSession)).reduce((a, b) => ({ ...a, [b]: localStorage[b] }), {}) as Record<string, string>;
  }

  /**
   * Get DOM window in SSR safe fashion
   * @returns
   */
  private get window(): Window | null {
    return this.isBrowser ? window : this._doc.defaultView;
  }

  /**
   * Abstraction for local/session storage in SSR safe fashion
   */
  private storage(useSession: boolean | null | undefined = false): Storage {
    return this.isBrowser ? (useSession ? window?.sessionStorage : window?.localStorage) : this._storage;
  }
}
