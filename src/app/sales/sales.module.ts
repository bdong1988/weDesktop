import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SalesInfoComponent } from './sales-info/sales-info.component';
import { SalesStatsComponent } from './sales-stats/sales-stats.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule
  ],
  declarations: [
    SalesComponent,
    SalesInfoComponent,
    SalesStatsComponent]
})
export class SalesModule { }
