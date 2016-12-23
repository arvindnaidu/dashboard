import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { Cache } from './cache.service';
import { Api   } from './api.service';

import { AppComponent            } from './app.component';
import { HeaderComponent         } from './header.component';
import { DashboardComponent      } from './dashboard.component';
import { DealerOrdersComponent   } from './dealer.orders.component';
import { CustomerOrdersComponent } from './customer.orders.component';
import { ReportsComponent        } from './reports.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, HeaderComponent, DashboardComponent, DealerOrdersComponent, CustomerOrdersComponent, ReportsComponent ],
  providers:    [ appRoutingProviders, Cache, Api ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
