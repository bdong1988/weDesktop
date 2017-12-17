import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SalesInfoComponent } from './sales-info/sales-info.component';
import { SalesStatsComponent } from './sales-stats/sales-stats.component';
import { SalesPurchaseComponent } from './sales-purchase/sales-purchase.component';
import { SalesCheckoutComponent } from './sales-checkout/sales-checkout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SalesRoutingModule
  ],
  declarations: [
    SalesComponent,
    SalesInfoComponent,
    SalesStatsComponent,
    SalesPurchaseComponent,
    SalesCheckoutComponent]
})
export class SalesModule { }
