"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var dealer_orders_component_1 = require('./dealer.orders.component');
var customer_orders_component_1 = require('./customer.orders.component');
var reports_component_1 = require('./reports.component');
var appRoutes = [
    { path: 'reports', component: reports_component_1.ReportsComponent },
    { path: 'customer_orders', component: customer_orders_component_1.CustomerOrdersComponent },
    { path: 'my_orders', component: dealer_orders_component_1.DealerOrdersComponent },
    { path: 'home', component: dashboard_component_1.DashboardComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map