import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, identity, map, Observable, take } from 'rxjs';

interface Options {
  isJson?: boolean;
  disableDistinct?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  /** Is currently node  */
  private isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

  /** Is currently a browser */
  private isBrowser = !this.isNode;

  /** Abstraction for storage. Doesn't need to do anything other than catch methods and props */
  private _storage = {
    setItem: (_prop: string, _value: string) => {},
    getItem: (_prop: string): string | null => null,
    removeItem: (_prop: string) => {},
    clear: () => {},
    key: (_index: number): string | null => null,
    length: 0,
  };

  /** Get current data out of lstorage and convert to object */
  private storage$ = new BehaviorSubject(Object.keys(window.localStorage).reduce((a, b) => ({ ...a, [b]: localStorage[b] }), {}) as Record<string, string>);

  constructor(@Inject('') private isLocalStorage: boolean) {}

  /**
   * Returns the current value associated with the given key as an observable, or null if the given key does not exist.
   * @param key
   * @param options
   */
  public getItem$<t>(key: string, options?: { isJson: false }): Observable<string | null>;
  public getItem$<t>(key: string, options: { isJson: true }): Observable<t | null>;
  public getItem$<t>(key: string, options?: Options): Observable<string | null> {
    return this.storage$.pipe(
      map(() => this.getItem<t>(key, !!options?.isJson)),
      options?.disableDistinct ? identity : distinctUntilChanged(),
    );
  }

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist.
   * @param key
   * @returns
   */
  public getItem<t>(key: string, isJson?: false): string | null;
  public getItem<t>(key: string, isJson?: true): t | null;
  public getItem<t>(key: string, isJson?: boolean): string | null;
  public getItem<t = string>(key: string, isJson?: boolean | undefined) {
    const val = this.storage.getItem(key);
    return !!val && isJson ? (JSON.parse(val) as t) : val;
  }

  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.

    Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

    Dispatches a storage event on Window objects holding an equivalent Storage object.
   * @param key
   * @param value
   */
  setItem(key: string, value: string | object) {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    this.storage.setItem(key, val);
    this.storage$.pipe(take(1)).subscribe(s => this.storage$.next({ ...s, [key]: val }));
  }

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.

    Dispatches a storage event on Window objects holding an equivalent Storage object.
   * @param key
   */
  removeItem(key: string) {
    this.storage.removeItem(key);
    this.storage$.pipe(take(1)).subscribe(s => {
      let storage = { ...s };
      delete storage[key];
      this.storage$.next(storage);
    });
  }

  /**
   * Removes all key/value pairs, if there are any.

    Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  clear() {
    this.storage.clear();
    this.storage$.next({});
  }

  /**
   * Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.
   * @param index
   * @returns
   */
  key(index: number): string | null {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }

  /**
   * Abstraction for local/session storage
   */
  get storage(): Storage {
    return this.isBrowser ? (this.isLocalStorage ? window.localStorage : window.sessionStorage) : this._storage;
  }
}
