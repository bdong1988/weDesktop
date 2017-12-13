import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StockRoutingModule
  ],
  declarations: [
    StockComponent,
    StockListComponent
  ]
})
export class StockModule { }
