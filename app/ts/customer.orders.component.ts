import { Component, OnInit } from '@angular/core';
import { Api   } from './api.service';

@Component({
  templateUrl: '/app/templates/customer.orders.component.html'
})
export class CustomerOrdersComponent implements OnInit {
  public title = 'Customer Orders';
  private orders: Array<any>;

  constructor(private api: Api) {
    console.log("Initializing CustomerOrdersComponent....");
    this.orders = [];
  }

  loadOrders() {
    this.orders = this.api.getCustomerOrders();
  }

  ngOnInit() {
    this.loadOrders();
    console.log("CustomerOrdersComponent was initialized....");
  }
}
