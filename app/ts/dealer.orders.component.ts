import { Component, OnInit } from '@angular/core';
import { Api   } from './api.service';

@Component({
  templateUrl: '/app/templates/dealer.orders.component.html'
})
export class DealerOrdersComponent implements OnInit {
  public title = 'My Orders';
  private orders: Array<any>;

  constructor(private api: Api) {
    console.log("Initializing DealerOrdersComponent....");
    this.orders = [];
  }

  loadOrders() {
    this.orders = this.api.getDealerOrders();
  }

  ngOnInit() {
    this.loadOrders();
    console.log("DealerOrdersComponent was initialized....");
  }
}
