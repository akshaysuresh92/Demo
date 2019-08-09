import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { ShipmentInformationComponent } from './components/shipment-information/shipment-information.component';
import { LaneInformationComponent } from './components/lane-information/lane-information.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrderListComponent,
    SearchComponent,
    SearchPipe,
    CreateOrderComponent,
    ContactInformationComponent,
    ShipmentInformationComponent,
    LaneInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
