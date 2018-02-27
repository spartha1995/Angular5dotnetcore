"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.gridData = [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18.00,
                "Discontinued": true
            }, {
                "ProductID": 2,
                "ProductName": "Chang",
                "UnitPrice": 19.0000,
                "Discontinued": false
            }, {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "UnitPrice": 10.0000,
                "Discontinued": false
            }, {
                "ProductID": 4,
                "ProductName": "Chef Anton's Cajun Seasoning",
                "UnitPrice": 22.0000,
                "Discontinued": false
            }, {
                "ProductID": 5,
                "ProductName": "Chef Anton's Gumbo Mix",
                "UnitPrice": 21.3500,
                "Discontinued": false
            }, {
                "ProductID": 6,
                "ProductName": "Grandma's Boysenberry Spread",
                "UnitPrice": 25.0000,
                "Discontinued": false
            }];
        this.listItems = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map