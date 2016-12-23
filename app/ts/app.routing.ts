import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { DealerOrdersComponent } from './dealer.orders.component';
import { CustomerOrdersComponent } from './customer.orders.component';
import { ReportsComponent } from './reports.component';

const appRoutes: Routes = [
  { path: 'reports', component: ReportsComponent },
  { path: 'customer_orders', component: CustomerOrdersComponent },
  { path: 'my_orders', component: DealerOrdersComponent },
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
