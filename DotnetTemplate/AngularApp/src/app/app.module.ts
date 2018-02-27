import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpModule } from '@angular/http';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropDownsModule,
    GridModule,
    BrowserAnimationsModule,
    ScrollViewModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
