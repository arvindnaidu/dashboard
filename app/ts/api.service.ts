import { Injectable } from '@angular/core';
import { Cache } from './cache.service';

@Injectable()
export class Api {
  constructor(private cache: Cache) {
    console.log("Initializing Api....");
    this.initializeCache();
  }

  getCustomerOrders() {
    return this.cache.get("customerOrders");
  }

  getDealerOrders() {
    return this.cache.get("dealerOrders");
  }

  getCustomerOrderById(orderId: number) {
    return this.getCustomerOrders().find((order) => {
      return order.id === orderId;
    });
  }

  getDealerOrderById(orderId: number) {
    return this.getDealerOrders().find((order) => {
      return order.id === orderId;
    });
  }

  private initializeCache() {
    if (!this.cache.keyExists("dealerOrders")) {
      this.cache.set("dealerOrders", []);
    }
    if (!this.cache.keyExists("customerOrders")) {
      this.cache.set("customerOrders", []);
    }
  }
}
