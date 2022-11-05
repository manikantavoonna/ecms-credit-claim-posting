import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstTableComponent } from './first-table/first-table.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { SecondTableComponent } from './second-table/second-table.component';
import { ThirdTableComponent } from './third-table/third-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AgGridModule.withComponents([])],
  declarations: [AppComponent, FirstTableComponent, SecondTableComponent, ThirdTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
