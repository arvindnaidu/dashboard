import { Injectable } from '@angular/core';

@Injectable()
export class Cache {
  private cache: any;
  constructor() {
    console.log("Initializing Cache....");
    this.cache = window.localStorage;
  }

  set(key, value) {
    this.cache.setItem(key, JSON.stringify(value));
  }

  get(key) {
    return JSON.parse(this.cache.getItem(key));
  }

  keyExists(key) {
    return !!this.get(key);
  }
}
