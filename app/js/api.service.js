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
var cache_service_1 = require('./cache.service');
var Api = (function () {
    function Api(cache) {
        this.cache = cache;
        console.log("Initializing Api....");
        this.initializeCache();
    }
    Api.prototype.getCustomerOrders = function () {
        return this.cache.get("customerOrders");
    };
    Api.prototype.getDealerOrders = function () {
        return this.cache.get("dealerOrders");
    };
    Api.prototype.getCustomerOrderById = function (orderId) {
        return this.getCustomerOrders().find(function (order) {
            return order.id === orderId;
        });
    };
    Api.prototype.getDealerOrderById = function (orderId) {
        return this.getDealerOrders().find(function (order) {
            return order.id === orderId;
        });
    };
    Api.prototype.initializeCache = function () {
        if (!this.cache.keyExists("dealerOrders")) {
            this.cache.set("dealerOrders", []);
        }
        if (!this.cache.keyExists("customerOrders")) {
            this.cache.set("customerOrders", []);
        }
    };
    Api = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [cache_service_1.Cache])
    ], Api);
    return Api;
}());
exports.Api = Api;
//# sourceMappingURL=api.service.js.map