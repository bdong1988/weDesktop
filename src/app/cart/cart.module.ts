import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SettleComponent } from './settle/settle.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ],
  declarations: [
    CartComponent,
    SettleComponent
  ]
})
export class CartModule { }
