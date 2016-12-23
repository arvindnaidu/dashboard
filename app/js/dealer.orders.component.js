"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var api_service_1 = require('./api.service');
var DealerOrdersComponent = (function () {
    function DealerOrdersComponent(api) {
        this.api = api;
        this.title = 'My Orders';
        console.log("Initializing DealerOrdersComponent....");
        this.orders = [];
    }
    DealerOrdersComponent.prototype.loadOrders = function () {
        this.orders = this.api.getDealerOrders();
    };
    DealerOrdersComponent.prototype.ngOnInit = function () {
        this.loadOrders();
        console.log("DealerOrdersComponent was initialized....");
    };
    DealerOrdersComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/templates/dealer.orders.component.html'
        }), 
        __metadata('design:paramtypes', [api_service_1.Api])
    ], DealerOrdersComponent);
    return DealerOrdersComponent;
}());
exports.DealerOrdersComponent = DealerOrdersComponent;
//# sourceMappingURL=dealer.orders.component.js.map