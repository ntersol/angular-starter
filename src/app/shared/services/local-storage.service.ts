import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, identity, map, of } from 'rxjs';
import { DomService } from './dom.service';

interface Options {
  isJson: boolean;
  disableDistinct: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage = this.dom.localStorage;
  private storage$ = new BehaviorSubject(this.storage);

  /**
   *
   * @param key
   * @param options
   * @returns
   */
  public getItem$ = <t = string>(key: string, options?: Options) =>
    this.storage$.pipe(
      map(s => {
        const val = s.getItem(key);
        return (val && options?.isJson ? JSON.parse(val) : val) as t;
      }),
      options?.disableDistinct ? identity : distinctUntilChanged(),
    );

  constructor(private dom: DomService) {}

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist.
   * @param key
   * @returns
   */
  getItem<t>(key: string, isJson?: false): string | null;
  getItem<t>(key: string, isJson?: true): t | null;
  getItem<t = string>(key: string, isJson?: boolean) {
    const val = this.dom.localStorage.getItem(key);
    return val && isJson ? (JSON.parse(val) as t) : val;
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
    this.dom.localStorage.setItem(key, val);
  }

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.

    Dispatches a storage event on Window objects holding an equivalent Storage object.
   * @param key
   */
  removeItem(key: string) {
    this.dom.localStorage.removeItem(key);
  }

  /**
   * Removes all key/value pairs, if there are any.

    Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  clear() {
    this.dom.localStorage.clear();
  }

  /**
   * Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.
   * @param index
   * @returns
   */
  key(index: number): string | null {
    return this.dom.localStorage.key(index);
  }
}
