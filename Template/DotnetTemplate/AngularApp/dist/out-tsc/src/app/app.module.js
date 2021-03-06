"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var animations_1 = require("@angular/platform-browser/animations");
var kendo_angular_charts_1 = require("@progress/kendo-angular-charts");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
require("hammerjs");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                kendo_angular_grid_1.GridModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_charts_1.ChartsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                kendo_angular_inputs_1.InputsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map